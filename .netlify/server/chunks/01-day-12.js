import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Data Patterns and Rest APIs",
  "excerpt": null,
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _01_day_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep</h2>
<ul><li>Video: <a href="https://youtu.be/E9AgJnsEvG4?si=fAqnBsVfbaXoP3Ss" rel="nofollow">Relational vs Non Relational Databases</a></li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Course Overview</h2>
<p>This course is all about data. How it’s stored, types of storage, how we access it, and how we manage it.</p>
<h3 id="topics-and-technologies"><a aria-hidden="true" tabindex="-1" href="#topics-and-technologies"><span class="icon icon-link"></span></a>Topics and Technologies</h3>
<ul><li>SQL Databases (primary data structure focus) <strong>database type</strong><ul><li>sqlite</li>
<li>postgresql</li></ul></li>
<li>NOSQL <strong>database type</strong><ul><li>document driven</li>
<li>JSON</li></ul></li>
<li><a href="https://www.postman.com/" rel="nofollow">Postman</a> <strong>API Tool</strong></li>
<li>Content Management Systems <strong>Data Management Tool</strong><ul><li><a href="https://docs.directus.io/" rel="nofollow">Directus</a></li></ul></li>
<li><a href="https://supabase.com/" rel="nofollow">Supabase</a> <strong>Firebase Alternative</strong><ul><li>Backend as a Service</li></ul></li></ul>
<hr>
<h2>Metaphors for Data</h2>
<p><strong>google docs lists == nosql and google sheets == sql</strong></p>
<h3 id="activity-planning-data-structures-15-minutes"><a aria-hidden="true" tabindex="-1" href="#activity-planning-data-structures-15-minutes"><span class="icon icon-link"></span></a>Activity: Planning Data Structures 15 Minutes</h3>
<p><strong>Objective</strong>: Compare the two main ways that data is organized using common office tools.</p>
<ol><li>Create a table in google sheets<ul><li>Select pick a topic to make a table about (suggestions below)</li>
<li>library</li>
<li>users</li>
<li>game scores (sports or other)</li></ul></li>
<li>create a document in google docs<ul><li>Organize text content from a webpage into the document</li>
<li>Use google docs’ headings to organize the content into sections</li>
<li>Use lists and sub headings to group as close to the actual website structure</li></ul></li>
<li>recreate 1 level 2 heading worth of content from your doc file into a json file<ul><li>ie the header for a page:</li>
</ul><pre class="language-json"><!-- HTML_TAG_START -->${`<code class="language-json"><span class="token punctuation">&#123;</span>
  <span class="token property">"pageTitle"</span><span class="token operator">:</span> <span class="token string">"Page Title"</span><span class="token punctuation">,</span>
  <span class="token property">"pageDescription"</span><span class="token operator">:</span> <span class="token string">"blah blah blah"</span><span class="token punctuation">,</span>
  <span class="token property">"image"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span><span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"/path/file.jpg"</span><span class="token punctuation">,</span> <span class="token property">"alt"</span><span class="token operator">:</span> <span class="token string">"description of image"</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token property">"callToAction"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">&#123;</span><span class="token property">"href"</span><span class="token operator">:</span> <span class="token string">"https://url"</span><span class="token punctuation">,</span> <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"Click me"</span><span class="token punctuation">&#125;</span><span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre></li>
<li>Note 3 benefits and 3 potential problems of each way of organizing data</li></ol>
<h3 id="local-filetypes-for-data"><a aria-hidden="true" tabindex="-1" href="#local-filetypes-for-data"><span class="icon icon-link"></span></a>Local Filetypes for Data</h3>
<ul><li>csv (Comma Separated Values): A table filetype that is plain text and uses commas to organized columns and rows.<ul><li>Can be used in javascript</li>
<li>emulates the kind of structure used in sql tables</li>
<li><a href="https://svelte.dev/repl/d41603e8668945dba79459575590261e?version=3.47.0" rel="nofollow">Svelte example</a></li>
<li><em>generally you won’t have to import csvs into something like svelte, but you will import them into databases</em></li></ul></li>
<li>json (Javascript Object Notation): A document key-value pair type of data structure.<ul><li>This is the way that data is organized and passed from APIs</li>
<li>this document driven appraoch is how NOSQL databases like Mongo DB organize data</li>
<li><a href="https://www.devsamples.com/javascript/svelte/using-local-json-files-in-svelte-files" rel="nofollow">Svelte example</a></li></ul></li></ul>
<hr>
<h2>Introduction to Postman</h2>
<ul><li>Install: <a href="https://www.postman.com/" rel="nofollow">Postman</a> - A browser for working with APIs</li>
<li><a href="https://learning.postman.com/docs/introduction/overview/" rel="nofollow">Postman Documentation</a></li>
<li><a href="https://github.com/public-apis/public-apis" rel="nofollow">List of Public APIs</a></li>
<li><a href="https://gist.github.com/acidtone/673dfc5c11ce06e9e8cd6ce33609eb3c" rel="nofollow">REST APIs: Practice endpoints</a></li></ul>
<h3 id="notes"><a aria-hidden="true" tabindex="-1" href="#notes"><span class="icon icon-link"></span></a>Notes</h3>
<ul><li>Postman is used for testing API endpoints</li>
<li>Use it to fetch data and verify it’s structure</li>
<li>Develop queries that can be used in your applications</li></ul>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Lab Activity</h2>
<ul><li>Query Data from a public api of your choosing<ul><li>find a public api that is interesting to you and easy(ish) to use</li></ul></li>
<li>Use Postman to query the data<ul><li>query data 5 times, try to get more specific with each query</li></ul></li>
<li>Document your process and the queries that you used.</li></ul>`;
    }
  })}`;
});
export {
  _01_day_1 as default,
  metadata
};
