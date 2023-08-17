<script>	
	export let data;
	const courseLabel = data.code.toUpperCase().replace('-', ' ');
</script>


<svelte:head>
	<title>{courseLabel} Assessments</title>
</svelte:head>

<h1>{courseLabel} Assignments</h1>

{#if data.code === 'cpnt-262'}
<h2>Course Breakdown</h2>
<ul>
  <li><strong>Part 1 - Vanilla Javascript: 40%</strong></li>
  <li><strong>Part 2 - Svelte and SvelteKit: 60%</strong></li>
</ul>

{/if}

{#if data.assessments.length}
	{#each data.assessments as assessment}
		{#if assessment.type === 'assignment' || assessment.type === 'achievements'}
			{#if assessment.status === 'published'}
				<a href="assessments/{assessment.slug}">
					<article>
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