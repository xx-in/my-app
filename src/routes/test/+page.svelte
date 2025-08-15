<script lang="ts">
	import Blur from '$lib/comps/Blur.svelte';
	import Main from '$lib/comps/Main.svelte';
</script>

<svelte:head>
	<title>个人网站-测试页</title>
</svelte:head>
<Main>
	<div class="flex-1 overflow-auto">
		<Blur
			src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=80&q=80"
		>
			<div>测试页</div>
		</Blur>
	</div>
</Main>
