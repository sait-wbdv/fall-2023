<script lang='ts'>
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import { currentPage, isMenuOpen } from '$lib/assets/js/store'

	// The ordering of these imports is critical to your app working properly
		import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	export let data

	const transitionIn = { delay: 150, duration: 150 }
	const transitionOut = { duration: 100 }
	
	/**
	 * Updates the global store with the current path. (Used for highlighting 
	 * the current page in the nav, but could be useful for other purposes.)
	 **/
	$: currentPage.set(data.path)

	/**
	 * This pre-fetches all top-level routes on the site in the background for faster loading.
	 * https://kit.svelte.dev/docs#modules-$app-navigation
	 * 
	 * Any route added in src/lib/config.js will be prefetched automatically. You can add your
	 * own prefetch() calls here, too.
	 **/
	// onMount(() => {
	// 	navItems.forEach(item => prefetch(item.route))
	// })
</script>


<!-- 
	The below markup is used on every page in the site. The <slot> is where the page's
	actual contents will show up.
-->
<div class="layout" class:open={$isMenuOpen}>
	<Header />
	{#key data.path}
		<main
			id="main"
			tabindex="-1"
		>
			<slot />
		</main>
	{/key}
	<Footer />
</div>

<style>
	main {
		max-width: 150ch;
	}
</style>