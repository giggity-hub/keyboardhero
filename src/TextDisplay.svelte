<script>
    import {Howl, Howler} from "howler"
import ArcadeButton from "./ArcadeButton.svelte";
import Keyboard from "./Keyboard.svelte";
import LinesProvider from "./LinesProvider.svelte";
import TextArea from "./TextArea.svelte";


import { enterChar, tokens, prepareTypingTest, deleteChar, deleteWord, startTypingTest } from "./stores/TypingTest";
import { timer } from "./stores/Timer";
import { entries } from "./stores/entries-store";
// import { currentWpm, wpm } from "./stores/wpm-store";
import DynamicAudio from "./DynamicAudio.svelte";



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

</script>



<div on:click>
	{#if state === "test"}

	{#await testPrepared}
		<h1>warten schmarten</h1>
	{:then res} 
		<LinesProvider 
		on:enterChar={({detail})=> enterChar(detail) } 
		on:deleteChar={deleteChar}
		on:deleteWord={deleteWord}
		on:enterChar|once={startHandler}
		let:lines={lines} 
		let:currentLine={currentLine}>
		<TextArea {lines} {currentLine} >

		</TextArea>
		</LinesProvider>
	{/await}

	<!-- <DynamicAudio src={"music/music.mp3"} /> -->

	<!-- <div>
		<h1>Current WPM: {$currentWpm}</h1>
		net {$wpm.net}
		gross {$wpm.gross}
	</div>
	<div>
		{$timer.remaining}
	</div> -->


{:else if state === "result"}
	<div>Yeah boi this da result sksksksk</div>

	<button on:click={prepareHandler} >Neuer Test</button>
{/if}
</div>

<!-- 
	<Keyboard>
	
	</Keyboard>  -->

<!-- <ArcadeButton units=1 />
<ArcadeButton units=2 />
<ArcadeButton units=6.25 /> -->