<script>
    import {Howl, Howler} from "howler"
import ArcadeButton from "./ArcadeButton.svelte";
import Keyboard from "./Keyboards/DesktopKeyboard.svelte";
import LinesProvider from "./LinesProvider.svelte";
import TextArea from "./TextArea.svelte";


import { enterChar, tokens, prepareTypingTest, deleteChar, deleteWord, startTypingTest } from "./stores/TypingTest";
import { timer } from "./stores/Timer";
import { entries } from "./stores/entries-store";
// import { currentWpm, wpm } from "./stores/wpm-store";
import DynamicAudio from "./DynamicAudio.svelte";





</script>





<!-- 
	<Keyboard>
	
	</Keyboard>  -->

<!-- <ArcadeButton units=1 />
<ArcadeButton units=2 />
<ArcadeButton units=6.25 /> -->