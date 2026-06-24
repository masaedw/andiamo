// Andiamo! — アプリ本体
// ルーティング(hash) / TTS / 会話・文法・単語・クイズの描画 / 進捗(localStorage)

"use strict";

// ---------------------------------------------------------------- TTS
const TTS = {
  voice: null,
  pool: [],
  rate: 1.0,
  ready: false,

  init() {
    if (!("speechSynthesis" in window)) return;
    const score = v =>
      (/premium|プレミアム/i.test(v.name) ? 5 : 0) +
      (/enhanced|拡張/i.test(v.name) ? 4 : 0) +
      (/siri/i.test(v.name) ? 3 : 0) +
      (/google/i.test(v.name) ? 2 : 0) +
      (/novelty|grandma|grandpa|organ|cellos|bells|bad news|good news|bubbles|trinoids|zarvox|jester|whisper/i.test(v.name) ? -10 : 0);
    const pick = () => {
      const voices = speechSynthesis.getVoices();
      if (!voices.length) return;
      this.pool = voices
        .filter(v => v.lang.toLowerCase().startsWith("it"))
        .sort((a, b) => score(b) - score(a));
      this.voice = this.pool[0] || null;
      this.ready = true;
      document.body.classList.toggle("no-voice", !this.voice);
    };
    pick();
    speechSynthesis.onvoiceschanged = pick;
  },

  // 音声名から性別を推定（macOS / Google の既知のイタリア語音声）
  voiceGender(v) {
    if (/luca|eddy|reed|rocko|diego|cosimo|riccardo|giuseppe/i.test(v.name)) return "m";
    if (/alice|federica|emma|paola|elsa|flo|sandy|shelley|isabella|google/i.test(v.name)) return "f";
    return null;
  },

  // 登場人物ごとに別の声を割り当てる。
  // 性別の合う声 → 未使用の声を優先。声が足りなければ同じ声+ピッチ差で区別する。
  // ユーザーが声を固定指定している場合はそれを返す
  overrideVoice() {
    return this.voiceOverride
      ? this.pool.find(v => v.name === this.voiceOverride) || null
      : null;
  },

  speakerProfiles(speakers) {
    // 声の固定指定時は全員同じ声になるため、性別ピッチで区別する
    const ov = this.overrideVoice();
    if (ov) {
      return Object.fromEntries(Object.entries(speakers).map(([key, sp]) =>
        [key, { voice: ov, pitch: sp.gender === "f" ? 1.1 : 0.9 }]));
    }
    const used = new Set();
    const profiles = {};
    // 主人公（role が「あなた」）を先に割り当て、課をまたいで同じ声に固定する
    const entries = Object.entries(speakers).sort(
      ([, a], [, b]) => (b.role.includes("あなた") ? 1 : 0) - (a.role.includes("あなた") ? 1 : 0));
    for (const [key, sp] of entries) {
      const candidates = this.pool.filter(v => this.voiceGender(v) === sp.gender);
      const fresh = candidates.find(v => !used.has(v.name)) ||
                    this.pool.find(v => !used.has(v.name));
      const voice = fresh || candidates[0] || this.voice;
      const reused = !voice || used.has(voice.name);
      if (voice) used.add(voice.name);
      profiles[key] = {
        voice,
        // 同じ声を使い回すときだけピッチで差を付ける
        pitch: reused ? (sp.gender === "f" ? 1.18 : 0.88) : 1.0,
      };
    }
    return profiles;
  },

  // 外来語の読み上げ補正（表示はそのまま、音声だけイタリア語の綴り規則に合わせる）
  PRONUNCIATIONS: [
    [/\bYui\b/g, "Iùi"],     // Y を文字名 "i greca" と読むのを防ぎ、ù の強勢で「ユ」を強調
    [/\bTokyo\b/g, "Tokio"], // イタリア語表記
  ],

  speak(text, { rate = this.rate, pitch = 1.0, voice = null, onend = null } = {}) {
    if (!("speechSynthesis" in window)) return;
    for (const [pat, rep] of this.PRONUNCIATIONS) text = text.replace(pat, rep);
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "it-IT";
    u.voice = this.overrideVoice() || voice || this.voice;
    u.rate = rate;
    u.pitch = pitch;
    if (onend) u.onend = onend;
    speechSynthesis.speak(u);
    return u;
  },

  pause() {
    if ("speechSynthesis" in window) speechSynthesis.pause();
  },

  resume() {
    if ("speechSynthesis" in window) speechSynthesis.resume();
  },

  stop() {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    // 一時停止中に cancel すると以降の speak が再生されないブラウザがあるため解除しておく
    speechSynthesis.resume();
  },
};

