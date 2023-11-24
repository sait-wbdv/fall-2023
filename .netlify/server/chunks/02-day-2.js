import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Fetching Data",
  "excerpt": null,
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _02_day_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<p>This class builds on where we finished in 262 with a focus on API data</p>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>1. Loading data with \`+page.js\`</h2>
<h3><a href="/slides/cpnt-200/sveltekit-loading-data">Loading Data Slides</a></h3>
<h3 id="demo-disney-characters-endpoints"><a aria-hidden="true" tabindex="-1" href="#demo-disney-characters-endpoints"><span class="icon icon-link"></span></a>Demo: Disney Characters Endpoints</h3>
<ul><li><a href="https://gist.github.com/acidtone/673dfc5c11ce06e9e8cd6ce33609eb3c" rel="nofollow">REST APIs: Practice endpoints</a></li></ul>
<p><strong>Source Code</strong></p>
<ul><li><p><a href="https://github.com/sait-wbdv/w23-200-dailies/tree/main/src/routes/d02-disney-api/characters" rel="nofollow">Finished: <code>/characters</code></a></p>
<ul><li><a href="https://w23-200-dailies.vercel.app/d02-disney-api/characters" rel="nofollow">Live Demo</a></li></ul></li>
<li><p><a href="https://github.com/sait-wbdv/w23-200-dailies/tree/main/src/routes/d02-disney-api/characters/%5Bid%5D" rel="nofollow">Finished: <code>/characters/:id</code></a></p>
<ul><li><a href="https://w23-200-dailies.vercel.app/d02-disney-api/characters/33" rel="nofollow">Live Demo</a></li></ul></li>
<li><p><a href="https://www.youtube.com/watch?v=qlmDj7q2x0c&t=1s" rel="nofollow">Server Routes Tutorial</a></p></li></ul>
<hr>
<h2>2. Deep dive into destructuring assignment</h2>
<ul><li>Destructuring is when you see things like:</li></ul>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">const &#123; a, b, ...rest &#125; = alpha;
return &#123; alpha &#125;</code>`}<!-- HTML_TAG_END --></pre>
<h3 id="materials"><a aria-hidden="true" tabindex="-1" href="#materials"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li>Video: <a href="https://www.youtube.com/watch?v=NIq3qLaHCIs" rel="nofollow">Web Dev Simplified</a></li>
<li>MDN: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" rel="nofollow">Destructuring assignment</a></li></ul>
<h3 id="activity-practice-destructuring"><a aria-hidden="true" tabindex="-1" href="#activity-practice-destructuring"><span class="icon icon-link"></span></a>Activity: Practice Destructuring</h3>
<ul><li><p>Using the tables and json we made yesterday, create 2 or more arrays and 2 or more objects</p></li>
<li><p>experiment with the following:</p>
<ol><li>extract variables from an array: Destructuring arrays <code>[a,b] = arrWithAB</code></li>
<li>destructure output from function<ul><li><pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">function sumAndMultiply(a,b) &#123;
  return [a+b, a*b]
&#125;</code>`}<!-- HTML_TAG_END --></pre></li></ul></li></ol>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">- then assign those functions with destructuring
3. Using your objects, assign values with destructuring: &#96;&#123;firstName, lastName, ...rest&#125; = userOne;&#96;
4. Combine two objects with destructuring
5. Destructure the return of a function
6. Destructure function arguments
  - &#96;&#96;&#96;
  function returnInfo(&#123;name, age&#125;) &#123;
    console.log(&#96;$&#123;name&#125; is $&#123;age&#125; years old)
  &#125;;
  // then call the function
  returnInfo(personOne)

   &#96;&#96;&#96;</code>`}<!-- HTML_TAG_END --></pre></li></ul>
<hr>
<h2>3. Activity Instructions: Server Side Routing</h2>
<p>Choose one of the APIs (below) to base your routes on:</p>
<ul><li><code>GET /posts</code></li>
<li><code>GET /albums</code></li>
<li><code>GET /todos</code></li></ul>
<h3 id="list-entry-route"><a aria-hidden="true" tabindex="-1" href="#list-entry-route"><span class="icon icon-link"></span></a>List entry route</h3>
<ol><li><p>Create a list entry route in your workspace that matches your chosen endpoint:</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">/src/routes/posts</code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>In this route, create a <code>+page.svelte</code> page and a <code>+page.js</code> page.</p></li>
<li><p>In <code>+page.svelte</code>, create your <code>data</code> prop:</p>
<pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">let</span> data<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Posts<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>In <code>+page.js</code>, copy and paste the following <code>load</code> function code:</p>
<pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">load</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span>fetch<span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">https://jsonplaceholder.typicode.com/[endpoint here]</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> apiData <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">myData</span><span class="token operator">:</span> apiData<span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<ul><li>change <code>[endpoint here]</code> to match your chosen endpoint (i.e. <code>posts</code>)</li>
<li>change <code>myData</code> to match your chosen endpoint (i.e. <code>posts</code>)</li></ul></li>
<li><p>In <code>+page.svelte</code>: - Loop through <code>data.posts</code> using <code>{#each}</code> to display each item. - Link each item’s <code>id</code> to its respective Item route:
<code>js /posts/{data.post.id} </code></p></li></ol>
<h3 id="additional-practice-dynamic-item-route"><a aria-hidden="true" tabindex="-1" href="#additional-practice-dynamic-item-route"><span class="icon icon-link"></span></a>Additional Practice: Dynamic item route</h3>
<ol><li><p>Create a nested route parameter in your workspace that matches your chosen endpoint:</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">/src/routes/posts/[id]</code>`}<!-- HTML_TAG_END --></pre>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined"></code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>Repeat Steps 2-4 above, except in Step 4: - Add <code>params</code> to the <code>load</code> parameter
<code>js export const load = async ({ fetch, params }) =&gt; { ... } </code> - Add <code>params.id</code> to the <code>fetch</code> url to request an individual item:
<code>js https://jsonplaceholder.typicode.com/posts/\${params.id} </code> - change <code>myData</code> to match the <strong>singular</strong> version of your chosen endpoint (i.e. <code>post</code>)</p></li>
<li><p>In <code>+page.svelte</code>: - Output each property contained in <code>data.post</code> onto the page.</p></li></ol>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Server Fetch in Sveltekit</h2>
<ul><li>Choose an api to test and fetch</li>
<li>First test your api using postman to make sure your query works</li>
<li>Create a <code>+page.js</code> file to fetch data from a public api (use a working practice repo)</li>
<li>Render some of the fetched content on a page</li>
<li>In the event that you can’t. <strong>document you debugging process</strong><ul><li>what order did you try to fix things in?</li>
<li>What was your line of questioning?</li>
<li>What resources did you search for?</li>
<li>What worked?</li></ul></li></ul>`;
    }
  })}`;
});
export {
  _02_day_2 as default,
  metadata
};
