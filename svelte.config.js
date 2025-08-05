import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { backIn } from 'svelte/easing';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		})
	},
	compilerOptions: {
		experimental: {
			async: true
		},
		customElement: true,
		// disable all warnings coming from node_modules and all accessibility warnings
		warningFilter: (warning) =>
			!warning.filename?.includes('node_modules') && !warning.code.startsWith('a11y')
	}
};

export default config;
