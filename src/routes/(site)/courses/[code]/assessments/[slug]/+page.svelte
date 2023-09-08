<script>
  export let data;
</script>
<h2>{data.meta.code.replace('-', ' ').toUpperCase()}</h2>
<h1>{data.meta.title}</h1>
<p><strong>Weight:</strong> {data.meta.points}%</p>
{#if data.meta.due}
  <p><strong>Due:</strong> <time datetime="{data.meta.due}">{data.meta.due}</time></p>
  <p><strong>Late Penalty:</strong> 10% deduction for each day late. Submissions will not be accepted more than three days late.</p>
{:else}
  <p>Due: TBA</p>
{/if}

{#if data.meta.status === 'draft'}
<p>This assessment has not been released.</p>
{:else}
{@html data.content}
{/if}