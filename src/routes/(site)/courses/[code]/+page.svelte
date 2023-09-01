<script>
  import {page} from "$app/stores";
  import {courses} from "$lib/stores";
  import dayjs from "dayjs";
  import PageHeader from "$lib/components/PageHeader.svelte";
  export let data;

  const course = $courses.find((item) => item.code === $page.params.code);
</script>

<PageHeader title={`${course.codeLabel} - ${course.title}`} description={course.excerpt} />

<h2>Lesson Schedule</h2>
<ul>
  {#each course.days as date, index}
    <li><a href="{course.code}/day-{index + 1}">Day {index + 1} - {dayjs(date).format("MMMM D")}</a></li>
  {/each}
</ul>

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
<<<<<<< HEAD

<style>
  a.assessment {
    text-decoration: none;
  }

  article {
    margin: 1rem 2rem;
    background: #eee;
    padding: 1rem;
    border-radius: 0.5rem;
  }

  a article {
    color: hsl(var(--hue), 20%, 10%);
    background: hsl(var(--hue), 25%, 93%);

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05), 0px 2px 2px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.05),
      0px 8px 8px rgba(0, 0, 0, 0.05);
  }

  a:hover article {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1),
      0px 8px 8px rgba(0, 0, 0, 0.1);
  }

  article.dsgn-270 {
    --hue: 270;
  }

  article.cpnt-201 {
    --hue: 30;
  }

  article.cpnt-260 {
    --hue: 90;
  }

  article.cpnt-262 {
    --hue: 180;
  }

  article.cpnt-200 {
    --hue: 230;
  }

  article.cpnt-265 {
    --hue: 360;
  }
</style>
=======
>>>>>>> e3dc03fad35c7bc66ddab50ab2339537343e090e
