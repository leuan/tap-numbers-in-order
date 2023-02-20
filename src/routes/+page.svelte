<script lang="ts">
	import GamePanel from "./GamePanel.svelte";
	import Timer from "./Timer.svelte";
	let isStarted = false;
	let timer;
</script>
{#if isStarted}
<Timer bind:this={timer}/>
<GamePanel/>
{:else}
<button class="start-button" on:click={()=>{isStarted=true;}}>Start Game</button>
{/if}