<script>
  export let title = "Default H1 Title";
  export let description = "A brief descriptive paragraph.";
</script>

<header class="mt-4 xl:mt-12 mb-4 xl:mb-8 mx-4 xl:mx-0 pl-4">
  <h1
    class="mb-2 xl:mb-3 text-transparent bg-gradient-to-r from-primary-500 to-pink-500 dark:from-primary-400/80 dark:to-tertiary-600 bg-clip-text"
  >
    {title}
  </h1>
  <p class="text-lg xl:text-xl max-w-prose">{description}</p>
  <slot />
</header>
