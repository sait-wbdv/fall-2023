<script>
  import {TableOfContents} from "@skeletonlabs/skeleton";
  import {page} from "$app/stores";
  import {lessonsById} from "$lib/stores";
  import dayjs from "dayjs";
  export let data;

  const lesson = $lessonsById[`${$page.params.code}/${$page.params.day}`];
</script>

<nav class="page-nav">
  <ul class="flex justify-around">
    {#if lesson.prev}
      <li><a href="/courses/{lesson.prev}">Prev</a></li>
    {:else}
      <li><span>Prev</span></li>
    {/if}
    <li>
      <time datetime={lesson.date}>{dayjs(lesson.date).format("dddd, MMM D")}</time>
    </li>
    {#if lesson.next}
      <li><a href="/courses/{lesson.next}">Next</a></li>
    {:else}
      <li><span>Next</span></li>
    {/if}
  </ul>
</nav>

<p>{lesson.codeLabel} - Day {lesson.day}</p>
{#if lesson.status === "draft"}
  <h1>To be Announced</h1>
  <p>This lesson has not been released.</p>
{:else}
  <header>
    <h1>{lesson.title}</h1>
  </header>
  <div class="flex">
    <article>
      {@html data.lessonContent}
    </article>
    <TableOfContents allowedHeadings="h2" />
  </div>
{/if}
