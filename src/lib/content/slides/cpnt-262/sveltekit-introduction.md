
## Introduction to SvelteKit
### Svelte's Application Framework

---

## Svelte vs SvelteKit
<dl>
  <dt>Svelte</dt>
  <dd>A frontend component framework for building user interfaces.</dd>
  <dt>SvelteKit</dt>
  <dd>A front and backend framework for rapidly developing web applications using Svelte.</dd>
</dl>

---

## Key Differences
- Svelte is used to create user interface components in the browser
- SvelteKit handles other application features like routing, server-side rendering and loading data

---

## Application routing
A key feature of SvelteKit is its file-based routing system

---

## Terminology
<dl>
  <dt>Component</dt>
  <dd>A reusable, self-contained block of code that encapsulates HTML, CSS, and JavaScript that belong together, written into a <code>.svelte</code> file</dd>
  <dt>Route</dt>
  <dd>A URL path that users can access.</dd>
  <dt>File-based routing</dt>
  <dd>Routes that are based on files and directories in your codebase.</dd>
</dl>

---

## Anatomy of a URL

---

### Protocol
<p class="code"><strong>https://</strong>example.com/blog/post-1</p>

### Domain
<p class="code">https://<strong>example.com</strong>/blog/post-1</p>

### Route path
<p class="code">https://example.com<strong>/blog/post-1</strong></p>

### Path segment
<p class="code">https://example.com/<strong>blog</strong>/post-1</p>

---

## Routing conventions
- All routes must reside in `src/routes`
- Every path segment corresponds to a directory name
- Every page in a route must be named `+page.svelte`
    - Like `index.html` in a vanilla static website

---

## Examples
`src/routes/+page.svelte`
- the root home page

`src/routes/blog/+page.svelte`
- a `/blog` route

`src/routes/blog/post-1/+page.svelte`
- a `/blog/post-1` route

---

## `+page.svelte`
### A component that defines a page of your app
By default, pages are rendered both on the server (SSR) for the initial request and in the browser (CSR) for subsequent navigation.

---

## `+layout.svelte`
### A component that defines a layout for one or more routes
- To create a layout that applies to every page, make a file called `src/routes/+layout.svelte`. 
- By default, `+layout.svelte` will be applied to all child pages.
- Layouts are need a `<slot></slot>` to display page content.

---

## Loading data
Additional pages are used to load server data and will be covered later in the course:
- `+page.js`
- `+page.server.js`
- `+layout.js`
- `+layout.server.js`

---

## Other route pages
Other pages may reside in a route directory as long as they do not have a reserved name like those just covered.

These can be used for other components needed for a specific route.

---

## Dynamic Routes
We can create routes that represent multiple pages with **route parameters**. ([source](https://joyofcode.xyz/sveltekit-routing))

![Route parameters](/images/svelte/route-parameters.png)

---

## `$page`
`$page` is a special variable SvelteKit provides that gives you information about the current route, including route parameters.
```html
<script>
  import { page } from '$app/stores';

  console.log($page.params)

</script>
```
`$page` is a Svelte store, which means you need to access it with a `$`.


---

## Tips and Tricks

---

## Use Recent Resources
SvelteKit 1.0 was released at the end of December 2022. 
- A lot of tutorials and resources are now out of date as big changes happened in the summer of 2022;
- When using a video, article or tutorial, make sure it was created or updated in 2023 (or at least in the Fall of 2022);
- You can filter Google searches by date using the Tools drop down menu.

---

## `<svelte:head>`
The `<svelte:head>` element allows you to insert elements inside the `<head>` of your document:

```html
<svelte:head>
  <title>Page title here</title>
</svelte:head>
```

---

## Global styles
- The `<style>` element in a svelte component only applies (i.e. is scoped) to that component.
- To apply global styles, `import` a stylesheet into your root `+layout.svelte` file.
    ```html
    <!-- +layout.svelte -->
    <script>
      import './styles.css';
    </script>
    ```

---

## Further Learning
### Tutorials
- [Pages](https://learn.svelte.dev/tutorial/pages)
- [Layout](https://learn.svelte.dev/tutorial/layouts)
- [Route parameters](https://learn.svelte.dev/tutorial/params)

### Documentation
- [Routing](https://kit.svelte.dev/docs/routing)
