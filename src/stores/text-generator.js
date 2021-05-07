function createCharData(gold, pos){
    return {
        gold,
        pos,
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
    const randomWord = () => words[Math.floor(Math.random() * N)].replace("\r","")

    const res = []

    let charCount = 0;
    while (charCount < minCharCount){
        let word = randomWord();
        let chars = Array.from(word)
        //add the space
        chars.push(" ")
        res.push(chars.map((char)=>{
            let data = createCharData(char, charCount);
            charCount++
            return data;
        })) 
        
    }
    console.log(res);
    return res;
}