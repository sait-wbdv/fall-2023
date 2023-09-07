<script>
  import {navItems} from "$lib/config";
  import NavItem from "./NavItem.svelte";
  import {siteAuthor} from "$lib/config";
  import Icon from "@iconify/svelte";
</script>

<footer class="mx-4 mt-6">
  <section class="flex flex-col items-center">
    <img src="/images/sait-logo.png" alt="Sait Logo" class="w-16 mb-2" />
    <nav class="mb-2">
      <ul class="flex gap-2 lg:gap-4 list-none">
        {#each navItems as page}
          <NavItem href={page.route}>
            {page.title}
          </NavItem>
        {/each}
      </ul>
    </nav>
  </section>
  <hr class="opacity-80 max-w-2xl mx-auto xl:w-full xl:px-2 mb-4" />
  <section>
    <div class="text-center my-2">
      <p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
    </div>
    <ul class="flex justify-center gap-2 lg:gap-4 mb-4 list-none">
      <li>
        <a
          href="https://codepen.io/acidtone"
          target="_blank"
          class="dark:hover:text-primary-500 dark:active:text-primary-300 hover:text-primary-700 active:text-primary-500 transition duration-150 ease-linear"
          ><Icon icon="fa6-brands:codepen" class="text-xl" /></a
        >
      </li>
      <li>
        <a
          href="https://github.com/sait-wbdv"
          target="_blank"
          class="dark:hover:text-primary-500 dark:active:text-primary-300 hover:text-primary-700 active:text-primary-500 transition duration-150 ease-linear"
          ><Icon icon="fa6-brands:github" class="text-xl" /></a
        >
      </li>
      <li>
        <a
          href="https://www.figma.com/team_invite/redeem/iied98q0sW8p9gSDqm1hML"
          target="_blank"
          class="dark:hover:text-primary-500 dark:active:text-primary-300 hover:text-primary-700 active:text-primary-500 transition duration-150 ease-linear"
          ><Icon icon="fa6-brands:figma" class="text-xl" /></a
        >
      </li>
    </ul>
  </section>
</footer>
