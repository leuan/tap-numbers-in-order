<script lang="ts">
	import GamePanel from './GamePanel.svelte';
	import Clock from './Clock.svelte';

	let isStarted = false;
	let isFinished = false;
	let timer: Clock;
	let timeElapsed: number;

	function handleFinished() {
		timer.stopTimer();
		isFinished = true;
	}
</script>


<main>
	{#if isStarted}
		<div class="flex justify-center">
			<Clock bind:this={timer} bind:totalSeconds={timeElapsed} />
		</div>
		{#if !isFinished}
			<GamePanel on:finished={handleFinished} />
		{:else}
			<div class="grid place-items-center">
				<p class="text-3xl mx-auto mb-4">
					Great! You finished in {#if Math.floor(timeElapsed / 60) > 0}{Math.floor(
							timeElapsed / 60
						)} minutes and
					{/if}{timeElapsed % 60} seconds.
				</p>
				<button
				class="btn text-4xl mb-6"
				on:click={() => {isFinished = false; timer.restartTimer();}}>Restart game</button>
				<img src="/images/monkey.gif" alt="monkey" class="rounded w-3/4 md:w-1/2 lg:w-1/4 shadow-nm-pressed"/>
			</div>
		{/if}
	{:else}
		<div class="flex justify-center items-center h-96">
			<button
				class="btn text-4xl"
				on:click={() => {
					isStarted = true;
				}}>Start Game</button>
		</div>
	{/if}
</main>
