<script>
    
    let hiddenInput;
    let keyboardHasFocus = false;
    const toggleKeyboardFocus = () => keyboardHasFocus = !keyboardHasFocus;


</script>
<input on:input class="hidden" bind:this={hiddenInput} on:blur={toggleKeyboardFocus} on:focus={toggleKeyboardFocus}>
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