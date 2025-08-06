<script lang="ts">
	/**
	 * 等待时间后执行
	 * @param time
	 */
	function waitTime(time: number) {
		return new Promise((resolve) => {
			setTimeout(resolve, time);
		});
	}
	let a = $state(1);
	let b = $state(2);

	async function add(a: number, b: number) {
		await waitTime(1000);
		return a + b;
	}

	let sum = $derived(add(a, b));
</script>

<svelte:boundary>
	<input type="number" bind:value={a} />
	<input type="number" bind:value={b} />

	<p>
		{a} + {b} =
		<span>{await sum}</span>
	</p>

	{#snippet pending()}
		<p>加载中...</p>
	{/snippet}
</svelte:boundary>
