<script>
  import { courses } from '$lib/stores'
</script>

<svelte:head>
	<title>Courses</title>
</svelte:head>

<h1>Courses</h1>
<section class="course-list">
	{#each $courses as course}
	{#if course.type === 'technical'}
	<a href="courses/{course.code}">
		<article class="course {course.code}">
			<h2>{course.code.toUpperCase().replace('-', ' ')}</h2>
			<h3>{course.title}</h3>
		</article>
	</a>
	{/if}
	{/each}
</section>

<style>
  a {
    text-decoration: none;
    margin: 1rem 2rem;
  }

	article {
    color: hsl(var(--hue), 20%, 10%);
    background: hsl(var(--hue), 25%, 93%);
    border: 3px solid hsl(var(--hue), 20%, 50%);
    padding: 1rem;
    border-radius: .5rem;

    box-shadow: 0px 1px 1px rgba(0,0,0,0.05),
    0px 2px 2px rgba(0,0,0,0.05),
    0px 4px 4px rgba(0,0,0,0.05),
    0px 8px 8px rgba(0,0,0,0.05);
  }

  a:hover article {
    border: 3px solid hsl(var(--hue), 50%, 50%);
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1),
    0px 2px 2px rgba(0,0,0,0.1),
    0px 4px 4px rgba(0,0,0,0.1),
    0px 8px 8px rgba(0,0,0,0.1);
  }

  article h2 {
    margin: 1rem 0;
  }

  article.cpnt-264, article.cpln-240 {
    color: hsl(0, 0%, 10%);
    background: hsl(0, 0%, 90%);
    border: 3px solid hsl(0, 0%, 50%);
  }

  a:hover article.cpnt-264, a:hover article.cpln-240 {
    border: 3px solid hsl(0, 0%, 20%);
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1),
    0px 2px 2px rgba(0,0,0,0.1),
    0px 4px 4px rgba(0,0,0,0.1),
    0px 8px 8px rgba(0,0,0,0.1);
  }

  article.dsgn-270 {
    --hue: 270;
  }

  article.cpnt-201 {
    --hue: 30;
  }

  article.cpnt-260 {
    --hue: 90;
  }

  article.cpnt-262 {
    --hue: 180;
  }

  article.cpnt-200 {
    --hue: 230;
  }

  article.cpnt-265 {
    --hue: 360;
  }
</style>