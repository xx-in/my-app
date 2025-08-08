<script lang="ts">
	import HeaderMenu from '$lib/comps/HeaderMenu.svelte';
	import Main from '$lib/comps/Main.svelte';
	import Prose from '$lib/comps/Prose.svelte';

	const blogList = [
		{
			name: '开发经验',

			desc: '人生在世数十载，只有学习他人经验武装自己，才能站在巨人的肩膀上。',
			time: '2025-07-18'
		},
		{
			name: '文件共享服务器',
			desc: '该文件共享服务器是用于在局域网内共享文件。',
			time: '2025-07-20'
		},
		{
			name: 'git使用指南',
			desc: '一些关于git的常见命令。',
			time: '2025-07-30'
		},
		{
			name: '发布订阅',
			desc: '关于发布订阅的简单实现。',
			time: '2025-08-02'
		},
		{
			name: 'sveltekit',
			desc: '关于svelte和sveltekit常见问题的总结。',
			time: '2025-08-05'
		},
		{
			name: '框架对比',
			desc: '框架对比',
			time: '2025-08-08'
		}
	];
</script>

<svelte:head>
	<title>个人网站-博客列表</title>
</svelte:head>

<Main>
	<HeaderMenu />
	<div class="flex-1 overflow-auto">
		<Prose>
			<h1>博客列表</h1>
			{#each blogList as blog, index}
				<div class="my-2 flex w-full flex-col justify-between gap-2 p-2">
					<a href={`/blogs/${blog.name}`} class=" ">
						<span class="">
							{index + 1}. {blog.name}
						</span>
					</a>

					<span>
						{blog.desc}
					</span>
					<span>
						{blog.time}
					</span>
				</div>
			{/each}
		</Prose>
	</div>
</Main>
