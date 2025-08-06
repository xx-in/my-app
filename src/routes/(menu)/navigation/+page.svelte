<script lang="ts">
	import type { PageProps } from './$types';
	// 对于页面级组件，因为不会存在其他参数
	// 因此可以直接设置为路由参数，非常不错的想法
	let { data }: PageProps = $props();
	let { linkList } = data;
</script>

<svelte:head>
	<title>个人网站-网址导航</title>
</svelte:head>

<section>
	<div class="m-auto flex w-2/3 flex-wrap gap-8 p-4">
		{#each Object.entries(linkList) as [key, value]}
			<a href={value.link} class="flex items-center justify-center gap-4" target="_blank">
				<img src={value.icon} class="size-6" />
				<span>{value.title}</span>
			</a>
		{/each}
	</div>
</section>
