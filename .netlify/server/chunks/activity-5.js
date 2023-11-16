import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Assignment 5 - Components and Props",
  "type": "assignment",
  "points": 10
};
const Activity_5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>In this assignment, you will create a SvelteKit route that displays a single, clickable card on the page which:</p>
<ol><li>imports an object containing card data from an external file;</li>
<li>imports a <code>&lt;Card&gt;</code> component from an external file;</li>
<li>displays the card data by declaring <code>&lt;Card&gt;</code> props.</li></ol>
<p>The card can contain information based on a topic of your choice.</p>
<hr>
<h2 id="marking-rubric"><a aria-hidden="true" tabindex="-1" href="#marking-rubric"><span class="icon icon-link"></span></a>Marking Rubric</h2>
<p>Each of the following will be <strong>worth 2 points for a total of 10 points</strong>:</p>
<h3 id="page-route"><a aria-hidden="true" tabindex="-1" href="#page-route"><span class="icon icon-link"></span></a>Page route</h3>
<p>Create a route in a SvelteKit project that contains a valid <code>+page.svelte</code> file which:</p>
<ul><li>is displayed with header navigation and a footer using a root <code>+layout.svelte</code> page;</li>
<li>imports card data from an external file (see below);</li>
<li>displays the imported card information using an imported <code>&lt;Card /&gt;</code> component (see below).</li></ul>
<h3 id="card-component"><a aria-hidden="true" tabindex="-1" href="#card-component"><span class="icon icon-link"></span></a>Card component</h3>
<p>Create a <code>/src/lib/components/Card.svelte</code> file that accepts the above card data as a prop and displays:</p>
<ul><li>the title a heading;</li>
<li>the description inside a paragraph or figcaption;</li>
<li>a locally hosted image with a proper <code>alt</code> attribute.</li></ul>
<p>The entire card should be clickable and link to the external website url provided.</p>
<h3 id="card-data"><a aria-hidden="true" tabindex="-1" href="#card-data"><span class="icon icon-link"></span></a>Card data</h3>
<p>Create a <code>/src/lib/data.js</code> file that exports (using the <code>export</code> keyword) an object that contains information for your card, including:</p>
<ul><li>title;</li>
<li>description;</li>
<li>image <code>src</code> information needed to link to an image file in <code>/static/images</code>;</li>
<li>external website url to link to.</li></ul>
<h3 id="prop-declaration"><a aria-hidden="true" tabindex="-1" href="#prop-declaration"><span class="icon icon-link"></span></a>Prop declaration</h3>
<p>In <code>+page.svelte</code>, display the card by passing the imported card data to the <code>&lt;Card /&gt;</code> component as a prop so that:</p>
<ul><li>no <code>undefined</code> fields are displayed on the card;</li>
<li>if card data is <code>undefined</code>, the card does not display.</li></ul>
<h3 id="multiple-cards"><a aria-hidden="true" tabindex="-1" href="#multiple-cards"><span class="icon icon-link"></span></a>Multiple Cards</h3>
<p>2 points are available if you display multiple cards on the page by:</p>
<ul><li>importing an array of objects in <code>/src/lib/data.js</code> instead of one object;</li>
<li>displaying each card using an <code>{#each}</code> loop.</li></ul>
<hr>
<p><strong>Points will be deducted for</strong>:</p>
<ul><li>violations of accessibility, usability and SvelteKit best practices;</li>
<li>a page that is incomplete or of low fidelity;</li>
<li>projects that aren’t deployed (3 point deduction);</li>
<li>syntax errors,</li>
<li>logic errors,</li>
<li>not following the guidelines in <a href="https://sait-wbdv.github.io/slides/w23/cpnt-262/js-introduction.html" rel="nofollow">Javascript Basics</a>, starting at <a href="https://sait-wbdv.github.io/slides/w23/cpnt-262/js-introduction.html#/9" rel="nofollow">Slide 9</a>.</li></ul>
<hr>
<h2 id="submission-instructions"><a aria-hidden="true" tabindex="-1" href="#submission-instructions"><span class="icon icon-link"></span></a>Submission Instructions</h2>
<ul><li>Push this assignment to a GitHub repo named <code>cpnt262-a7</code> and deploy to Vercel or similar platform;</li>
<li>ZIP all files required for the site to operate and submit to Brightspace;</li>
<li>Include the following as a comment in your Brightspace submission:<ul><li>GH repo</li>
<li>Live deploy link</li></ul></li></ul>
<h3 id="submission-requirements"><a aria-hidden="true" tabindex="-1" href="#submission-requirements"><span class="icon icon-link"></span></a>Submission requirements</h3>
<p>Points will be deducted for failing to fulfill the following:</p>
<ul><li>Include a <code>README.md</code> in your project that contains the following information:<ul><li>Course title;</li>
<li>Assignment name;</li>
<li>Author name;</li>
<li>A link to the GH Pages site;</li>
<li><strong>(new)</strong> Search research notes:<ul><li>for 1-3 things that you needed to look up, document and optimize your search</li>
<li><a href="https://gist.github.com/lilyx13/4a2f49d1cdb29cfc624ef22c6ccedafe" rel="nofollow">Use this document as a guide</a></li></ul></li>
<li>List the author and links to any Attributions for code and/or assets you used that are not your own;</li></ul></li>
<li>Follow guidelines in <a href="https://gist.github.com/acidtone/d77059ec1851eff266339a3df70f6984" rel="nofollow">Files and Directories - Naming Conventions</a></li></ul>`;
});
export {
  Activity_5 as default,
  metadata
};
