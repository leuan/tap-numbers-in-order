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

<nav class="py-4 border-b-2">
	<ul class="flex justify-center">
		<li>
			<a href="/" class="text-4xl text-green-600 font-bold font-title">Tap Numbers in Order!</a>
		</li>
	</ul>
</nav>
<main>
	{#if isStarted}
		<div class="flex justify-center">
			<Timer bind:this={timer} bind:totalSeconds={timeElapsed}/>
		</div>
		{#if !isFinished}
			<GamePanel on:finished={handleFinished}/>
		{:else}
			<div class="grid place-items-center">
				<p class="text-3xl mx-2 mb-3">Great! You finished in {#if Math.floor(timeElapsed / 60) > 0}{Math.floor(timeElapsed / 60)} minutes and {/if}{timeElapsed % 60} seconds.</p>
				<img src="/images/monkey.gif" alt="monkey"/>
			</div>
		{/if}
	{:else}
		<div class="flex justify-center items-center h-96">
			<button class="px-6 py-4 bg-gray-400 rounded text-gray-50 shadow font-bold text-4xl" on:click={()=>{isStarted=true;}}>Start Game</button>
		</div>
	{/if}
</main>