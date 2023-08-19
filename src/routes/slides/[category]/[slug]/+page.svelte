<script lang="ts">
	import { onMount } from 'svelte';

	import Reveal from 'reveal.js';
	import Highlight from 'reveal.js/plugin/highlight/highlight';
	import Markdown from 'reveal.js/plugin/markdown/markdown';
	import Notes from 'reveal.js/plugin/notes/notes';
	import CopyCode from '$lib/plugins/copycode.esm';

	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/black.css';
	import 'reveal.js/plugin/highlight/monokai.css';
	import '$lib/plugins/copycode.css';
	import '../../../app.postcss';

	export let data;


	onMount(() => {
		const deck = new Reveal({
			plugins: [Markdown, Highlight, Notes, CopyCode],
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			hash: true,
			controls: false,
			progress: false
		});

		deck.initialize();
	});
</script>

<div class="reveal">
	<div class="slides">
		{#if data.type == 'md'}
			<section data-markdown>
				<div data-template>
					{data.module}
				</div>
			</section>
		{:else}	
			<svelte:component this={data.module} />
		{/if}
	</div>
</div>
