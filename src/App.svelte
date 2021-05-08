<script>

import MediaQuery from 'svelte-media-query';
import Keyboard from "./Keyboards/Keyboard.svelte";
import { deleteChar, deleteWord, enterChar, prepareTypingTest, startTypingTest } from "./stores/TypingTest";
import TextArea from "./TextArea.svelte";
import VolumeControls from "./Audio/VolumeControls.svelte";
import AudioPlayer from "./Audio/AudioPlayer.svelte";
import Header from "./Header.svelte";
import DynamicAudioPlayer from './Audio/DynamicAudioPlayer.svelte';



let testPrepared = prepareTypingTest();


let state = "test";

function startHandler(){
	startTypingTest(()=>{
		state = "result"
		//the next test is prepared before the prepare button is pressed so theres no waiting time.
		testPrepared = prepareTypingTest()
	})
}

function prepareHandler(){
	console.log("preparehandler pressed");
	state = "test"
}

function test(e){
	console.log(e);
}
</script>

<Header/>
<main>
	<aside>
		<VolumeControls/>
	</aside>
	<div class="container">
	<div>
	{#if state === "test"}

		{#await testPrepared}
			<h1>warten schmarten</h1>
		{:then res} 


			<TextArea/>
			<DynamicAudioPlayer src="./music/music.mp3"/>

		{/await}

	{:else if state === "result"}
		<div>Yeah boi this da result sksksksk</div>

		<button on:click={prepareHandler} >Neuer Test</button>
	{/if}
	</div>
	</div>




	<div class="container">
		<Keyboard 
			on:enterChar={({detail})=> enterChar(detail) } 
			on:deleteChar={deleteChar}
			on:deleteWord={deleteWord}
			on:enterChar|once={startHandler}/>
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
	background: brown;

	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;
}

aside{
	position: absolute;
	left: 0;
}

main {
	display: flex;
	width: 100%;
	flex-grow: 1;
	flex-direction: column;
	overflow: hidden;
	background: green;
	// background-image: url('https://cdn.hipwallpaper.com/i/99/37/c3kd8Z.jpg');
	background-size: cover;
	padding: 0 50px 0 50px;
}

.container{
	// width: 100px;
	// height: 50%;
	// width: 100%;
	background: blue;
}

</style>
