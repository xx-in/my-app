<script lang="ts">
	import { Marked } from 'marked';
	import { markedHighlight } from 'marked-highlight';
	import hljs from 'highlight.js';
	import lightTheme from 'highlight.js/styles/atom-one-light.css?raw';
	import darkTheme from 'highlight.js/styles/atom-one-dark-reasonable.css?raw';
	import './CopyPlugin.svelte';
	import { nanoid } from 'nanoid';
	import { isDark } from '$lib/utils/theme';
	import { setStyle } from '$lib/utils/style';

	const styleId = nanoid();
	isDark.subscribe((isDark) => {
		const styleContent = isDark ? darkTheme : lightTheme;
		setStyle(styleContent, styleId);
	});

	let { raw } = $props();
	const marked = new Marked(
		markedHighlight({
			emptyLangClass: 'hljs',
			langPrefix: 'hljs language-',
			highlight(code, lang, info) {
				const language = hljs.getLanguage(lang) ? lang : 'plaintext';
				let wrapper = `<div class="h-[50vh] overflow-auto pt-6">`;
				wrapper += `<copy-plugin lang="${lang}" code="${encodeURIComponent(code)}"></copy-plugin>`;
				wrapper += hljs.highlight(code, { language }).value;
				wrapper += `</div>`;
				return wrapper;
			}
		})
	);

	const html = marked.parse(raw);
</script>

<section
	class="prose prose-pre:m-0 prose-h1:mt-4 prose-h2:my-4 prose-pre:p-0 prose-pre:relative prose-code:p-0 dark:prose-invert mx-auto max-w-[90vw] md:max-w-[70vw]"
>
	{@html html}
</section>

<style>
	:global pre code.hljs {
		padding: 1em 1px 0 1em !important;
	}
</style>
