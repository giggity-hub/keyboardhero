<script>
import Keyboard from "./Keyboard.svelte";
import TextDisplay from "./TextDisplay.svelte";



</script>

<main>

<div class="container">
	<TextDisplay/>
</div>
<div class="container">
	<Keyboard/>
</div>


</main>




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
