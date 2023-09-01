<script lang="ts">
  import {AppShell, AppBar, LightSwitch} from "@skeletonlabs/skeleton";
  import {currentPage} from "$lib/assets/js/store";
  import Icon from "@iconify/svelte";
  import MainNav from "$lib/components/MainNav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  // The ordering of these imports is critical to your app working properly
  import "@skeletonlabs/skeleton/themes/theme-rocket.css";
  // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  // Most of your app wide CSS should be put in this file
  import "../../app.postcss";
  import {courses} from "$lib/stores";
  export let data;
  const transitionIn = {delay: 150, duration: 150};
  const transitionOut = {duration: 100};

  let navOpen = false;
  function handleNav() {
    navOpen = !navOpen;
  }

  /**
   * Updates the global store with the current path. (Used for highlighting
   * the current page in the nav, but could be useful for other purposes.)
   **/
  $: currentPage.set(data.path);

  /**
   * This pre-fetches all top-level routes on the site in the background for faster loading.
   * https://kit.svelte.dev/docs#modules-$app-navigation
   *
   * Any route added in src/lib/config.js will be prefetched automatically. You can add your
   * own prefetch() calls here, too.
   **/
  // onMount(() => {
  // 	navItems.forEach(item => prefetch(item.route))
  // })
</script>

<AppShell regionPage="scroll-smooth">
  <svelte:fragment slot="header">
    <AppBar>
      <svelte:fragment slot="lead">
        <a href="/" class="flex items-center gap-4 lg:gap-6">
          <img src="/images/sait-logo.png" alt="SAIT Logo" class="w-8 md:w-12" />
          <div>
            <span class="block">Web Developer Fast Track</span>
            <span class="hidden lg:block"> Fall 2023 </span>
          </div>
        </a>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <div class="flex justify-center items-center gap-4">
          <MainNav styles="gap-4 hidden lg:flex" />

          <div class="border-r-2 h-fit px-4 border-slate-400 flex gap-4 items-center">
            <LightSwitch rounded="rounded-xl" />
            <a href="https://github.com/sait-wbdv" target="_blank"
              ><Icon icon="fa6-brands:github" class="text-xl dark:text-white text-black" /></a
            >
          </div>
          <button on:click={handleNav} class="lg:hidden hover:opacity-75 transition duration-150 ease-linear">
            {#if navOpen === false}
              <Icon icon="fa6-solid:bars" />
            {:else}
              <Icon icon="fa6-solid:x" />
            {/if}
          </button>
        </div>
      </svelte:fragment>
      <!-- Add aria role to note mobile nav -->
      <svelte:fragment slot="headline"
        ><MainNav
          styles="items-center flex-col lg:hidden {navOpen ? 'flex' : 'hidden'}"
          ariaLabel="Mobile Navigation"
        /></svelte:fragment
      >
    </AppBar>
  </svelte:fragment>

  <svelte:fragment slot="sidebarLeft">
    <nav class="ml-4 mr-8 hidden md:block md:mr-20 lg:mr-8 mt-6 lg:mt-12 p-2 lg:p-4 rounded-md">
      <h3 class="h3 ml-2">Courses</h3>
      <ul class="list">
        {#each $courses as course}
          <li>
            <a
              href="/courses/{course.code}"
              target="_self"
              class="p-2 hover:bg-primary-800/20 block rounded-md transition duration-150 ease-linear"
              ><h4>{course.codeLabel}</h4>
              <p class="hidden xl:block w-48">{course.title}</p>
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </svelte:fragment>
  <slot />

  <svelte:fragment slot="pageFooter">
    <Footer />
  </svelte:fragment>
</AppShell>
