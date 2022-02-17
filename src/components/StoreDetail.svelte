<script>
	import Icon from 'svelte-fa';
	import { faStar } from '@fortawesome/free-solid-svg-icons';

	export let store;

	const imageSize = 100;
</script>

<div class="flex">
	<div class="w-[100px] h-[100px]">
		<img class="rounded-full w-[100px] h-[100px] " src={store.image} alt="" />
	</div>
	<div class="flex justify-between w-full ml-[20px]">
		<div class="flex flex-col justify-between">
			<div>
				<p class="text-2xl font-semibold">{store.name}</p>
				<p class="text-gray-500">
					{store.lastActive > 60
						? `Active ${(store.lastActive / 60).toFixed(0)} Minutes ago`
						: `Online`}
				</p>
			</div>
			<div>
				<div class="mb-[5px] flex items-center text-sm font-medium text-textColorSecondary">
					<p class="mr-1 ">{store.rating}</p>
					<Icon class="mr-1 text-yellow-400" icon={faStar} />
					<p>
						({store.numRating > 1100
							? `${Math.round((store.numRating / 1000) * 100) / 100}k`
							: store.numRating} ratings)
					</p>
					<p class="mr-3 ml-2 text-textColorPrimary font-semibold">|</p>
					<p>
						{store.sold > 1100 ? `${Math.round((store.sold / 1000) * 100) / 100}k` : store.sold}
						Sold
					</p>
				</div>
			</div>
		</div>
		<p class="store-note w-2/5">
			{store.note}
		</p>
		<div class="flex items-center gap-[20px]">
			<button class="btn bg-primary">Chat</button>
			<button class="btn bg-secondary">Follow</button>
		</div>
	</div>
</div>

<style>
	.store-note {
		overflow: hidden;
	}
</style>