// ---------------------------------------------------------------- 音声設定（全画面共通・永続化）
const AudioSettings = {
  load() {
    const r = parseFloat(localStorage.getItem("andiamo-rate"));
    if (r > 0) TTS.rate = r;
    TTS.voiceOverride = localStorage.getItem("andiamo-voice") || null;
  },
  setRate(r) {
    TTS.rate = r;
    localStorage.setItem("andiamo-rate", String(r));
  },
  setVoice(name) {
    TTS.voiceOverride = name || null;
    if (name) localStorage.setItem("andiamo-voice", name);
    else localStorage.removeItem("andiamo-voice");
  },

  RATES: [
    { v: 0.7, label: "ゆっくり (0.7×)" },
    { v: 0.85, label: "少しゆっくり (0.85×)" },
    { v: 1.0, label: "ふつう (1.0×)" },
  ],

  // 速度・声のセレクタ。課ページの全タブに共通で効く
  renderBar() {
    return `
    <div class="audio-settings">
      <label class="control">速度
        <select id="set-rate">
          ${this.RATES.map(r => `<option value="${r.v}" ${TTS.rate === r.v ? "selected" : ""}>${r.label}</option>`).join("")}
        </select>
      </label>
      <label class="control">声
        <select id="set-voice">
          <option value="">自動（人物ごと）</option>
          ${TTS.pool.map(v => `<option value="${v.name}" ${TTS.voiceOverride === v.name ? "selected" : ""}>${v.name}</option>`).join("")}
        </select>
      </label>
    </div>`;
  },

  wireBar(root) {
    root.querySelector("#set-rate").addEventListener("change", e => this.setRate(Number(e.target.value)));
    root.querySelector("#set-voice").addEventListener("change", e => this.setVoice(e.target.value));
  },
};

// ---------------------------------------------------------------- 進捗
const Progress = {
  KEY: "andiamo-progress",
  data: {},
  load() {
    try { this.data = JSON.parse(localStorage.getItem(this.KEY)) || {}; }
    catch { this.data = {}; }
  },
  save() { localStorage.setItem(this.KEY, JSON.stringify(this.data)); },
  unit(id) {
    if (!this.data[id]) this.data[id] = { tabs: {}, quizBest: null };
    return this.data[id];
  },
  visitTab(id, tab) {
    this.unit(id).tabs[tab] = true;
    this.save();
  },
  recordQuiz(id, pct) {
    const u = this.unit(id);
    if (u.quizBest == null || pct > u.quizBest) u.quizBest = pct;
    this.save();
  },
  isComplete(id) {
    const u = this.data[id];
    return !!(u && u.quizBest != null && u.quizBest >= 80);
  },
};

// ---------------------------------------------------------------- ルーティング
const app = document.getElementById("app");
const TABS = [
  { key: "dialogo", label: "会話", it: "Dialogo" },
  { key: "grammatica", label: "文法", it: "Grammatica" },
  { key: "parole", label: "単語", it: "Parole" },
  { key: "quiz", label: "クイズ", it: "Quiz" },
];

