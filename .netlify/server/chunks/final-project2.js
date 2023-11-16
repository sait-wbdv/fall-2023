import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Final Project - Three-page Website",
  "type": "assignment",
  "points": 30
};
const Final_project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>In this assignment, you will use all the knowledge learned in this course to deploy a multi-page static website based on a topic of your choice.</p>
<h2 id="base-requirements"><a aria-hidden="true" tabindex="-1" href="#base-requirements"><span class="icon icon-link"></span></a>Base Requirements</h2>
<p>All pages and code in this assignment will be graded against the following requirements (see past Assignments for details), in addition to the specific rubric category requirements: </p>
<ul><li>Accessibility</li>
<li>Responsiveness</li>
<li>Code quality and readability</li>
<li>Project README with:<ul><li>Course and assignment information</li>
<li>Author name</li>
<li>Attributions</li></ul></li></ul>
<hr>
<h2 id="marking-rubric"><a aria-hidden="true" tabindex="-1" href="#marking-rubric"><span class="icon icon-link"></span></a>Marking Rubric</h2>
<p>The following criteria will be worth a <strong>total of 30 points</strong>.</p>
<h3 id="5-points-image-gallery"><a aria-hidden="true" tabindex="-1" href="#5-points-image-gallery"><span class="icon icon-link"></span></a>5 Points: Image gallery</h3>
<p>A gallery of image-based cards such as a product list on an online store, players on a sports team, movies playing in a theatre, etc.</p>
<ul><li>At least 9 cards</li>
<li>2-4 per items row on desktop; 1 per row on mobile;</li>
<li>Cards entirely clickable like in Assignment 2;</li>
<li>Each item card must include an image, title and details/description;<ul><li>Images must be locally hosted. For example, Lorem Picsum or other absolute web links not permitted;</li>
<li>Images can either be HTML or CSS images;</li></ul></li>
<li>Link can go to external website.</li></ul>
<h3 id="5-points-locally-hosted-image-files"><a aria-hidden="true" tabindex="-1" href="#5-points-locally-hosted-image-files"><span class="icon icon-link"></span></a>5 Points: Locally hosted image files</h3>
<ul><li>Image files stored in a dedicated <code>images</code> directory next to your <code>css</code> directory;</li>
<li>Open-source or your own images that match the topic of your project (if possible);</li>
<li>Proper file and directory naming conventions;</li>
<li>File resolutions/sizes appropriate for use in a thumbnail gallery.</li></ul>
<h3 id="10-points-additional-pages"><a aria-hidden="true" tabindex="-1" href="#10-points-additional-pages"><span class="icon icon-link"></span></a>10 Points: Additional pages</h3>
<p>At least two pages of your choice in addition to the Gallery page to make up a three-page website. You must incorporate <strong>at least three</strong> of the following page elements, in total:</p>
<ul><li><strong>Contact form</strong> driven by <a href="https://formspree.io/" rel="nofollow">Formspree</a> or similar service;</li>
<li><strong>Hero section</strong> and call to action containing at least <strong>two</strong> image elements such as:<ul><li>CSS background image, </li>
<li>HTML image,</li>
<li>CSS gradient</li></ul></li>
<li><strong>Blog post</strong> containing:<ul><li>Level 2 and level 3 headings (in addition to level 1 page title);</li>
<li>At least one list, either bulleted or numbered;</li>
<li>at least 200 words of your own text (no lorem ipsum or text copied from openly licensed sources);</li></ul></li>
<li>A <strong>1x3 card block</strong>: one row of three cards on desktop (one column of 3 rows on mobile);</li>
<li><strong>Embedded video</strong> in an <code>&lt;iframe&gt;</code> with proper labels/context (i,e, headings and description) and attributions;</li></ul>
<p><strong>Important</strong>: Duplication of CSS across your pages should be minimized. Separate your CSS into logical files based on which pages need them. For example, your CSS directory could look like this:</p>
<ul><li><code>main.css</code></li>
<li><code>fonts.css</code></li>
<li><code>about.css</code></li>
<li><code>gallery.css</code></li>
<li><code>home-page.css</code></li></ul>
<h3 id="5-points-global-layout-elements"><a aria-hidden="true" tabindex="-1" href="#5-points-global-layout-elements"><span class="icon icon-link"></span></a>5 points: Global layout elements</h3>
<p>The following persistent layout elements must exist on every page of the project: </p>
<ul><li>Global page banner with logo and site title</li>
<li>Global Navigation<ul><li>Current page highlighted and obvious to the user;</li>
<li>Hover effects added to navigation links;</li>
<li>Mobile navigation menu (can be a vertical menu);</li></ul></li>
<li>Footer with:<ul><li>@copy; 2022 [Team name]</li>
<li>Doormat navigation (see: <a href="https://www.nngroup.com/articles/footers/" rel="nofollow">Footers 101: Design Patterns and When to Use Each</a>)<ul><li>Primary navigation should be duplicated in footer but should not look like primary navigation.</li></ul></li></ul></li></ul>
<h3 id="5-points-above-and-beyond"><a aria-hidden="true" tabindex="-1" href="#5-points-above-and-beyond"><span class="icon icon-link"></span></a>5 points: Above and Beyond</h3>
<p>Incorporate <strong>one of the following</strong> techniques that were not covered in class:</p>
<ul><li><strong>Sticky footer</strong>: when a page doesn’t have enough content to fill the page, the footer should still sit at the bottom of the page.<ul><li>Note: one of your pages should be short enough to show the footer “sticking” to the bottom of the page;</li></ul></li></ul>
<p><strong>OR</strong></p>
<ul><li><strong>Mobile hamburger menu toggle</strong>: A CSS-only (you can use Javascript, if desired) button that shows and hides your global navigation on mobile screens.</li></ul>
<p><strong>OR</strong></p>
<ul><li>Your instructor is open to suggestions…</li></ul>
<hr>
<h2 id="submission-requirements"><a aria-hidden="true" tabindex="-1" href="#submission-requirements"><span class="icon icon-link"></span></a>Submission Requirements</h2>
<ul><li>Push this assignment to a GitHub repo named <code>cpnt260-final-project</code> and enable GitHub Pages;</li>
<li>ZIP all files required for the site to operate and submit to Brightspace;</li>
<li>Include the following as a comment in your Brightspace submission:<ul><li>GH repo</li>
<li>GH Pages site</li></ul></li></ul>`;
});
export {
  Final_project as default,
  metadata
};
