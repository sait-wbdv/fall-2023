<script>
  export let status;
</script>

<section class='lesson-plan'>
  {#if status == 'published'}
  <slot />
  {/if}
</section>