<script lang="ts">
	import Markdown from '$lib/comps/Markdown/index.svelte';
	import TestAwait from './TestAwait.svelte';
	import raw from './raw.md?raw';
</script>

<svelte:head>
	<title>个人网站-测试页</title>
</svelte:head>
<div>
	<Markdown {raw}></Markdown>
</div>
