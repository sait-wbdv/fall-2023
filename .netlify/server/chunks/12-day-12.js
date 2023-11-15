import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Svelte Components",
  "excerpt": null,
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _12_day_12 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="syntax"><a aria-hidden="true" tabindex="-1" href="#syntax"><span class="icon icon-link"></span></a>Syntax</h3>
<ul><li><a href="https://kim-jangwook.medium.com/best-practices-for-organizing-and-structuring-svelte-applications-5f85a3d5a6f5" rel="nofollow">Best Practices for Organizing Svelte Applications</a></li></ul>
<h3 id="documentation"><a aria-hidden="true" tabindex="-1" href="#documentation"><span class="icon icon-link"></span></a>Documentation</h3>
<ul><li><a href="https://svelte.dev/docs#template-syntax-if" rel="nofollow">if blocks</a></li>
<li><a href="https://svelte.dev/docs#template-syntax-each" rel="nofollow">each blocks</a></li></ul>
<h3 id="tutorials"><a aria-hidden="true" tabindex="-1" href="#tutorials"><span class="icon icon-link"></span></a>Tutorials</h3>
<ul><li><a href="https://learn.svelte.dev/tutorial/nested-components" rel="nofollow">Nested components</a></li></ul>
<p><strong>Logic</strong></p>
<ul><li><a href="https://svelte.dev/tutorial/if-blocks" rel="nofollow">if blocks</a></li>
<li><a href="https://svelte.dev/tutorial/else-blocks" rel="nofollow">else blocks</a></li>
<li><a href="https://svelte.dev/tutorial/else-if-blocks" rel="nofollow">else-if blocks</a></li>
<li><a href="https://svelte.dev/tutorial/each-blocks" rel="nofollow">each blocks</a></li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<hr>
<h2 id="components">Componentization</h2>
- A high level view of what components are in front end frameworks:
	- make code maintainable
	- pass variables into one another
	- manages logic
<hr>
<h2 id="svelte-component-syntax">Svelte&#39;s Component Syntax</h2>
<ul><li><a href="https://learn.svelte.dev/tutorial/nested-components" rel="nofollow">Nested components</a></li>
<li>import components like \`import Nested from ‘./Nested.svelte’</li>
<li>use the component on the page (or layout or other component) with PasCal case and a self closing tag. ie: <code>&lt;Nested /&gt;</code></li></ul>
<h2 id="layout-component-refactor">Layout Components</h2>
- We will walk through creating the following components:
	- header
	- nav
	- footer
- then we can use these in a layout
<h3 id="key-takeaways"><a aria-hidden="true" tabindex="-1" href="#key-takeaways"><span class="icon icon-link"></span></a>Key Takeaways</h3>
<ul><li><p>By convention, we place non-route components in <code>/src/lib/components</code></p></li>
<li><p>Components can be imported using the <code>$lib</code> shortcut:</p>
<ul><li><code>$lib</code> points to <code>/src/lib</code> by default;</li></ul></li>
<li><p>We can <code>import</code> a component using <code>$lib</code>:</p>
<pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token comment">&lt;!-- /routes/+layout.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">"$lib/components/Header.svelte"</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token punctuation">/></span></span></code>`}<!-- HTML_TAG_END --></pre></li></ul>
<h3 id="materials"><a aria-hidden="true" tabindex="-1" href="#materials"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://joyofcode.xyz/sveltekit-window-is-not-defined" rel="nofollow">How To Deal With “Window Is Not Defined” In SvelteKit</a></li></ul>
<hr>
<h2 id="scrum-meeting">Scrum Session</h2>
<ul><li>Check in with each other:<ul><li>what have you been working on?</li>
<li>what do you plan to be doing?</li>
<li>do you have any blocks?</li></ul></li></ul>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {})}`;
});
export {
  _12_day_12 as default,
  metadata
};
