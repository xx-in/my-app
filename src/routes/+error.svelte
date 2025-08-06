<script lang="ts">
	import { page } from '$app/state';
	import './+error.css';
</script>

<svelte:head>
	<title>{page.status} - 页面未找到</title>
</svelte:head>

<div
	class="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-800 dark:invert"
>
	<div class="px-6 text-center">
		<h1 class="animate-bounce text-8xl font-bold text-red-500">{page.status}</h1>
		<h2 class="mt-4 text-2xl font-semibold">哎呀！页面走丢了</h2>
		<a
			href="/"
			class="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white shadow transition duration-300 hover:bg-blue-700"
		>
			返回首页
		</a>
	</div>
</div>
