<script>
  import {siteTitle} from "$lib/config";
  import Schedule from "$lib/components/Schedule.svelte";
</script>

<svelte:head>
  <title>{siteTitle}</title>
</svelte:head>
<section>
  <header class="ml-3 mt-4 lg:mt-6 mb-3">
    <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-error-300 to-primary-400">Program Schedule</h1>
  </header>
  <Schedule />
</section>
