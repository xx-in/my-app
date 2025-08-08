<script lang="ts">
	import HeaderMenu from '$lib/comps/HeaderMenu.svelte';
	import Main from '$lib/comps/Main.svelte';
</script>

<svelte:head>
	<title>个人网站-测试页</title>
</svelte:head>
<Main>
	<HeaderMenu />
	<div class="flex-1 overflow-auto">测试页</div>
</Main>
