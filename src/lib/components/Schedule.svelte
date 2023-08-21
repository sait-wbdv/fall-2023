<script>
  import {Accordion, AccordionItem} from "@skeletonlabs/skeleton";
  import {schedule} from "$lib/stores.js";
  import dayjs from "dayjs";
</script>

<!-- TODO: use autocollapse + open props dyanmically for the current week -->
{#each $schedule as week, index}
  <section class="lg:my-2">
    <Accordion rounded="rounded-md" spacing="space-y-3">
      <AccordionItem>
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
                  <h3 class="text-primary-300">{day.title}</h3>
                </article>
              </a>
            {:else if day.status === "draft"}
              <div class="bg-gradient-to-r from-error-300 to-primary-400 bg-clip-text text-transparent mt-1">
                <time class="font-bold">{dayjs(day.date).format("dddd, MMM D")}</time>
              </div>
              <article class="{day.code} unpublished pl-2">
                <p>{day.code.toUpperCase().replace("-", " ")} - Day {day.day}</p>
                <h3 class="text-slate-500">To be Announced</h3>
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
