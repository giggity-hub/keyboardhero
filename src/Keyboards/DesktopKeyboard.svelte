<script>
    import ArcadeButton from '../ArcadeButton.svelte';
    import keyboardLayout from './keyboardLayout.json'
    import jQuery from 'jquery';



    const rows = Object.values(keyboardLayout)

    jQuery('.keyboard').css({display: "none !important", width: "1px"})

    const uFormat = (u) => 'u' + u*100

    let animated = {}


function animate(event){
    let code = event.code;
    animated[code] = true;
}

function stopAnimation(event){
    let code = event.code;
    animated[code] = false;
}

</script>


<svelte:window on:keydown on:keydown={animate} on:keyup={stopAnimation} />

<div  class="keyboard">
    {#each rows as row }
        <div class="row">
            {#each row as key}
                <ArcadeButton
                    units={key.u}
                    animated={animated[key.code] || false}
                />
                <!-- <div class={'key ' + uFormat(key.u)}>{key.text}</div> -->
            {/each}
        </div>
    {/each}
</div>


<style lang="scss">

$u : 100px;


.keyboard{
    display: block;

    display: flex;
    flex-direction: column;
    justify-content: space-between;


}

.row{
    display: flex;

    justify-content: space-between;
}




</style>



