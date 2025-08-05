<script lang="ts">
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
		}
	];
</script>

<svelte:head>
	<title>个人网站-博客</title>
</svelte:head>
<section class="prose m-auto max-w-[70vw]">
	<h1 class="m-auto p-2 text-center text-2xl">博客列表</h1>
	{#each blogList as blog}
		<div class="my-2 flex w-full flex-col justify-between gap-2 p-2">
			<a href={`/blogs/${blog.name}`} class=" ">
				<span class="">
					{blog.name}
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
</section>
