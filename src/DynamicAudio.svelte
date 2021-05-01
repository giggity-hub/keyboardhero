<!-- <script>
import { onMount } from 'svelte';

    import {currentWpm, wpm} from './stores/wpm-store';
    let player;
    export let src;


    let audio = new Audio(src);

    audio.play();
    let [x1, y1] = [0, 300];
    let [x2, y2] = [1, 10]
    $: rate = ($currentWpm - x1) * (y2 - x2) / (y1 - x1) + x2;
    $: console.log(rate);
    $: audio.playbackRate = parseFloat(rate);

</script> -->

