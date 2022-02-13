<script context="module">
	export async function load(pages) {
		console.log(pages.params.slug);

		return {
			props: {
				slug: pages.params.slug
			}
		};
	}
</script>

<script>
	export let slug;

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
	console.log(product);
</script>

<div class="container bg-red-200">
	<div class="flex">
		<div class="w-2/5">
			<img src="https://placeimg.com/640/480/any" alt="" />
			<div class="flex gap-3 mt-[20px]">
				<img class="w-[100px] h-[100px]" src="https://placeimg.com/640/480/any" alt="" />
				<img class="w-[100px] h-[100px]" src="https://placeimg.com/640/480/any" alt="" />
				<img class="w-[100px] h-[100px]" src="https://placeimg.com/640/480/any" alt="" />
			</div>
		</div>
		<div class="ml-[20px] bg-green-200 w-3/5">
			<h1 class="text-3xl font-semibold">Keyboard Custom Baru</h1>
		</div>
	</div>
</div>
