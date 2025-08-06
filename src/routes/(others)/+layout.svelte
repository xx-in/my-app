<script lang="ts">
	import HeaderMenu from '$lib/comps/HeaderMenu.svelte';
	let { children } = $props();
</script>

<main class="flex h-screen w-screen flex-col">
	<div class="flex-1 overflow-auto">
		{@render children()}
	</div>
</main>
