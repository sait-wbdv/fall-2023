<script lang="ts">
  import {AppShell, AppBar} from "@skeletonlabs/skeleton";
  import {currentPage, isMenuOpen} from "$lib/assets/js/store";
  import MainNav from "$lib/components/MainNav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  // The ordering of these imports is critical to your app working properly
  import "@skeletonlabs/skeleton/themes/theme-rocket.css";
  // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  // Most of your app wide CSS should be put in this file
  import "../app.postcss";
  import {courses} from "$lib/stores";
  export let data;
  const transitionIn = {delay: 150, duration: 150};
  const transitionOut = {duration: 100};

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

<AppShell>
  <svelte:fragment slot="header">
    <AppBar>
      <svelte:fragment slot="lead">
        <a href="/" class="flex gap-4 lg:gap-6">
          <img src="/images/sait-logo.png" alt="SAIT Logo" class="w-8 md:w-12" />
          <div>
            <span class="block">Web Developer Fast Track</span>
            <span class="block"> Fall 2023 </span>
          </div>
        </a>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <MainNav styles="gap-4" />
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>

  <svelte:fragment slot="sidebarLeft">
    <nav class="ml-4 mr-8 hidden md:block md:mr-20 lg:mr-8 mt-6">
      <h3 class="h3">Courses</h3>
      <ul class="list">
        {#each $courses as course}
          <li>
            <a
              href="/courses/{course.code}"
              target="_self"
              class="p-2 hover:bg-primary-800/20 block rounded-md transition duration-150 ease-linear"
              ><h4 class="">{course.codeLabel}</h4>
              <p class="hidden xl:block">{course.title}</p>
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
