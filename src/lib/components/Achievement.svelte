<script>
  export let status;
  export let dueDate = true;
</script>

<section id="achievement" class="achievement">
  <h2>Today's Achievement</h2>
  {#if dueDate}
    <p>Due: <strong>Today at 3pm</strong> in Brightspace.</p>
  {/if}

  {#if status === "announced" || status === "published"}
    <slot />
  {:else}
    <p>To be announced</p>
  {/if}
</section>
