<script>
	import MainNav from './MainNav.svelte'
	import HamburgerMenuButton from './HamburgerMenuButton.svelte'
	import { siteTitle } from '$lib/config'

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}
</script>


<header>
	<a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
		Skip to main content
	</a>
	
	<a href="/" class="logo">
		<img src="/images/sait-logo.png" alt="SAIT Logo">
		<div>
			<span class="site-title">{siteTitle}</span><br>
			<span class="semester">Winter 2023</span>
		</div>
	</a>
	
	<HamburgerMenuButton />
	<MainNav />

</header>