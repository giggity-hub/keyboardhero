
<script>
import { lineSplit } from "./utils";
import { createEventDispatcher, each } from "svelte/internal";
import { deleteChar, deleteWord , enterChar, startTypingTest, tokens } from "./stores/TypingTest";

const dispatch = createEventDispatcher();


let lineWidth = calcLineWidth();

$: [lines, currentLine] = lineSplit($tokens, lineWidth);

const lastItem = (arr) => arr[arr.length -1];

const x = (cl) =>{
    console.log(cl);
    return cl
}

// when the last line is shorter than the second last the lastItem can be undefined
// i don't know why. Thank the lord for optional chaining
$: lineDown = lastItem(lastItem(lines[currentLine]))?.hasCaret;
$: lineUp = lines[currentLine][0][0].hasCaret;

function handleKeyDown(event){
    //console.log(lastItem(lastItem(lines[currentLine])));
    //prevent scroll on SPACE or focus change on TAB
    //event.preventDefault();
    const {key, code} = event;
    if(["Space", "Tab"].includes(code)) event.preventDefault()
    if (key === "Backspace") {
        event.ctrlKey ? dispatch("deleteWord") : dispatch("deleteChar")
        if (lineUp){
            const isFirstLine = currentLine === 0
            currentLine = isFirstLine ? currentLine : currentLine-1;
        }
        
    }else if (key.length === 1) {
        dispatch("enterChar", key)
        if (lineDown) {
            console.log("line down");
            const isLastLine = currentLine === lines.length -1
            currentLine = isLastLine ? currentLine : currentLine+1
        }
    }
}



function calcLineWidth(){
    const innerWidth = window.innerWidth;
    
    if (innerWidth <= 650) {
        return 25
    }else if (innerWidth <= 1000){
        return 30
    }else{
        return 50
    }
}

</script>


<svelte:window 
    on:keydown={handleKeyDown}
    on:resize={()=> lineWidth = calcLineWidth()}/>
<slot {lines} {currentLine}></slot>



