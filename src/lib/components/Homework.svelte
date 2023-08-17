<script>
  export let status;
</script>

<section class='homework'>
  {#if status === 'announced' || status === 'published'}
  <slot />
  {/if}
</section>