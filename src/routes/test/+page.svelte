<script lang="ts">
	import { onMount } from 'svelte';
	import Test, { test } from './Test.svelte';
	import Test2 from './Test2.svelte';
	test();
	let list = $state([
		{ a: { b: { c: { d: 'value', e: '我是固定的值' } } } },
		{ a: { b: { c: { d: 'value', e: '我是固定的值' } } } }
	]);

	function handleClick(obj: (typeof list)[number]) {
		obj.a.b.c.d = Math.random().toString();
	}

	function appendOne() {
		list.push({ a: { b: { c: { d: 'value', e: '我是固定的值' } } } });
	}

	function deleteOne() {
		list.pop();
	}

	function spliceOne() {
		list.splice(1, 0, { a: { b: { c: { d: '我是新增的值 ', e: '我是新增的值' } } } });
	}

	let date = $state(new Date());
	onMount(() => {
		setInterval(() => (date = new Date()), 1000);
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div>test</div>
	{#each list as obj}
		<div>{obj.a.b.c.d}</div>
		<Test bind:value={obj.a.b.c.d} />
		<button onclick={() => handleClick(obj)}>修改值</button>
	{/each}
	<button onclick={appendOne}>增加一行</button>
	<button onclick={deleteOne}>移除一行</button>
	<button onclick={spliceOne}>插入一行</button>

	<div>date:{date}</div>
	<Test2 />
</section>

<style>
</style>
