<section
	class="h-screen bg-gradient-to-b
		from-cream1 to-secondary"
>
	<div class="flex items-center grid grid-cols-2 gap-2">
		<div class="flex-col items-center justify-center">
			<p class="text-red-hat text-5xl text-textColorPrimary text-center">The Best Custom Product</p>
			<p class="text-red-hat text-3xl text-textColorPrimary text-center">The Best Custom Product</p>
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
	<div class="flex flex-row">
		<div class="category-card text-center mx-5">Music</div>
		<div class="category-card text-center mx-5">Sport</div>
	</div>

	<div class="container mx-auto w-full overflow-hidden relative">
		<div
			class="carousel-items flex items-center justify-center"
			style="width: fit-content; animation: carouselAnim 10s infinite alternate linear;"
		>
			<div
				class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg "
				style="width: 270px;"
			>
				<svg
					class="fill-current text-teal-400 hover:text-teal-500 cursor-pointer h-12 w-12 absolute top-0 right-0 mt-2 -mr-5"
					xmlns="http://www.w3.org/2000/svg"
					fill-rule="evenodd"
					clip-rule="evenodd"
					><path
						d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z"
					/></svg
				>
				<!-- <button class="absolute top-0 right-0 bg-teal-400 rounded-full px-1 py-0 font-bold text-lg">+</button> -->
				<p class="text-teal-400 font-bold text-xl mb-3">Sup3r-Us3r</p>
				<img
					class="h-16 w-16 rounded-full shadow-2xl"
					src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg"
					alt="Img"
				/>
				<p class="mt-3 text-gray-600 text-center">
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!"
				</p>
				<button
					class="mt-4 mb-2 bg-teal-400 rounded-full px-12 py-1 text-gray-100 font-semibold hover:bg-teal-300 focus:outline-none"
					>Button</button
				>
			</div>

			<div
				class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg"
				style="width: 270px;"
			>
				<svg
					class="fill-current text-teal-400 hover:text-teal-500 cursor-pointer h-12 w-12 absolute top-0 right-0 mt-2 -mr-5"
					xmlns="http://www.w3.org/2000/svg"
					fill-rule="evenodd"
					clip-rule="evenodd"
					><path
						d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z"
					/></svg
				>
				<!-- <button class="absolute top-0 right-0 bg-teal-400 rounded-full px-1 py-0 font-bold text-lg">+</button> -->
				<p class="text-teal-400 font-bold text-xl mb-3">Sup3r-Us3r</p>
				<img
					class="h-16 w-16 rounded-full shadow-2xl"
					src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg"
					alt="Img"
				/>
				<p class="mt-3 text-gray-600 text-center">
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!"
				</p>
				<button
					class="mt-4 mb-2 bg-teal-400 rounded-full px-12 py-1 text-gray-100 font-semibold hover:bg-teal-300 focus:outline-none"
					>Button</button
				>
			</div>
		</div>
	</div>
</section>
