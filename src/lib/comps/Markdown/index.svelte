<script lang="ts">
	import { Marked } from 'marked';
	import { markedHighlight } from 'marked-highlight';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/atom-one-dark-reasonable.css';
	import './index.css';
	import { nanoid } from 'nanoid';

	let { raw } = $props();

	const copySvg = `
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 512 512"
    class="hover:text-sky-500 size-4"
>
    <rect
        width="336"
        height="336"
        x="128"
        y="128"
        fill="none"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-width="32"
        rx="57"
        ry="57"
    />
    <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="m383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"
    />
</svg>`;

	const doneSvg = `
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
	class="size-4"
    >
    <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="2"
    >
        <path d="m9 10l3.258 2.444a1 1 0 0 0 1.353-.142L20 5" />
        <path d="M21 12a9 9 0 1 1-6.67-8.693" />
    </g>
</svg>
`;

	const codeMap = {} as Record<string, string>;
	function copyPlugin(code: string, lang: string) {
		const codeId = nanoid();
		codeMap.codeId = code;
		return `<div class="absolute left-0 top-0 flex justify-between h-8 bg-gray-700 w-full pl-5 pr-2 items-center text-gray-200">
		<span class="flex-1 font-semibold">${lang}</span><button class="flex items-center gap-1 cursor-pointer" data-id=${codeId}>${copySvg}</button></div>`;
	}

	const handleCopy = async (e: MouseEvent) => {
		const target = e.target as Element;
		const button = target?.closest('button[data-id]') as HTMLButtonElement;
		if (button) {
			const codeId = button.dataset.code!;
			const code = codeMap.codeId;
			await navigator.clipboard.writeText(code);
			button.innerHTML = `<span class="text-xs">已复制</span>${doneSvg}`;
			button.classList.add('text-green-500');
			setTimeout(() => {
				button.classList.remove('text-green-500');
				button.innerHTML = `${copySvg}`;
			}, 2000);
		}
	};

	const marked = new Marked(
		markedHighlight({
			emptyLangClass: 'hljs',
			langPrefix: 'hljs language-',
			highlight(code, lang, info) {
				const language = hljs.getLanguage(lang) ? lang : 'plaintext';
				const wrapper = `<div class="h-[50vh] overflow-auto pt-6">${copyPlugin(code, lang)}${hljs.highlight(code, { language }).value}</div>`;
				return wrapper;
			}
		})
	);

	const html = marked.parse(raw);
</script>

<section
	class="prose prose-pre:m-0 prose-h1:mt-4 prose-h2:my-4 prose-pre:p-0 prose-pre:relative prose-code:p-0 dark:prose-invert mx-auto"
	onclick={handleCopy}
>
	{@html html}
</section>
