<script>
	let defaultTransform = 0;
	let slider;

	function goNext() {
		defaultTransform = defaultTransform - 398;
		if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
		slider.style.transform = 'translateX(' + defaultTransform + 'px)';
	}
	function goPrev() {
		if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
		else defaultTransform = defaultTransform + 398;
		slider.style.transform = 'translateX(' + defaultTransform + 'px)';
	}
</script>

<section
	class="h-screen bg-gradient-to-b
		from-cream1 to-secondary"
>
	<div class="flex items-center grid grid-cols-2 gap-2">
		<div class="flex-col items-center justify-center">
			<p class="text-red-hat text-5xl text-textColorPrimary text-center my-5">
				The Best Custom Product
			</p>
			<p class="text-red-hat text-xl text-textColorPrimary text-center my-5">
				Begin exploration, find the best Do It Yourself (DIY) Products
			</p>
			<div class="text-red-hat text-textColorPrimary flex items-center justify-center">
				<div class="border rounded overflow-hidden flex">
					<input type="text" class="px-4 py-2" placeholder="Search..." />
					<button class="flex items-center justify-center px-4 border-l">
						<svg
							class="h-4 w-4 text-grey-dark"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							><path
								d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
							/></svg
						>
					</button>
				</div>
			</div>
		</div>
		<div>
			<img src="city.png" class="land-logo mx-auto mt-5" />
		</div>
	</div>
</section>

<section class="bg-secondary h-screen">
	<p class="bg-secondary text-red-hat text-5xl text-textColorPrimary text-center mt-0">
		Need Insights?
	</p>
	<div class="flex items-center justify-center w-full h-3/4 py-24 sm:py-8 px-5">
		<div class="w-full relative flex items-center justify-center">
			<button aria-label="slide backward" class="prev" on:click={goPrev}> &#10094; </button>
			<div class="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
				<div
					bind:this={slider}
					class="flex items-center justify-start transition ease-out duration-700"
				>
					<div class="bg-white rounded-lg category-card shadow-lg flex-shrink-0 mx-5">
						<img src="electronics.png" alt="Sea" class="rounded-t-lg" />

						<div class="p-6">
							<h2 class="mb-2 text-md text-center">Electronics</h2>
						</div>
					</div>

					<div class="bg-white rounded-lg category-card shadow-lg flex-shrink-0 mx-5">
						<img src="electronics.png" alt="Sea" class="rounded-t-lg" />

						<div class="p-6">
							<h2 class="mb-2 text-md text-center">Households</h2>
						</div>
					</div>
					<div class="bg-white rounded-lg category-card shadow-lg flex-shrink-0 mx-5">
						<img src="gifts.png" alt="Sea" class="rounded-t-lg" />

						<div class="p-6">
							<h2 class="mb-2 text-md text-center">Crafts and Gifts</h2>
						</div>
					</div>
					<div class="bg-white rounded-lg category-card shadow-lg flex-shrink-0 mx-5">
						<img src="gifts.png" alt="Sea" class="rounded-t-lg" />

						<div class="p-6">
							<h2 class="mb-2 text-md text-center">Musics</h2>
						</div>
					</div>
					<div class="bg-white rounded-lg category-card shadow-lg flex-shrink-0 mx-5">
						<img src="gifts.png" alt="Sea" class="rounded-t-lg" />

						<div class="p-6">
							<h2 class="mb-2 text-md text-center">Sports</h2>
						</div>
					</div>
					<div class="bg-white rounded-lg category-card shadow-lg flex-shrink-0 mx-5">
						<img src="gifts.png" alt="Sea" class="rounded-t-lg" />

						<div class="p-6">
							<h2 class="mb-2 text-md text-center">Private Needs</h2>
						</div>
					</div>
					<div class="bg-white rounded-lg category-card shadow-lg flex-shrink-0 mx-5">
						<img src="gifts.png" alt="Sea" class="rounded-t-lg" />

						<div class="p-6">
							<h2 class="mb-2 text-md text-center">Kids</h2>
						</div>
					</div>
					<div class="bg-white rounded-lg category-card shadow-lg flex-shrink-0 mx-5">
						<img src="gifts.png" alt="Sea" class="rounded-t-lg" />

						<div class="p-6">
							<h2 class="mb-2 text-md text-center">Tools and Machines</h2>
						</div>
					</div>
				</div>
				<button aria-label="slide forward" class="next " on:click={goNext}> &#10095; </button>
			</div>
		</div>
	</div>
