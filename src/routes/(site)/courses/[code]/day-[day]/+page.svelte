<script>
  import {TableOfContents} from "@skeletonlabs/skeleton";
  import {page} from "$app/stores";
  import {lessonsById} from "$lib/stores";
  import dayjs from "dayjs";
  export let data;

  const lesson = $lessonsById[`${$page.params.code}/${$page.params.day}`];
</script>

<nav class=" page-nav my-6 container lg:mx-auto">
  <ul class="flex justify-around lg:justify-between list-none">
    {#if lesson.prev}
      <li>
        <a href="/courses/{lesson.prev}" class="btn variant-filled rounded-md no-underline" target="_self">Prev</a>
      </li>
    {:else}
      <li><span class="btn varient-outline rounded-md">Prev</span></li>
    {/if}
    <li class="text-center">
      <time datetime={lesson.date} class="text-3xl"><strong>{dayjs(lesson.date).format("dddd, MMM D")}</strong></time>
      <p>{lesson.codeLabel} - Day {lesson.day}</p>
    </li>
    {#if lesson.next}
      <li>
        <a href="/courses/{lesson.next}" class="btn variant-filled rounded-md no-underline" target="_self">Next</a>
      </li>
    {:else}
      <li><span class="btn varient-outline rounded-md">Next</span></li>
    {/if}
  </ul>
</nav>

{#if lesson.status === "draft"}
  <h1>To be Announced</h1>
  <p>This lesson has not been released.</p>
{:else}
  <header class="my-4 lg:my-6 mx-4">
    <h1 class="h1 mb-2">{lesson.title}</h1>
    <p class="max-w-prose">{lesson.excerpt}</p>
  </header>
  <div class="flex justify-between">
    <article class="mx-4 container">
      {@html data.lessonContent}
    </article>
    <TableOfContents
      allowedHeadings="h2"
      rounded="rounded-md"
      active="bg-primary-800/20"
      class="hidden lg:block sticky top-10"
    />
  </div>
{/if}
