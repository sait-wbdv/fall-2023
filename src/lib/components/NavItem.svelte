<script>
  import {currentPage, isMenuOpen} from "$lib/assets/js/store";

  export let href;

  $: isCurrentPage = $currentPage.startsWith(href);

  const maybeCloseMenu = () => {
    if (href != $currentPage) {
      isMenuOpen.set(false);
    }
  };
</script>

<li
  class="dark:hover:text-primary-500 dark:active:text-primary-300 hover:text-primary-700 active:text-primary-500 transition duration-150 ease-linear"
>
  <a {href} on:click={maybeCloseMenu} class:active={isCurrentPage} aria-current={isCurrentPage ? "page" : false}>
    <slot />
  </a>
</li>
