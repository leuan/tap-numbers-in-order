<script lang="ts">
	import GamePanel from "./GamePanel.svelte";
	import Timer from "./Timer.svelte";
	let isStarted = false;
	let isFinished = false;
	let timer: Timer;
	let timeElapsed:number;

	function handleFinished(){
		timer.stopTimer();
		isFinished = true;
	}
</script>

{#if isStarted}
	<Timer bind:this={timer} bind:totalSeconds={timeElapsed}/>
	{#if !isFinished}
		<GamePanel on:finished={handleFinished}/>
	{:else}
		<div class="finish-messagebox">
			Great! You finished in {#if Math.floor(timeElapsed / 60) > 0}{Math.floor(timeElapsed / 60)} minutes and {/if}{timeElapsed % 60} seconds. 
		</div>
	{/if}
{:else}
	<button class="start-button" on:click={()=>{isStarted=true;}}>Start Game</button>
{/if}