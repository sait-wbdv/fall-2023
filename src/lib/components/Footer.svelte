<script>
  import MainNav from "./MainNav.svelte";
  import {siteAuthor} from "$lib/config";
</script>

<footer>
  <section class="flex flex-col lg:flex-row gap-4 justify-between mt-3 lg:mt-6 container lg:mx-auto mx-4 mb-4 lg:mb-0">
    <MainNav />
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
  <hr class="opacity-80 w-4/6 mx-auto" />
  <section class="text-center my-3 xl:my-6">
    <p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
  </section>
</footer>
