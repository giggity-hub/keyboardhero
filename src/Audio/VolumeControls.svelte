<script>
    import RangeSlider from 'svelte-range-slider-pips'
    import { masterVolume } from './volume-store';

    const initialValue = $masterVolume*100
</script>




<RangeSlider pips values={[initialValue]} on:change={({detail}) => $masterVolume = detail.value/100 } vertical />



<style lang="scss">


</style>