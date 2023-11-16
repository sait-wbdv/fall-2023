import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Assignment 6 - Reactivity and Events",
  "type": "assignment",
  "points": 10
};
const Activity_6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Reactivity is a key feature of web frameworks. Create a svelte app that updates data and uses component events.</p>
<ol><li>Scaffold a new sveltekit app</li>
<li>On the index page, create an array of objects and render it to the page<ul><li>then add input fields for new values to be added</li>
<li>set up a button that will add the values to the array and update the DOM</li>
<li>use an event modifier (you can use a second button for this example if it makes more sense)</li></ul></li>
<li>Create a component that <strong>dispatches</strong> an event<ul><li>The event should cause some change to render on the page</li>
<li>The event should be made on the parent component or page and passed to an inner component</li></ul></li>
<li>Create another component that wraps around the component in step 3<ul><li>The outer component should be a feature component</li>
<li>Also use a prop on the outer component (something simple like a title is fine)</li>
<li><strong>(optional extra challenge)</strong> pass all of the content into the outer component from the page</li></ul></li>
<li>Create an inline event handler (separate from the one with nested components)<ul><li>use this to cause minor and one time changes on a web page</li>
<li>examples are: to manipulate css, to toggle content, passive events</li></ul></li></ol>
<hr>
<h2 id="marking-rubric"><a aria-hidden="true" tabindex="-1" href="#marking-rubric"><span class="icon icon-link"></span></a>Marking Rubric</h2>
<p>Each of the following will be <strong>worth 2 points for a total of 10 points</strong>:</p>
<h3 id="reactivity-and-data-updates"><a aria-hidden="true" tabindex="-1" href="#reactivity-and-data-updates"><span class="icon icon-link"></span></a>Reactivity and Data Updates</h3>
<ul><li>Data updates and renders its respective updates</li>
<li>Up to date syntax is used</li></ul>
<h3 id="functions"><a aria-hidden="true" tabindex="-1" href="#functions"><span class="icon icon-link"></span></a>Functions</h3>
<ul><li>Code is organized into specific functions</li>
<li>Functions are designed in a reusable way</li></ul>
<h3 id="inline-event-handler"><a aria-hidden="true" tabindex="-1" href="#inline-event-handler"><span class="icon icon-link"></span></a>Inline Event Handler</h3>
<ul><li>Correct syntax is used</li>
<li>The use case is something that would likely be used only once</li></ul>
<h3 id="component-event-dispatch"><a aria-hidden="true" tabindex="-1" href="#component-event-dispatch"><span class="icon icon-link"></span></a>Component Event Dispatch</h3>
<ul><li>A function is executed using dispatch</li></ul>
<h3 id="readme-and-general-requirements"><a aria-hidden="true" tabindex="-1" href="#readme-and-general-requirements"><span class="icon icon-link"></span></a>Readme and General Requirements</h3>
<ul><li>Repo information</li>
<li>Search tearms are documented</li></ul>
<hr>
<p><strong>Points will be deducted for</strong>:</p>
<ul><li>Syntax and logic errors</li>
<li>Poor naming conventions</li>
<li>Broken code</li></ul>
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
<li>A link to the deployed site;</li>
<li><strong>(new)</strong> Search research notes:<ul><li>for 1-3 things that you needed to look up, document and optimize your search</li>
<li><a href="https://gist.github.com/lilyx13/4a2f49d1cdb29cfc624ef22c6ccedafe" rel="nofollow">Use this document as a guide</a></li></ul></li>
<li>List the author and links to any Attributions for code and/or assets you used that are not your own;</li></ul></li>
<li>Follow guidelines in <a href="https://gist.github.com/acidtone/d77059ec1851eff266339a3df70f6984" rel="nofollow">Files and Directories - Naming Conventions</a></li></ul>`;
});
export {
  Activity_6 as default,
  metadata
};
