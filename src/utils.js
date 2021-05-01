



// the class determines the style but the evaluation holds the actual value of the char
// if a character was deleted then the class is set to clear while the evaluation remains the same
function CharData(gold){
    this.gold = gold,
    this.input = null,
    this.evaluation = 'clear',
    this.class = 'clear', 
    this.hasCaret = false
}

function wordTokenize(text){
    let words = text.split(" ").map(word => word + " ")
    words[words.length -1] = words[words.length -1].slice(0,-1) //remove the trailing space on the last word

    return words;
}

export function tokenize(text){

    const words = wordTokenize(text)
    const res = []
    
    for (let word of words){
        let chars = word.split('')
        res.push(chars.map( char => new CharData(char)))
    }
    
    return res
}



export function lineSplit(words, maxCharsPerLine){
    const lines = [[]]
    let currentLine = 0
    let i = 0;
    let charCount = 0;

    for (let word of words){
        if(word.length + charCount > maxCharsPerLine ){
            lines.push([]);
            i++
            charCount = 0;
        }
        lines[i].push(word);
        charCount += word.length;

        // check if the word contains the caret
        let hasCaret = word.reduce((bool, char) => {
            return bool || char.hasCaret
        }, false )

        if (hasCaret) {
            currentLine = i
        }
    }
    return [lines, currentLine];
    return lines;
}


export function lineSplit2(words, maxCharCount){
    const lines = [[]];
    let caretPos = {line: 0, word: 0, char: 0}

    let l = 0;
    let w = 0;
    let c = 0;
    let charCount = 0;

    for (let word of words){
        if (charCount + word.length > maxCharCount){
            lines.push([])
            l++
            w=0
            c=0
            charCount = 0
        }
        lines[l].push([]);
        for (let char of word){
            if(char.isCaret){
                delete char.isCaret;
                caretPos = {line: l, word: w, char: c}
            }
            lines[l][w].push(char);
            c++
            charCount++

        }
        w++
        c=0
    }
    return {
        lines: lines, 
        caretPos: caretPos
    };

}