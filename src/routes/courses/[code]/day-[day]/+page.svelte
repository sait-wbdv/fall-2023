<script>
  import {TableOfContents} from "@skeletonlabs/skeleton";
  import {page} from "$app/stores";
  import {lessonsById} from "$lib/stores";
  import dayjs from "dayjs";
  export let data;

  const lesson = $lessonsById[`${$page.params.code}/${$page.params.day}`];
</script>

<nav class="page-nav my-6 container mx-auto">
  <ul class="flex justify-between">
    {#if lesson.prev}
      <li><a href="/courses/{lesson.prev}" class="btn variant-filled rounded-md">Prev</a></li>
    {:else}
      <li><a href="/courses/{lesson.prev}" class="btn variant-outline rounded-md">Prev</a></li>
    {/if}
    <li>
      <time datetime={lesson.date}><strong>{dayjs(lesson.date).format("dddd, MMM D")}</strong></time>
    </li>
    {#if lesson.next}
      <li><a href="/courses/{lesson.prev}" class="btn variant-filled rounded-md">Next</a></li>
    {:else}
      <li><span class="btn varient-outline rounded-md">Next</span></li>
    {/if}
  </ul>
</nav>

<p>{lesson.codeLabel} - Day {lesson.day}</p>
{#if lesson.status === "draft"}
  <h1>To be Announced</h1>
  <p>This lesson has not been released.</p>
{:else}
  <header class="my-4 lg:my-6">
    <h1 class="h1 mb-2">{lesson.title}</h1>
    <p>{lesson.excerpt}</p>
  </header>
  <div class="flex justify-between">
    <article class="mx-auto container">
      {@html data.lessonContent}
    </article>
    <TableOfContents allowedHeadings="h2" rounded="rounded-md" active="bg-primary-800/20" class="hidden lg:block" />
  </div>
{/if}
