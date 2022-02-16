<script context="module">
	export async function load(pages) {
		return {
			props: {
				slug: pages.params.slug
			}
		};
	}
</script>

<script>
	import Icon from 'svelte-fa';
	import { faStar, faCar } from '@fortawesome/free-solid-svg-icons';
	import VariantField from '../../components/VariantField.svelte';
	import ProductImagesCarousel from '../../components/ProductImagesCarousel.svelte';

	export let slug;

	const variants = [
		{
			name: 'Color',
			options: ['Merah', 'Biru', 'Hijau', 'Orange', 'Kuning']
		},
		{
			name: 'Size',
			options: ['S', 'M', 'L', 'XL', 'XXL']
		}
	];

	const products = [
		{
			id: 1,
			name: 'Keyboard-custom-baru',
			slug: 'keyboard-custom-baru-31230213212',
			storeId: 2,
			description: 'Keyboard mechanical custom, bisa warna apa saja'
		},
		{
			id: 2,
			name: 'Keyboard-custom',
			slug: 'keyboard-custom-31230213212',
			storeId: 2,
			description: 'Keyboard mechanical custom, bisa warna apa saja'
		},
		{
			id: 3,
			name: 'Rakit PC',
			slug: 'rakit-pc-31230213212214',
			storeId: 3,
			description: 'Keyboard mechanical custom, bisa warna apa saja'
		},
		{
			id: 4,
			name: 'DIY Meja Belajar',
			slug: 'diy-meja-belajar-31230213212',
			storeId: 4,
			description: 'Keyboard mechanical custom, bisa warna apa saja'
		}
	];

	const product = products.filter((prod) => prod.slug === slug)[0];

	let quantity = 1;
	const updateTest = () => {
		if (quantity === null || quantity < 1) {
			quantity = 1;
		}
	};

	const updateQuantity = (val) => {
		quantity += val;
		if (quantity < 1) {
			quantity = 1;
		}
	};
</script>

<div class="container">
	<div class="flex">
		<ProductImagesCarousel />
		<div class="ml-[20px] w-3/5">
			<h1 class="mb-[5px] text-2xl font-semibold">Keyboard Custom Baru</h1>
			<div class="mb-[5px] flex items-center text-sm font-medium text-textColorSecondary">
				<p class="mr-1 ">4.7</p>
				<Icon class="mr-1 text-yellow-400" icon={faStar} />
				<p>(2.7k ratings)</p>
				<p class="mr-3 ml-2 text-textColorPrimary font-semibold">|</p>
				<p>2.7k Sold</p>
			</div>
			<div class="bg-secondary text-3xl font-bold p-[10px]">Rp700.000</div>
			<div>
				<div class="flex mt-[20px]">
					<div class="w-1/4">Shipping</div>
					<div class="w-3/4 flex items-start ">
						<Icon class="mt-[5px]" icon={faCar} />
						<div class="ml-1 w-full">
							<div class="flex">
								<div class="w-[50px] ">To</div>
								<div class="font-bold">Kota Bandung</div>
							</div>
							<div class="flex">
								<div class="w-[50px] ">Fee</div>
								<div class="font-semibold">Rp0 - Rp20.000</div>
							</div>
						</div>
					</div>
				</div>
				{#each variants as variant}
					<VariantField {variant} />
				{/each}
			</div>
			<!-- Quantity &  Add To Cart-->
			<div class="mt-[40px]">
				<div class="flex gap-[40px] w-full">
					<div class="flex items-center gap-2">
						<button
							class="btn text-xl font-bold border-2 w-[50px]"
							on:click={() => updateQuantity(1)}>+</button
						>
						<input
							type="number"
							class="bg-red-200 px-2 py-3 w-[100px] shadow-sm rounded-md text-center text-xl font-bold"
							bind:value={quantity}
							min="1"
							on:change={updateTest}
						/>
						<button
							class="btn text-xl font-bold border-2 w-[50px]"
							on:click={() => updateQuantity(-1)}>-</button
						>
					</div>
					<button type="submit" class="btn bg-primary text-xl font-bold">Add to Cart</button>
				</div>
			</div>
		</div>
	</div>
	<hr class="mt-[40px]" />
</div>

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		/* display: none; <- Crashes Chrome on hover */
		-webkit-appearance: none;
		margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
	}

	input[type='number'] {
		-moz-appearance: textfield; /* Firefox */
	}
</style>
