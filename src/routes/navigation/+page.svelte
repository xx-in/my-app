<script lang="ts">
  import Blur from "$lib/comps/Blur.svelte";
  import Img from "$lib/comps/Img.svelte";
  import Main from "$lib/comps/Main.svelte";
  import SvgBing from "$lib/comps/Svg/SvgBing.svelte";
  import SvgGoogle from "$lib/comps/Svg/SvgGoogle.svelte";
  import { twMerge } from "tailwind-merge";
  import type { PageProps } from "./$types";
  import SvgBaidu from "$lib/comps/Svg/SvgBaidu.svelte";
  import SvgChatgpt from "$lib/comps/Svg/SvgChatgpt.svelte";
  // 对于页面级组件，因为不会存在其他参数
  // 因此可以直接设置为路由参数，非常不错的想法
  let { data }: PageProps = $props();
  let { linkList } = data;

  function enterFullscreen() {
    const el = document.documentElement; // 整个页面
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      el.requestFullscreen();
    }
  }

  const bgSrc =
    "https://cdn.photoroom.com/v2/image-cache?path=gs://background-7ef44.appspot.com/backgrounds_v3/black/47_-_black.jpg";

  const searchEngines = [
    {
      component: SvgGoogle,
      search: "https://www.google.com/search?q=",
    },
    {
      component: SvgBing,
      class: "py-1 pl-1",
      search: "https://www.bing.com/search?q=",
    },
    {
      component: SvgBaidu,
      search: "https://www.baidu.com/s?wd=",
    },
    {
      component: SvgChatgpt,
      search: "https://chatgpt.com?q=",
    },
  ];

  let searchContent = $state("");

  function handleSearch(engineIndex?: number) {
    // 空白内容不执行
    if (searchContent.trim() == "") {
      return;
    }
    const kw = encodeURIComponent(searchContent);
    // 以http开头的直接跳转网址
    if (searchContent.startsWith("http:") || searchContent.startsWith("https:")) {
      window.open(searchContent, kw);
      searchContent = "";
      return;
    }
    /**
     * 1. 没有engine默认就第一个
     * 2. 传了engine就用这个
     * 3. 历史点击过，还用上一次的
     */
    let searchEngine = searchEngines[0];
    if (engineIndex !== undefined) {
      searchEngine = searchEngines[engineIndex];
      localStorage.setItem("searchEngineIndex", String(engineIndex));
    } else {
      let preIndex = localStorage.getItem("searchEngineIndex");
      if (preIndex) {
        searchEngine = searchEngines[+preIndex];
      }
    }
    // 清空上次搜索内容
    searchContent = "";
    window.open(searchEngine.search + kw, kw);
  }

  const searchOnEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
</script>

<svelte:head>
  <title>个人网站-网址导航</title>
</svelte:head>

<Main>
  <Blur ondblclick={enterFullscreen} src={bgSrc}>
    <section class="flex h-full flex-col">
      <div class="flex-0 flex justify-center px-4 py-4 shadow">
        <div
          class="flex w-full items-center overflow-hidden rounded-2xl border border-stone-500 bg-transparent p-1 md:w-1/2"
        >
          <input
            type="text"
            placeholder="输入要搜索的内容"
            autofocus
            class="w-full select-none border-none bg-transparent pl-6 text-white placeholder-stone-400 outline-none"
            bind:value={searchContent}
            onkeydown={searchOnEnter}
          />

          {#each searchEngines as engine, index}
            <engine.component
              class={twMerge("mx-1 size-8 cursor-pointer", engine.class)}
              onclick={() => handleSearch(index)}
            />
          {/each}
        </div>
      </div>

      <div class="flex-1 snap-y overflow-y-auto">
        <div class="grid grid-cols-4 gap-10 px-4 py-8 md:grid-cols-8 md:p-8">
          {#each Object.entries(linkList) as [key, value]}
            <a
              href={value.link}
              class="flex snap-start scroll-mt-6 flex-col items-center justify-center gap-4"
              target="_blank"
            >
              <Img
                src={value.icon}
                class="size-14 select-none rounded-2xl bg-amber-50 md:size-16"
              />
              <div
                class="w-16 select-none overflow-hidden truncate text-center text-xs text-gray-200 md:w-full md:text-base"
                title={value.title}
              >
                {value.title}
              </div>
            </a>
          {/each}
        </div>
      </div>
    </section>
  </Blur>
</Main>
