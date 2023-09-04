<script>
  import {Accordion, AccordionItem} from "@skeletonlabs/skeleton";
  import {schedule} from "$lib/stores.js";
  import dayjs from "dayjs";

  const weekOfYear = () => {
    // Calculate current week of the year
    const workingDate = new Date();
    const startDate = new Date(workingDate.getFullYear(), 0, 1);
    const days = Math.floor((workingDate - startDate) /
      (24 * 60 * 60 * 1000));

    const weekNumber = Math.ceil(days / 7);
    return weekNumber;
  }

</script>

{#each $schedule as week, index}
  <section class="lg:my-2">
    <Accordion rounded="rounded-md" spacing="space-y-3">
      <!-- TODO: figure out a less hacky way to auto-open current week -->
      <!-- 'index + 36' will need to be updated for fall/winter semesters -->
      <AccordionItem open={weekOfYear() == index + 36}>
        <svelte:fragment slot="summary">
          <h2 class="h3" id="week-{index + 1}">Week {index + 1}</h2>
        </svelte:fragment>
        <svelte:fragment slot="content">
          {#each week as day}
            {#if day.type === "lesson" && day.status != "draft"}
              <div class="bg-gradient-to-r from-error-300 to-primary-400 bg-clip-text text-transparent mt-1">
                <time class="font-bold">{dayjs(day.date).format("dddd, MMM D")}</time>
              </div>
              <a
                href="courses/{day.code}/day-{day.day}"
                class="hover:bg-primary-800/20 rounded-md block transition duration-150 ease-linear py-2 pl-2"
              >
                <article class="{day.code} lesson">
                  <p>{day.code.toUpperCase().replace("-", " ")} - Day {day.day}</p>
                  <h3 class="text-primary-300 h4">{day.title}</h3>
                </article>
              </a>
            {:else if day.status === "draft"}
              <div class="bg-gradient-to-r from-error-300 to-primary-400 bg-clip-text text-transparent mt-1">
                <time class="font-bold">{dayjs(day.date).format("dddd, MMM D")}</time>
              </div>
              <article class="{day.code} unpublished pl-2">
                <p>{day.code.toUpperCase().replace("-", " ")} - Day {day.day}</p>
                <h3 class="text-slate-500 h4">To be Announced</h3>
              </article>
            {:else}
              <div class="bg-gradient-to-r from-error-300 to-primary-400 bg-clip-text text-transparent mt-1">
                <time class="font-bold">{dayjs(day.date).format("dddd, MMM D")}</time>
              </div>
              <article class="holiday pl-2">
                <h3 class="text-slate-500">{day.label}</h3>
              </article>
            {/if}
          {/each}
        </svelte:fragment>
      </AccordionItem>
    </Accordion>
  </section>
{/each}
