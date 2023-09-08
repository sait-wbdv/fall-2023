<script>
  import {page} from "$app/stores";
  import {courses} from "$lib/stores";
  import dayjs from "dayjs";
  import PageHeader from "$lib/components/PageHeader.svelte";
  export let data;

  const course = $courses.find((item) => item.code === $page.params.code);
</script>

<PageHeader title={`${course.codeLabel} - ${course.title}`} description={course.excerpt} />
<section class="container pl-4">
  <h2 class="h2">Lesson Schedule</h2>
  <ul>
    {#each course.days as date, index}
      <li>
        <a
          href="{course.code}/day-{index + 1}"
          class="h4 dark:hover:text-primary-500 dark:active:text-primary-300 hover:text-primary-700 active:text-primary-500 transition duration-150 ease-linear mb-4 block"
          >Day {index + 1} - {dayjs(date).format("MMMM D")}
        </a>
      </li>
    {/each}
  </ul>
</section>
<section class="container pl-4">
  <h2>Assessments</h2>
  {#if data.code === "cpnt-262"}
    <!-- <h3>Course Breakdown</h3>
<ul>
  <li><strong>Part 1 - Vanilla Javascript: 40%</strong></li>
  <li><strong>Part 2 - VueJS and Nuxt: 60%</strong></li>
</ul> -->
  {/if}

  {#if data.assessments.length}
    {#each data.assessments as assessment}
      {#if assessment.type === "assignment" || assessment.type === "achievements"}
        {#if assessment.status === "published"}
          <a class="assessment" href="{course.code}/assessments/{assessment.slug}">
            <article class={course.code}>
              <h3>{assessment.title}</h3>
              <p>Weight: {assessment.points}%</p>
              {#if assessment.due}
                <p>Due: {assessment.due}</p>
              {:else}
                <p>Due: TBA</p>
              {/if}
            </article>
          </a>
        {:else}
          <article>
            <h3>{assessment.title}</h3>
            <p>Weight: {assessment.points}%</p>
            {#if assessment.due}
              <p>Due: {assessment.due}</p>
            {:else}
              <p>Due: TBA</p>
            {/if}
          </article>
        {/if}
      {/if}
    {/each}
  {:else}
    <p>To Be Announced</p>
  {/if}
</section>
