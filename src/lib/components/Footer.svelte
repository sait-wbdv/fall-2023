<script>
  import MainNav from "./MainNav.svelte";
  import {siteAuthor} from "$lib/config";
</script>

<footer class="mx-4">
  <section class="flex justify-between max-w-4xl mx-auto xl:px-2">
    <MainNav styles="flex-col" />
    <nav>
      <ul>
        <li>
          <a href="/api/rss.xml" rel="external">RSS</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </nav>
  </section>
  <hr class="opacity-80 max-w-6xl mx-auto xl:w-full xl:px-2" />
  <section class="text-center my-3 xl:my-6">
    <p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
  </section>
</footer>
