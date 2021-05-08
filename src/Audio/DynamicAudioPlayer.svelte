<script>
    import { onMount } from 'svelte';
    import {currentWpm} from '../stores/wpm-store';
import { masterVolume } from './volume-store';
    let player;
    export let src;


    let audio = new Audio(src);

    audio.play();
    let [x1, y1] = [0, 400];
    let [x2, y2] = [1, 10]
    $: rate = ($currentWpm - x1) * (y2 - x2) / (y1 - x1) + x2;
    $: audio.playbackRate = parseFloat(rate);

    $: audio.volume = $masterVolume;

</script>

