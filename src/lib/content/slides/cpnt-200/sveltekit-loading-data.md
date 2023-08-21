
# Loading Data
## in SvelteKit

---

## Loading Data in SvelteKit
A **`+page.svelte`** file can have sibling pages that can load data for your page.
<dl>
  <dt><code>+page.js</code></dt>
  <dd>JS that can run on the server <em>and</em> browser. Used for fetching from third-party APIs.</dd>
  <dt>+page.server.js</dt>
  <dd>JS that <em>only</em> runs on the server. Used when connecting to a database or hiding credentials.</dd>
</dl>


---


`+page.js` (or `+page.ts`) exports a `load` function, 

```js
// src/routes/blog/[slug]/+page.js

export const load = ({ params }) => {
  return {
    post: {
      title: `Title for ${params.slug} goes here`,
      content: `Content for ${params.slug} goes here`
    }
  };
}
```
The `return` value is available via the `data` prop:
```html
<!-- src/routes/blog/[slug]/+page.svelte -->
<script>
  export let data;
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
```

---

### `load` parameters
The built-in `load` function can access the following pre-defined parameters describing the request:
<dl>
  <dt><code>params</code></dt>
  <dd>Contains any defined route params.</dd>
  <dt><code>url</code></dt>
  <dd>Contains properties like the <code>origin</code>, <code>hostname</code>, <code>pathname</code> and <code>searchParams</code></dd>
  <dt><code>route</code></dt>
  <dd>Contains the name of the current route directory, relative to <code>src/routes</code>.</dd>
</dl>            

---

### Things to remember with `load`
- It needs to be exported with `export`.
- Its function parameters need to be surrounded by `{}`.
- The `return` value must be an object.
- In `+page.svelte` the returned data is always inside a prop named `data`.

---

## Fetching async data
<dl>
  <dt>Single threaded</dt>
  <dd>One statement is executed at a time. Javascript is single threaded. Many other languages are not.</dd>
  <dt>Synchronous</dt>
  <dd>One at a time.</dd>
  <dt>Asynchronous</dt>
  <dd>More than one at a time.</dd>
  <dt>Promise</dt>
  <dd>An ES6 feature that allows for asynchronous functions.</dd>
</dl>

---

The `load` function can also access the `fetch` function but it must be used asynchronously with `async`/`await`:

```js
export const load = async ({ fetch }) => {

  const response = await fetch(`https://api.disneyapi.dev/characters`);
  const characters = await response.json();

  return {
    characters: characters
  }
}
```

---

### Things to remember with `fetch`
- `load` must be defined with `async`
- `fetch` must always be invoked with `await`
- `response.json()` must always invoked with `await` to convert the JSON to a JS object

---

## Further Learning
### Reading list
- Free Code Camp: [Asynchronous Programming in JavaScript – Guide for Beginners](https://www.freecodecamp.org/news/asynchronous-programming-in-javascript/)

### Watch list
- Codevolution: [Loading page data with +page.js](https://www.youtube.com/watch?v=iBctrIOg-Jw)
