<script lang="ts">
	import { onDestroy } from 'svelte';

	export let totalSeconds = 0;
	let interval = setInterval(() => (totalSeconds += 1), 1000);

	onDestroy(() => clearInterval(interval));

	function formatTime(totalSeconds: number) {
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;
		return (
			(minutes < 10 ? '0' + minutes.toString() : minutes.toString) +
			':' +
			(seconds < 10 ? '0' + seconds.toString() : seconds.toString())
		);
	}

	export function stopTimer() {
		//using this to stop the timer when game ends
		clearInterval(interval);
	}

	export function restartTimer() {
		totalSeconds = 0;
		interval = setInterval(() => (totalSeconds += 1), 1000);
	}
</script>

<p class="font-bold text-2xl my-4">{formatTime(totalSeconds)}</p>
