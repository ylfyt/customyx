<script>
	export let specifications;
</script>

<div class="text-lg font-medium">
	<ul>
		{#each specifications as spec}
			<li class="flex">
				<div class="w-1/6">{spec.title}</div>
				<div class="flex">
					<div class="mr-[20px]">:</div>
					<div>{spec.value}</div>
				</div>
			</li>
		{/each}
	</ul>
</div>
