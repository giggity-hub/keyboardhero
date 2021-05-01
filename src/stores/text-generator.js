function createCharData(gold){
    return {
        gold,
        input: null,
        evaluation: 'clear',
        class: 'clear',
        hasCaret: false
    }
}

const path = 'metal-words.txt';

export async function generateText(minCharCount){
    const response = await fetch('metal-words.txt')
    let words = await response.text()
    words = words.split('\n');
    
    const N = words.length;
    const randomWord = () => words[Math.floor(Math.random() * N)]

    const res = []

    let charCount = 0;
    while (charCount < minCharCount){
        let word = randomWord();
        let chars = word.split("");
        //the last char is "" instead of " "
        chars[chars.length -1] = " "
        res.push(chars.map(createCharData)) 
        charCount+= word.length;
    }
    console.log(res);
    return res;
}