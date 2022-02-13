<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';

	// const button = document.querySelector('#menu-button');
	// const menu = document.querySelector('#menu');

	// button.addEventListener('click', () => {
	// 	menu.classList.toggle('hidden');
	// });
</script>

<Navbar />
<div class="flex justify-center">
	<slot />
</div>
