<script lang="ts">
	import Markdown from '$lib/comps/Markdown/index.svelte';
	import TestAwait from './TestAwait.svelte';
	import raw from './raw.md?raw';
</script>

<div>
	<Markdown {raw}></Markdown>
</div>
