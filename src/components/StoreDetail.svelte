<script>
	import Icon from 'svelte-fa';
	import { faStar, faCar } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="flex">
	<img class="rounded-full w-[120px] h-[120px] " src="https://placeimg.com/640/480/2" alt="" />
	<div class="flex justify-between w-full ml-[20px]">
		<div class="flex flex-col justify-evenly">
			<p class="text-2xl font-semibold">Toko Jaya Bangunan</p>
			<p class="text-gray-500">Active 15 Minutes ago</p>
			<div class="mb-[5px] flex items-center text-sm font-medium text-textColorSecondary">
				<p class="mr-1 ">4.7</p>
				<Icon class="mr-1 text-yellow-400" icon={faStar} />
				<p>ratings</p>
			</div>
		</div>

		<div class="flex items-center gap-[20px]">
			<button class="btn bg-primary">Chat</button>
			<button class="btn bg-secondary">Follow</button>
		</div>
	</div>
</div>
