import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Assignment 1 - Text Column",
  "type": "assignment",
  "points": 10
};
const Assignment_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>In this assignment, you will be creating a column of body text with HTML and CSS. <strong>The content should be original.</strong> While you can use open-source content as inspiration, it should be unique and on-topic.</p>
<h2 id="content-topic"><a aria-hidden="true" tabindex="-1" href="#content-topic"><span class="icon icon-link"></span></a>Content Topic</h2>
<p>Your content may cover any topic of your choice and does not have to relate to a real-life scenario. </p>
<p>For example, you may write:</p>
<ul><li>your own bio for your portfolio website;</li>
<li>a fictional (very) short story;</li>
<li>a how-to article on your favourite hobby;</li>
<li>a review of a book/movie/article/hiking trail;</li>
<li>an About page for a hypothetical client website;</li>
<li>a entry for your coding journal,</li>
<li>etc, etc.</li></ul>
<p>The content should make sense and be of potential value to the (hypothetical) reader.</p>
<hr>
<h2 id="instructions-and-rubric"><a aria-hidden="true" tabindex="-1" href="#instructions-and-rubric"><span class="icon icon-link"></span></a>Instructions and Rubric</h2>
<ol><li>Write at least 200 words on your topic;</li>
<li>Use valid HTML and CSS to make a column of <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#flow_content" rel="nofollow">flow content</a>;</li>
<li>Place your content in a validated HTML file named <code>index.html</code> that’s linked to an external stylesheet.</li></ol>
<p><strong>Each of the following requirements will be worth 2 points</strong> for a total of 10 points. </p>
<h3 id="html-content"><a aria-hidden="true" tabindex="-1" href="#html-content"><span class="icon icon-link"></span></a>HTML Content</h3>
<p>Enhance the visual hierarchy of your content using (at least):</p>
<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> One level 1 heading and one level 2 heading;</li>
<li class="task-list-item"><input type="checkbox" disabled> One paragraph;</li>
<li class="task-list-item"><input type="checkbox" disabled> An ordered or unordered list;</li>
<li class="task-list-item"><input type="checkbox" disabled> One link to an internal or external location with a hover state;</li>
<li class="task-list-item"><input type="checkbox" disabled> One example of bold text;</li>
<li class="task-list-item"><input type="checkbox" disabled> One example of italic text.</li></ul>
<h3 id="responsiveness-and-accessibility"><a aria-hidden="true" tabindex="-1" href="#responsiveness-and-accessibility"><span class="icon icon-link"></span></a>Responsiveness and Accessibility</h3>
<p>Your content should be responsive and accessible to screen readers:</p>
<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> No horizontal scroll bars should be visible at any device screen width;</li>
<li class="task-list-item"><input type="checkbox" disabled> Line length should not exceed 85 characters on wide screens;</li>
<li class="task-list-item"><input type="checkbox" disabled> Content should be centred on wide screens (unless it looks great, otherwise);</li>
<li class="task-list-item"><input type="checkbox" disabled> Content should be at least <code>1rem</code> away from the edge of the screen;</li>
<li class="task-list-item"><input type="checkbox" disabled> Content should be wrapped in a <code>main</code> element;</li>
<li class="task-list-item"><input type="checkbox" disabled> Text should have at least a AA contrast ratio rating for its size.</li></ul>
<h3 id="typography"><a aria-hidden="true" tabindex="-1" href="#typography"><span class="icon icon-link"></span></a>Typography</h3>
<p>Enhance the visual hierarchy and readability of your typography:</p>
<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> Choose specific (i.e. not just <code>serif</code> and <code>sans-serif</code>) and suitable Display and Text Typefaces that are different enough to distinguish headings from body text;</li>
<li class="task-list-item"><input type="checkbox" disabled> Google Fonts for your typefaces, defined with proper system and generic fallbacks;</li>
<li class="task-list-item"><input type="checkbox" disabled> The font size of your text should be larger than the browser default but should still be readable on mobile devices;</li>
<li class="task-list-item"><input type="checkbox" disabled> The line height of your body text should be larger than the browser default but still be readable;</li></ul>
<h3 id="above-and-beyond"><a aria-hidden="true" tabindex="-1" href="#above-and-beyond"><span class="icon icon-link"></span></a>Above and Beyond</h3>
<p>Show off your coding skills by using THREE of the following:</p>
<ul><li>A nested list, OR;</li>
<li>An image, that is not distorted and does not hurt page usability, OR;</li>
<li>An icon font, OR; </li>
<li>A definition list, OR;</li>
<li>Get fancy: Add more visual hierarchy to your headings with each of the following “fancy” declarations:<ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant" rel="nofollow"><code>font-variant</code></a>: Used for setting small caps;</li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing" rel="nofollow"><code>letter-spacing</code></a>: Great for spacing letters in headings, OR;</li></ul></li>
<li>Responsive text using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/clamp" rel="nofollow"><code>clamp()</code></a>, OR;</li>
<li>Customize your list styling.</li></ul>
<p>Provide a clear indication of which options you’ve chosen in your README (see below):</p>
<ul><li>Which did you choose?</li>
<li>What file(s) and line number(s) can it be found?</li></ul>
<h3 id="documentation-and-code-quality"><a aria-hidden="true" tabindex="-1" href="#documentation-and-code-quality"><span class="icon icon-link"></span></a>Documentation and Code Quality</h3>
<ul><li>Include a <code>README.md</code> in your project that contains the following information:<ul><li>Course title;</li>
<li>Assignment name;</li>
<li>Author name;</li>
<li>A link to the GH Pages site</li></ul></li>
<li><strong>Important</strong>: Any attributions for code and/or assets you used that are not your own.</li>
<li>Use best practices with file/directory names and indentation:<ul><li>2 spaces per indent</li>
<li>See: <a href="https://gist.github.com/acidtone/d77059ec1851eff266339a3df70f6984" rel="nofollow">Files and Directories - Naming Conventions</a></li></ul></li>
<li>CSS declarations should be organized by category (box model, fonts, borders, flex, etc), separated by a space and commented.</li></ul>
<hr>
<h2 id="submission-requirements"><a aria-hidden="true" tabindex="-1" href="#submission-requirements"><span class="icon icon-link"></span></a>Submission Requirements</h2>
<ul><li>Push this assignment to a GitHub repo named <code>cpnt260-a1</code> and enable GitHub Pages;</li>
<li>ZIP all files required for the site to operate and submit to Brightspace;</li>
<li>Include the following as a comment in your Brightspace submission:<ul><li>GH repo</li>
<li>GH Pages site</li></ul></li></ul>`;
});
export {
  Assignment_1 as default,
  metadata
};
