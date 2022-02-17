<script>
	export let variant;
	export let updateChoice;
	export let idx;
	let co = '';
	$: co && updateChoice(idx, co);
</script>

<div class="flex mt-[20px]">
	<div class="w-1/4">{variant.name}</div>
	<div class="w-3/4 ">
		<select name="" id="" class="variant-drop" bind:value={co}>
			<option value="" disabled selected>Choose {variant.name}</option>
			{#each variant.options as option}
				<option value={option}>{option}</option>
			{/each}
		</select>
	</div>
</div>

<style>
	.variant-drop {
		width: 100%;
		padding: 5px;
		outline: solid 1px;
		border-radius: 5px;
		box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
	}
</style>
