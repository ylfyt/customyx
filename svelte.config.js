import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: static_adapter(),
		paths: {
			base: '/hmelse',
			assets: 'hmelse'
		},
		target: '#svelte'
	}
};

export default config;
