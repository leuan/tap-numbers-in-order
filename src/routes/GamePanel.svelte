<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    let counter = 1;
    let clickedCounter = 1;
    let numbers:string[] = Array(16); //displayed numbers
    numbers = numbers.fill('x');
    let openPositions:number[] = Array(16); //positions in the array that can be overwritten
    openPositions = Array.from(Array(16).keys());

    function addNumber() {
        let position = openPositions[Math.floor(Math.random() * openPositions.length)]; //pick a random position
        numbers[position] = counter.toString();
        counter++;
        openPositions = openPositions.filter((e)=>e!=position);  
        
    }

    //fill the array with the first 8 numbers
    for (let i = 0; i < 8; i++){
    addNumber();
    }

    
    function handleClick(id:number) {
        if(numbers[id] === clickedCounter.toString()){
            clickedCounter++;
            numbers[id] = 'x';
            openPositions = [...openPositions, id];
            if(counter <= 20){
                addNumber();
            }
            if(clickedCounter == 21){
                dispatch('finished');
            }
        }
    }
</script>

<div class="button-container">
    {#each numbers as buttonNumber, id}
    <button on:click={()=>{handleClick(id)}}>{buttonNumber}</button>
    {/each}
</div>

<style>
    .button-container {        
        display: grid;
        gap: 2em 2em;
        grid-template-columns: repeat(4, 3em);
        grid-template-rows: repeat(4, 3em);
    }
</style>