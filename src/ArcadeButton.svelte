<script>
    import {fade} from 'svelte/transition';
    export let animated = false;
    export let units = 1;

    const uFormat = u => "u" + u*100;

</script>


<div class={"arcade-button " + uFormat(units)} class:active={animated}>
    
    
    <div  class="ring"  >
        
        <!-- fire animation goes -->
        <div class="stamp">
            
        </div>
        

    </div>
    {#if animated}
        <div out:fade class="effect"></div>
    {/if}

</div>



<style lang="scss">

.arcade-button{
    padding: 10px;
    width: 100px;
    height: 50px;
    border-radius: 100%;
    display: grid;
    place-items: center;
    position: relative;

}

.effect{
    width: 400px;
    height: 400px;

    transform: translateY(-35%);
    position: absolute;
    opacity: 0.8;
    background-image: url('https://media.giphy.com/media/UPuWR8O5eFOC2FdKp4/giphy.gif');
    background-position: center;
    background-size: contain;
}


// arcade button
.ring{
    width: 100%;
    height: 100%;

    background: black;
    border-radius: inherit;

    box-shadow: 0px 4px 0px 8px red;

    overflow: hidden;

    grid-column: 1;
    grid-row: 1;
    
}

.stamp{
    width: 100%;
    height: 100%;
    background: yellow;
    border-radius: inherit;
    transition: all 0.1s;

    background: linear-gradient(0deg, rgba(120,2,2,1) 0%, rgba(255,0,0,1) 100%);
}

.arcade-button.active .stamp{
    margin-top: 15px;
}



$units: (
    "100": 100%, 
    "125": 60%, 
    "150": 60%,
    "175": 40%,
    "200": 30%,
    "225": 20%,
    "275": 15%,
    "625": 10%,
);

@each $u, $radius in $units{
    .arcade-button.u#{$u} {
        width: #{$u}px;
        border-radius: #{$radius}/100%;
    }
}

</style>