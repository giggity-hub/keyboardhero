<script>

import { tokens } from "./stores/TypingTest";


const lineHeight = 40; //has to be same as in css
let caretRef;

$: translateY = calcTranslateY(caretRef?.offsetTop, lineHeight)
const calcTranslateY = (caretOffsetTop, lineHeight) => {
    const maxDistanceTop = lineHeight*0
    return Math.min(maxDistanceTop - caretOffsetTop,0) + "px";
}




</script>

<svelte:window  on:resize={()=> translateY = translateY}/>


<div class="text-wrapper">
    <div class="text" style="transform: translateY({translateY})" >
        {#each $tokens as token}
            <div class="token" >
            {#each token as char}
                {#if char.hasCaret}
                    <div bind:this={caretRef} class={"char caret " + char.class}>{char.gold}</div>
                {:else}
                    <div class={"char " + char.class}>{char.gold}</div>
                {/if}
            {/each}
            </div>
        {/each}
    </div>
</div>

<!-- style="transform: translateY({-caretRef?.offsetTop}px)" -->

<style lang="scss">

$line-height: 50px;

.text-wrapper{
    height: $line-height*5;
    overflow: hidden;
    border: 2px solid grey;
    width: 900px;
    max-width: 90%;
}

.text{
    // transition: margin-top 0.3s;
    display: flex;
    flex-wrap: wrap;
    font-size: 30px;
    transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) .2s;
}


.line{
    height: $line-height;
    display: flex;
    flex-direction: row;
    padding: 5px 0 5px 0;
}

.token{
    display: flex;

}

.char{
    border-radius: 3px;
    margin-left:1px;
    margin-right:1px;
    min-width: 15px;
    text-align: center;
    position: relative;

    &.error{background: red}
    &.clear{background: lightblue}
    &.correct{background: green}
    &.corrected{background: yellow}

}

.char.caret{
    background: grey;
    color: white;
}

.caret-ref{
    top:0;
    height: 100%;
    width: 100%;
    position: absolute;
    background: purple;
}
</style>