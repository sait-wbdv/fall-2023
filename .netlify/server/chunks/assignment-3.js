import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Assignment 3 - Tailwind in a Branch",
  "excerpt": "In this assignment, you will demonstrate your knowledge of TailwindCSS.",
  "points": 20,
  "type": "assignment",
  "status": "published"
};
const Assignment_3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="instructions"><a aria-hidden="true" tabindex="-1" href="#instructions"><span class="icon icon-link"></span></a>Instructions</h2>
<p>Use TailwindCSS to style a web page. You can use the code from a previous assignment or write new code, either is acceptable. Practice using this utility class framework to either recreate the styles that you made in vanilla css or try building content from scratch.</p>
<p><strong>If you use code from a previous assignment, it must be copied into a new repo for this assignment</strong></p>
<p>For this assignment you will be <a href="https://tailwindcss.com/docs/installation/play-cdn" rel="nofollow">installing TailwindCSS via a CDN</a>.</p>
<h2 id="constraints"><a aria-hidden="true" tabindex="-1" href="#constraints"><span class="icon icon-link"></span></a>Constraints</h2>
<ul><li>Assignment criteria must be implemented using TailwindCSS utility classes and modifiers.</li>
<li>Your work should not be trivial. Using Tailwind classes and modifiers that create basic effects on the page may not earn full marks.</li>
<li>Use Tailwind to create practical effects that would be used in a real web project. </li></ul>
<hr>
<h2 id="marking-criteria"><a aria-hidden="true" tabindex="-1" href="#marking-criteria"><span class="icon icon-link"></span></a>Marking Criteria</h2>
<p><strong>Each of the following requirements will be worth 4 points</strong> for a total of 20 points.</p>
<h3 id="1-accessible-text"><a aria-hidden="true" tabindex="-1" href="#1-accessible-text"><span class="icon icon-link"></span></a>1. Accessible Text</h3>
<p>Use Tailwind classes to create an accessible block of long-form text:</p>
<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> Increase the default font size to more than the default <code>16px</code></li>
<li class="task-list-item"><input type="checkbox" disabled> Increase the line-height to more than the default <code>1.2</code></li>
<li class="task-list-item"><input type="checkbox" disabled> Limit the maximum line length on wide screens</li>
<li class="task-list-item"><input type="checkbox" disabled> Set a text colour and background colour while preserving AA contrast ratio</li>
<li class="task-list-item"><input type="checkbox" disabled> Centre the text on the screen on wide screens</li>
<li class="task-list-item"><input type="checkbox" disabled> Ensure that headings and paragraphs are spaced appropriately</li></ul>
<h3 id="2-pseudo-classes"><a aria-hidden="true" tabindex="-1" href="#2-pseudo-classes"><span class="icon icon-link"></span></a>2. Pseudo-classes</h3>
<p>Use at least THREE Tailwind modifiers to conditionally activate a utility class. Popular examples:</p>
<ul><li><a href="https://tailwindcss.com/docs/hover-focus-and-other-states#hover" rel="nofollow"><code>hover:</code></a></li>
<li><a href="https://tailwindcss.com/docs/hover-focus-and-other-states#checked" rel="nofollow"><code>checked:</code></a></li>
<li><a href="https://tailwindcss.com/docs/hover-focus-and-other-states#empty" rel="nofollow"><code>empty:</code></a></li>
<li><a href="https://tailwindcss.com/docs/hover-focus-and-other-states#first" rel="nofollow"><code>first:</code></a></li>
<li><a href="https://tailwindcss.com/docs/hover-focus-and-other-states#last" rel="nofollow"><code>last:</code></a></li>
<li><a href="https://tailwindcss.com/docs/hover-focus-and-other-states#only" rel="nofollow"><code>only:</code></a></li>
<li><a href="https://tailwindcss.com/docs/hover-focus-and-other-states#even" rel="nofollow"><code>even:</code></a>/<a href="https://tailwindcss.com/docs/hover-focus-and-other-states#odd" rel="nofollow"><code>odd:</code></a>,</li>
<li>etc.</li></ul>
<p>See the <a href="https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-class-reference" rel="nofollow">Pseudo-class Reference</a> for a complete list of available pseudo-classes.</p>
<h3 id="3-layouts"><a aria-hidden="true" tabindex="-1" href="#3-layouts"><span class="icon icon-link"></span></a>3. Layouts</h3>
<p>Use <a href="https://tailwindcss.com/docs/flex" rel="nofollow">Flexbox</a> or <a href="https://tailwindcss.com/docs/grid-template-columns" rel="nofollow">CSS Grid</a> with Tailwind to create a layout such as:</p>
<ul><li>Horizontal nav bar</li>
<li>Image gallery</li>
<li>Hero section</li>
<li>etc.</li></ul>
<h3 id="4-media-queries"><a aria-hidden="true" tabindex="-1" href="#4-media-queries"><span class="icon icon-link"></span></a>4. Media Queries</h3>
<p>Use <a href="https://tailwindcss.com/docs/responsive-design" rel="nofollow">responsive media queries</a> to make at least one <em>mobile-first breakpoint</em> (i.e. use <code>lg:</code> instead of <code>sm:</code>) that conditionally changes the presentation of your page, such as:</p>
<ul><li>Create a mobile nav menu button</li>
<li>Change a full-page layout (i.e. create a side nav bar on desktop devices)</li>
<li>Make font size and margin/padding larger on desktop screens</li></ul>
<p>Full marks will be given for work that is not trivial and represents media query effects that would be used in an actual production website.</p>
<h3 id="5-git-branch"><a aria-hidden="true" tabindex="-1" href="#5-git-branch"><span class="icon icon-link"></span></a>5. Git Branch</h3>
<p>Demonstrate your knowledge of Git branches by doing your work in a branch called <code>201-a3</code>.</p>
<ol><li>Push this branch to GitHub</li>
<li>Merge your <code>201-a3</code> branch into <code>main</code> so they are in sync</li>
<li>Publish your <code>main</code> branch to GitHub Pages.</li></ol>
<hr>
<h2 id="submission-requirements"><a aria-hidden="true" tabindex="-1" href="#submission-requirements"><span class="icon icon-link"></span></a>Submission Requirements</h2>
<ul><li>Add a <code>README.md</code> file to the root of your project that contains:<ul><li>your name</li>
<li>course and assignment number</li>
<li>link to deployed github page</li>
<li>link to github repo</li>
<li>attributions to assets</li></ul></li>
<li>Push this assignment to a GitHub repo named <code>cpnt201-a3</code> and enable GitHub Pages;</li>
<li>ZIP all files required for the site to operate and submit to Brightspace;</li>
<li>Include links to the following as a comment in your Brightspace submission:<ul><li>GH repo</li>
<li>Direct link to your <code>201-a3</code> branch</li>
<li>GH Pages site</li></ul></li></ul>`;
});
export {
  Assignment_3 as default,
  metadata
};
