<script lang="ts">
	import { onMount } from 'svelte';

	import Reveal from 'reveal.js';
	import Highlight from 'reveal.js/plugin/highlight/highlight';
	import Markdown from 'reveal.js/plugin/markdown/markdown';
	import Notes from 'reveal.js/plugin/notes/notes';
	import CopyCode from '$lib/plugins/copycode.esm';

	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/sky.css';
	import 'reveal.js/plugin/highlight/monokai.css';
	import '$lib/plugins/copycode.css';
	import '../../../../app.postcss';

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

<style>
	.reveal .slides {
		font-size: 32px;
		text-align: left;
	}

	body .reveal .slides h1 {
		font-size: 3em;
	}

	body .reveal .slides h2 {
		font-size: 2em;
	}

	h1, h2 {
		text-align: center;
	}
	
	h1, h2, h3, h4, h5, h6 {
		font-variant: small-caps;
	}
	
	dd {
		margin-bottom: 2rem;
	}
	.reveal pre code {
		padding: 1rem;
	}
	.code {
		font-family:'Courier New', Courier, monospace;
		font-size: 2.5rem;
		white-space: nowrap;
		color: grey;
	}
	.code strong {
		color: black;
	}

	.code.no-bullet {
		list-style: none;
		padding-left: 0;
	}

</style>
