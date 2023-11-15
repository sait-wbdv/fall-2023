import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Assignment 3 - Hero Section with Call-to-Action",
  "type": "assignment",
  "points": 10
};
const Assignment_3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="content-topic"><a aria-hidden="true" tabindex="-1" href="#content-topic"><span class="icon icon-link"></span></a>Content topic</h2>
<p>The goal of this assignment is to build a Hero Section that directs the user to click a Call-to-Action link:</p>
<ul><li>Choose a Hero title (could be a site title or the topic of your page);</li>
<li>Choose a placeholder image for the background of your Hero section;<ul><li>Image can be hosted by Lorem Picsum (or similar service);</li>
<li>The image should support (or at least not distract from) your chosen topic;</li></ul></li>
<li>Choose a phrase and link for your Call-to-Action that makes sense with your chosen topic;</li>
<li>Make it funny/pretty/useful!</li></ul>
<hr>
<h2 id="instructions"><a aria-hidden="true" tabindex="-1" href="#instructions"><span class="icon icon-link"></span></a>Instructions</h2>
<ol><li>Create a <a href="https://gist.github.com/acidtone/6871979b4f4b04375edb6312dcdba5b7" rel="nofollow"><code>index.html</code></a> page with a semantic <code>&lt;header&gt;</code> containing a heading and Call-to-Action card;</li>
<li>Use <a href="https://validator.w3.org/" rel="nofollow">valid HTML</a> and <a href="https://jigsaw.w3.org/css-validator/" rel="nofollow">CSS</a>;<ul><li>CSS must be linked externally in an <code>./css/[style|main|etc].css</code>;</li></ul></li>
<li>Design a full page layout of a site’s Hero Section and Call-to-Action according to the requirements listed below.</li></ol>
<h2 id="marking-rubric"><a aria-hidden="true" tabindex="-1" href="#marking-rubric"><span class="icon icon-link"></span></a>Marking Rubric</h2>
<p><strong>Each of the following requirements will be worth 2 points</strong> for a total of 10 points.</p>
<h2 id="1-content"><a aria-hidden="true" tabindex="-1" href="#1-content"><span class="icon icon-link"></span></a>1. Content</h2>
<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> <strong>New</strong>: Leave some content under the <code>&lt;header&gt;</code> so that the page can scroll. It can be anything;</li>
<li class="task-list-item"><input type="checkbox" disabled> Display and Text fonts should not be default and have proper fallbacks;</li>
<li class="task-list-item"><input type="checkbox" disabled> If HTML images are used, they cannot be distorted and should scale to fit the design;</li>
<li class="task-list-item"><input type="checkbox" disabled> <code>font-size</code> and <code>line-height</code> should be larger than browser defaults;</li>
<li class="task-list-item"><input type="checkbox" disabled> Content should be at least <code>1rem</code> away from all boundaries (sides of screen, containers, cards, etc);</li>
<li class="task-list-item"><input type="checkbox" disabled> Text should have at least a AA contrast ratio rating for its size.</li>
<li class="task-list-item"><input type="checkbox" disabled> No text overlapping high-frequency image areas at any screen size;</li></ul>
<h2 id="2-hero-section"><a aria-hidden="true" tabindex="-1" href="#2-hero-section"><span class="icon icon-link"></span></a>2. Hero section</h2>
<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> All Hero content wrapped in a <code>&lt;header&gt;</code> element for screen readers;</li>
<li class="task-list-item"><input type="checkbox" disabled> One level 1 heading for your Hero topic (unless it is the Site Title) in a Display font; this is <em>in addition</em> to the Call-to-Action;</li>
<li class="task-list-item"><input type="checkbox" disabled> Heading <code>font-size</code> should be large and obvious;</li>
<li class="task-list-item"><input type="checkbox" disabled> Full-viewport background CSS image that runs to the left, top and right edges of the screen and should take up at least 50% of the screen;</li>
<li class="task-list-item"><input type="checkbox" disabled> Call-to-Action (see below) added in a balanced layout with heading text;</li>
<li class="task-list-item"><input type="checkbox" disabled> Add any additional content that does not interfere with the rest of the assignment requirements;</li></ul>
<h2 id="3-call-to-action-card"><a aria-hidden="true" tabindex="-1" href="#3-call-to-action-card"><span class="icon icon-link"></span></a>3. Call-to-Action card</h2>
<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> At least one paragraph/phrase (max 50 words) accompanying the CTA link;</li>
<li class="task-list-item"><input type="checkbox" disabled> Optional: additional level 2 or 3 heading for CTA;</li>
<li class="task-list-item"><input type="checkbox" disabled> Line length should not exceed 40 characters on wide screens;</li>
<li class="task-list-item"><input type="checkbox" disabled> The CTA card should appear self-contained and separate from Hero title (i.e. doesn’t need to have a visible boundary);</li>
<li class="task-list-item"><input type="checkbox" disabled> Only clickable area should be a link (or two) styled to look like a button (i.e. make it look obviously clickable);</li>
<li class="task-list-item"><input type="checkbox" disabled> There should be a custom colour defined for Call-to-Action link;</li>
<li class="task-list-item"><input type="checkbox" disabled> Hover effect added to button to confirm to the user that it’s clickable;</li></ul>
<h2 id="4-above-and-beyond"><a aria-hidden="true" tabindex="-1" href="#4-above-and-beyond"><span class="icon icon-link"></span></a>4. Above and Beyond</h2>
<p>Show off your coding skills by using ONE (use of more than one does not guarantee more marks) of the following:</p>
<ul><li>A GitHub Project board with 5 or or more cards that you used to manage your work on this assignment;</li></ul>
<p><strong>OR</strong></p>
<ul><li>Both of the following CSS properties in your Hero Section:<ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient" rel="nofollow"><code>linear-gradient</code></a> or <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient" rel="nofollow"><code>radial-gradient</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode" rel="nofollow"><code>background-blend-mode</code></a></li></ul></li></ul>
<h2 id="5-documentation-and-code-readability"><a aria-hidden="true" tabindex="-1" href="#5-documentation-and-code-readability"><span class="icon icon-link"></span></a>5. Documentation and Code Readability</h2>
<p>In addition to the standard requirements, include the following in your <code>README.md</code>:</p>
<ul><li>A helpful resource that helped you with this assignment;</li>
<li>the search term you would use to find this resource again.</li></ul>
<p><strong>Plus these</strong>:</p>
<ul><li>Include a <code>README.md</code> at the root of your project that contains the following information:<ul><li>Course title;</li>
<li>Assignment name;</li>
<li>Author name;</li>
<li><strong>GH Pages</strong> site</li>
<li><strong>Attributions</strong> for code and/or assets you used that are not your own.</li></ul></li>
<li>Use best practices with file/directory names and indentation:<ul><li>2 spaces per indent<ul><li>Nested HTML elements and CSS declarations should be indented</li></ul></li>
<li>See: <a href="https://gist.github.com/acidtone/d77059ec1851eff266339a3df70f6984" rel="nofollow">Files and Directories - Naming Conventions</a></li></ul></li>
<li>CSS declarations should be organized by category (box model, fonts, borders, flex, etc), separated by a space and commented.</li></ul>
<hr>
<h2 id="submission-requirements"><a aria-hidden="true" tabindex="-1" href="#submission-requirements"><span class="icon icon-link"></span></a>Submission Requirements</h2>
<ul><li>Push this assignment to a GitHub repo named <code>cpnt260-a3</code> and enable GitHub Pages;</li>
<li>ZIP all files required for the site to operate and submit to Brightspace;</li>
<li>Include the following as a comment in your Brightspace submission:<ul><li>GH repo</li>
<li>GH Pages site</li></ul></li></ul>`;
});
export {
  Assignment_3 as default,
  metadata
};
