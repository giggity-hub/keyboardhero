<script>
import { createEventDispatcher } from "svelte";

    // import {isMobile} from 'is-mobile';
    import DesktopKeyboard from "./DesktopKeyboard.svelte";
    import MobileKeyboard from "./MobileKeyboard.svelte";

    function isMobile(){return true}


    const dispatch = createEventDispatcher();

    function handleKeydown(event){
        const {key, code} = event;
        if(["Space", "Tab"].includes(code)) event.preventDefault()
        if (key === "Backspace") {
            event.ctrlKey ? dispatch("deleteWord") : dispatch("deleteChar")
            
        }else if (key.length === 1) {
            dispatch("enterChar", key)
        }
    }

    function handleInput(inputEvent){
        console.log(inputEvent);
        const {data, inputType, isComposing} = inputEvent;
        if (isComposing){
            return
        }else if (inputType === "deleteContentBackward"){
            dispatch("deleteChar");
        }else{
            dispatch("enterChar", data)
        }
    }
</script>


{#if ! isMobile()}
    <DesktopKeyboard on:keydown={handleKeydown} />

{:else}
    <MobileKeyboard on:input={handleInput} />
{/if}