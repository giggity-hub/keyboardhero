<script>

import Keyboard from "./Keyboard.svelte";
import TextDisplay from "./TextDisplay.svelte";

let hiddenInput;
function handleClick(e){
	console.log("asdf");
	hiddenInput.focus();
}

</script>


<main>
<div class="container">
	<TextDisplay on:click={handleClick}/>
</div>
<div class="container">
	<Keyboard/>
</div>


</main>
<input bind:this={hiddenInput}>




<style lang="scss">

/* RESETS */
:global(*),
:global(*::before),
:global(*::after) {
  box-sizing: border-box;
}

:global(body){
	margin:0;
	padding: 0;
}

main {
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: green;
	background-image: url('https://cdn.hipwallpaper.com/i/99/37/c3kd8Z.jpg');
	background-size: cover;
}

.container{
	height: 50%;
}

</style>
