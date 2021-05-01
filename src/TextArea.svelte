<script>

export let lines;
export let currentLine;

let lineOffset = 2;
let lineHeight = 50;

$: marginTop = Math.max(0, currentLine - lineOffset) * -lineHeight + "px"

</script>

<div>{currentLine}</div>

<div class="text-wrapper">
    <div class="text" style="margin-top: {marginTop}">
    {#each lines as line }
        <div class="line">
        {#each line as token}
            <div class="token">
            {#each token as char}
                <div 
                    class:caret={char.hasCaret}
                    class={"char " + char.class}>
                    {char.gold}
                </div>
            {/each}
            </div>
        {/each}
        </div>
    {/each}
    </div>
</div>



<style lang="scss">

$line-height: 50px;

.text-wrapper{
    height: $line-height*5;
    overflow: hidden;
}

.text{
    transition: margin-top 0.3s;
    display: flex;
    flex-direction: column;
    font-size: 30px;
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

    &.error{background: red}
    &.clear{background: lightblue}
    &.correct{background: green}
    &.corrected{background: yellow}

}

.char.caret{
    background: black;
    color: white;
}

</style>