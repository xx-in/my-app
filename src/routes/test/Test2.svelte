<script>
	let count = $state(0);
	// 因为编译，所以能拿到函数体直接进行计算
	let doubled = $derived.by(() => count * 2);
</script>

<button onclick={() => count++}>
	{doubled}
</button>

<button onclick={() => doubled++}> setDoubled </button>

<p>{count} doubled is {doubled}</p>
