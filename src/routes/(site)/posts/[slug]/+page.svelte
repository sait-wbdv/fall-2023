<script>
  import {TableOfContents} from "@skeletonlabs/skeleton";
  import dayjs from "dayjs";
  export let data;

  const post = data.post;
</script>

{#if post.status === "draft"}
  <h1>Post not Found</h1>
  <p>This post has not been published.</p>
{:else}
  <header class="my-4 lg:my-6 mx-4">
    <time>{dayjs(post.date).format("dddd, MMM D")}</time>
    <h1 class="h1 mb-2">{post.title}</h1>
    <p>{post.excerpt}</p>
  </header>
  <div class="flex justify-between">
    <article class="mx-4 container">
      {@html data.content}
    </article>
    <TableOfContents
      allowedHeadings="h2"
      rounded="rounded-md"
      active="bg-primary-800/20"
      class="hidden lg:block sticky top-10"
    />
  </div>
{/if}
