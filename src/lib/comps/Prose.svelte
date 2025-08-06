<script lang="ts">
	let { children } = $props();
</script>

<section
	class="prose prose-pre:m-0 prose-h1:mt-4 prose-h2:my-4 prose-pre:p-0 prose-pre:relative prose-code:p-0 dark:prose-invert mx-auto max-w-[90vw] pb-[50vh] md:max-w-[60vw]"
>
	{@render children()}
</section>

<style>
	:global pre code.hljs {
		padding: 1em 1px 0 1em !important;
	}
</style>
