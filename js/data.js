// Andiamo! — イタリア語学習コンテンツ
// 全8課。各課: 会話(対訳) / 文法解説 / 単語 / クイズ(単語から自動生成)

const UNITS = [

// ============================================================
// Lezione 1
// ============================================================
{
  id: 1,
  titleIt: "Piacere!",
  titleJa: "はじめまして — 挨拶と自己紹介",
  scene: "フィレンツェの語学学校、初日の教室で",
  grammarTag: "essere の活用・否定文",
  speakers: {
    A: { name: "Marco", role: "クラスメイト", gender: "m", style: "くだけた tu で話す。口癖は Senti（ねえ）と Dai（さあ・ねえってば）" },
    B: { name: "Yui", role: "あなた（日本人留学生）", gender: "f", style: "学習者らしい素直で丁寧な話し方" },
  },
  dialogue: [
    { s: "A", it: "Ciao! Sono Marco. E tu?", ja: "やあ！僕はマルコ。君は？" },
    { s: "B", it: "Ciao! Sono Yui. Piacere!", ja: "こんにちは！私はユイ。はじめまして！" },
    { s: "A", it: "Piacere mio! Sei giapponese?", ja: "こちらこそ！日本の人？" },
    { s: "B", it: "Sì, sono giapponese, di Tokyo. Tu sei italiano?", ja: "うん、日本人で、東京の出身。あなたはイタリア人？" },
    { s: "A", it: "No, non sono italiano. Sono svizzero.", ja: "いや、イタリア人じゃないんだ。スイス人だよ。" },
    { s: "B", it: "Davvero? Anche tu sei studente qui?", ja: "本当？あなたもここの学生？" },
    { s: "A", it: "Sì, sono studente. Anche tu?", ja: "うん、学生だよ。君も？" },
    { s: "B", it: "Sì! Sono molto contenta.", ja: "うん！とても嬉しい。" },
    { s: "A", it: "Senti, com'è Firenze per te?", ja: "ねえ、君にとってフィレンツェはどう？" },
    { s: "B", it: "È bellissima! E le persone sono gentili.", ja: "すごく綺麗！それに人々が親切。" },
    { s: "A", it: "È vero. Allora, a domani, Yui!", ja: "確かにね。じゃあ、また明日、ユイ！" },
    { s: "B", it: "A domani, Marco! Ciao!", ja: "また明日、マルコ！じゃあね！" },
  ],
  grammar: `
<section>
  <h3>1. 動詞 <em>essere</em>（〜である）</h3>
  <p>イタリア語で最初に覚えるべき動詞。英語の be 動詞に相当する不規則動詞。主語の人称・数によって形が変わる。</p>
  <table class="conj">
    <tr><th>io（私）</th><td><b>sono</b> <button class="tts" data-tts="io sono"></button></td><th>noi（私たち）</th><td><b>siamo</b> <button class="tts" data-tts="noi siamo"></button></td></tr>
    <tr><th>tu（君）</th><td><b>sei</b> <button class="tts" data-tts="tu sei"></button></td><th>voi（君たち）</th><td><b>siete</b> <button class="tts" data-tts="voi siete"></button></td></tr>
    <tr><th>lui / lei（彼・彼女）</th><td><b>è</b> <button class="tts" data-tts="lui è"></button></td><th>loro（彼ら）</th><td><b>sono</b> <button class="tts" data-tts="loro sono"></button></td></tr>
  </table>
  <p class="note">io と loro は同じ <b>sono</b>。文脈で区別する。</p>
</section>
<section>
  <h3>2. 主語は省略するのが普通</h3>
  <p>動詞の形を見れば主語がわかるため、イタリア語では主語代名詞を普段は言わない。会話でも <em>Sono Marco.</em>（io は省略）となっている。主語を言うのは強調・対比のとき。</p>
  <p class="ex"><span class="it">Sono giapponese.</span> <button class="tts" data-tts="Sono giapponese."></button><span class="ja">（私は）日本人です。</span></p>
  <p class="ex"><span class="it">Io sono giapponese, e tu?</span> <button class="tts" data-tts="Io sono giapponese, e tu?"></button><span class="ja">「私は」日本人。で、あなたは？（対比なので io を言う）</span></p>
</section>
<section>
  <h3>3. 否定文 — 動詞の前に non</h3>
  <p class="ex"><span class="it">Non sono italiano.</span> <button class="tts" data-tts="Non sono italiano."></button><span class="ja">私はイタリア人ではない。</span></p>
  <p class="ex"><span class="it">Marco non è studente.</span> <button class="tts" data-tts="Marco non è studente."></button><span class="ja">マルコは学生ではない。</span></p>
</section>
<section>
  <h3>4. 形容詞は主語に合わせて変わる</h3>
  <p>会話でユイは <em>Sono molto <b>contenta</b></em> と言った。contento（嬉しい）は男性なら <b>-o</b>、女性なら <b>-a</b>。話し手が女性なので contenta になる。</p>
  <p class="ex"><span class="it">Marco è contento. / Yui è contenta.</span> <button class="tts" data-tts="Marco è contento. Yui è contenta."></button><span class="ja">マルコは嬉しい。／ユイは嬉しい。</span></p>
  <p class="note">国籍も同じ: italiano / italiana。ただし giapponese のような -e で終わる形容詞は男女同形。</p>
</section>
<section>
  <h3>5. 挨拶の使い分け</h3>
  <table class="conj">
    <tr><th>Ciao!</th><td>やあ／じゃあね <button class="tts" data-tts="Ciao!"></button> — 親しい相手。会うときも別れるときも使える</td></tr>
    <tr><th>Buongiorno!</th><td>おはよう／こんにちは <button class="tts" data-tts="Buongiorno!"></button> — 丁寧。午前〜昼過ぎ</td></tr>
    <tr><th>Buonasera!</th><td>こんばんは <button class="tts" data-tts="Buonasera!"></button> — 丁寧。夕方以降</td></tr>
    <tr><th>Piacere!</th><td>はじめまして <button class="tts" data-tts="Piacere!"></button> — 初対面で</td></tr>
    <tr><th>A domani!</th><td>また明日 <button class="tts" data-tts="A domani!"></button></td></tr>
  </table>
</section>`,
  vocab: [
    { it: "ciao", ja: "やあ／じゃあね（くだけた挨拶）" },
    { it: "buongiorno", ja: "おはよう、こんにちは" },
    { it: "buonasera", ja: "こんばんは" },
    { it: "piacere", ja: "はじめまして" },
    { it: "grazie", ja: "ありがとう" },
    { it: "prego", ja: "どういたしまして／どうぞ" },
    { it: "sì", ja: "はい" },
    { it: "no", ja: "いいえ" },
    { it: "essere", ja: "〜である（動詞）" },
    { it: "giapponese", ja: "日本人（の）" },
    { it: "italiano / italiana", ja: "イタリア人（の）男／女" },
    { it: "lo studente / la studentessa", ja: "学生（男／女）" },
    { it: "anche", ja: "〜もまた" },
    { it: "molto", ja: "とても" },
    { it: "bello / bella", ja: "美しい、素敵な" },
    { it: "gentile", ja: "親切な" },
    { it: "contento / contenta", ja: "嬉しい、満足した" },
    { it: "davvero", ja: "本当に" },
    { it: "allora", ja: "それでは、じゃあ" },
    { it: "a domani", ja: "また明日" },
  ],
},

// ============================================================
// Lezione 2
// ============================================================
{
  id: 2,
  titleIt: "Al mercato",
  titleJa: "市場で買い物 — 名詞の性と冠詞",
  scene: "フィレンツェの青空市場、果物の屋台で",
  grammarTag: "名詞の性・複数形・冠詞・avere",
  speakers: {
    A: { name: "Fruttivendolo", role: "果物屋の主人", gender: "m", style: "下町の商人口調。威勢がよく、Mi dica!（ご注文どうぞ）が決まり文句" },
    B: { name: "Yui", role: "あなた", gender: "f", style: "店では丁寧な Lei を使う" },
  },
  dialogue: [
    { s: "A", it: "Buongiorno, signorina! Mi dica!", ja: "おはようございます、お嬢さん！何にしましょう？" },
    { s: "B", it: "Buongiorno! Che belle arance!", ja: "おはようございます！なんて綺麗なオレンジ！" },
    { s: "A", it: "Sono fresche, di Sicilia. Un chilo costa due euro.", ja: "新鮮ですよ、シチリア産です。1キロ2ユーロ。" },
    { s: "B", it: "Allora, un chilo di arance, per favore.", ja: "じゃあ、オレンジを1キロお願いします。" },
    { s: "A", it: "Ecco. Altro?", ja: "はい、どうぞ。他には？" },
    { s: "B", it: "Ha anche l'uva?", ja: "ぶどうもありますか？" },
    { s: "A", it: "Certo! Ho l'uva bianca e l'uva nera.", ja: "もちろん！白ぶどうと黒ぶどうがありますよ。" },
    { s: "B", it: "Quella nera, mezzo chilo. E una bottiglia d'acqua.", ja: "黒い方を半キロ。あと水を1本。" },
    { s: "A", it: "Mi dispiace, non ho l'acqua. C'è un bar qui vicino.", ja: "すみません、水は置いてないんです。すぐ近くにバールがありますよ。" },
    { s: "B", it: "Va bene. Quant'è in tutto?", ja: "わかりました。全部でいくらですか？" },
    { s: "A", it: "Tre euro e cinquanta.", ja: "3ユーロ50です。" },
    { s: "B", it: "Ecco a Lei. Grazie!", ja: "はい、どうぞ。ありがとう！" },
    { s: "A", it: "Grazie a Lei! Arrivederci!", ja: "こちらこそ！さようなら！" },
  ],
  grammar: `
<section>
  <h3>1. 名詞には性がある</h3>
  <p>イタリア語の名詞はすべて<b>男性名詞</b>か<b>女性名詞</b>。語尾でだいたい見分けられる。</p>
  <table class="conj">
    <tr><th>-o で終わる</th><td>ほぼ男性</td><td>il chil<b>o</b>（キロ）、il gelat<b>o</b>（ジェラート）</td></tr>
    <tr><th>-a で終わる</th><td>ほぼ女性</td><td>la mel<b>a</b>（りんご）、l'aranci<b>a</b>（オレンジ）</td></tr>
    <tr><th>-e で終わる</th><td>どちらもある</td><td>il fior<b>e</b>（花・男）、la chiav<b>e</b>（鍵・女）→ 個別に覚える</td></tr>
  </table>
</section>
<section>
  <h3>2. 複数形 — 語尾が変わる（s は付けない）</h3>
  <table class="conj">
    <tr><th>-o → -i</th><td>chilo → chili <button class="tts" data-tts="chilo, chili"></button></td></tr>
    <tr><th>-a → -e</th><td>mela → mele <button class="tts" data-tts="mela, mele"></button></td></tr>
    <tr><th>-e → -i</th><td>fiore → fiori <button class="tts" data-tts="fiore, fiori"></button></td></tr>
  </table>
  <p class="ex"><span class="it">Che belle arance!</span> <button class="tts" data-tts="Che belle arance!"></button><span class="ja">なんて綺麗なオレンジ！（arancia の複数形）</span></p>
</section>
<section>
  <h3>3. 定冠詞（英語の the）</h3>
  <p>名詞の性・数・最初の音で形が決まる。</p>
  <table class="conj">
    <tr><th></th><th>単数</th><th>複数</th><th>例</th></tr>
    <tr><th>男性</th><td><b>il</b></td><td><b>i</b></td><td>il mercato / i mercati <button class="tts" data-tts="il mercato, i mercati"></button></td></tr>
    <tr><th>男性（s+子音, z 等の前）</th><td><b>lo</b></td><td><b>gli</b></td><td>lo studente / gli studenti <button class="tts" data-tts="lo studente, gli studenti"></button></td></tr>
    <tr><th>女性</th><td><b>la</b></td><td><b>le</b></td><td>la mela / le mele <button class="tts" data-tts="la mela, le mele"></button></td></tr>
    <tr><th>母音の前（単数）</th><td><b>l'</b></td><td><b>i</b> / <b>gli</b> / <b>le</b></td><td>l'acqua / le acque <button class="tts" data-tts="l'acqua, le acque"></button></td></tr>
  </table>
</section>
<section>
  <h3>4. 不定冠詞（英語の a / an）</h3>
  <table class="conj">
    <tr><th>男性</th><td><b>un</b></td><td>un bar, un euro <button class="tts" data-tts="un bar, un euro"></button></td></tr>
    <tr><th>男性（s+子音, z 等の前）</th><td><b>uno</b></td><td>uno studente <button class="tts" data-tts="uno studente"></button></td></tr>
    <tr><th>女性</th><td><b>una</b></td><td>una bottiglia <button class="tts" data-tts="una bottiglia"></button></td></tr>
    <tr><th>女性（母音の前）</th><td><b>un'</b></td><td>un'arancia <button class="tts" data-tts="un'arancia"></button></td></tr>
  </table>
</section>
<section>
  <h3>5. 動詞 <em>avere</em>（持っている）</h3>
  <table class="conj">
    <tr><th>io</th><td><b>ho</b> <button class="tts" data-tts="io ho"></button></td><th>noi</th><td><b>abbiamo</b> <button class="tts" data-tts="noi abbiamo"></button></td></tr>
    <tr><th>tu</th><td><b>hai</b> <button class="tts" data-tts="tu hai"></button></td><th>voi</th><td><b>avete</b> <button class="tts" data-tts="voi avete"></button></td></tr>
    <tr><th>lui / lei</th><td><b>ha</b> <button class="tts" data-tts="lui ha"></button></td><th>loro</th><td><b>hanno</b> <button class="tts" data-tts="loro hanno"></button></td></tr>
  </table>
  <p class="note">h は発音しない。ho は「オ」。店の人への「ありますか？」は <em>Ha ...?</em>（敬称 Lei に対する3人称形）。</p>
  <p class="ex"><span class="it">Ha anche l'uva?</span> <button class="tts" data-tts="Ha anche l'uva?"></button><span class="ja">ぶどうもありますか？</span></p>
</section>
<section>
  <h3>6. c'è（〜がある）と ecco（はい、どうぞ）</h3>
  <p class="ex"><span class="it">C'è un bar qui vicino.</span> <button class="tts" data-tts="C'è un bar qui vicino."></button><span class="ja">近くにバールがある。（複数なら ci sono）</span></p>
  <p class="ex"><span class="it">Ecco a Lei.</span> <button class="tts" data-tts="Ecco a Lei."></button><span class="ja">はい、どうぞ。（物を手渡すとき）</span></p>
</section>`,
  vocab: [
    { it: "la mela", ja: "りんご" },
    { it: "l'arancia", ja: "オレンジ" },
    { it: "l'uva", ja: "ぶどう" },
    { it: "l'acqua", ja: "水" },
    { it: "la bottiglia", ja: "瓶、ボトル" },
    { it: "il mercato", ja: "市場" },
    { it: "il chilo", ja: "キロ（kg）" },
    { it: "l'euro", ja: "ユーロ" },
    { it: "avere", ja: "持っている（動詞）" },
    { it: "costare", ja: "（値段が）〜である" },
    { it: "fresco / fresca", ja: "新鮮な" },
    { it: "rosso / rossa", ja: "赤い" },
    { it: "nero / nera", ja: "黒い" },
    { it: "bianco / bianca", ja: "白い" },
    { it: "mezzo", ja: "半分の" },
    { it: "quanto", ja: "どれだけ、いくら" },
    { it: "c'è", ja: "〜がある" },
    { it: "qui vicino", ja: "この近くに" },
    { it: "per favore", ja: "お願いします" },
    { it: "arrivederci", ja: "さようなら（丁寧）" },
  ],
},

// ============================================================
// Lezione 3
// ============================================================
{
  id: 3,
  titleIt: "Le cartoline",
  titleJa: "絵葉書を買う — 出身地を話す",
  scene: "ヴェネツィアの土産物店で。店主と出身地の話になる",
  grammarTag: "-are 動詞の活用・出身の表現",
  speakers: {
    A: { name: "Negoziante", role: "土産物店の店主", gender: "m", style: "丁寧な Lei。お喋り好きで Che bello!（いいですね）とよく感嘆する" },
    B: { name: "Yui", role: "あなた", gender: "f", style: "丁寧な Lei で受け答えする" },
  },
  dialogue: [
    { s: "A", it: "Buonasera! Cerca qualcosa?", ja: "こんばんは！何かお探しですか？" },
    { s: "B", it: "Buonasera! Cerco delle cartoline.", ja: "こんばんは！絵葉書を探しています。" },
    { s: "A", it: "Le cartoline sono qui. Abbiamo anche i francobolli.", ja: "絵葉書はこちらです。切手も置いていますよ。" },
    { s: "B", it: "Perfetto! Mando una cartolina alla mia famiglia.", ja: "よかった！家族に絵葉書を送るんです。" },
    { s: "A", it: "Che bello! Lei non è italiana, vero? Di dov'è?", ja: "いいですね！イタリアの方ではないですよね？どちらのご出身ですか？" },
    { s: "B", it: "Sono giapponese, vengo da Osaka. Ma adesso abito a Tokyo.", ja: "日本人で、大阪の出身です。でも今は東京に住んでいます。" },
    { s: "A", it: "Oh, il Giappone! Mia figlia studia il giapponese all'università.", ja: "おお、日本！うちの娘が大学で日本語を勉強しているんですよ。" },
    { s: "B", it: "Davvero? Io studio l'italiano da sei mesi.", ja: "本当ですか？私はイタリア語を勉強して6ヶ月になります。" },
    { s: "A", it: "Parla già molto bene!", ja: "もうとてもお上手ですよ！" },
    { s: "B", it: "Grazie! Allora, compro queste tre cartoline e tre francobolli per il Giappone.", ja: "ありがとうございます！では、この絵葉書3枚と日本向けの切手を3枚買います。" },
    { s: "A", it: "Ecco a Lei. Sono cinque euro.", ja: "はい、どうぞ。5ユーロです。" },
    { s: "B", it: "Ecco. C'è una buca delle lettere qui vicino?", ja: "どうぞ。この近くにポストはありますか？" },
    { s: "A", it: "Sì, è proprio davanti al negozio.", ja: "ええ、店のちょうど真ん前にありますよ。" },
    { s: "B", it: "Grazie mille! Buonasera!", ja: "本当にありがとうございます！失礼します！" },
  ],
  grammar: `
<section>
  <h3>1. -are 動詞の規則活用</h3>
  <p>イタリア語の動詞の原形は -are / -ere / -ire のどれかで終わる。最も多いのが -are 型。<em>parlare</em>（話す）で覚える。</p>
  <table class="conj">
    <tr><th>io</th><td>parl<b>o</b> <button class="tts" data-tts="io parlo"></button></td><th>noi</th><td>parl<b>iamo</b> <button class="tts" data-tts="noi parliamo"></button></td></tr>
    <tr><th>tu</th><td>parl<b>i</b> <button class="tts" data-tts="tu parli"></button></td><th>voi</th><td>parl<b>ate</b> <button class="tts" data-tts="voi parlate"></button></td></tr>
    <tr><th>lui / lei</th><td>parl<b>a</b> <button class="tts" data-tts="lui parla"></button></td><th>loro</th><td>parl<b>ano</b> <button class="tts" data-tts="loro parlano"></button></td></tr>
  </table>
  <p>同じパターン: cercare（探す）、mandare（送る）、comprare（買う）、abitare（住む）、studiare（勉強する）、lavorare（働く）。</p>
  <p class="ex"><span class="it">Cerco delle cartoline.</span> <button class="tts" data-tts="Cerco delle cartoline."></button><span class="ja">絵葉書を探しています。</span></p>
  <p class="ex"><span class="it">Mia figlia studia il giapponese.</span> <button class="tts" data-tts="Mia figlia studia il giapponese."></button><span class="ja">娘は日本語を勉強している。</span></p>
  <p class="note">イタリア語の現在形は「〜する」と「〜している」の両方をカバーする。</p>
</section>
<section>
  <h3>2. 疑問文 — 語順はそのまま、イントネーションを上げる</h3>
  <p class="ex"><span class="it">Cerca qualcosa?</span> <button class="tts" data-tts="Cerca qualcosa?"></button><span class="ja">何かお探しですか？（平叙文と同じ語順）</span></p>
  <p class="ex"><span class="it">Parli italiano?</span> <button class="tts" data-tts="Parli italiano?"></button><span class="ja">イタリア語を話す？</span></p>
</section>
<section>
  <h3>3. 出身地の聞き方・答え方</h3>
  <table class="conj">
    <tr><th>Di dove sei?</th><td>どこの出身？（くだけた） <button class="tts" data-tts="Di dove sei?"></button></td></tr>
    <tr><th>Di dov'è?</th><td>どちらのご出身ですか？（丁寧） <button class="tts" data-tts="Di dov'è?"></button></td></tr>
    <tr><th>Sono di + 都市</th><td>Sono di Osaka.（大阪出身） <button class="tts" data-tts="Sono di Osaka."></button></td></tr>
    <tr><th>Vengo da + 場所</th><td>Vengo da Osaka.（大阪から来た） <button class="tts" data-tts="Vengo da Osaka."></button></td></tr>
    <tr><th>Abito a + 都市</th><td>Abito a Tokyo.（東京に住んでいる） <button class="tts" data-tts="Abito a Tokyo."></button></td></tr>
  </table>
  <p class="note">国籍は essere + 形容詞（Sono giapponese）。都市の出身は di、国は「Vengo dal Giappone」のように前置詞と冠詞が結合する（第7課で学ぶ）。</p>
</section>
<section>
  <h3>4. 丁寧な「あなた」= Lei</h3>
  <p>初対面の大人や店の人とは、tu ではなく敬称 <b>Lei</b> を使う。動詞は3人称単数形（lui/lei と同じ形）。</p>
  <p class="ex"><span class="it">Lei non è italiana, vero?</span> <button class="tts" data-tts="Lei non è italiana, vero?"></button><span class="ja">イタリアの方ではないですよね？</span></p>
  <p class="ex"><span class="it">Parla già molto bene!</span> <button class="tts" data-tts="Parla già molto bene!"></button><span class="ja">（あなたは）もうとても上手に話しますね！</span></p>
  <p class="note">第1課の Marco との会話は tu、この課の店主との会話は Lei。関係性で使い分ける。</p>
</section>
<section>
  <h3>5. da + 期間 = 「〜前から（続けている）」</h3>
  <p class="ex"><span class="it">Studio l'italiano da sei mesi.</span> <button class="tts" data-tts="Studio l'italiano da sei mesi."></button><span class="ja">6ヶ月前からイタリア語を勉強している。（現在形を使うのがポイント）</span></p>
</section>`,
  vocab: [
    { it: "la cartolina", ja: "絵葉書" },
    { it: "il francobollo", ja: "切手" },
    { it: "la famiglia", ja: "家族" },
    { it: "il negozio", ja: "店" },
    { it: "la buca delle lettere", ja: "郵便ポスト" },
    { it: "il Giappone", ja: "日本" },
    { it: "l'università", ja: "大学" },
    { it: "il mese", ja: "月（暦月・期間）" },
    { it: "la figlia", ja: "娘" },
    { it: "parlare", ja: "話す" },
    { it: "cercare", ja: "探す" },
    { it: "mandare", ja: "送る" },
    { it: "comprare", ja: "買う" },
    { it: "abitare", ja: "住む" },
    { it: "studiare", ja: "勉強する" },
    { it: "lavorare", ja: "働く" },
    { it: "adesso", ja: "今" },
    { it: "già", ja: "すでに、もう" },
    { it: "bene", ja: "上手に、よく" },
    { it: "davanti a", ja: "〜の前に" },
  ],
},

// ============================================================
// Lezione 4
// ============================================================
{
  id: 4,
  titleIt: "Alla stazione",
  titleJa: "駅で切符を買う — 時刻の言い方",
  scene: "フィレンツェ・サンタ・マリア・ノヴェッラ駅の窓口で",
  grammarTag: "-ere / -ire 動詞・時刻表現",
  speakers: {
    A: { name: "Yui", role: "あなた", gender: "f", style: "窓口なので丁寧に簡潔に" },
    B: { name: "Bigliettaio", role: "切符売り場の係員", gender: "m", style: "事務的で簡潔。必要なことだけ短く言う" },
  },
  dialogue: [
    { s: "A", it: "Buongiorno. Un biglietto per Roma, per favore.", ja: "こんにちは。ローマまでの切符を1枚お願いします。" },
    { s: "B", it: "Andata e ritorno?", ja: "往復ですか？" },
    { s: "A", it: "Solo andata. Quanto costa?", ja: "片道だけです。いくらですか？" },
    { s: "B", it: "Diciannove euro con il treno regionale.", ja: "普通列車なら19ユーロです。" },
    { s: "A", it: "Va bene. A che ora parte il prossimo treno?", ja: "それでお願いします。次の電車は何時に出ますか？" },
    { s: "B", it: "Parte alle dieci e un quarto, dal binario sei.", ja: "10時15分発、6番線からです。" },
    { s: "A", it: "E a che ora arriva a Roma?", ja: "ローマには何時に着きますか？" },
    { s: "B", it: "Arriva alle tredici e trenta. Prende anche il ritorno oggi?", ja: "13時30分に着きます。今日、帰りの分も買われますか？" },
    { s: "A", it: "No, stasera dormo a Roma. Scrivo a un'amica che vive lì.", ja: "いいえ、今夜はローマに泊まります。あちらに住んでいる友達に連絡するんです。" },
    { s: "B", it: "Bene. Capisce gli annunci in italiano?", ja: "いいですね。イタリア語のアナウンスはわかりますか？" },
    { s: "A", it: "Capisco un po', se parlano piano.", ja: "ゆっくり話してくれれば、少しわかります。" },
    { s: "B", it: "Allora buon viaggio!", ja: "それでは、良い旅を！" },
    { s: "A", it: "Grazie mille!", ja: "ありがとうございます！" },
  ],
  grammar: `
<section>
  <h3>1. -ere 動詞の規則活用</h3>
  <p><em>prendere</em>（取る・乗る・注文する）で覚える。-are との違いは lui/lei が <b>-e</b>、voi が <b>-ete</b>、loro が <b>-ono</b> になる点。</p>
  <table class="conj">
    <tr><th>io</th><td>prend<b>o</b> <button class="tts" data-tts="io prendo"></button></td><th>noi</th><td>prend<b>iamo</b> <button class="tts" data-tts="noi prendiamo"></button></td></tr>
    <tr><th>tu</th><td>prend<b>i</b> <button class="tts" data-tts="tu prendi"></button></td><th>voi</th><td>prend<b>ete</b> <button class="tts" data-tts="voi prendete"></button></td></tr>
    <tr><th>lui / lei</th><td>prend<b>e</b> <button class="tts" data-tts="lui prende"></button></td><th>loro</th><td>prend<b>ono</b> <button class="tts" data-tts="loro prendono"></button></td></tr>
  </table>
  <p>同じパターン: scrivere（書く）、vivere（住む・生きる）、vedere（見る）。</p>
</section>
<section>
  <h3>2. -ire 動詞の規則活用（2タイプある）</h3>
  <p><b>タイプ1</b> <em>dormire</em>（眠る）— -ere とほぼ同じで voi だけ -ite。</p>
  <table class="conj">
    <tr><th>io</th><td>dorm<b>o</b> <button class="tts" data-tts="io dormo"></button></td><th>noi</th><td>dorm<b>iamo</b> <button class="tts" data-tts="noi dormiamo"></button></td></tr>
    <tr><th>tu</th><td>dorm<b>i</b> <button class="tts" data-tts="tu dormi"></button></td><th>voi</th><td>dorm<b>ite</b> <button class="tts" data-tts="voi dormite"></button></td></tr>
    <tr><th>lui / lei</th><td>dorm<b>e</b> <button class="tts" data-tts="lui dorme"></button></td><th>loro</th><td>dorm<b>ono</b> <button class="tts" data-tts="loro dormono"></button></td></tr>
  </table>
  <p><b>タイプ2（-isc 型）</b> <em>capire</em>（理解する）— io/tu/lui/loro で -isc- が入る。</p>
  <table class="conj">
    <tr><th>io</th><td>cap<b>isco</b> <button class="tts" data-tts="io capisco"></button></td><th>noi</th><td>cap<b>iamo</b> <button class="tts" data-tts="noi capiamo"></button></td></tr>
    <tr><th>tu</th><td>cap<b>isci</b> <button class="tts" data-tts="tu capisci"></button></td><th>voi</th><td>cap<b>ite</b> <button class="tts" data-tts="voi capite"></button></td></tr>
    <tr><th>lui / lei</th><td>cap<b>isce</b> <button class="tts" data-tts="lui capisce"></button></td><th>loro</th><td>cap<b>iscono</b> <button class="tts" data-tts="loro capiscono"></button></td></tr>
  </table>
  <p class="note">finire（終える）、preferire（〜の方を好む）も -isc 型。どちらの型かは単語ごとに覚える。</p>
</section>
<section>
  <h3>3. 時刻の言い方</h3>
  <table class="conj">
    <tr><th>Che ore sono?</th><td>今何時？ <button class="tts" data-tts="Che ore sono?"></button></td></tr>
    <tr><th>Sono le dieci.</th><td>10時。 <button class="tts" data-tts="Sono le dieci."></button></td></tr>
    <tr><th>Sono le dieci e un quarto.</th><td>10時15分。 <button class="tts" data-tts="Sono le dieci e un quarto."></button></td></tr>
    <tr><th>Sono le dieci e mezzo.</th><td>10時半。 <button class="tts" data-tts="Sono le dieci e mezzo."></button></td></tr>
    <tr><th>È l'una.</th><td>1時。（1時だけ単数） <button class="tts" data-tts="È l'una."></button></td></tr>
    <tr><th>È mezzogiorno. / È mezzanotte.</th><td>正午。／真夜中。 <button class="tts" data-tts="È mezzogiorno. È mezzanotte."></button></td></tr>
  </table>
  <p>「何時に？」は <b>A che ora ...?</b>、答えは <b>alle + 数字</b>。</p>
  <p class="ex"><span class="it">A che ora parte il prossimo treno? — Parte alle dieci e un quarto.</span> <button class="tts" data-tts="A che ora parte il prossimo treno? Parte alle dieci e un quarto."></button><span class="ja">次の電車は何時発？ — 10時15分発。</span></p>
</section>
<section>
  <h3>4. 数字 0〜20</h3>
  <table class="conj">
    <tr><td>0 zero</td><td>1 uno</td><td>2 due</td><td>3 tre</td><td>4 quattro</td><td>5 cinque</td><td>6 sei</td></tr>
    <tr><td>7 sette</td><td>8 otto</td><td>9 nove</td><td>10 dieci</td><td>11 undici</td><td>12 dodici</td><td>13 tredici</td></tr>
    <tr><td>14 quattordici</td><td>15 quindici</td><td>16 sedici</td><td>17 diciassette</td><td>18 diciotto</td><td>19 diciannove</td><td>20 venti</td></tr>
  </table>
  <p><button class="tts" data-tts="zero, uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci"></button> 0〜10 を聞く　<button class="tts" data-tts="undici, dodici, tredici, quattordici, quindici, sedici, diciassette, diciotto, diciannove, venti"></button> 11〜20 を聞く</p>
  <p class="note">21 以降: ventuno, ventidue... trenta(30), quaranta(40), cinquanta(50)。</p>
</section>`,
  vocab: [
    { it: "il biglietto", ja: "切符、チケット" },
    { it: "il treno", ja: "電車" },
    { it: "la stazione", ja: "駅" },
    { it: "il binario", ja: "（駅の）番線、ホーム" },
    { it: "l'andata", ja: "行き、片道" },
    { it: "il ritorno", ja: "帰り" },
    { it: "andata e ritorno", ja: "往復" },
    { it: "partire", ja: "出発する" },
    { it: "arrivare", ja: "到着する" },
    { it: "prendere", ja: "取る、（乗り物に）乗る" },
    { it: "scrivere", ja: "書く" },
    { it: "dormire", ja: "眠る、泊まる" },
    { it: "capire", ja: "理解する" },
    { it: "finire", ja: "終える" },
    { it: "vivere", ja: "住む、生きる" },
    { it: "l'ora", ja: "時間、〜時" },
    { it: "oggi", ja: "今日" },
    { it: "stasera", ja: "今晩" },
    { it: "prossimo / prossima", ja: "次の" },
    { it: "buon viaggio", ja: "良い旅を" },
  ],
},

// ============================================================
// Lezione 5
// ============================================================
{
  id: 5,
  titleIt: "In trattoria",
  titleJa: "レストランで — 好きな食べ物とおすすめ",
  scene: "ローマの下町のトラットリアで。給仕係に好みを伝えておすすめを聞く",
  grammarTag: "piacere の構文・食事の流れ",
  speakers: {
    A: { name: "Cameriere", role: "給仕係", gender: "m", style: "慇懃なプロの給仕。Ottima scelta!（素晴らしい選択）などの誉め言葉を多用" },
    B: { name: "Yui", role: "あなた", gender: "f", style: "丁寧な Lei。好みははっきり伝える" },
  },
  dialogue: [
    { s: "A", it: "Buonasera! Ecco il menù. Le porto qualcosa da bere?", ja: "こんばんは！メニューをどうぞ。お飲み物をお持ちしましょうか？" },
    { s: "B", it: "Un bicchiere di vino bianco, per favore.", ja: "白ワインをグラスで1杯お願いします。" },
    { s: "A", it: "Subito. Allora, che cosa Le piace?", ja: "ただいま。さて、お好みはどんなものですか？" },
    { s: "B", it: "Mi piacciono molto i frutti di mare. E mi piace la pasta fresca.", ja: "魚介類が大好きなんです。それと手打ちパスタも好きです。" },
    { s: "A", it: "Perfetto! Allora Le consiglio gli spaghetti alle vongole. Sono la nostra specialità.", ja: "それなら、アサリのスパゲッティがおすすめです。当店の名物なんですよ。" },
    { s: "B", it: "Mmm, che buono! Però non mi piace il peperoncino. Sono piccanti?", ja: "おいしそう！ただ、唐辛子が苦手なんです。辛いですか？" },
    { s: "A", it: "No, non sono piccanti. C'è solo aglio, olio e prezzemolo.", ja: "いいえ、辛くありません。にんにくとオリーブオイル、パセリだけです。" },
    { s: "B", it: "Allora va benissimo. E come secondo, che cosa mi consiglia?", ja: "それなら完璧です。セコンドは何がおすすめですか？" },
    { s: "A", it: "Le piace il pesce? Oggi abbiamo un branzino freschissimo.", ja: "お魚はお好きですか？今日はとびきり新鮮なスズキが入っています。" },
    { s: "B", it: "Sì, il pesce mi piace moltissimo. Prendo il branzino.", ja: "ええ、魚は大好きです。スズキにします。" },
    { s: "A", it: "Ottima scelta! E per dolce abbiamo un tiramisù fatto in casa.", ja: "素晴らしい選択です！デザートには自家製ティラミスがありますよ。" },
    { s: "B", it: "Il tiramisù è il mio dolce preferito! Lo prendo senz'altro.", ja: "ティラミスは一番好きなデザートなんです！ぜひいただきます。" },
    { s: "A", it: "Benissimo. Buon appetito!", ja: "かしこまりました。どうぞごゆっくり！" },
  ],
  grammar: `
<section>
  <h3>1. piacere の構文 —「好き」の言い方</h3>
  <p>イタリア語の「好き」は発想が逆。<b>「〜が私に気に入る」</b>という形で言う。主語は「好きなもの」の方。</p>
  <table class="conj">
    <tr><th>好きなものが単数</th><td><b>Mi piace</b> il pesce. <button class="tts" data-tts="Mi piace il pesce."></button></td><td>魚が好き。</td></tr>
    <tr><th>好きなものが複数</th><td><b>Mi piacciono</b> i frutti di mare. <button class="tts" data-tts="Mi piacciono i frutti di mare."></button></td><td>魚介類が好き。</td></tr>
    <tr><th>動詞（〜するのが好き）</th><td><b>Mi piace</b> mangiare. <button class="tts" data-tts="Mi piace mangiare."></button></td><td>食べるのが好き。（常に単数形）</td></tr>
  </table>
  <p>否定は piace の前に non。</p>
  <p class="ex"><span class="it">Non mi piace il peperoncino.</span> <button class="tts" data-tts="Non mi piace il peperoncino."></button><span class="ja">唐辛子は好きじゃない。</span></p>
</section>
<section>
  <h3>2. 「誰にとって」を変える — 間接目的語代名詞</h3>
  <table class="conj">
    <tr><th>mi piace</th><td>私は好き <button class="tts" data-tts="mi piace"></button></td><th>ci piace</th><td>私たちは好き <button class="tts" data-tts="ci piace"></button></td></tr>
    <tr><th>ti piace</th><td>君は好き <button class="tts" data-tts="ti piace"></button></td><th>vi piace</th><td>君たちは好き <button class="tts" data-tts="vi piace"></button></td></tr>
    <tr><th>Le piace</th><td>あなたは好き（敬称） <button class="tts" data-tts="Le piace"></button></td><th>gli piace</th><td>彼（彼ら）は好き <button class="tts" data-tts="gli piace"></button></td></tr>
  </table>
  <p class="ex"><span class="it">Ti piace la pizza? — Sì, mi piace molto!</span> <button class="tts" data-tts="Ti piace la pizza? Sì, mi piace molto!"></button><span class="ja">ピザ好き？ — うん、大好き！</span></p>
  <p class="ex"><span class="it">Le piace il pesce?</span> <button class="tts" data-tts="Le piace il pesce?"></button><span class="ja">（敬称で）お魚はお好きですか？</span></p>
</section>
<section>
  <h3>3. イタリア式・食事の流れ</h3>
  <table class="conj">
    <tr><th>l'antipasto</th><td>前菜 <button class="tts" data-tts="l'antipasto"></button></td></tr>
    <tr><th>il primo (piatto)</th><td>第一の皿 — パスタ・リゾット・スープ <button class="tts" data-tts="il primo piatto"></button></td></tr>
    <tr><th>il secondo (piatto)</th><td>第二の皿 — 肉・魚料理 <button class="tts" data-tts="il secondo piatto"></button></td></tr>
    <tr><th>il contorno</th><td>付け合わせ（野菜など） <button class="tts" data-tts="il contorno"></button></td></tr>
    <tr><th>il dolce</th><td>デザート <button class="tts" data-tts="il dolce"></button></td></tr>
  </table>
  <p class="note">全部頼む必要はない。primo + secondo、または primo + dolce のように選ぶのが普通。</p>
</section>
<section>
  <h3>4. おすすめを聞く・受ける</h3>
  <p class="ex"><span class="it">Che cosa mi consiglia?</span> <button class="tts" data-tts="Che cosa mi consiglia?"></button><span class="ja">何がおすすめですか？（mi = 私に）</span></p>
  <p class="ex"><span class="it">Le consiglio gli spaghetti alle vongole.</span> <button class="tts" data-tts="Le consiglio gli spaghetti alle vongole."></button><span class="ja">アサリのスパゲッティをおすすめします。（Le = あなたに）</span></p>
  <p class="note">consigliare（すすめる）も piacere と同じ代名詞 mi / ti / Le を使う。セットで覚える。</p>
</section>
<section>
  <h3>5. 絶対最上級 -issimo（とても〜）</h3>
  <p>形容詞の語尾を -issimo に変えると「ものすごく〜」。</p>
  <p class="ex"><span class="it">fresco → freschissimo</span> <button class="tts" data-tts="fresco, freschissimo"></button><span class="ja">新鮮な → とびきり新鮮な</span></p>
  <p class="ex"><span class="it">bene → benissimo / molto → moltissimo</span> <button class="tts" data-tts="benissimo, moltissimo"></button><span class="ja">とてもよく／ものすごく</span></p>
</section>`,
  vocab: [
    { it: "piacere (mi piace)", ja: "好きである（〜が気に入る）" },
    { it: "il vino", ja: "ワイン" },
    { it: "il bicchiere", ja: "グラス、コップ" },
    { it: "il pesce", ja: "魚" },
    { it: "i frutti di mare", ja: "魚介類、シーフード" },
    { it: "la vongola", ja: "アサリ" },
    { it: "l'aglio", ja: "にんにく" },
    { it: "l'olio", ja: "油、オリーブオイル" },
    { it: "il peperoncino", ja: "唐辛子" },
    { it: "piccante", ja: "辛い" },
    { it: "il dolce", ja: "デザート、甘いもの" },
    { it: "il menù", ja: "メニュー" },
    { it: "il cameriere", ja: "給仕係、ウェイター" },
    { it: "consigliare", ja: "すすめる、アドバイスする" },
    { it: "la specialità", ja: "名物、専門" },
    { it: "il primo piatto", ja: "プリモ（パスタ等の皿）" },
    { it: "il secondo piatto", ja: "セコンド（肉・魚の皿）" },
    { it: "mangiare", ja: "食べる" },
    { it: "bere", ja: "飲む" },
    { it: "buon appetito", ja: "召し上がれ" },
    { it: "preferito / preferita", ja: "一番好きな、お気に入りの" },
  ],
},

// ============================================================
// Lezione 6
// ============================================================
{
  id: 6,
  titleIt: "In albergo",
  titleJa: "ホテルで — したい・できる・しなければ",
  scene: "フィレンツェの小さなホテルのフロントでチェックイン",
  grammarTag: "volere / potere / dovere + 不定詞",
  speakers: {
    A: { name: "Receptionist", role: "フロント係", gender: "f", style: "丁寧で世話焼き。Non si preoccupi（ご心配なく）が口癖" },
    B: { name: "Yui", role: "あなた", gender: "f", style: "丁寧な Lei。確認を細かく取る" },
  },
  dialogue: [
    { s: "A", it: "Buonasera! Posso aiutarLa?", ja: "こんばんは！お手伝いいたしましょうか？" },
    { s: "B", it: "Buonasera. Ho una prenotazione per due notti. Mi chiamo Tanaka Yui.", ja: "こんばんは。2泊で予約しています。田中ユイと申します。" },
    { s: "A", it: "Un momento... Sì, ecco. Una camera singola con bagno.", ja: "少々お待ちください…はい、ございました。バスルーム付きのシングルルームですね。" },
    { s: "B", it: "Posso lasciare la valigia qui? Voglio fare un giro adesso.", ja: "スーツケースをここに預けてもいいですか？今から少し街を歩きたいんです。" },
    { s: "A", it: "Certo! Può lasciare qui tutto.", ja: "もちろんです！全部こちらにお預けください。" },
    { s: "B", it: "Grazie. A che ora devo fare il check-out?", ja: "ありがとうございます。チェックアウトは何時までにしなければなりませんか？" },
    { s: "A", it: "Deve lasciare la camera entro le undici.", ja: "11時までにお部屋を出ていただくことになっています。" },
    { s: "B", it: "Va bene. E la colazione?", ja: "わかりました。朝食はどうなっていますか？" },
    { s: "A", it: "La colazione è dalle sette alle dieci, al primo piano.", ja: "朝食は7時から10時まで、2階（イタリア式の1階）でございます。" },
    { s: "B", it: "Perfetto. Ah, domani voglio visitare gli Uffizi. Devo prenotare?", ja: "完璧です。あ、明日ウフィツィ美術館に行きたいんです。予約しなければいけませんか？" },
    { s: "A", it: "Sì, deve prenotare. Ma non si preoccupi, posso prenotare io stasera.", ja: "ええ、予約が必要です。でもご心配なく、私が今晩予約しておきますよ。" },
    { s: "B", it: "Davvero? È gentilissimo! Grazie mille!", ja: "本当ですか？なんてご親切に！ありがとうございます！" },
    { s: "A", it: "Di niente. Ecco la chiave, camera trentuno.", ja: "どういたしまして。こちらが鍵です。31号室です。" },
  ],
  grammar: `
<section>
  <h3>1. 補助動詞 3 兄弟 + 動詞の原形</h3>
  <p><b>volere</b>（〜したい）、<b>potere</b>（〜できる・してもよい）、<b>dovere</b>（〜しなければならない）。後ろに動詞の原形（不定詞）を置くだけで意図・可能・義務が言える。旅行で最も使う文型。</p>
  <p class="ex"><span class="it">Voglio fare un giro.</span> <button class="tts" data-tts="Voglio fare un giro."></button><span class="ja">少し歩き回りたい。</span></p>
  <p class="ex"><span class="it">Posso lasciare la valigia qui?</span> <button class="tts" data-tts="Posso lasciare la valigia qui?"></button><span class="ja">スーツケースをここに置いてもいい？</span></p>
  <p class="ex"><span class="it">Devo prenotare?</span> <button class="tts" data-tts="Devo prenotare?"></button><span class="ja">予約しなければいけない？</span></p>
</section>
<section>
  <h3>2. volere（〜したい）の活用</h3>
  <table class="conj">
    <tr><th>io</th><td><b>voglio</b> <button class="tts" data-tts="io voglio"></button></td><th>noi</th><td><b>vogliamo</b> <button class="tts" data-tts="noi vogliamo"></button></td></tr>
    <tr><th>tu</th><td><b>vuoi</b> <button class="tts" data-tts="tu vuoi"></button></td><th>voi</th><td><b>volete</b> <button class="tts" data-tts="voi volete"></button></td></tr>
    <tr><th>lui / lei</th><td><b>vuole</b> <button class="tts" data-tts="lui vuole"></button></td><th>loro</th><td><b>vogliono</b> <button class="tts" data-tts="loro vogliono"></button></td></tr>
  </table>
  <p class="note">店などで丁寧に言うなら vorrei（〜したいのですが）が便利: <em>Vorrei un caffè.</em> <button class="tts" data-tts="Vorrei un caffè."></button></p>
</section>
<section>
  <h3>3. potere（〜できる）の活用</h3>
  <table class="conj">
    <tr><th>io</th><td><b>posso</b> <button class="tts" data-tts="io posso"></button></td><th>noi</th><td><b>possiamo</b> <button class="tts" data-tts="noi possiamo"></button></td></tr>
    <tr><th>tu</th><td><b>puoi</b> <button class="tts" data-tts="tu puoi"></button></td><th>voi</th><td><b>potete</b> <button class="tts" data-tts="voi potete"></button></td></tr>
    <tr><th>lui / lei</th><td><b>può</b> <button class="tts" data-tts="lui può"></button></td><th>loro</th><td><b>possono</b> <button class="tts" data-tts="loro possono"></button></td></tr>
  </table>
  <p class="ex"><span class="it">Posso aiutarLa?</span> <button class="tts" data-tts="Posso aiutarLa?"></button><span class="ja">お手伝いしましょうか？（La = あなたを）</span></p>
</section>
<section>
  <h3>4. dovere（〜しなければならない）の活用</h3>
  <table class="conj">
    <tr><th>io</th><td><b>devo</b> <button class="tts" data-tts="io devo"></button></td><th>noi</th><td><b>dobbiamo</b> <button class="tts" data-tts="noi dobbiamo"></button></td></tr>
    <tr><th>tu</th><td><b>devi</b> <button class="tts" data-tts="tu devi"></button></td><th>voi</th><td><b>dovete</b> <button class="tts" data-tts="voi dovete"></button></td></tr>
    <tr><th>lui / lei</th><td><b>deve</b> <button class="tts" data-tts="lui deve"></button></td><th>loro</th><td><b>devono</b> <button class="tts" data-tts="loro devono"></button></td></tr>
  </table>
  <p class="ex"><span class="it">Deve lasciare la camera entro le undici.</span> <button class="tts" data-tts="Deve lasciare la camera entro le undici."></button><span class="ja">11時までに部屋を出なければなりません。</span></p>
</section>
<section>
  <h3>5. Mi chiamo —「私の名前は〜です」</h3>
  <p class="ex"><span class="it">Mi chiamo Tanaka Yui. E Lei, come si chiama?</span> <button class="tts" data-tts="Mi chiamo Tanaka Yui. E Lei, come si chiama?"></button><span class="ja">田中ユイと申します。あなたのお名前は？</span></p>
  <p class="note">直訳は「私は自分を〜と呼ぶ」。再帰動詞 chiamarsi。決まり文句としてこのまま覚えてよい。</p>
</section>
<section>
  <h3>6. イタリアの階数表示</h3>
  <p>il piano terra = 日本の1階、il primo piano = 日本の2階。ホテルで部屋を探すとき注意。</p>
</section>`,
  vocab: [
    { it: "l'albergo", ja: "ホテル" },
    { it: "la camera", ja: "部屋" },
    { it: "la prenotazione", ja: "予約" },
    { it: "prenotare", ja: "予約する" },
    { it: "la notte", ja: "夜、泊" },
    { it: "la chiave", ja: "鍵" },
    { it: "la valigia", ja: "スーツケース" },
    { it: "la colazione", ja: "朝食" },
    { it: "il bagno", ja: "バスルーム、トイレ" },
    { it: "volere", ja: "〜したい、欲しい" },
    { it: "potere", ja: "〜できる、してもよい" },
    { it: "dovere", ja: "〜しなければならない" },
    { it: "lasciare", ja: "置いていく、残す" },
    { it: "visitare", ja: "訪れる、見学する" },
    { it: "aiutare", ja: "手伝う、助ける" },
    { it: "fare", ja: "する、作る" },
    { it: "il piano", ja: "階" },
    { it: "entro", ja: "〜までに" },
    { it: "domani", ja: "明日" },
    { it: "mi chiamo ...", ja: "私の名前は〜です" },
  ],
},

// ============================================================
// Lezione 7
// ============================================================
{
  id: 7,
  titleIt: "Per strada",
  titleJa: "道を尋ねる — 前置詞と場所の表現",
  scene: "フィレンツェの路上で、通行人にドゥオーモへの道を聞く",
  grammarTag: "前置詞・冠詞前置詞・位置関係",
  speakers: {
    A: { name: "Yui", role: "あなた", gender: "f", style: "聞き取った道順を復唱して確認する" },
    B: { name: "Passante", role: "親切な通行人", gender: "m", style: "気さくな世話焼き。Si figuri!（とんでもない）と返すのが癖" },
  },
  dialogue: [
    { s: "A", it: "Scusi, posso chiederLe un'informazione?", ja: "すみません、ちょっとお尋ねしてもいいですか？" },
    { s: "B", it: "Certo, mi dica!", ja: "ええ、どうぞ！" },
    { s: "A", it: "Dov'è il Duomo? È lontano da qui?", ja: "ドゥオーモはどこですか？ここから遠いですか？" },
    { s: "B", it: "No, è vicino. Sono dieci minuti a piedi.", ja: "いいえ、近いですよ。歩いて10分です。" },
    { s: "A", it: "Come arrivo lì?", ja: "どうやって行けばいいですか？" },
    { s: "B", it: "Deve andare dritto fino al semaforo, poi girare a destra.", ja: "信号までまっすぐ行って、それから右に曲がってください。" },
    { s: "A", it: "Dritto e poi a destra... E poi?", ja: "まっすぐ行って、右…それから？" },
    { s: "B", it: "Attraversa la piazza e il Duomo è lì, accanto al campanile. Non può sbagliare!", ja: "広場を渡れば、ドゥオーモはそこです。鐘楼の隣ですよ。間違えようがありません！" },
    { s: "A", it: "C'è anche un museo vicino al Duomo, vero?", ja: "ドゥオーモの近くに博物館もありますよね？" },
    { s: "B", it: "Sì, il museo è dietro alla cattedrale, di fronte al battistero.", ja: "ええ、博物館は大聖堂の裏、洗礼堂の向かい側です。" },
    { s: "A", it: "E per andare dal Duomo alla stazione?", ja: "では、ドゥオーモから駅へはどう行けば？" },
    { s: "B", it: "È facile: con l'autobus numero ventitré, oppure quindici minuti a piedi.", ja: "簡単です。23番のバスに乗るか、歩いて15分です。" },
    { s: "A", it: "Perfetto, grazie mille! È molto gentile!", ja: "完璧です、ありがとうございます！ご親切に！" },
    { s: "B", it: "Si figuri! Buona giornata!", ja: "とんでもない！良い一日を！" },
  ],
  grammar: `
<section>
  <h3>1. 基本の前置詞</h3>
  <table class="conj">
    <tr><th>a</th><td>〜に、〜へ（都市・地点）</td><td>a Roma, a piedi <button class="tts" data-tts="a Roma, a piedi"></button></td></tr>
    <tr><th>di</th><td>〜の（所有・出身）</td><td>di Osaka, il duomo di Firenze <button class="tts" data-tts="il duomo di Firenze"></button></td></tr>
    <tr><th>da</th><td>〜から</td><td>lontano da qui <button class="tts" data-tts="lontano da qui"></button></td></tr>
    <tr><th>in</th><td>〜の中に、〜で（国・地域・乗り物）</td><td>in Italia, in treno <button class="tts" data-tts="in Italia, in treno"></button></td></tr>
    <tr><th>su</th><td>〜の上に</td><td>sul tavolo <button class="tts" data-tts="sul tavolo"></button></td></tr>
    <tr><th>per</th><td>〜のために、〜行きの</td><td>un biglietto per Roma <button class="tts" data-tts="un biglietto per Roma"></button></td></tr>
    <tr><th>con</th><td>〜と一緒に、〜で（手段）</td><td>con l'autobus <button class="tts" data-tts="con l'autobus"></button></td></tr>
  </table>
</section>
<section>
  <h3>2. 冠詞前置詞 — 前置詞 + 定冠詞は合体する</h3>
  <p>a, di, da, in, su は後ろの定冠詞とくっついて 1 語になる。会話に出てきた <em>al semaforo</em>（= a + il）、<em>dal Duomo</em>（= da + il）、<em>alla stazione</em>（= a + la）がその例。</p>
  <table class="conj">
    <tr><th></th><th>+ il</th><th>+ lo</th><th>+ la</th><th>+ l'</th><th>+ i</th><th>+ gli</th><th>+ le</th></tr>
    <tr><th>a</th><td>al</td><td>allo</td><td>alla</td><td>all'</td><td>ai</td><td>agli</td><td>alle</td></tr>
    <tr><th>di</th><td>del</td><td>dello</td><td>della</td><td>dell'</td><td>dei</td><td>degli</td><td>delle</td></tr>
    <tr><th>da</th><td>dal</td><td>dallo</td><td>dalla</td><td>dall'</td><td>dai</td><td>dagli</td><td>dalle</td></tr>
    <tr><th>in</th><td>nel</td><td>nello</td><td>nella</td><td>nell'</td><td>nei</td><td>negli</td><td>nelle</td></tr>
    <tr><th>su</th><td>sul</td><td>sullo</td><td>sulla</td><td>sull'</td><td>sui</td><td>sugli</td><td>sulle</td></tr>
  </table>
  <p class="ex"><span class="it">Vado al mercato e poi alla stazione.</span> <button class="tts" data-tts="Vado al mercato e poi alla stazione."></button><span class="ja">市場に行って、それから駅に行く。</span></p>
  <p class="note">第4課の <em>alle dieci</em>（10時に）も a + le。時刻の le は「le ore（〜時）」の冠詞。</p>
</section>
<section>
  <h3>3. 位置関係の表現（多くは a とセット）</h3>
  <table class="conj">
    <tr><th>vicino a</th><td>〜の近くに</td><td>vicino al Duomo <button class="tts" data-tts="vicino al Duomo"></button></td></tr>
    <tr><th>accanto a</th><td>〜の隣に</td><td>accanto al campanile <button class="tts" data-tts="accanto al campanile"></button></td></tr>
    <tr><th>davanti a</th><td>〜の前に</td><td>davanti al negozio <button class="tts" data-tts="davanti al negozio"></button></td></tr>
    <tr><th>dietro (a)</th><td>〜の後ろに</td><td>dietro alla cattedrale <button class="tts" data-tts="dietro alla cattedrale"></button></td></tr>
    <tr><th>di fronte a</th><td>〜の向かいに</td><td>di fronte al battistero <button class="tts" data-tts="di fronte al battistero"></button></td></tr>
    <tr><th>lontano da</th><td>〜から遠くに</td><td>lontano dalla stazione <button class="tts" data-tts="lontano dalla stazione"></button></td></tr>
  </table>
</section>
<section>
  <h3>4. 道案内の決まり文句</h3>
  <table class="conj">
    <tr><th>Scusi!</th><td>すみません！（呼びかけ） <button class="tts" data-tts="Scusi!"></button></td></tr>
    <tr><th>Dov'è ...?</th><td>〜はどこですか？ <button class="tts" data-tts="Dov'è il Duomo?"></button></td></tr>
    <tr><th>(andare) dritto</th><td>まっすぐ（行く） <button class="tts" data-tts="Deve andare dritto."></button></td></tr>
    <tr><th>a destra / a sinistra</th><td>右に／左に <button class="tts" data-tts="a destra, a sinistra"></button></td></tr>
    <tr><th>fino a ...</th><td>〜まで <button class="tts" data-tts="fino al semaforo"></button></td></tr>
    <tr><th>a piedi / con l'autobus</th><td>徒歩で／バスで <button class="tts" data-tts="a piedi, con l'autobus"></button></td></tr>
  </table>
</section>
<section>
  <h3>5. andare（行く）の活用 — 不規則</h3>
  <table class="conj">
    <tr><th>io</th><td><b>vado</b> <button class="tts" data-tts="io vado"></button></td><th>noi</th><td><b>andiamo</b> <button class="tts" data-tts="noi andiamo"></button></td></tr>
    <tr><th>tu</th><td><b>vai</b> <button class="tts" data-tts="tu vai"></button></td><th>voi</th><td><b>andate</b> <button class="tts" data-tts="voi andate"></button></td></tr>
    <tr><th>lui / lei</th><td><b>va</b> <button class="tts" data-tts="lui va"></button></td><th>loro</th><td><b>vanno</b> <button class="tts" data-tts="loro vanno"></button></td></tr>
  </table>
  <p class="note">このアプリの名前 <em>Andiamo!</em> は「行こう！」— noi の形は誘いの表現になる。</p>
</section>`,
  vocab: [
    { it: "dove", ja: "どこ" },
    { it: "lontano", ja: "遠い" },
    { it: "vicino a", ja: "〜の近くに" },
    { it: "dritto", ja: "まっすぐに" },
    { it: "a destra", ja: "右に" },
    { it: "a sinistra", ja: "左に" },
    { it: "il semaforo", ja: "信号" },
    { it: "la piazza", ja: "広場" },
    { it: "la strada", ja: "道、通り" },
    { it: "girare", ja: "曲がる" },
    { it: "attraversare", ja: "渡る、横断する" },
    { it: "andare", ja: "行く" },
    { it: "il museo", ja: "博物館、美術館" },
    { it: "la chiesa", ja: "教会" },
    { it: "il duomo", ja: "大聖堂、ドゥオーモ" },
    { it: "a piedi", ja: "徒歩で" },
    { it: "l'autobus", ja: "バス" },
    { it: "di fronte a", ja: "〜の向かいに" },
    { it: "accanto a", ja: "〜の隣に" },
    { it: "fino a", ja: "〜まで" },
    { it: "buona giornata", ja: "良い一日を" },
  ],
},

// ============================================================
// Lezione 8
// ============================================================
{
  id: 8,
  titleIt: "Il weekend",
  titleJa: "週末の思い出 — 過去のことを話す",
  scene: "月曜の朝、語学学校の教室で。マルコと週末の報告",
  grammarTag: "近過去（passato prossimo）",
  speakers: {
    A: { name: "Marco", role: "クラスメイト（第1課ぶり）", gender: "m", style: "くだけた tu。口癖は Senti と Dai" },
    B: { name: "Yui", role: "あなた", gender: "f", style: "親しい相手なので tu でくだけて話す" },
  },
  dialogue: [
    { s: "A", it: "Ciao Yui! Com'è andato il weekend?", ja: "やあユイ！週末はどうだった？" },
    { s: "B", it: "Benissimo! Sono andata a Roma.", ja: "最高！ローマに行ってきたの。" },
    { s: "A", it: "Davvero? Che cosa hai visitato?", ja: "本当に？何を見てきたの？" },
    { s: "B", it: "Ho visitato il Colosseo e i Musei Vaticani. Ho camminato tutto il giorno!", ja: "コロッセオとバチカン美術館に行った。一日中歩いたよ！" },
    { s: "A", it: "Hai visto la Cappella Sistina?", ja: "システィーナ礼拝堂は見た？" },
    { s: "B", it: "Sì, l'ho vista! È meravigliosa. Ho fatto tante foto.", ja: "うん、見たよ！素晴らしかった。写真をたくさん撮った。" },
    { s: "A", it: "Che bello! E che cosa hai mangiato?", ja: "いいなあ！で、何を食べた？" },
    { s: "B", it: "Ho mangiato la carbonara in una trattoria vicino al Pantheon. E tu, che cosa hai fatto?", ja: "パンテオンの近くのトラットリアでカルボナーラを食べた。あなたは何をしたの？" },
    { s: "A", it: "Io sono rimasto a Firenze. Sabato ho studiato e domenica sono andato al cinema con amici.", ja: "僕はフィレンツェに残ったよ。土曜は勉強して、日曜は友達と映画に行った。" },
    { s: "B", it: "Che film avete visto?", ja: "何の映画を見たの？" },
    { s: "A", it: "Un film italiano. Non ho capito tutto, ma mi è piaciuto molto.", ja: "イタリア映画。全部はわからなかったけど、すごく気に入ったよ。" },
    { s: "B", it: "Anch'io voglio vedere un film italiano!", ja: "私もイタリア映画を見てみたい！" },
    { s: "A", it: "Dai, andiamo insieme il prossimo weekend!", ja: "ねえ、来週末一緒に行こうよ！" },
    { s: "B", it: "Volentieri!", ja: "喜んで！" },
  ],
  grammar: `
<section>
  <h3>1. 近過去 = avere / essere の現在形 + 過去分詞</h3>
  <p>「〜した」という過去の出来事は<b>近過去（passato prossimo）</b>で言う。2語で作る複合形。</p>
  <p class="ex"><span class="it">Ho mangiato la carbonara.</span> <button class="tts" data-tts="Ho mangiato la carbonara."></button><span class="ja">カルボナーラを食べた。（avere 型）</span></p>
  <p class="ex"><span class="it">Sono andata a Roma.</span> <button class="tts" data-tts="Sono andata a Roma."></button><span class="ja">ローマに行った。（essere 型）</span></p>
</section>
<section>
  <h3>2. 過去分詞の作り方</h3>
  <table class="conj">
    <tr><th>-are → -ato</th><td>mangiare → mangi<b>ato</b> <button class="tts" data-tts="mangiare, mangiato"></button></td></tr>
    <tr><th>-ere → -uto</th><td>ricevere → ricev<b>uto</b> <button class="tts" data-tts="ricevere, ricevuto"></button></td></tr>
    <tr><th>-ire → -ito</th><td>capire → cap<b>ito</b> <button class="tts" data-tts="capire, capito"></button></td></tr>
  </table>
  <p>よく使う不規則形:</p>
  <table class="conj">
    <tr><th>fare → <b>fatto</b></th><td>Ho fatto tante foto. <button class="tts" data-tts="Ho fatto tante foto."></button></td></tr>
    <tr><th>vedere → <b>visto</b></th><td>Che film avete visto? <button class="tts" data-tts="Che film avete visto?"></button></td></tr>
    <tr><th>prendere → <b>preso</b></th><td>Ho preso il treno. <button class="tts" data-tts="Ho preso il treno."></button></td></tr>
    <tr><th>scrivere → <b>scritto</b></th><td>Ho scritto una cartolina. <button class="tts" data-tts="Ho scritto una cartolina."></button></td></tr>
    <tr><th>rimanere → <b>rimasto</b></th><td>Sono rimasto a Firenze. <button class="tts" data-tts="Sono rimasto a Firenze."></button></td></tr>
    <tr><th>essere → <b>stato</b></th><td>È stato bellissimo. <button class="tts" data-tts="È stato bellissimo."></button></td></tr>
  </table>
</section>
<section>
  <h3>3. avere 型と essere 型の使い分け</h3>
  <p><b>ほとんどの動詞は avere 型</b>。<b>essere 型</b>になるのは主に「移動・状態変化」の動詞: andare（行く）、venire（来る）、partire（出発する）、arrivare（着く）、tornare（帰る）、rimanere（残る）、stare、essere 自身。</p>
  <p><b>essere 型では過去分詞が主語の性・数に一致する</b>。第1課の形容詞と同じ規則。</p>
  <table class="conj">
    <tr><th>Marco（男）</th><td>È andat<b>o</b> a Roma. <button class="tts" data-tts="È andato a Roma."></button></td></tr>
    <tr><th>Yui（女）</th><td>È andat<b>a</b> a Roma. <button class="tts" data-tts="È andata a Roma."></button></td></tr>
    <tr><th>Marco e Yui（複数）</th><td>Sono andat<b>i</b> a Roma. <button class="tts" data-tts="Sono andati a Roma."></button></td></tr>
  </table>
  <p class="note">会話でユイが <em>sono andata</em>、マルコが <em>sono rimasto / sono andato</em> と言い分けているのはこのため。</p>
</section>
<section>
  <h3>4. 否定と時の表現</h3>
  <p class="ex"><span class="it">Non ho capito tutto.</span> <button class="tts" data-tts="Non ho capito tutto."></button><span class="ja">全部はわからなかった。（non は avere/essere の前）</span></p>
  <table class="conj">
    <tr><th>ieri</th><td>昨日 <button class="tts" data-tts="ieri"></button></td><th>stamattina</th><td>今朝 <button class="tts" data-tts="stamattina"></button></td></tr>
    <tr><th>sabato scorso</th><td>先週の土曜 <button class="tts" data-tts="sabato scorso"></button></td><th>la settimana scorsa</th><td>先週 <button class="tts" data-tts="la settimana scorsa"></button></td></tr>
  </table>
</section>
<section>
  <h3>5. 発展: mi è piaciuto —「気に入った」</h3>
  <p>第5課の piacere の近過去は essere 型。気に入った対象に性数一致する。</p>
  <p class="ex"><span class="it">Il film mi è piaciuto molto.</span> <button class="tts" data-tts="Il film mi è piaciuto molto."></button><span class="ja">映画がとても気に入った。</span></p>
  <p class="ex"><span class="it">La pizza mi è piaciuta. / Gli spaghetti mi sono piaciuti.</span> <button class="tts" data-tts="La pizza mi è piaciuta. Gli spaghetti mi sono piaciuti."></button><span class="ja">ピザが／スパゲッティが気に入った。</span></p>
  <p class="note">会話の <em>l'ho vista</em>（それを見た）も同じ一致現象。lo/la が前に出ると過去分詞が一致する。今は「そういうものがある」とだけ知っておけば十分。</p>
</section>`,
  vocab: [
    { it: "il weekend / il fine settimana", ja: "週末" },
    { it: "ieri", ja: "昨日" },
    { it: "scorso / scorsa", ja: "この前の、先〜" },
    { it: "vedere", ja: "見る" },
    { it: "visitare", ja: "訪れる、見学する" },
    { it: "camminare", ja: "歩く" },
    { it: "tornare", ja: "帰る、戻る" },
    { it: "rimanere", ja: "残る、とどまる" },
    { it: "la foto", ja: "写真（女性名詞・複数も le foto）" },
    { it: "il film", ja: "映画" },
    { it: "il cinema", ja: "映画館" },
    { it: "l'amico / l'amica", ja: "友達（男／女）" },
    { it: "insieme", ja: "一緒に" },
    { it: "volentieri", ja: "喜んで" },
    { it: "meraviglioso / meravigliosa", ja: "素晴らしい" },
    { it: "tanto / tanta", ja: "たくさんの" },
    { it: "tutto", ja: "すべて" },
    { it: "il giorno", ja: "日、一日" },
    { it: "sabato", ja: "土曜日" },
    { it: "domenica", ja: "日曜日" },
  ],
},

];
