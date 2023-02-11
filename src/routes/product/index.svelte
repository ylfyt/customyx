<script>
	import CategCard from '../../components/CategCard.svelte';
	import ProductCard from '../../components/ProductCard.svelte';
	import db from '../../utils/db';
  import { base } from '$app/paths'

	const products = db.findAllProduct();
</script>

<div class="flex justify-center">
	<div class="container ">
		<div class="search-filter flex justify-center flex-row h-11">
			<a href="#">
				<img src={`${base}/filter.png`} alt="filter" class="h-11 " />
			</a>

			<form action="" class="ml-5 relative ">
				<input
					type="text"
					name=""
					id=""
					style="width: 60vw;"
					class="shadow-md border-2 rounded-2xl p-2 relative"
					placeholder="   Search Desired Costume Product..."
				/>
				<a href="#" type="submit" class="relative right-12 top-1"
					><img src={`${base}/search.png`} class="h-6 opacity-50" alt="" /></a
				>
			</form>
		</div>

		<div class="banner mx-auto flex flex-row bg-blue-500 mt-6 rounded-xl w-11/12 h-60">
			<img src={`${base}/img/banner.jpg`} class="w-full" alt="" />
		</div>

		<div class="category w-11/12 mx-auto mt-5">
			<div class="categ flex flex-row justify-between">
				<h2 class="text-3xl">Category</h2>
				<a href="#" class="text-lg mt-2 mr-4 opacity-80">See More</a>
			</div>
			<div class="categ-cards flex flex-row justify-around mt-3">
				<CategCard />
				<CategCard />
				<CategCard />
				<CategCard />
				<CategCard />
			</div>
		</div>

		<div
			class="product-list flex flex-row flex-wrap content-start items-stretch justify-around w-11/12 mx-auto mt-5"
		>
			{#each products as product}
				<ProductCard {product} />
			{/each}
		</div>
	</div>
</div>
