<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	interface IProps {
		class?: string;
		src: string;
		children?: Snippet;
		ondblclick?: () => void;
	}

	let { ondblclick, src, children, class: className }: IProps = $props();
</script>

<section class={'relative size-full'} {ondblclick}>
	<!-- 背景图片层 -->
	<img {src} class={twMerge('absolute left-0 top-0 size-full ', className)} />
	<!-- 高斯模糊层 -->
	<div class="bg-black/10 absolute left-0 top-0 size-full backdrop-blur-sm"></div>
	<!-- 上层内容 -->
	<div class="absolute left-0 top-0 size-full bg-transparent">
		{@render children?.()}
	</div>
</section>
