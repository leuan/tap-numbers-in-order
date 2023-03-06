<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let counter = 1;
	let clickedCounter = 1;
	let numbers: string[] = Array(16); //displayed numbers
	numbers = numbers.fill('x');
	let openPositions: number[] = Array(16); //positions in the array that can be overwritten
	openPositions = Array.from(Array(16).keys());

	const colors = [
		'#fc0303',
		'#fc5603',
		'#fcce03',
		'#4dff00',
		'#0026ff',
		'#a200ff',
		'#ff00ff',
		'#00eeff',
		'#4400ff'
	];

	function addNumber() {
		let position = openPositions[Math.floor(Math.random() * openPositions.length)]; //pick a random position
		numbers[position] = counter.toString();
		counter++;
		openPositions = openPositions.filter((e) => e != position);
	}

	//fill the array with the first 8 numbers
	for (let i = 0; i < 8; i++) {
		addNumber();
	}

	function handleClick(id: number) {
		if (numbers[id] === clickedCounter.toString()) {
			clickedCounter++;
			numbers[id] = 'x';
			openPositions = [...openPositions, id];
			if (counter <= 20) {
				addNumber();
			}
			if (clickedCounter == 21) {
				dispatch('finished');
			}
		}
	}
</script>

<div
	class="grid grid-cols-[repeat(4,_minmax(3rem,_1fr))] md:grid-cols-[repeat(4,_15%)] xl:grid-cols-[repeat(4,_7%)] place-content-center gap-2"
>
	{#each numbers as buttonNumber, id}
		<button
			style="color: {colors[Math.floor(Math.random() * 9)]};"
			class="bg-gray-200 aspect-square rounded text-4xl font-bold"
			on:click={() => {
				handleClick(id);
			}}>{buttonNumber === 'x' ? '' : buttonNumber}</button
		>
	{/each}
</div>
