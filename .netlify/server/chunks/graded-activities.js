import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Graded Activities",
  "excerpt": "These are smaller assignments that help develop the skills needed for success in the assignments",
  "type": "assignment",
  "points": 40,
  "status": "published"
};
const Graded_activities = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 id="graded-activities"><a aria-hidden="true" tabindex="-1" href="#graded-activities"><span class="icon icon-link"></span></a>Graded Activities</h1>
<p>Each of these activities are worth 10% of your final grade.</p>
<hr>
<h2>Visual Hierarchy Document Format</h2>
<ul><li>Overview: Format a provided document (it is an unformatted copy of the <a href="https://en.wikipedia.org/wiki/Visual_hierarchy" rel="nofollow">wikipedia article on visual hierarchy</a>).</li>
<li>Due Date: Friday September 8th, 2023 @ 11:59PM</li>
<li>Submit an exported doc file to the appropriate drop box in Brightspace (D2L)</li></ul>
<h3 id="instructions"><a aria-hidden="true" tabindex="-1" href="#instructions"><span class="icon icon-link"></span></a>Instructions</h3>
<ol><li>Copy <a href="https://docs.google.com/document/d/1BZccKb7_ia6K22nSlclfTY62eP1L2Fo2q6541lSoyIw/edit?usp=sharing" rel="nofollow">this google doc of the abovenoted wikipedia article</a> (you are welcome to use microsoft word instead of google docs)</li>
<li>Rename the article so that it includes your name in the filename. ie: Lastname Firstname - Visual Hierarchy Format Activity</li>
<li>Format the article by applying headings. Make sure to nest h2 in h1 and so on. Use the outline feature of the word processor to view the results of your formatting</li>
<li>Apply 5 different principles of visual hierarchy to your document. Get creative but focus on enhancing the visual hierarchy of the document</li>
<li>In a bulleted list under provided heading, write a 1-2 sentence description of what principle you used and why you chose it.</li></ol>
<h3 id="rubric"><a aria-hidden="true" tabindex="-1" href="#rubric"><span class="icon icon-link"></span></a>Rubric</h3>
<ul><li>5 points for properly applying and nesting headings</li>
<li>5 points for applying 5 different principles of visual hierarchy<ul><li>0.5 point per principle</li>
<li>0.5 point for bulleted description of how you used it (Note the heading at the bottom of the document)</li></ul></li></ul>
<hr>
<h2>SVG Logo Design</h2>
<p>Using Figma, create a simple and web friendly svg logo and render it on a live html site hosted on Github Pages.</p>
<h3 id="instructions-1"><a aria-hidden="true" tabindex="-1" href="#instructions-1"><span class="icon icon-link"></span></a>Instructions</h3>
<ol><li>In Figma, create a simple logo (it can be for anything)</li>
<li>Use at least 3 paths</li>
<li>Export your svg logo as an svg</li>
<li>Optimize the logo in <a href="https://jakearchibald.github.io/svgomg/" rel="nofollow">svgomg</a></li>
<li>Create a git repo and add an html page to it</li>
<li>Add the svg code to the html page inline</li>
<li>Add color (fill or stroke) to at least 1 path using css</li>
<li>Deplooy the html page to github pages</li></ol>
<h3 id="rubric-1"><a aria-hidden="true" tabindex="-1" href="#rubric-1"><span class="icon icon-link"></span></a>Rubric</h3>
<ul><li>5 points for your Logo SVG in Figma<ul><li>uses 3 distinct paths (can be booleaned)</li>
<li>250 to 400 pixels wide in your design space</li></ul></li>
<li><h2 id="5-points-for-logo-rendered-on-an-html-page"><a aria-hidden="true" tabindex="-1" href="#5-points-for-logo-rendered-on-an-html-page"><span class="icon icon-link"></span></a>5 points for Logo rendered on an html page</h2></li></ul>
<hr>
<h2>Card Component Design</h2>
<p>In Figma, create a reusable card component and use it to render content for 3 different cards on a medium resolution mockup.</p>
<h3 id="instructions-2"><a aria-hidden="true" tabindex="-1" href="#instructions-2"><span class="icon icon-link"></span></a>Instructions</h3>
<ol><li>In figma, design a card component</li>
<li>Use placeholder content to fill the card (image, text, title)</li>
<li>Make sure your card follows principles of visual hierarchy</li>
<li>Apply the card 3 times on a separate frame (using Figma’s component workflow)</li></ol>
<ul><li>the frame should be desktop sized with a 12 column grid</li></ul>
<ol start="5"><li>Export the frame with 3 cards as a png</li>
<li>Submit the exported frame and a link to your design space</li></ol>
<h3 id="rubric-2"><a aria-hidden="true" tabindex="-1" href="#rubric-2"><span class="icon icon-link"></span></a>Rubric</h3>
<ul><li>5 points for the component design<ul><li>demonstrates the design principles learned in class</li>
<li>paths are labelled appropriately</li>
<li>follows conventions of card design</li></ul></li>
<li>5 points for card usage<ul><li>applied 3 times with different content in each card</li>
<li>applied in a desktop size frame using a 12 column grid</li></ul></li></ul>
<hr>
<h2>Conduct a User Test</h2>
<h3 id="due-november"><a aria-hidden="true" tabindex="-1" href="#due-november"><span class="icon icon-link"></span></a>Due: November</h3>
<h3 id="instructions-3"><a aria-hidden="true" tabindex="-1" href="#instructions-3"><span class="icon icon-link"></span></a>Instructions</h3>
<ol><li>Pick a website to test (it can be yours or a live publically accessible site)</li>
<li>Pick 1 functionality or purpose of the site for a user to test</li>
<li>Find a volunteer to conduct a user test on a live website</li></ol>
<ul><li>The user should be from outside of class.</li>
<li>Make sure you have consent from your user to record them if you choose to do so.</li></ul>
<ol start="4"><li>Conduct your test:</li></ol>
<ul><li>First get the user to do a walk through of the home page, note the things they notice and any likes or dislikes</li>
<li>Second, ask them to do the task that you previously noted. Ask them to do this in a prompt format<ul><li>ie: Where would you go to learn x on this website?</li></ul></li></ul>
<ol start="5"><li>Document the test and fill out the provided report template with your findings. (document includes the following fields)</li></ol>
<ul><li>Site title</li>
<li>Type of site</li>
<li>Non-identifiable description of your user (as is relevant to your test)</li>
<li>Notes from home page walk through (should be point form)</li>
<li>User test task</li>
<li>Notes from user performing task</li>
<li>Recommendation of changes to be made if applicable</li></ul>
<h3 id="rubric-3"><a aria-hidden="true" tabindex="-1" href="#rubric-3"><span class="icon icon-link"></span></a>Rubric</h3>
<ul><li>5 points for your notes on the test</li>
<li>5 points for details and recommendation</li></ul>`;
});
export {
  Graded_activities as default,
  metadata
};
