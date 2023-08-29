<script>
  export let title = "Default H1 Title";
  export let description = "A brief descriptive paragraph.";
</script>

<header class="mt-4 xl:mt-12">
  <h1 class="mb-2 xl:mb-3 text-transparent bg-gradient-to-r from-pink-500/80 to-secondary-600 bg-clip-text">
    {title}
  </h1>
  <p class="text-lg xl:text-xl">{description}</p>
  <slot />
</header>
