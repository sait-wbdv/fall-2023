import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Assignment 1 - Three Deployed GitHub Pages Templates",
  "excerpt": "In this assignment, you will deploy three _distinct_ static website templates that could be customized for a fictitious business of your choice.",
  "points": 20,
  "type": "assignment",
  "status": "published"
};
const Assignment_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="details"><a aria-hidden="true" tabindex="-1" href="#details"><span class="icon icon-link"></span></a>Details</h2>
<p>In this assignment, you will deploy three <em>distinct</em> static website templates that could be customized for a fictitious business of your choice.</p>
<p><strong>Scenario</strong>: You have landed a new client! They want to choose a template for their new website at the next meeting. You want to impress them with three that are:</p>
<ul><li>Deployed (i.e. published) on GH Pages</li>
<li>Visually distinct with respect to UX/UI</li>
<li>Customized with the company details<ul><li>The name can be made up</li>
<li>Optional: A logo can be an icon from <a href="https://fontawesome.com/" rel="nofollow">Font Awesome</a> or similar source</li></ul></li></ul>
<h2 id="instructions"><a aria-hidden="true" tabindex="-1" href="#instructions"><span class="icon icon-link"></span></a>Instructions</h2>
<ol><li>Search online for three free, and <em>distinct</em>, static website templates that could be customized for your selected client;</li>
<li>Deploy each template to GH Pages, naming each repo “cpnt201-a1-[template-name]“;</li>
<li>Make at least three customizations to <em>each</em> template <strong>as separate commits</strong>.<ul><li>At the end of this assignment, you should have made at least 12 commits; three for each of the three customizations, plus your initial commits (which are not counted for marks).</li></ul></li></ol>
<hr>
<h2 id="marking-rubric"><a aria-hidden="true" tabindex="-1" href="#marking-rubric"><span class="icon icon-link"></span></a>Marking Rubric</h2>
<p>This assignment will be marked out of 20 points.</p>
<h3 id="github-setup-4-points"><a aria-hidden="true" tabindex="-1" href="#github-setup-4-points"><span class="icon icon-link"></span></a>GitHub Setup: 4 points</h3>
<ol><li>Local name and email address should be set correctly in your Git config;</li>
<li>GitHub Profile should be updated with:<ul><li>Profile photo</li>
<li>Bio</li>
<li>Location</li>
<li>Optional: LinkedIn, Twitter, etc</li></ul></li></ol>
<h3 id="distinctiveness-4-points"><a aria-hidden="true" tabindex="-1" href="#distinctiveness-4-points"><span class="icon icon-link"></span></a>Distinctiveness: 4 points</h3>
<p>The three templates will collectively be scored on their visual distinctiveness and should offer a diverse choice for the client. They should:</p>
<ul><li>be visually distinct from the other two templates;</li>
<li>represent, collectively, a wide variety of layout elements (cards, sliders, gallery, etc).</li>
<li>be from different template authors (but they can be from the same marketplace).</li></ul>
<h3 id="each-template-4-points-12-points-total"><a aria-hidden="true" tabindex="-1" href="#each-template-4-points-12-points-total"><span class="icon icon-link"></span></a>Each Template: 4 points (12 points total)</h3>
<ol><li>Deployment: <strong>1 point</strong><ul><li>Each template should be deployed using GitHub Pages (<em>not</em> with a GH theme) and be viewable on a mobile device.</li>
<li>Your first commit should be the unmodified template with a commit message of “initial commit”.</li></ul></li>
<li>Committed Changes: <strong>3 points</strong> (1 point for each commit)<ul><li>Each template repository should have at least three commits (in addition to your initial commit) that customizes content on the home page. For example:<ul><li>page titles and headings (commit 1),</li>
<li>page logo/icon (commit 2),</li>
<li>primary navigation (commit 3).</li></ul></li>
<li>Each change should be captured in its own commit with a descriptive message.</li>
<li>The <strong>changes themselves will not be marked</strong> but cannot break the design.</li></ul></li></ol>
<hr>
<h2 id="submitting-your-assignment"><a aria-hidden="true" tabindex="-1" href="#submitting-your-assignment"><span class="icon icon-link"></span></a>Submitting Your Assignment</h2>
<p>In order to receive a grade, you must:</p>
<ol><li>Deploy each template to a separate GitHub Pages repository named <code>cpnt201-a1-[template-name]</code>.</li>
<li>Zip your projects/repos and submit them to Brightspace.</li>
<li>Include links to each GitHub repo <em>and</em> GH Pages site as a comment with your Brightspace submission. You should have six links total. Points will be deducted for missing links.</li></ol>`;
});
export {
  Assignment_1 as default,
  metadata
};
