<script>
  import {navItems} from "$lib/config";
  import {isMenuOpen} from "$lib/assets/js/store";
  import NavItem from "./NavItem.svelte";
  import HamburgerMenuButton from "./HamburgerMenuButton.svelte";

  export let styles = "flex-row";
  export let ariaLabel = "";
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<nav aria-label={ariaLabel}>
  <ul class="flex {styles}">
    {#each navItems as page}
      <NavItem href={page.route}>
        {page.title}
      </NavItem>
    {/each}
  </ul>
</nav>
