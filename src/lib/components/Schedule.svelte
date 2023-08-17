<script>
  import {Accordion, AccordionItem} from "@skeletonlabs/skeleton";
  import {schedule} from "$lib/stores.js";
  import dayjs from "dayjs";
</script>

{#each $schedule as week, index}
  <section class="week">
    <Accordion>
      <AccordionItem>
        <svelte:fragment slot="summary">
          <h2 id="week-{index + 1}">Week {index + 1}</h2>
        </svelte:fragment>
        <svelte:fragment slot="content">
          {#each week as day}
            {#if day.type === "lesson" && day.status != "draft"}
              <time>{dayjs(day.date).format("dddd, MMM D")}</time>
              <a href="courses/{day.code}/day-{day.day}">
                <article class="{day.code} lesson">
                  <p>{day.code.toUpperCase().replace("-", " ")} - Day {day.day}</p>
                  <h3>{day.title}</h3>
                </article>
              </a>
            {:else if day.status === "draft"}
              <time>{dayjs(day.date).format("dddd, MMM D")}</time>
              <article class="{day.code} unpublished">
                <p>{day.code.toUpperCase().replace("-", " ")} - Day {day.day}</p>
                <h3 class={day.code}>To be Announced</h3>
              </article>
            {:else}
              <time>{dayjs(day.date).format("dddd, MMM D")}</time>
              <article class="holiday">
                <h3 class="holiday">{day.label}</h3>
              </article>
            {/if}
          {/each}
        </svelte:fragment>
      </AccordionItem>
    </Accordion>
  </section>
{/each}
