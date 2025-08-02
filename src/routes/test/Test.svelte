<script module>
	export function test() {
		console.log('test');
	}
</script>

<script lang="ts">
	let { value = $bindable('aaa'), ...props } = $props();
</script>

<div>
	<input bind:value />
</div>