</section>

<section class="container mx-auto mt-20 px-6 py-10">
	<h2 class="text-4xl font-bold text-red-hat text-center text-gray-800 mt-5 mb-0">Why CUSTOMYX?</h2>
	<div class="flex items-center flex-wrap mb-10">
		<div class="w-full md:w-1/2 px-4">
			<h4 class="text-3xl text-gray-800 font-bold mb-3">Flexible</h4>
			<p class="text-gray-600 mb-8">
				Every Do It Yourself products comes with diverse customization, making it very easy to build
				your own desired products.
			</p>
		</div>
		<div class="w-full md:w-1/2 px-4">
			<img
				src="https://cdn.dribbble.com/users/2487395/screenshots/6311129/responsivedesign_2x.png"
				alt="responsive"
			/>
		</div>
	</div>
	<div class="flex items-center flex-wrap mt-0 mb-20">
		<div class="w-full md:w-1/2 px-4">
			<img
				src="https://icons8.com/wp-content/uploads/2020/02/tips-on-mobile-UI-design.png"
				alt="component-friendly"
			/>
		</div>
		<div class="w-full md:w-1/2 px-4">
			<h4 class="text-3xl text-gray-800 font-bold mb-3">Affordable</h4>
			<p class="text-gray-600 mb-8">
				By collaborate with local business owners, we deliver the best DIY Product with minimum
				cost.
			</p>
		</div>
	</div>
	<div class="flex items-center flex-wrap mb-20">
		<div class="w-full md:w-1/2 px-4">
			<h4 class="text-3xl text-gray-800 font-bold mb-3">Controllable</h4>
			<p class="text-gray-600 mb-8">Step by step, supervise your product development stage</p>
		</div>
		<div class="w-full md:w-1/2 px-4">
			<img
				src="https://statuscast.com/wp-content/uploads/2018/12/untitled-1@3x.png"
				alt="customizable"
			/>
		</div>
	</div>
</section>

<footer class="bg-gray-100">
	<div class="container mx-auto px-6 pt-10 pb-6">
		<div class="flex flex-wrap">
			<div class="w-full md:w-1/4 text-center md:text-left">
				<h5 class="uppercase mb-6 font-bold">Links</h5>
				<ul class="mb-4">
					<li class="mt-2">
						<a href="#" class="hover:underline text-gray-600 hover:text-orange-500">FAQ</a>
					</li>
					<li class="mt-2">
						<a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Help</a>
					</li>
					<li class="mt-2">
						<a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Support</a>
					</li>
				</ul>
			</div>
			<div class="w-full md:w-1/4 text-center md:text-left">
				<h5 class="uppercase mb-6 font-bold">Legal</h5>
				<ul class="mb-4">
					<li class="mt-2">
						<a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Terms</a>
					</li>
					<li class="mt-2">
						<a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Privacy</a>
					</li>
				</ul>
			</div>
			<div class="w-full md:w-1/4 text-center md:text-left">
				<h5 class="uppercase mb-6 font-bold">Social</h5>
				<ul class="mb-4">
					<li class="mt-2">
						<a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Facebook</a>
					</li>
					<li class="mt-2">
						<a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Linkedin</a>
					</li>
					<li class="mt-2">
						<a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Twitter</a>
					</li>
				</ul>
			</div>
			<div class="w-full md:w-1/4 text-center md:text-left">
				<h5 class="uppercase mb-6 font-bold">Company</h5>
				<ul class="mb-4">
					<li class="mt-2">
						<a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Official Blog</a
						>
					</li>
					<li class="mt-2">
						<a href="#" class="hover:underline text-gray-600 hover:text-orange-500">About Us</a>
					</li>
					<li class="mt-2">
						<a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>
