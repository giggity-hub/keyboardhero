import { tokenize } from "../utils";

import {get, writable} from 'svelte/store';
import { timer } from "./Timer";
import { entries } from "./entries-store";
import { generateText } from "./text-generator";

//define the exports
export let tokens = writable([[{}]])



let chars = [{}];
let i = 0;

export async function prepareTypingTest(){
    i = 0;
    const text = await generateText(1500); //1500 cuz  300wpm * 60s is prolly enough
    tokens.set(text)
    chars = [].concat.apply([], get(tokens));
    chars[0].hasCaret = true;
    entries.reset();
    //update
    tokens.update(x=>x);

    return true;
}

export function startTypingTest(callback){
    console.log("test started");
    timer.start(()=>{
        callback()
        endTypingTest()
    })
}

function endTypingTest(){

}

function evaluate(input, gold, prevEval ){
    const prevEvalFalsy = ["error", "corrected"].includes(prevEval)
    let evaluation = "correct"
    if(input === gold && prevEvalFalsy){
        evaluation = "corrected";
    }else if (input != gold){
        evaluation = "error";
    }
    if (prevEval != "clear"){
        entries.decrement(prevEval)
    }
    entries.increment(evaluation);
    return evaluation;
}

export  function enterChar(key){
    const isLastChar = i === chars.length -1
    if (! isLastChar){
        const evaluation = evaluate(key, chars[i].gold, chars[i].evaluation);
        chars[i].input = key;
        chars[i].evaluation = evaluation;
        chars[i].class = evaluation;
        chars[i].hasCaret = false;
        i++
        chars[i].hasCaret = true;

        tokens.update(x=>x)
    }
}

export function deleteChar(){
    if (i != 0) {

        chars[i].class = "clear";
        chars[i].hasCaret = false;
        i--
        chars[i].hasCaret = true; 

        tokens.update(x=>x)
    }
}

export function deleteWord(){
    deleteChar();

    while (i >= 1 && isAlphaNumeric(chars[i -1].gold)) {
        deleteChar()
    }

}


function isAlphaNumeric(str){
    const regex = /^[a-z0-9]+$/i;
    return regex.test(str)
}