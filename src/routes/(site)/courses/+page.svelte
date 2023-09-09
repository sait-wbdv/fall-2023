<script>
  import {courses} from "$lib/stores";
</script>

<svelte:head>
  <title>Courses</title>
</svelte:head>

<h1 class="pl-4">Courses</h1>
<section class="course-list pl-4">
  {#each $courses as course}
    {#if course.type === "technical"}
      <article class="course {course.code} max-w-fit">
        <a
          href="courses/{course.code}"
          class="no-underline p-2 pr-8 hover:bg-primary-800/20 block rounded-md transition duration-150 ease-linear"
        >
          <h2 class="mb-0">{course.code.toUpperCase().replace("-", " ")}</h2>
          <h3>{course.title}</h3>
        </a>
      </article>
    {/if}
  {/each}
</section>
