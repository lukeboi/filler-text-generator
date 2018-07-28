//random latin words, taken from de finibus bonorum et malorum (the original lorem ipsum text) https://en.wikipedia.org/wiki/De_finibus_bonorum_et_malorum
var lipsum_words = ['lorem', 'maxime', 'industriae', 'me', 'ea', 'quibusdam', 'philosophia', 'aliquid', 'erunt', 'isti', 'arbitrantur', 'defatigatio', 'graeco', 'statuat', 'legendis', 'philosophi', 'delectamur', 'eram', 'dicendum', 'latinis', 'labor', 'semel', 'et', 'iis', 'hortensio', 'enim', 'viderer', 'omnis', 'displicet', 'tractavissent', 'modum', 'alienae', 'dignitatis', 'hominum', 'eruditi', 'agatur', 'suscepi', 'studium', 'graecis', 'propemodum', 'investigandi', 'defensa', 'nobis', 'mediocritatem', 'remissius', 'fodere', 'philosophiae', 'invidus', 'nescius', 'mandaremus', 'infinitis', 'contra', 'iustioribus', 'nos', 'sic', 'illis', 'moderatius', 'fieri', 'temperantiam', 'laboramus', 'ii', 'ut', 'genus', 'denique', 'esse', 'vituperata', 'admissum', 'plura', 'tantum', 'sin', 'non', 'meliore', 'modus', 'contemnentes', 'a', 'terentianus', 'vicinum', 'negent', 'retinere', 'tibi', 'posse', 'reprehendunt', 'quo', 'fruenda', 'chremes', 'deterret', 'brute', 'difficilem', 'sermone', 'tam', 'existimo', 'nec', 'maior', 'coerceri', 'sit', 'consumere', 'vituperatoribus', 'sed', 'quaerendi', 'veri', 'id', 'breviter', 'avocent', 'quidem', 'novum', 'latinas', 'futuros', 'quam', 'veritus', 'quos', 'doctrina', 'incurreret', 'quandam', 'omnino', 'sive', 'turpis', 'quae', 'satis', 'aliquos', 'malle', 'hoc', 'litteras', 'etsi', 'alias', 'ab', 'quaeritur', 'nisi', 'dicant', 'tamen', 'movere', 'placeat', 'noster', 'etiam', 'offendit', 'indoctis', 'sapientiam', 'autem', 'constituant', 'aut', 'fore', 'inliberali', 'rebus', 'solum', 'in', 'iudicare', 'eo', 'est', 'studia', 'ego', 'litteris', 'videretur', 'varias', 'operam', 'philosophari', 'desiderent', 'arbitrarer', 'etenim', 'postulant', 'reprimique', 'paranda', 'illum', 'reprehensiones', 'cum', 'ne', 'industria', 'totum', 'pulcherrimum', 'iniucundus', 'quamquam', 'personae', 'nam', 'esset', 'volunt', 'inveneris', 'elegans', 'reque', 'se', 'ad', 'labore', 'tamque', 'perveniri', 'multam', 'admodum', 'scribimus', 'exquisitaque', 'hic', 'vocent', 'ferre', 'ullus', 'difficile', 'libro', 'probatus', 'curiosi', 'suspicor', 'collaudata', 'his', 'potest', 'quis', 'arare', 'postremo', 'quod', 'utamur', 'scribendi', 'ingeniis', 'ponendam', 'responsum', 'inhumanus', 'abducat', 'accusata', 'sapientia', 'quidam', 'si', 'summis', 'liber', 'minime', 'qui', 'vult'];

//some of the most common english words, taken from https://en.wikipedia.org/wiki/Most_common_words_in_English#100_most_common_words
var random_english = ['as', 'look', 'year', 'next', 'last', 'not', 'child', 'go', 'try', 'big', 'time', 'will', 'own', 'seem', 'he', 'a', 'good', 'woman', 'group', 'high', 'to', 'that', 'life', 'new', 'into', 'number', 'one', 'know', 'about', 'right', 'tell', 'their', 'large', 'up', 'on', 'over', 'do', 'you', 'first', 'of', 'for', 'her', 'be', 'make', 'world', 'but', 'see', 'give', 'I', 'and', 'fact', 'small', 'able', 'want', 'bad', 'think', 'government', 'use', 'would', 'leave', 'young', 'an', 'from', 'week', 'person', 'she', 'by', 'problem', 'they', 'ask', 'old', 'there', 'find', 'thing', 'eye', 'get', 'great', 'take', 'come', 'his', 'point', 'early', 'with', 'in', 'day', 'have', 'part', 'all', 'it', 'few', 'case', 'after', 'long', 'this', 'hand', 'place', 'man', 'way', 'the', 'work', 'company', 'say', 'at', 'important', 'little', 'different', 'my', 'public', 'call', 'same', 'or', 'feel', 'other']

//default to lipsum
var words = lipsum_words;

module.exports = {
    generate: generate,
    setWordBank: setWordBank
};

function generate(l, t) {
    result = "";
    switch(t) {
        case "p":
            result += generateParagraph();
            for(var i = 0; i < l - 1; i++) {
                result += "\n\n" + generateParagraph();
            }
            break;

        case "s":
            result += generateSentence();
            for(var i = 0; i < l - 1; i++) {
                result += " " + generateSentence();
            }
            break;
            
        default:
            result += generateWord();
            for(var i = 0; i < l - 1; i++) {
                result += " " + generateWord();
            }
    }
    return result;
}

function generateWord(isCap) {
    var word = words[randomInt(words.length)];
    if(isCap) {
        word = word.substring(0,1).toUpperCase() + word.substring(1, word.length);
    }
    return word;
}

function generateSentence() {
    var useComma = randomInt(2);
    var sentence = "";
    
    sentence += generateWord(true);
    for(var i = 0; i < randomInt(10) + 1; i++) {
        sentence += " " + generateWord(false);
    }

    if(useComma) {
        sentence += ",";
        for(var i = 0; i < randomInt(10) + 1; i++) {
            sentence += " " + generateWord(false);
        }
    }
    sentence += ".";
    return sentence;
}

function generateParagraph() {
    paragraph = "";
    paragraph += generateSentence();
    for(var i = 0; i < randomInt(20); i++) {
        paragraph += " " + generateSentence();
    }
    return paragraph;
}

function randomInt(max) {
    return Math.floor(max * Math.random());
}

function setWordBank(b) {
    switch (b) {
        case "lipsum":
            words = lipsum_words;
            break;
        case "randeng":
            words = random_english;
            break;
    }
}