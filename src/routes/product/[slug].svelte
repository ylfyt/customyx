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
	import StoreDetail from '../../components/StoreDetail.svelte';
	import ProductSpec from '../../components/ProductSpec.svelte';
	import ProductDescription from '../../components/ProductDescription.svelte';

	export let slug;
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

	const product = {
		id: 1,
		name: 'Keyboard Mechanical Custom',
		slug: 'keyboard-custom-baru-31230213212',
		storeId: 2,
		sold: 4050,
		price: 700000,
		rating: 4.9,
		numRating: 3200,
		address: {
			city: 'Kota Surabaya'
		},
		store: {
			name: 'Toko Jaya Bangunan',
			image: 'https://placeimg.com/640/480/2',
			sold: 23000,
			rating: 4.5,
			numRating: 8750,
			lastActive: 450,
			note: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere vero libero veniam quisquam dolor voluptatibus illum fugiat magnam soluta. Neque odio alias possimus, necessitatibus'
		},
		variants: [
			{
				name: 'Color',
				options: ['Merah', 'Biru', 'Hijau', 'Orange', 'Kuning']
			},
			{
				name: 'Size',
				options: ['S', 'M', 'L', 'XL', 'XXL']
			}
		],

		images: [
			{
				url: 'https://placeimg.com/640/480/1',
				caption: 'Photo 1'
			},
			{
				url: 'https://placeimg.com/640/480/2',
				caption: 'Photo 2'
			},
			{
				url: 'https://placeimg.com/640/480/3',
				caption: 'Photo 3'
			}
		],
		description: {
			specifications: [
				{
					title: 'Kondisi',
					value: 'Baru'
				},
				{
					title: 'Garansi',
					value: '1 Tahun'
				},
				{
					title: 'Tegangan',
					value: '12v'
				}
			],
			text: `
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit suscipit, vero est, reiciendis repellat, accusantium officia illo voluptatibus eum repellendus corporis iure cumque sunt molestias quisquam qui aliquid rerum dolorem?
			<br/>
			<br/>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit suscipit, vero est, reiciendis repellat, accusantium officia illo voluptatibus eum repellendus corporis iure cumque sunt molestias quisquam qui aliquid rerum dolorem?
			<br/>
			<br/>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit suscipit, vero est, reiciendis repellat, accusantium officia illo voluptatibus eum repellendus corporis iure cumque sunt molestias quisquam qui aliquid rerum dolorem?
			<br/>
			<br/>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit suscipit, vero est, reiciendis repellat, accusantium officia illo voluptatibus eum repellendus corporis iure cumque sunt molestias quisquam qui aliquid rerum dolorem?ss
			<br/>
			`
		}
	};
</script>

<div class="w-full flex items-center flex-col gap-[20px]">
	<div class="container flex">
		<ProductImagesCarousel images={product.images} />
		<div class="ml-[20px] w-3/5">
			<h1 class="mb-[5px] text-2xl font-bold">{product.name}</h1>
			<div class="mb-[5px] flex items-center text-sm font-medium text-textColorSecondary">
				<p class="mr-1 ">{product.rating}</p>
				<Icon class="mr-1 text-yellow-400" icon={faStar} />
				<p>
					({product.numRating > 1100
						? `${Math.round((product.numRating / 1000) * 100) / 100}k`
						: product.numRating} ratings)
				</p>
				<p class="mr-3 ml-2 text-textColorPrimary font-semibold">|</p>
				<p>
					{product.sold > 1100 ? `${Math.round((product.sold / 1000) * 100) / 100}k` : product.sold}
					Sold
				</p>
			</div>
			<div class="bg-secondary text-3xl font-bold p-[10px]">
				Rp{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
			</div>
			<div>
				<div class="flex mt-[20px]">
					<div class="w-1/4">Shipping</div>
					<div class="w-3/4 flex items-start ">
						<Icon class="mt-[5px]" icon={faCar} />
						<div class="ml-1 w-full">
							<div class="flex">
								<div class="w-[50px] ">From</div>
								<div class="font-medium">{product.address.city}</div>
							</div>
							<div class="flex">
								<div class="w-[50px] ">To</div>
								<div class="font-bold">Kota Bandung</div>
							</div>
							<div class="flex">
								<div class="w-[50px] ">Fee</div>
								<div class="font-medium">Rp0 - Rp20.000</div>
							</div>
						</div>
					</div>
				</div>
				{#each product.variants as variant}
					<VariantField {variant} />
				{/each}
			</div>
			<!-- Quantity &  Add To Cart-->
			<div class="flex mt-[20px]">
				<div class="w-1/4">Quantity</div>
				<div class="w-3/4 ">
					<div class="flex items-center gap-2">
						<button
							class="btn text-xl font-bold border-2 w-[50px]"
							on:click={() => updateQuantity(-1)}>-</button
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
							on:click={() => updateQuantity(1)}>+</button
						>
					</div>
				</div>
			</div>
			<div class="flex mt-[20px]">
				<div class="w-1/4" />
				<div class="w-3/4 ">
					<button type="submit" class="btn bg-primary text-xl font-bold">Add to Cart</button>
				</div>
			</div>
		</div>
	</div>

	<div class="container">
		<hr class=" mb-[10px]" />
		<StoreDetail store={product.store} />
		<hr class=" mt-[10px]" />
	</div>

	<div class="container bg-gray-100">
		<ProductSpec specifications={product.description.specifications} />
	</div>
	<div class="container">
		<ProductDescription description={product.description.text} />
	</div>
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
