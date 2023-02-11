<script>
  import { base } from '$app/paths'
</script>

<section class="text-gray-700 body-font">
	<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
		<div
			class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
		>
			<p class="mb-8 leading-relaxed">
				At the moment, custom stuffs is seldomly preferrable and it don't have their own markets.
				Besides, custom stuffs or also known as Do It Yourself (DIY) stuffs have decent quality with
				lower price than "branded products" between society.
				<br />
				<br />
				Customyx presence become a market portal for DIY products transactions. Customers can enjoy convenience
				approach to get their own desired custom products.
			</p>
		</div>
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<img class="object-cover object-center rounded" alt="hero" src={`${base}/customyx.png`} />
		</div>
	</div>
</section>

<div class="flex flex-col text-center w-full my-20">
	<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
</div>
<div class="flex justify-center">
	<div class=" container flex flex-wrap -m-2">
		<div class="p-2 lg:w-1/3 md:w-1/2 w-full">
			<div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
				<img
					alt="team"
					class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
					src={`${base}/arvin.jpg`}
				/>
				<div class="flex-grow">
					<h2 class="text-gray-900 title-font font-medium">Almeiza Arvin Muzaki</h2>
					<p class="text-gray-500">Informatics Student at Institut Teknologi Bandung (2019)</p>
				</div>
			</div>
		</div>
		<div class="p-2 lg:w-1/3 md:w-1/2 w-full">
			<div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
				<img
					alt="team"
					class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
					src={`${base}/aria.jpg`}
				/>
				<div class="flex-grow">
					<h2 class="text-gray-900 title-font font-medium">Aria Bachrul Ulum Berlian</h2>
					<p class="text-gray-500">Informatics Student at Institut Teknologi Bandung (2019)</p>
				</div>
			</div>
		</div>
		<div class="p-2 lg:w-1/3 md:w-1/2 w-full">
			<div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
				<img
					alt="team"
					class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
					src={`${base}/yudi.jpg`}
				/>
				<div class="flex-grow">
					<h2 class="text-gray-900 title-font font-medium">Yudi Alfayat</h2>
					<p class="text-gray-500">Informatics Student at Institut Teknologi Bandung (2019)</p>
				</div>
			</div>
		</div>
	</div>
</div>
