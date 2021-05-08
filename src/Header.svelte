<script>
import AudioPlayer from './Audio/AudioPlayer.svelte'
import { timer } from './stores/Timer';
import {currentWpm} from './stores/wpm-store';


</script>


<header>
	<h1>Time: {$timer.remaining}  grossWPM: {$currentWpm}</h1>
	<AudioPlayer/>
</header>


<style>
	header{
		display: flex;
	}
</style>