function route() {
  TTS.stop();
  const m = location.hash.match(/^#\/unit\/(\d+)(?:\/(\w+))?/);
  if (m) {
    const unit = UNITS.find(u => u.id === Number(m[1]));
    if (unit) { renderUnit(unit, m[2] || "dialogo"); return; }
  }
  renderHome();
}

// ---------------------------------------------------------------- ホーム
function renderHome() {
  const done = UNITS.filter(u => Progress.isComplete(u.id)).length;
  app.innerHTML = `
    <header class="hero">
      <div class="hero-deco" aria-hidden="true">CIAO·CIAO·CIAO·</div>
      <p class="hero-kicker">Corso d'italiano per giapponesi</p>
      <h1>Andiamo<span class="bang">!</span></h1>
      <p class="hero-sub">会話で覚えるイタリア語 — 全8課</p>
      <p class="hero-progress">${done} / ${UNITS.length} 課 完了${done === UNITS.length ? " · Complimenti!" : ""}</p>
    </header>
    <main class="unit-list">
      ${UNITS.map(u => {
        const p = Progress.data[u.id];
        const complete = Progress.isComplete(u.id);
        const started = p && Object.keys(p.tabs || {}).length > 0;
        return `
        <a class="unit-card ${complete ? "complete" : ""}" href="#/unit/${u.id}">
          <span class="unit-num">${String(u.id).padStart(2, "0")}</span>
          <span class="unit-body">
            <span class="unit-title-it">${u.titleIt}</span>
            <span class="unit-title-ja">${u.titleJa}</span>
            <span class="unit-tags">
              <span class="tag tag-grammar">${u.grammarTag}</span>
            </span>
          </span>
          <span class="unit-status">${
            complete ? `<span class="badge done">完了 ${p.quizBest}%</span>`
            : p && p.quizBest != null ? `<span class="badge">クイズ ${p.quizBest}%</span>`
            : started ? `<span class="badge">学習中</span>` : ""
          }</span>
        </a>`;
      }).join("")}
    </main>
    <footer class="site-footer">
      <p>音声: ブラウザ内蔵のイタリア語音声（Web Speech API）を使用。</p>
      <p class="voice-warning">イタリア語の音声が見つからない。OS の設定でイタリア語音声を追加すると再生できる。</p>
    </footer>`;
}

// ---------------------------------------------------------------- 課ページ
function renderUnit(unit, tab) {
  Progress.visitTab(unit.id, tab);
  const prev = UNITS.find(u => u.id === unit.id - 1);
  const next = UNITS.find(u => u.id === unit.id + 1);

  app.innerHTML = `
    <header class="unit-header">
      <a class="back" href="#/">← 全課一覧</a>
      <p class="lesson-label">Lezione ${String(unit.id).padStart(2, "0")}</p>
      <h1>${unit.titleIt}</h1>
      <p class="unit-header-ja">${unit.titleJa}</p>
      <p class="scene">📍 ${unit.scene}</p>
      <nav class="tabs">
        ${TABS.map(t => `
          <a class="tab ${t.key === tab ? "active" : ""}" href="#/unit/${unit.id}/${t.key}">
            <span class="tab-it">${t.it}</span><span class="tab-ja">${t.label}</span>
          </a>`).join("")}
      </nav>
    </header>
    <div class="sticky-bar">
      ${AudioSettings.renderBar()}
      <div id="tab-controls"></div>
    </div>
    <main class="unit-main" id="tab-content"></main>
    <nav class="unit-nav">
      ${prev ? `<a href="#/unit/${prev.id}">← ${String(prev.id).padStart(2, "0")} ${prev.titleIt}</a>` : "<span></span>"}
      ${next ? `<a href="#/unit/${next.id}">${String(next.id).padStart(2, "0")} ${next.titleIt} →</a>` : "<span></span>"}
    </nav>`;

  AudioSettings.wireBar(app);
  const content = document.getElementById("tab-content");
  if (tab === "dialogo") renderDialogue(unit, content);
  else if (tab === "grammatica") renderGrammar(unit, content);
  else if (tab === "parole") renderVocab(unit, content);
  else if (tab === "quiz") renderQuiz(unit, content);
}

// ---------------------------------------------------------------- 会話タブ
function renderDialogue(unit, el) {
  const controls = document.getElementById("tab-controls");
  controls.innerHTML = `
    <div class="dialogue-controls">
      <button class="btn primary" id="play-all">▶ 全体を再生</button>
      <button class="btn" id="pause-resume" disabled>⏸ 一時停止</button>
      <button class="btn" id="stop-all">■ 停止</button>
      <label class="control"><input type="checkbox" id="hide-ja"> 日本語訳を隠す</label>
    </div>`;
  el.innerHTML = `
    <div class="dialogue-cast">
      ${Object.entries(unit.speakers).map(([k, s]) => `
        <p class="cast-row"><b>${s.name}</b>（${s.role}）${s.style ? `<span class="cast-style">${s.style}</span>` : ""}</p>
      `).join("")}
    </div>
    <div class="dialogue">
      ${unit.dialogue.map((line, i) => {
        const sp = unit.speakers[line.s];
        return `
        <div class="line side-${line.s}" data-i="${i}">
          <div class="bubble">
            <span class="speaker">${sp.name}</span>
            <p class="it">${line.it}</p>
            <p class="ja">${line.ja}</p>
            <button class="tts line-play" data-i="${i}" title="この行を再生"></button>
          </div>
        </div>`;
      }).join("")}
    </div>`;

  controls.querySelector("#hide-ja").addEventListener("change", e => {
    el.querySelector(".dialogue").classList.toggle("hide-ja", e.target.checked);
  });

  // 人物ごとの声（再生時に算出 — 音声リストは非同期に読み込まれるため）
  const voiceOf = s => TTS.speakerProfiles(unit.speakers)[s] || {};

  // 再生セッション。停止・別再生の開始で無効化し、cancel 起因の onend で
  // 古いチェーンが進み続けるのを防ぐ
  let session = 0;
  let paused = false;
  const pauseBtn = controls.querySelector("#pause-resume");

  const setPaused = p => {
    paused = p;
    pauseBtn.textContent = p ? "▶ 再開" : "⏸ 一時停止";
  };
  const beginPlayback = () => {
    session += 1;
    TTS.stop();
    setPaused(false);
    pauseBtn.disabled = false;
    return session;
  };
  const endPlayback = () => {
    highlight(el, -1);
    pauseBtn.disabled = true;
    setPaused(false);
  };

  // 1行再生
  el.querySelectorAll(".line-play").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const sess = beginPlayback();
      const i = Number(btn.dataset.i);
      const line = unit.dialogue[i];
      const prof = voiceOf(line.s);
      highlight(el, i);
      TTS.speak(line.it, {
        voice: prof.voice,
        pitch: prof.pitch,
        onend: () => { if (sess === session) endPlayback(); },
      });
    });
  });

  // 全体再生 — 行を順番に読み、再生中の行をハイライト
  controls.querySelector("#play-all").addEventListener("click", () => {
    const sess = beginPlayback();
    const profiles = TTS.speakerProfiles(unit.speakers);
    const playFrom = i => {
      if (sess !== session) return;
      if (i >= unit.dialogue.length) { endPlayback(); return; }
      const line = unit.dialogue[i];
      const prof = profiles[line.s] || {};
      highlight(el, i);
      TTS.speak(line.it, {
        voice: prof.voice,
        pitch: prof.pitch,
        onend: () => setTimeout(() => playFrom(i + 1), 350),
      });
    };
    playFrom(0);
  });

  pauseBtn.addEventListener("click", () => {
    if (paused) { TTS.resume(); setPaused(false); }
    else { TTS.pause(); setPaused(true); }
  });

  controls.querySelector("#stop-all").addEventListener("click", () => {
    session += 1;
    TTS.stop();
    endPlayback();
  });
}

