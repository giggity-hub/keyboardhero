<script>
    
    let hiddenInput;
    let keyboardHasFocus = false;
    const toggleKeyboardFocus = () => keyboardHasFocus = !keyboardHasFocus;
    let inputValue;


    function handleKeydown(e){
        console.log(e);
        // inputValue = ""
    }

</script>

<input on:input={handleKeydown} class="hidden" bind:value={inputValue}  bind:this={hiddenInput} on:blur={toggleKeyboardFocus} on:focus={toggleKeyboardFocus}
autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
{#if keyboardHasFocus }
    <!-- svelte-ignore a11y-autofocus -->
    scrrrt scrrtr
{:else}
    <button  on:click={()=> hiddenInput.focus()} >show keyboard</button>
{/if}

<style>
    .hidden{
        /* height: 0;
        padding: 0;
        border: none;
        width: 0;
        margin: 0;
        opacity: 0; */
    }
</style>