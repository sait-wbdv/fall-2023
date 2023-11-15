import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Assignment 1 - Bring a webpage to life",
  "excerpt": "Use your knowledge from the first 4 activities to add functionality to a webpage. In particular, use functions to create maintainable and well organized code",
  "points": 20,
  "type": "assignment"
};
const Assignment_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Overview</h2>
<p>For this assignment, you will create a full html web page that uses minimal styling. The main focus is to create interactive content by way of toggles and other types of user input. This assignment is functionally a summary of CPNT-260 and the first half of CPNT-262 as your html and css is required to be well written and following industry conventions.</p>
<p>For a topic, you can use any concept you like and you are welcome to reuse html and css from CPNT-260 assignments; however, a new repository is required (note copied content in your commit message).</p>
<p>The objective of this assignment is to be a final chance to sharpen and demonstrate your understanding of javascript syntax and general programming concepts.</p>
<h2>Instructions</h2>
<ol><li>In a new Github repo, create a webpage.<ul><li>Text and image content can all be placeholders like lorem ipsum, but the images do need to be optimized and stored in an <code>assets/images/</code> directory</li>
<li>Minor Color and Typography theming is required (ie: minimal noted styles in DSGN-270 assignments)<ul><li>2 typefaces</li>
<li>2 colors + a shade of black and white to be used consistently</li></ul></li>
<li>For the navigation bar, use anchor tags that scroll down the page (3-5 headings)</li>
<li>there should be a header and footer</li>
<li>there should be a 3 card layout or 9 image gallery (generated with JS in step 2)</li>
<li>There should be 2 types of input fields (text, checkboxes, radio buttons)</li>
<li>There should be a button (that’s not part of a form/input fields)</li></ul></li>
<li>Render your cards or images from an array of objects<ul><li>use javascript to generate your card or image layout</li></ul></li>
<li>Add 2 toggles<ul><li>for example:<ul><li>navigation mobile menu toggle</li>
<li>classList toggle</li>
<li>hide/show an info box</li></ul></li></ul></li>
<li>In your readme, outline the features that you have implemented and their respective line numbers in your <code>client.js</code> file</li></ol>
<h2>Rubric</h2>
<h3 id="5-points-html-web-page"><a aria-hidden="true" tabindex="-1" href="#5-points-html-web-page"><span class="icon icon-link"></span></a>5 Points: HTML Web Page</h3>
<ul><li>A web page with nav, header, 3-5 sections, and footer</li>
<li>Use of Semantic HTML</li>
<li>Code indentation</li>
<li>Minimal styling is applied and functions as expected</li>
<li>CSS manipulated at least once with javascript</li></ul>
<h3 id="5-points-card-or-gallery-layout"><a aria-hidden="true" tabindex="-1" href="#5-points-card-or-gallery-layout"><span class="icon icon-link"></span></a>5 Points: Card or Gallery Layout</h3>
<ul><li>Images or cards are rendered from a javascript array of objects</li>
<li>Image assets are stored in an <code>assets/images</code> directory</li>
<li>A loop is used to render your content</li></ul>
<h3 id="5-points-toggles"><a aria-hidden="true" tabindex="-1" href="#5-points-toggles"><span class="icon icon-link"></span></a>5 Points: Toggles</h3>
<ul><li>There are 2 working toggles</li>
<li>Conditionals are used</li>
<li>Page doesn’t refresh on click</li>
<li>They are written as functions</li></ul>
<h3 id="5-points-readme-and-general-requirements"><a aria-hidden="true" tabindex="-1" href="#5-points-readme-and-general-requirements"><span class="icon icon-link"></span></a>5 Points: README and General Requirements</h3>
<ul><li>README contains information about bugs that you ran into and what their solution was (and sources that helped you)</li>
<li>Code is well commented</li>
<li>JS is in ‘use strict’ mode</li>
<li>Code indentation and whitespace has been well organized</li>
<li>Minimal error handling is used in functions</li>
<li>Code has been pushed in at least 4 commits with descriptive and accurate commit messages</li></ul>
<h2>Submission Instructions</h2>
<ol><li>As a comment in D2L: share links to make it easy for the instructor to quickly evaluate your work:<ul><li>GH repos, Pages, Projects (Beta), etc.</li>
<li>Codepens, Figma, FigJam, etc.</li></ul></li>
<li>Double check the Activity for specific instructions.</li>
<li>If applicable, include a README containing the following;<ul><li>Activity name and author;</li>
<li>Attributions: Did anyone help you? Give credit to any classmates, articles, tutorials, etc that helped you complete this project.</li>
<li>Include self-assessments, observations, research, etc under the heading “Code Journal” in your README.</li></ul></li>
<li>Zip project repo and submit it.</li></ol>`;
});
export {
  Assignment_1 as default,
  metadata
};