function highlight(el, i) {
  el.querySelectorAll(".line").forEach(l => {
    l.classList.toggle("playing", Number(l.dataset.i) === i);
  });
  if (i >= 0) {
    const line = el.querySelector(`.line[data-i="${i}"]`);
    if (line) line.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
}

// ---------------------------------------------------------------- 文法タブ
function renderGrammar(unit, el) {
  el.innerHTML = `<div class="grammar">${unit.grammar}</div>`;
}

// ---------------------------------------------------------------- 単語タブ
function renderVocab(unit, el) {
  const controls = document.getElementById("tab-controls");
  controls.innerHTML = `
    <div class="vocab-controls">
      <button class="btn" id="mode-list">一覧</button>
      <button class="btn" id="mode-cards">フラッシュカード</button>
      <button class="btn" id="play-all-vocab">▶ 全部聞く</button>
    </div>`;
  el.innerHTML = `<div id="vocab-body"></div>`;

  const body = el.querySelector("#vocab-body");
  const setActive = id => {
    ["mode-list", "mode-cards"].forEach(b =>
      controls.querySelector("#" + b).classList.toggle("primary", b === id));
  };

  const showList = () => {
    setActive("mode-list");
    body.innerHTML = `
      <table class="vocab-table">
        ${unit.vocab.map(v => `
          <tr>
            <td class="v-it">${v.it} <button class="tts" data-tts="${ttsText(v.it)}"></button></td>
            <td class="v-ja">${v.ja}</td>
          </tr>`).join("")}
      </table>`;
  };

  const showCards = () => {
    setActive("mode-cards");
    let order = unit.vocab.map((_, i) => i);
    shuffle(order);
    let pos = 0;
    const draw = () => {
      const v = unit.vocab[order[pos]];
      body.innerHTML = `
        <div class="flashcard" id="card">
          <p class="fc-count">${pos + 1} / ${order.length}</p>
          <p class="fc-it">${v.it}</p>
          <p class="fc-ja hidden" id="fc-answer">${v.ja}</p>
          <div class="fc-actions">
            <button class="tts big" data-tts="${ttsText(v.it)}"></button>
            <button class="btn" id="fc-reveal">答えを見る</button>
          </div>
          <div class="fc-nav">
            <button class="btn" id="fc-prev" ${pos === 0 ? "disabled" : ""}>← 前へ</button>
            <button class="btn primary" id="fc-next">${pos === order.length - 1 ? "もう一周" : "次へ →"}</button>
          </div>
        </div>`;
      TTS.stop();
      TTS.speak(ttsText(v.it));
      body.querySelector("#fc-reveal").addEventListener("click", () => {
        body.querySelector("#fc-answer").classList.remove("hidden");
      });
      body.querySelector("#fc-next").addEventListener("click", () => {
        pos += 1;
        if (pos >= order.length) { shuffle(order); pos = 0; }
        draw();
      });
      body.querySelector("#fc-prev").addEventListener("click", () => {
        if (pos > 0) { pos -= 1; draw(); }
      });
    };
    draw();
  };

  controls.querySelector("#mode-list").addEventListener("click", showList);
  controls.querySelector("#mode-cards").addEventListener("click", showCards);
  controls.querySelector("#play-all-vocab").addEventListener("click", () => {
    TTS.stop();
    const playFrom = i => {
      if (i >= unit.vocab.length) return;
      TTS.speak(ttsText(unit.vocab[i].it), { onend: () => setTimeout(() => playFrom(i + 1), 500) });
    };
    playFrom(0);
  });

  showList();
}

// "il bicchiere / la xxx" のような併記や注記を、読み上げ用に整える
function ttsText(it) {
  return it.replace(/\(.*?\)/g, "").replace(/\s*\/\s*/g, ", ").trim();
}

// ---------------------------------------------------------------- クイズタブ
const QUIZ_LEN = 8;
const QUIZ_PASS = 80;

function renderQuiz(unit, el) {
  const best = Progress.unit(unit.id).quizBest;
  el.innerHTML = `
    <div class="quiz-intro">
      <h3>単語クイズ</h3>
      <p>この課の単語から ${QUIZ_LEN} 問を出題。${QUIZ_PASS}% 以上で課の完了。</p>
      ${best != null ? `<p class="quiz-best">自己ベスト: <b>${best}%</b>${best >= QUIZ_PASS ? " — 合格済み" : ""}</p>` : ""}
      <button class="btn primary" id="quiz-start">クイズを始める</button>
    </div>`;
  el.querySelector("#quiz-start").addEventListener("click", () => startQuiz(unit, el));
}

function startQuiz(unit, el) {
  const pool = unit.vocab.map((_, i) => i);
  shuffle(pool);
  const questions = pool.slice(0, QUIZ_LEN).map(idx => {
    const v = unit.vocab[idx];
    const dir = Math.random() < 0.5 ? "it2ja" : "ja2it";
    const wrong = unit.vocab.filter((_, i) => i !== idx);
    shuffle(wrong);
    const options = [v, ...wrong.slice(0, 3)];
    shuffle(options);
    return { v, dir, options };
  });

  let pos = 0;
  let correct = 0;

  const draw = () => {
    if (pos >= questions.length) { finish(); return; }
    const q = questions[pos];
    const prompt = q.dir === "it2ja"
      ? `<p class="q-prompt it">${q.v.it} <button class="tts" data-tts="${ttsText(q.v.it)}"></button></p><p class="q-ask">意味は？</p>`
      : `<p class="q-prompt ja">${q.v.ja}</p><p class="q-ask">イタリア語は？</p>`;
    el.innerHTML = `
      <div class="quiz">
        <p class="q-count">第 ${pos + 1} 問 / ${questions.length}</p>
        ${prompt}
        <div class="q-options">
          ${q.options.map((o, i) => `
            <button class="btn option" data-i="${i}">
              ${q.dir === "it2ja" ? o.ja : o.it}
            </button>`).join("")}
        </div>
        <p class="q-feedback" id="q-feedback"></p>
      </div>`;
    if (q.dir === "it2ja") TTS.speak(ttsText(q.v.it));

    const fb = el.querySelector("#q-feedback");
    el.querySelectorAll(".option").forEach(btn => {
      btn.addEventListener("click", () => {
        const chosen = q.options[Number(btn.dataset.i)];
        const isRight = chosen === q.v;
        el.querySelectorAll(".option").forEach(b => {
          b.disabled = true;
          const o = q.options[Number(b.dataset.i)];
          if (o === q.v) b.classList.add("right");
          else if (b === btn) b.classList.add("wrong");
        });
        if (isRight) correct += 1;
        fb.innerHTML = isRight
          ? `<span class="ok">正解 — ${q.v.it}: ${q.v.ja}</span>`
          : `<span class="ng">不正解 — 正しくは <b>${q.dir === "it2ja" ? q.v.ja : q.v.it}</b></span>`;
        if (q.dir === "ja2it") TTS.speak(ttsText(q.v.it));
        const nextBtn = document.createElement("button");
        nextBtn.className = "btn primary";
        nextBtn.textContent = pos === questions.length - 1 ? "結果を見る" : "次の問題 →";
        nextBtn.addEventListener("click", () => { pos += 1; draw(); });
        fb.appendChild(document.createElement("br"));
        fb.appendChild(nextBtn);
      });
    });
  };

  const finish = () => {
    const pct = Math.round((correct / questions.length) * 100);
    Progress.recordQuiz(unit.id, pct);
    const passed = pct >= QUIZ_PASS;
    el.innerHTML = `
      <div class="quiz-result ${passed ? "passed" : ""}">
        <p class="result-pct">${pct}%</p>
        <p class="result-msg">${
          passed ? "Complimenti! この課は完了。" : `あと少し。${QUIZ_PASS}% 以上で完了になる。`
        }</p>
        <p>${correct} / ${questions.length} 問正解</p>
        <div class="result-actions">
          <button class="btn" id="quiz-retry">もう一度</button>
          ${passed && unit.id < UNITS.length
            ? `<a class="btn primary" href="#/unit/${unit.id + 1}">次の課へ →</a>`
            : `<a class="btn" href="#/">課の一覧へ</a>`}
        </div>
      </div>`;
    el.querySelector("#quiz-retry").addEventListener("click", () => startQuiz(unit, el));
  };

  draw();
}

// ---------------------------------------------------------------- 共通
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// data-tts ボタンの一括ハンドリング（文法解説・単語表で使用）
document.addEventListener("click", e => {
  const btn = e.target.closest("[data-tts]");
  if (!btn) return;
  TTS.stop();
  TTS.speak(btn.dataset.tts);
});

// ---------------------------------------------------------------- iOS Safari TTS ウォームアップ
// iOS Safari は最初のユーザー操作起点でないと speechSynthesis が動かない
function warmupTTS() {
  if (!("speechSynthesis" in window)) return;
  const u = new SpeechSynthesisUtterance("");
  u.volume = 0;
  speechSynthesis.speak(u);
  document.removeEventListener("touchstart", warmupTTS);
  document.removeEventListener("click", warmupTTS);
}
document.addEventListener("touchstart", warmupTTS, { once: true });
document.addEventListener("click", warmupTTS, { once: true });

// ---------------------------------------------------------------- 起動
TTS.init();
AudioSettings.load();
Progress.load();
window.addEventListener("hashchange", route);
route();
