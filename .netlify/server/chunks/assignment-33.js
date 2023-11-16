import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Final Project - Multi-page Website with Gallery (In Pairs)",
  "type": "assignment",
  "points": 25
};
const Assignment_3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>In this assignment, you will deploy a multi-page SvelteKit website based on a topic of your partner and your choice. Site images and text should reflect the intention of the site (no lorem ipsum).</p>
<hr>
<h2 id="marking-rubric"><a aria-hidden="true" tabindex="-1" href="#marking-rubric"><span class="icon icon-link"></span></a>Marking Rubric</h2>
<p>Each of the following will be <strong>worth 5 points for a total of 25 points</strong>:</p>
<h3 id="1-imported-gallery-data"><a aria-hidden="true" tabindex="-1" href="#1-imported-gallery-data"><span class="icon icon-link"></span></a>1. Imported gallery data</h3>
<p>Create a <code>/src/lib/data.js</code> file (name should be more descriptive to your content) that exports (using the <code>export</code> keyword) an <strong>array</strong> of at least 9 <strong>objects</strong> that contain information for an image-based gallery.</p>
<p>Each object should contain enough detailed information about your items to provide summary information in your gallery and detailed information on your item pages.</p>
<h3 id="2-gallery-list-entry-page"><a aria-hidden="true" tabindex="-1" href="#2-gallery-list-entry-page"><span class="icon icon-link"></span></a>2. Gallery list entry page</h3>
<p>Create a dynamic gallery page that is driven from an <code>{#each}</code> loop of the imported data above. Each gallery card should contain:</p>
<ul><li>the title as a heading;</li>
<li>the description inside a paragraph or figcaption;</li>
<li>a locally hosted (in <code>/static</code>) thumbnail image that:<ul><li>has a proper <code>alt</code> attribute, and</li>
<li>links to an appropriately sized image (less than 500px).</li></ul></li></ul>
<p>The entire card should be clickable and link to a more detailed item page (see below).</p>
<p>Additionally, the gallery page should:</p>
<ul><li>contain a custom page title using <code>&lt;svelte:head&gt;</code>;</li>
<li>contain all page-level CSS specific to the route;</li>
<li>display its cards using an imported <code>Card.svelte</code> component with defined props.</li></ul>
<h3 id="3-dynamic-gallery-item-route"><a aria-hidden="true" tabindex="-1" href="#3-dynamic-gallery-item-route"><span class="icon icon-link"></span></a>3. Dynamic gallery item route</h3>
<p>Using route parameters, create a dynamic route that will display the details of each gallery item above. Each page should:</p>
<ul><li>include more details than the summary cards on the gallery pages;</li>
<li>be driven by the same imported data array as the gallery page;</li>
<li>include a large version of the thumbnail shown on the gallery page (also hosted in <code>/static</code>);</li>
<li>not show <code>undefined</code> values and show an “Item not found” message if invalid parameters are encountered.</li></ul>
<p>Additionally, each item page should contain:</p>
<ul><li>a custom page title based on the imported data using <code>&lt;svelte:head&gt;</code>;</li>
<li>all page-level CSS specific to the route.</li></ul>
<h3 id="4-third-party-library"><a aria-hidden="true" tabindex="-1" href="#4-third-party-library"><span class="icon icon-link"></span></a>4. Third-party library</h3>
<p>Create a proof-of-concept example on your site using <em>ONE</em> third-party library not covered in class such as:</p>
<ul><li>A date library such as <a href="https://day.js.org/" rel="nofollow">DayJS</a>.</li>
<li>A charting library such as <a href="https://www.npmjs.com/package/svelte-chartjs" rel="nofollow"><code>svelte-chartjs</code></a>.</li>
<li>Write your content in markdown with <a href="https://mdsvex.com/" rel="nofollow"><code>mdsvex</code></a> (this is the library that powers the SAIT WBDV website).</li></ul>
<p>You can find more in <a href="https://project-awesome.org/TheComputerM/awesome-svelte" rel="nofollow">Curated list of awesome Svelte resources</a> but your mileage may vary.</p>
<h3 id="5-partner-score"><a aria-hidden="true" tabindex="-1" href="#5-partner-score"><span class="icon icon-link"></span></a>5. Partner Score</h3>
<ul><li>Give your partner a score out of 5. Take into count the following:<ul><li>Communicates effectively</li>
<li>Finishes tasks in a timely manner</li>
<li>Stays in scope</li>
<li>Accountable</li>
<li>Pair Coding</li></ul></li></ul>
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
<ul><li>Push this assignment to a GitHub repo named <code>cpnt262-final-project</code> and deploy to Vercel or similar platform;</li>
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
  Assignment_3 as default,
  metadata
};
