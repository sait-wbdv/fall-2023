import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Assignment 4 - Full-page Layout",
  "type": "assignment",
  "points": 10
};
const Assignment_4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>In this assignment, you will be creating a full-page layout of a web page!</p>
<h2 id="content-topic"><a aria-hidden="true" tabindex="-1" href="#content-topic"><span class="icon icon-link"></span></a>Content topic</h2>
<p>The goal of this assignment is to create an internal page of a traditional website, such as a:</p>
<ul><li>Blog post;</li>
<li>Contact page;</li>
<li>About page;</li>
<li>a 404 Page Not found page;</li>
<li>etc.</li></ul>
<p>To create this page you will:</p>
<ul><li>Choose a site title, owner, concept for your site;</li>
<li>Choose a list of four (or more) your primary navigation menu;<ul><li>You do not have to create content for any other pages;</li>
<li>Link to <code>#</code> or choose an external site of your choice.</li></ul></li>
<li>Populate the main area of the page with (well-formed and accessible) content of your choice;</li>
<li>Add a footer with copyright info at the bottom of the page;</li>
<li>Make it funny/pretty/useful!</li></ul>
<hr>
<h2 id="instructions"><a aria-hidden="true" tabindex="-1" href="#instructions"><span class="icon icon-link"></span></a>Instructions</h2>
<ol><li>Create a <a href="https://gist.github.com/acidtone/6871979b4f4b04375edb6312dcdba5b7" rel="nofollow"><code>index.html</code></a> page with the following semantic elements:<ul><li><code>&lt;header&gt;</code> - Site banner</li>
<li><code>&lt;nav&gt;</code> - Primary navigation</li>
<li><code>&lt;main&gt;</code> - Page content </li>
<li><code>&lt;footer&gt;</code> - Copyright information</li></ul></li>
<li>Use <a href="https://validator.w3.org/" rel="nofollow">valid HTML</a> and <a href="https://jigsaw.w3.org/css-validator/" rel="nofollow">CSS</a>;<ul><li><strong>New</strong>: CSS must be linked externally in an <code>./css/[style|main|etc].css</code>;</li></ul></li>
<li>Design a full page layout of a site’s web page according to the requirements listed below.</li></ol>
<hr>
<h2 id="marking-rubric"><a aria-hidden="true" tabindex="-1" href="#marking-rubric"><span class="icon icon-link"></span></a>Marking Rubric</h2>
<p><strong>Each of the following requirements will be worth 2 points</strong> for a total of 10 points.</p>
<h3 id="1-horizontal-flexbox-navigation"><a aria-hidden="true" tabindex="-1" href="#1-horizontal-flexbox-navigation"><span class="icon icon-link"></span></a>1. Horizontal Flexbox navigation</h3>
<p>Build a horizontal primary navigation menu that:</p>
<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> contains at least four navigation links (link <code>href</code> may be <code>#</code>);</li>
<li class="task-list-item"><input type="checkbox" disabled> includes a logo and/or site name;</li>
<li class="task-list-item"><input type="checkbox" disabled> is accessible (see below);</li>
<li class="task-list-item"><input type="checkbox" disabled> uses colour and the box model to make links obviously and easily clickable;</li>
<li class="task-list-item"><input type="checkbox" disabled> <strong>highlights the current page</strong> by displaying the link differently than the others;</li>
<li class="task-list-item"><input type="checkbox" disabled> uses a <code>&lt;ul&gt;</code> as a flex container and <code>&lt;li&gt;</code> as items;</li>
<li class="task-list-item"><input type="checkbox" disabled> justify the links to fit your design.</li></ul>
<h3 id="2-content-and-techniques"><a aria-hidden="true" tabindex="-1" href="#2-content-and-techniques"><span class="icon icon-link"></span></a>2. Content and Techniques</h3>
<p>Build a page of valid HTML (<a href="https://validator.w3.org/" rel="nofollow">W3C HTML Validator</a>) page content and with a footer:</p>
<ul><li>Page content:<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> Content that matches the theme of your page (you may use content from openly licensed sources, previous assignments or sample code given in);</li>
<li class="task-list-item"><input type="checkbox" disabled> Use a diverse mix of elements and techniques learned in this course.</li>
<li class="task-list-item"><input type="checkbox" disabled> Incorporate content and techniques not taught in this course.</li></ul></li>
<li>Footer:<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> Copyright year with <code>©</code> HTML entity;</li>
<li class="task-list-item"><input type="checkbox" disabled> Site owner;</li></ul></li></ul>
<h3 id="3-responsiveness-and-accessibility"><a aria-hidden="true" tabindex="-1" href="#3-responsiveness-and-accessibility"><span class="icon icon-link"></span></a>3. Responsiveness and Accessibility</h3>
<p>Your content should be responsive and accessible to screen readers:</p>
<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> Use a media query to either display the navigation vertically or replace the navigation with a menu toggle;</li></ul>
<p><strong>Plus these</strong>:</p>
<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> All navigation should be wrapped in a <code>&lt;nav&gt;</code> element;<ul><li><code>&lt;nav&gt;</code> can be nested inside a <code>&lt;header&gt;</code></li></ul></li>
<li class="task-list-item"><input type="checkbox" disabled> The page has a <code>&lt;title&gt;</code> in the <code>&lt;head&gt;</code>;</li>
<li class="task-list-item"><input type="checkbox" disabled> Main page content is wrapped in a <code>&lt;main&gt;</code> container;</li>
<li class="task-list-item"><input type="checkbox" disabled> Footer content is wrapped in a <code>&lt;footer&gt;</code> container at the bottom of the page;</li>
<li class="task-list-item"><input type="checkbox" disabled> The page content is a readable size and not touch the edge of any boundary (such as a background colour change).</li>
<li class="task-list-item"><input type="checkbox" disabled> Line length should not exceed 40 characters on wide screens;</li>
<li class="task-list-item"><input type="checkbox" disabled> No horizontal scroll bars should be visible at any device screen width;</li>
<li class="task-list-item"><input type="checkbox" disabled> On mobile, content should be at least <code>1rem</code> away from the edge of the screen;</li>
<li class="task-list-item"><input type="checkbox" disabled> Text should have at least a AA contrast ratio rating for its size;</li></ul>
<h3 id="4-above-and-beyond"><a aria-hidden="true" tabindex="-1" href="#4-above-and-beyond"><span class="icon icon-link"></span></a>4. Above and Beyond</h3>
<p>Show off your coding skills by using ONE (use of more than one does not guarantee more marks) of the following:</p>
<ul><li>add a social navigation menu in the footer, OR;</li>
<li>incorporate an inline SVG image for your company logo, OR;</li>
<li>Google Map in the footer.</li></ul>
<p>Provide a clear indication of which option you’ve chosen in your README (see below):</p>
<ul><li>Which did you choose?</li>
<li>What file(s) and line number(s) can it be found?</li></ul>
<h3 id="5-documentation-and-code-quality"><a aria-hidden="true" tabindex="-1" href="#5-documentation-and-code-quality"><span class="icon icon-link"></span></a>5. Documentation and Code Quality</h3>
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
  Assignment_4 as default,
  metadata
};
