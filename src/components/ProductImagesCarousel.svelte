<script>
	const imgs = [
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
	];

	let idx = 0;
	const num = imgs.length;

	const updateSlide = (val) => {
		idx += val;
		if (idx < 0) idx = num - 1;

		if (idx >= num) idx = 0;
	};
</script>

<div>
	<div class="slideshow-container">
		{#each imgs as img, i}
			<div class={i === idx ? 'mySlides fade block' : 'mySlides fade hidden'}>
				<div class="numbertext text-textColorPrimary">{i + 1} / {num}</div>
				<img src={img.url} style="width:100%" alt="" />
				<div class="text text-textColorPrimary">{img.caption}</div>
			</div>
		{/each}

		<!-- Next and previous buttons -->
		<button class="prev" on:click={() => updateSlide(-1)}>&#10094;</button>
		<button class="next" on:click={() => updateSlide(1)}>&#10095;</button>
	</div>
	<br />
	<div style="text-align:center">
		{#each imgs as _, i}
			<span class={i === idx ? 'dot active' : 'dot'} on:click={() => (idx = i)} />
		{/each}
	</div>
</div>

<style>
	/* Slideshow container */
	.slideshow-container {
		max-width: 1000px;
		position: relative;
		margin: auto;
	}

	/* Next & previous buttons */
	.prev,
	.next {
		cursor: pointer;
		position: absolute;
		top: 50%;
		width: auto;
		margin-top: -22px;
		padding: 16px;
		color: white;
		font-weight: bold;
		font-size: 18px;
		transition: 0.6s ease;
		border-radius: 0 3px 3px 0;
		user-select: none;
	}

	/* Position the "next button" to the right */
	.next {
		right: 0;
		border-radius: 3px 0 0 3px;
	}

	/* On hover, add a black background color with a little bit see-through */
	.prev:hover,
	.next:hover {
		background-color: rgba(0, 0, 0, 0.8);
	}

	/* Caption text */
	.text {
		font-size: 15px;
		padding: 8px 12px;
		position: absolute;
		bottom: 8px;
		width: 100%;
		text-align: center;
	}

	/* Number text (1/3 etc) */
	.numbertext {
		font-size: 12px;
		padding: 8px 12px;
		position: absolute;
		top: 0;
	}

	/* The dots/bullets/indicators */
	.dot {
		cursor: pointer;
		height: 15px;
		width: 15px;
		margin: 0 2px;
		background-color: #bbb;
		border-radius: 50%;
		display: inline-block;
		transition: background-color 0.6s ease;
	}

	.active,
	.dot:hover {
		background-color: #717171;
	}

	/* Fading animation */
	.fade {
		-webkit-animation-name: fade;
		-webkit-animation-duration: 1.5s;
		animation-name: fade;
		animation-duration: 1.5s;
	}

	@-webkit-keyframes fade {
		from {
			opacity: 0.4;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes fade {
		from {
			opacity: 0.4;
		}
		to {
			opacity: 1;
		}
	}
</style>
