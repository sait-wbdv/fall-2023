<script>
  export let status;
  export let dueDate = "Today at 3pm";
</script>
{#if status === "published"}
<section id="achievement" class="achievement">
  <h2>Today's Achievement</h2>
  {#if dueDate}
    <p>Due: <strong>{dueDate}</strong> in Brightspace.</p>
  {/if}
  <slot />
</section>
{/if}