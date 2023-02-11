<script>
	import { base } from '$app/paths';
</script>

<header class="flex justify-center sticky top-0 z-50 bg-cream1">
	<nav class="flex flex-wrap items-center justify-between w-4/5 py-[10px] text-lg text-gray-700  ">
		<div class="">
			<a href={`${base}/`}>
				<img class="nav-logo ml-5" src={`${base}/logolands.png`} alt="" />
			</a>
		</div>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="menu-button"
			class="h-6 w-6 cursor-pointer md:hidden block"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>

		<div class="flex" id="menu">
			<ul
				class="
			pt-4
			text-base text-gray-700
			md:flex
			justify-center 
			md:pt-0"
			>
				<li>
					<a
						class="md:p-4 py-2 block hover:text-textColorPrimary-400 text-red-hat"
						href={`${base}/dashboard`}>Dashboard</a
					>
				</li>
				<li>
					<a class="md:p-4 py-2 block hover:text-textColorPrimary-400 text-red-hat" href={`${base}/product`}
						>Product</a
					>
				</li>
				<li>
					<a class="md:p-4 py-2 block hover:text-textColorPrimary-400 text-red-hat" href={`${base}/about`}
						>About</a
					>
				</li>
			</ul>
		</div>
	</nav>
</header>
