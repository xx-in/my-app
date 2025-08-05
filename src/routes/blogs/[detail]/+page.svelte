<script lang="ts">
	import Markdown from '$lib/comps/Markdown/index.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	$effect(() => {
		console.log(data);
	});
</script>

<Markdown raw={data.detailContent}></Markdown>
