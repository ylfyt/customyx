<script>
	import Icon from 'svelte-fa';
	import { faStar, faCar } from '@fortawesome/free-solid-svg-icons';

	const imageSize = 100;
</script>

<div class="flex">
	<img
		class="rounded-full w-[{imageSize}px] h-[{imageSize}px] "
		src="https://placeimg.com/640/480/2"
		alt=""
	/>
	<div class="flex justify-between w-full ml-[20px]">
		<div class="flex flex-col justify-between">
			<div>
				<p class="text-2xl font-semibold">Toko Jaya Bangunan</p>
				<p class="text-gray-500">Active 15 Minutes ago</p>
			</div>
			<div>
				<div class="mb-[5px] flex items-center text-sm font-medium text-textColorSecondary">
					<p class="mr-1 ">4.5</p>
					<Icon class="mr-1 text-yellow-400" icon={faStar} />
					<p>(8.7k ratings)</p>
					<p class="mr-3 ml-2 text-textColorPrimary font-semibold">|</p>
					<p>20.2k Sold</p>
				</div>
			</div>
		</div>
		<p class="w-2/5">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere vero libero veniam quisquam
			dolor voluptatibus illum fugiat magnam soluta. Neque odio alias possimus, necessitatibus
		</p>
		<div class="flex items-center gap-[20px]">
			<button class="btn bg-primary">Chat</button>
			<button class="btn bg-secondary">Follow</button>
		</div>
	</div>
</div>
