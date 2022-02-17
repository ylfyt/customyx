<script context="module">
	import db from '../../utils/db';

	export async function load(pages) {
		const slug = pages.params.slug;
		const product = db.findProductBySlug(slug);
		return {
			props: {
				product: product
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

	export let product;
	let quantity = 1;
	let price = 0;
	if (product !== null) {
		price == product.price;
	}
	let choice = [];
	if (product !== null) {
		if (typeof product.type !== 'undefined') {
			product.type.variants.forEach((element) => {
				choice.push('');
			});
		}
	}

	const updateChoice = (idx, co) => {
		choice[idx] = co;
	};

	$: choice && updatePrice();

	const updatePrice = () => {
		let temp = 0;
		if (product !== null) {
			temp = product.price;
			if (product.type) {
				product.type.priceMapping.forEach((el) => {
					for (let i = 0; i < el.choice.length; i++) {
						if (el.choice[i] === 'any') {
							if (choice[i] !== '') continue;
						}
						if (choice[i] !== el.choice[i]) {
							return;
						}
					}
					temp = el.price;
				});
			}
		}

		price = temp;
	};

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

{#if product !== null}
	<div class="w-full flex items-center flex-col gap-[20px]">
		<div class="container flex">
			<div class="w-2/5">
				<ProductImagesCarousel images={product.images} />
			</div>
			<div class="ml-[20px] w-3/5">
				<h1 class="mb-[5px] text-2xl font-bold">{product.name}</h1>
				<div class="mb-[5px] flex items-center text-sm font-medium text-primary">
					<p class="mr-1 ">{product.rating}</p>
					<Icon class="mr-1 text-yellow-400" icon={faStar} />
					<p>
						({product.numRating > 1100
							? `${Math.round((product.numRating / 1000) * 100) / 100}k`
							: product.numRating} ratings)
					</p>
					<p class="mr-3 ml-2 text-textColorPrimary font-semibold">|</p>
					<p>
						{product.sold > 1100
							? `${Math.round((product.sold / 1000) * 100) / 100}k`
							: product.sold}
						Sold
					</p>
				</div>

				<div>
					<div class="flex mt-[20px]">
						<div class="w-1/4">Shipping</div>
						<div class="w-3/4 flex items-start ">
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
					{#if product.type}
						{#each product.type.variants as variant, i}
							<VariantField {variant} {updateChoice} idx={i} />
						{/each}
					{/if}
				</div>
				<!-- Quantity &  Add To Cart-->
				<div class="flex mt-[20px]">
					<div class="w-1/4">Quantity</div>
					<div class="w-3/4 ">
						<div class="flex items-center gap-2">
							<button
								class="btn text-xl font-bold border-[1px] w-[50px]"
								on:click={() => updateQuantity(-1)}>-</button
							>
							<input
								type="number"
								class="bg-secondary px-2 py-3 w-[100px] shadow-sm rounded-md text-center text-xl font-bold"
								bind:value={quantity}
								min="1"
								on:change={updateTest}
							/>

							<button
								class="btn text-xl font-bold border-[1px] w-[50px]"
								on:click={() => updateQuantity(1)}>+</button
							>
						</div>
					</div>
				</div>
				<div class="flex mt-[20px] bg-secondary py-[10px]">
					<div class="w-1/4 " />
					<div class="w-3/4 flex items-center">
						<button type="submit" class="btn bg-primary text-base font-medium">Add to Cart</button>
						<div class=" text-3xl font-bold ml-[30px]">
							Rp{(price * quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<hr class=" mb-[10px]" />
			<StoreDetail store={product.store} />
			<hr class=" mt-[10px]" />
		</div>

		<div class="container bg-secondary">
			<ProductSpec specifications={product.description.specifications} />
		</div>
		<div class="container">
			<ProductDescription description={product.description.text} />
		</div>
	</div>
{/if}

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
