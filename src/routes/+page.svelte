<script>
  import {siteTitle} from "$lib/config";
  import Schedule from "$lib/components/Schedule.svelte";
</script>

<svelte:head>
  <title>{siteTitle}</title>
</svelte:head>
<section class="schedule">
  <h1>Program Schedule</h1>
  <Schedule />
</section>
