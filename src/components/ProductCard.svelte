<script>
  import { base } from '$app/paths'
	export let product;
</script>

<a
	href={`${base}/product/${product.slug}`}
	style="width:200px;height:400px;"
	class="product-card mr-3 mb-7 group hover:shadow-2xl hover:cursor-pointer rounded-3xl bg-secondary shadow-xl overflow-hidden"
>
	<img src={`${base}/${product.images[0].url}`} alt="" class="w-full bg-white h-4/6" />
	<div class="product w-11/12 mx-auto">
		<h4 class="name">{product.name}</h4>
		<p class="price"><b>Rp{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</b></p>
		<div class="loc flex">
			<img src={`${base}/pin.png`} alt="" class=" mr-1 mt-1 mb-1" />
			<p class="location opacity-70">{product.address.city}</p>
		</div>
		<div class="rasold flex">
			<img src={`${base}/star.png`} alt="" class="mr-1 my-1" />
			<p class="rating mr-1">4.8</p>
			<p class="mr-1">|</p>
			<p class="sold">{product.sold}</p>
		</div>
	</div>
</a>
