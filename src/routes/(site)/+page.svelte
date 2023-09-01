<script>
  import {siteTitle} from "$lib/config";
  import Schedule from "$lib/components/Schedule.svelte";
  import PageHeader from "$lib/components/PageHeader.svelte";
</script>

<svelte:head>
  <title>{siteTitle}</title>
</svelte:head>
<section class="max-w-4xl container mx-auto">
  <PageHeader
    title="Program Schedule"
    description="View the course content by week. Lesson content is published the evening before each day."
  />
  <Schedule />
</section>
