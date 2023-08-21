<script>
  export let data;
</script>

<h1>{data.meta.title}</h1>
<p>Weight: {data.meta.points}%</p>
{#if data.meta.due}
  <p>Due: <time datetime="{data.meta.due}">{data.meta.due}</time></p>
{:else}
  <p>Due: TBA</p>
{/if}

{#if data.meta.status === 'draft'}
<p>This assessment has not been released.</p>
{:else}
{@html data.content}
{/if}