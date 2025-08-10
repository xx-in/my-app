<script lang="ts">
	import HeaderMenu from '$lib/comps/HeaderMenu.svelte';
	import Main from '$lib/comps/Main.svelte';
</script>

<svelte:head>
	<title>个人网站</title>
</svelte:head>
<Main>
	<HeaderMenu />
	<div class="flex-1 overflow-auto p-2">
		<div class="py-3">
			本网站仅用于记录个人的日常生活，以及提供一些个人要使用的服务，同时构建网站也能磨练自己掌握的技能。
		</div>
	</div>
</Main>
