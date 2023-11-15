import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Assignment 2 - SkeletonUI Layouts",
  "type": "assignment",
  "points": 15
};
const Assignment_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>In this assignment, you will deploy a responsive SvelteKit website with SkeletonUI layout components.</p>
<ol><li>has three routes (pages) with 1 custom component (used to render a list)</li>
<li>has a primary layout (on 2 pages) and a secondary layout (3rd page)</li>
<li>uses SkeletonUI design tokens for styling</li></ol>
<p>The website should be made with placeholder content, the focus is on layout and multipage organization.</p>
<hr>
<h2 id="marking-rubric"><a aria-hidden="true" tabindex="-1" href="#marking-rubric"><span class="icon icon-link"></span></a>Marking Rubric</h2>
<p>The following will be <strong>worth a total of 15 points</strong>:</p>
<h3 id="5-points-primary-layout"><a aria-hidden="true" tabindex="-1" href="#5-points-primary-layout"><span class="icon icon-link"></span></a>5 points: Primary layout</h3>
<ul><li>Following the guides on SkeletonUI and Svelte, the index and 1 other page should use the same layout</li>
<li><code>&lt;slot /&gt;</code> is used to render the route content in the layout</li>
<li>Use 3 of skeleton’s layout components to create a familiar website layout (header, footer, nav)</li></ul>
<h3 id="5-points---secondary-layout"><a aria-hidden="true" tabindex="-1" href="#5-points---secondary-layout"><span class="icon icon-link"></span></a>5 points - Secondary Layout</h3>
<ul><li>Also follows conventions set out by SkeletonUI and Svelte</li>
<li>Used to render 1 other route</li>
<li>Distinct from the other layout</li></ul>
<h3 id="5-points-design-tokens-custom-component-and-content"><a aria-hidden="true" tabindex="-1" href="#5-points-design-tokens-custom-component-and-content"><span class="icon icon-link"></span></a>5 points: Design tokens, custom component, and content</h3>
<ul><li>A custom component is used to stylize and render an array of content (A simple list is fine)</li>
<li>the SkeletonUI Design color system is used instead of normal hex codes</li>
<li>tailwind classes are used instead of vanilla</li>
<li><strong>lorem ipsum</strong> type content used throughout the page, it should look like a template</li></ul>
<hr>
<p><strong>Points will be deducted for</strong>:</p>
<ul><li>violations of accessibility, usability and SvelteKit best practices;</li>
<li>pages that are incomplete or of low fidelity;</li>
<li>projects that aren’t deployed (3 point deduction);</li>
<li>syntax errors,</li>
<li>logic errors,</li>
<li>not following js basics as learned in the course</li></ul>
<hr>
<h2 id="submission-instructions"><a aria-hidden="true" tabindex="-1" href="#submission-instructions"><span class="icon icon-link"></span></a>Submission Instructions</h2>
<ul><li>Push this assignment to a GitHub repo named <code>cpnt262-a6</code> and deploy to Vercel or similar platform;</li>
<li>ZIP all files required for the site to operate and submit to Brightspace;</li>
<li>Include the following as a comment in your Brightspace submission:<ul><li>GH repo</li>
<li>Live deploy link</li></ul></li></ul>
<h3 id="submission-requirements"><a aria-hidden="true" tabindex="-1" href="#submission-requirements"><span class="icon icon-link"></span></a>Submission requirements</h3>
<p>Points will be deducted for failing to fulfill the following:</p>
<ul><li>Include a <code>README.md</code> in your project that contains the following information:<ul><li>Course title;</li>
<li>Assignment name;</li>
<li>Author name;</li>
<li>A link to the Netlify site;</li>
<li><strong>(new)</strong> Search research notes:<ul><li>for 1-3 things that you needed to look up, document and optimize your search</li>
<li><a href="https://gist.github.com/lilyx13/4a2f49d1cdb29cfc624ef22c6ccedafe" rel="nofollow">Use this document as a guide</a></li></ul></li>
<li>List the author and links to any Attributions for code and/or assets you used that are not your own;</li></ul></li>
<li>Follow guidelines in <a href="https://gist.github.com/acidtone/d77059ec1851eff266339a3df70f6984" rel="nofollow">Files and Directories - Naming Conventions</a></li></ul>`;
});
export {
  Assignment_2 as default,
  metadata
};
