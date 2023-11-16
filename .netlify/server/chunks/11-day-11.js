import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Frontend Frameworks | An abbreviated Intro",
  "excerpt": null,
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _11_day_11 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<ul><li>Skim <a href="https://vuejs.org/guide/extras/rendering-mechanism.html" rel="nofollow">Rendering Mechanism: The Virtual DOM</a> from the VueJS docs for context on virtual dom focused frameworks (react, vue, angular)</li>
<li>Skim <a href="https://medium.com/@faulknerproject/vue-vs-react-vs-svelte-5f93d70d2618" rel="nofollow">Vue, vs React vs… Svelte?!</a></li>
<li>Read <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks" rel="nofollow">Understanding Client-side frameworks</a></li>
<li>Review <a href="https://www.twicpics.com/blog/front-end-javascript-frameworks-history-and-benefits" rel="nofollow">History of Front End Frameworks</a></li>
<li>Read <a href="https://www.okupter.com/blog/svelte-vs-sveltekit-the-difference" rel="nofollow">Svelte vs SvelteKit</a></li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Querying Data</h2>
<p>We are at the point in the course where you’ll need to really sharpen your skills at reading docs and code examples to find the info that you’re looking for. This skill takes practice.</p>
<p>Especially when searching on code projects, take the time to check that you understand the terms being used, and that you understand what you’re looking for. <strong>Take time to do background research queries when you’re confused</strong></p>
<h3 id="use-these-documents-to-improve-your-searching"><a aria-hidden="true" tabindex="-1" href="#use-these-documents-to-improve-your-searching"><span class="icon icon-link"></span></a>Use these documents to improve your searching</h3>
<ul><li><a href="https://gist.github.com/lilyx13/22502670afc429bb8d40d05930373f28" rel="nofollow">Google Power Search Notes</a></li>
<li><a href="https://gist.github.com/lilyx13/4a2f49d1cdb29cfc624ef22c6ccedafe" rel="nofollow">Search Improvement Task Notes</a></li></ul>
<h3 id="activity-optimize-a-search-query"><a aria-hidden="true" tabindex="-1" href="#activity-optimize-a-search-query"><span class="icon icon-link"></span></a>Activity: Optimize a Search Query</h3>
<ol><li>Search for something casual that you would normally search for</li>
<li>Use search terms to get a more accurate result at the top of the results</li>
<li><strong>Start a new search</strong> for a bug or error that you ran into (preferably one that you didn’t get a clear answer on)</li>
<li>Use our search techniques to find more helpful information</li>
<li>Discuss what worked in your groups</li></ol>
<hr>
<h2 id="framework-intro">1. Introduction to JS Frameworks</h2>
<ul><li><a href="https://youtu.be/VbvMJUpY0a4?si=PPIlssXYkXhoV3gA" rel="nofollow">Video: Quick into to Frameworks</a></li>
<li>After learning one, others become easier to also learn</li>
<li>Reasons why we use them:<ul><li>simplify complex rendering</li>
<li>more interactivity</li>
<li>easier code management</li>
<li>app development</li></ul></li>
<li>Important Concepts:<ul><li>Components</li>
<li>Client Side vs Server Side</li>
<li>Shadow Dom vs Compilation (Currently Svelte is the only one really doing compilation)</li>
<li>Code Bundling (done automatically)</li></ul></li></ul>
<h3 id="framework-research-and-discussion"><a aria-hidden="true" tabindex="-1" href="#framework-research-and-discussion"><span class="icon icon-link"></span></a>Framework Research and Discussion</h3>
<ol><li>In your scrum groups, research and answer the following:</li></ol>
<ul><li>What is a benefit of client side framework?</li>
<li>What is a drawback of client side frameworks?</li>
<li>What are some evolutions that frameworks have gone through over time to address some of their issues? (pick a framework that interests you do discuss this)</li></ul>
<ol start="2"><li><p>Take your answers and document them in a javascript or JSON file. Use arrays, objects, and variables. <strong>you’ll be rendering these later in svelte so make sure the data is organized well</strong>.</p></li>
<li><p><strong>Class Debrief</strong>: Pick 1 benefit or drawback and 1 evolution to highlight to the class.</p></li></ol>
<hr>
<h2 id="svelte-environment">Svelte Environment Setup</h2>
<ol><li>Update <a href="https://nodejs.org/en/" rel="nofollow">Node</a> to the latest stable release</li>
<li>VS Code Extensions: - <a href="https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode" rel="nofollow">Svelte for VS Code</a> - Optional: <a href="https://marketplace.visualstudio.com/items?itemName=ardenivanov.svelte-intellisense" rel="nofollow">Svelte Intellisense</a> - Optional: <a href="https://marketplace.visualstudio.com/items?itemName=fivethree.vscode-svelte-snippets" rel="nofollow">Svelte Snippets</a></li>
<li>Update VS Code preferences: - Set <code>Workbench Editor: Label Format</code> to <code>short</code> - Optional: - Set <code>Explorer: Sort order</code> to <code>filesFirst</code> - Uncheck <code>Explorer: Compact folders</code></li></ol>
<p>See: <a href="https://www.youtube.com/watch?v=13v50nLh67Q" rel="nofollow">10X Your SvelteKit Developer Experience in VSCode</a> for more tips</p>
<hr>
<h2 id="install-sveltekit">3. Install SvelteKit demo app</h2>
<p>See Docs: <a href="https://kit.svelte.dev/docs/creating-a-project" rel="nofollow">Creating a project</a></p>
<ol><li><p>Navigate to your workspace in the terminal and enter the following command:</p>
<pre class="language-bash"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token function">npm</span> create svelte@latest hello-demo</code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>Select the <code>Demo app</code> template
<img src="/images/lessons/sk-demo-app.png" alt="Screencap of demo app selection"></p></li>
<li><p>Select <code>No</code> for Typescript
<img src="/images/lessons/sk-js.png" alt="Screencap of js selection"></p></li>
<li><p>Select no additional options: - Optional: Select ESLint and/or Prettier if you want these.</p></li>
<li><p><code>cd</code> into your project:</p>
<pre class="language-bash"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token builtin class-name">cd</span> hello-demo
</code>`}<!-- HTML_TAG_END --></pre>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined"></code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>Install dependencies:</p>
<pre class="language-bash"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token function">npm</span> <span class="token function">install</span>
</code>`}<!-- HTML_TAG_END --></pre>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined"></code>`}<!-- HTML_TAG_END --></pre></li>
<li><p>Start the dev server to view the demo app</p>
<pre class="language-bash"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token function">npm</span> run dev
</code>`}<!-- HTML_TAG_END --></pre>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined"></code>`}<!-- HTML_TAG_END --></pre></li></ol>
<hr>
<h2 id="project-overview">4. Overview: Project structure</h2>
<h2 id="scrum-meeting">Scrum Session</h2>
<ul><li>what have you been working on?</li>
<li>what do you plan to be doing?</li>
<li>do you have any blocks?</li></ul>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="basic-activity-add-some-pages-to-a-skeleton-svelte-app"><a aria-hidden="true" tabindex="-1" href="#basic-activity-add-some-pages-to-a-skeleton-svelte-app"><span class="icon icon-link"></span></a>Basic Activity: Add some pages to a skeleton svelte app</h3>
<ul><li>Install another svelte app, one that you can use for practice throughout the next 10 days</li>
<li>Add 3 new folders in routes with <code>+page.svelte</code> files in them</li>
<li>Add some html to the files (minimal)</li>
<li>Run you server and make sure teh content shows up</li>
<li>Then push your code to github</li></ul>
<h3 id="activity-research-how-to-import-data-onto-a-svelte-page"><a aria-hidden="true" tabindex="-1" href="#activity-research-how-to-import-data-onto-a-svelte-page"><span class="icon icon-link"></span></a>Activity: Research how to import data onto a svelte page</h3>
<ul><li>Create a repo with your team, add one another to it and scaffold a sveltekit app</li>
<li>This can be a throwaway app or you can use it for the in class demonstrations and activities as we learn Svelte</li>
<li>add a JS or JSON file in the <code>static/</code> directory</li>
<li>use the <a href="https://learn.svelte.dev/tutorial/welcome-to-svelte" rel="nofollow">official svelte docs</a> to learn how to import the data onto a page in sveltekit</li>
<li>try to import a single string from your data file (don’t worry about getting deep into the data)</li>
<li>Submit a link to your repo</li>
<li>Deploy and submit a link to your netlify site</li></ul>`;
    }
  })}`;
});
export {
  _11_day_11 as default,
  metadata
};
