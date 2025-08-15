<script lang="ts">
	import Blur from '$lib/comps/Blur.svelte';
	import Img from '$lib/comps/Img.svelte';
	import Main from '$lib/comps/Main.svelte';
	import type { PageProps } from './$types';
	// 对于页面级组件，因为不会存在其他参数
	// 因此可以直接设置为路由参数，非常不错的想法
	let { data }: PageProps = $props();
	let { linkList } = data;

	function enterFullscreen() {
		const el = document.documentElement; // 整个页面
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			el.requestFullscreen();
		}
	}

	const bgSrc =
		'https://cdn.photoroom.com/v2/image-cache?path=gs://background-7ef44.appspot.com/backgrounds_v3/black/47_-_black.jpg';
</script>

<svelte:head>
	<title>个人网站-网址导航</title>
</svelte:head>

<Main>
	<Blur ondblclick={enterFullscreen} src={bgSrc}>
		<section class="flex flex-col h-full">
		<!-- <div class="flex-0 p-2 border">
			<input type="text" placeholder="搜索栏">
		</div> -->
		<div class="flex-1 snap-y overflow-y-auto">
			<div class="grid grid-cols-4 gap-10 px-4 py-8 md:grid-cols-8 md:p-8">
				{#each Object.entries(linkList) as [key, value]}
					<a
						href={value.link}
						class="flex snap-start scroll-mt-6 flex-col items-center justify-center gap-4"
						target="_blank"
					>
						<Img src={value.icon} class="size-14 select-none rounded-2xl bg-amber-50 md:size-16" />
						<div
							class="w-16 select-none overflow-hidden truncate text-center text-xs text-gray-200 md:w-full md:text-base"
							title={value.title}
						>
							{value.title}
						</div>
					</a>
				{/each}
			</div>
		</div>
		</section>
	</Blur>
</Main>
