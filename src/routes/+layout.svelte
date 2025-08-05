<script lang="ts">
	import './+layout.css';
	let { children } = $props();
</script>

<main class="h-screen w-screen">
	<my-comp></my-comp>
	{@render children()}
</main>
