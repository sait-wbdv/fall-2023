import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Assignment 2 - Single Card",
  "type": "assignment",
  "points": 10
};
const Assignment_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>In this assignment, you will be creating a card of summarized information that displays properly on both desktop and mobile devices.</p>
<p>While you can use open-source content as inspiration, it should be unique and on-topic.</p>
<h2 id="content-topic"><a aria-hidden="true" tabindex="-1" href="#content-topic"><span class="icon icon-link"></span></a>Content Topic</h2>
<p>The goal of this assignment is to summarize information for the user. If they want to read more, they can click the (entire) card to read/watch/buy/etc more.</p>
<p>For example, you may write a card for:</p>
<ul><li>a blog post on your portfolio website;</li>
<li>an item in an online store;</li>
<li>a how-to article on your favourite hobby;</li>
<li>a Team card for an employee/classmate/you/etc.</li>
<li>etc.</li></ul>
<p>The content should make sense and be of potential value to the (hypothetical) reader.</p>
<ul><li>See: <a href="https://acidtone.github.io/code-journal/#july-16th-2022" rel="nofollow">Tony’s “moodboard” on cards</a> for some layout examples</li></ul>
<p><strong>Note: you will <em>NOT</em> need the full information for this assignment. Only content needed to build your card is required.</strong></p>
<hr>
<h2 id="instructions"><a aria-hidden="true" tabindex="-1" href="#instructions"><span class="icon icon-link"></span></a>Instructions</h2>
<ol><li>Write a short heading and paragragh (max 50 words) for your card;</li>
<li>Select an image for your card;<ul><li>This image can be a placeholder served by <a href="https://picsum.photos/" rel="nofollow">Lorem Picsum</a> or similar image generator.</li></ul></li>
<li>Use valid HTML and CSS to make a card of information that displays properly on desktop and mobile;</li>
<li>Place your card in a validated HTML file named <code>index.html</code> (CSS may be embedded in a <code>style</code> element in the <code>head</code> of <code>index.html</code>).</li></ol>
<hr>
<h2 id="marking-rubric"><a aria-hidden="true" tabindex="-1" href="#marking-rubric"><span class="icon icon-link"></span></a>Marking Rubric</h2>
<p><strong>Each of the following requirements will be worth 2 points</strong> for a total of 10 points. </p>
<h3 id="card-content"><a aria-hidden="true" tabindex="-1" href="#card-content"><span class="icon icon-link"></span></a>Card content</h3>
<p>Enhance the visual hierarchy of your card by using:</p>
<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> One level 3 heading for your card title in a Display font;</li>
<li class="task-list-item"><input type="checkbox" disabled> One placeholder HTML image with <code>alt</code>, <code>width</code> and <code>height</code> attributes;</li>
<li class="task-list-item"><input type="checkbox" disabled> A short paragraph containing bold and/or italic text in a body text font;</li>
<li class="task-list-item"><input type="checkbox" disabled> Card content should be wrapped in an <code>article</code> element;</li></ul>
<h3 id="responsiveness-and-accessibility"><a aria-hidden="true" tabindex="-1" href="#responsiveness-and-accessibility"><span class="icon icon-link"></span></a>Responsiveness and Accessibility</h3>
<p>Your content should be responsive and accessible to screen readers:</p>
<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> Line length should not exceed 40 characters on wide screens;</li>
<li class="task-list-item"><input type="checkbox" disabled> The image cannot be distorted and should scale to fit the card;</li>
<li class="task-list-item"><input type="checkbox" disabled> No horizontal scroll bars should be visible at any device screen width;</li>
<li class="task-list-item"><input type="checkbox" disabled> On mobile, content should be at least <code>1rem</code> away from the edge of the screen;</li>
<li class="task-list-item"><input type="checkbox" disabled> Text should have at least a <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast" rel="nofollow">AA contrast ratio rating</a> for its size.</li></ul>
<h3 id="clickable-card"><a aria-hidden="true" tabindex="-1" href="#clickable-card"><span class="icon icon-link"></span></a>Clickable card</h3>
<p><strong>User story</strong>: </p>
<blockquote><p>As a [<code>user</code>|<code>learner</code>|<code>shopper</code>],
I would like to click on a [<code>summary of information</code>] so that
I can [<code>create and account</code>|<code>learn the guitar</code>|<code>see if it supports HDMI 2</code>].</p></blockquote>
<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> Entire Card should be clickable with no gaps;<ul><li>Card can link to any valid external webpage.</li></ul></li>
<li class="task-list-item"><input type="checkbox" disabled> The Card should have a visible boundary;</li>
<li class="task-list-item"><input type="checkbox" disabled> Clickable area should not exceed the Card boundary;</li>
<li class="task-list-item"><input type="checkbox" disabled> No links should be used inside the Card;</li>
<li class="task-list-item"><input type="checkbox" disabled> Hover effect added to tell the user the Card is clickable;</li></ul>
<h3 id="above-and-beyond"><a aria-hidden="true" tabindex="-1" href="#above-and-beyond"><span class="icon icon-link"></span></a>Above and Beyond</h3>
<p>Show off your coding skills by using ONE (use of more than one does not guarantee more marks) of the following:</p>
<ul><li>Use of the <code>figure</code> and <code>ficaption</code> elements instead of <code>article</code> and <code>p</code>, OR</li>
<li>At least two of the following CSS properties:<ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" rel="nofollow"><code>object-fit</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode" rel="nofollow"><code>mix-blend-mode</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path" rel="nofollow"><code>clip-path</code></a></li></ul></li></ul>
<p>Provide a clear indication of which option you’ve chosen in your README (see below):</p>
<ul><li>Which did you choose?</li>
<li>What file(s) and line number(s) can it be found?</li></ul>
<h3 id="documentation-and-code-quality"><a aria-hidden="true" tabindex="-1" href="#documentation-and-code-quality"><span class="icon icon-link"></span></a>Documentation and Code Quality</h3>
<ul><li>Include a <code>README.md</code> in your project that contains the following information:<ul><li>Course title;</li>
<li>Assignment name;</li>
<li>Author name;</li>
<li>A link to the GH Pages site</li></ul></li>
<li><strong>Important</strong>: Any attributions for code and/or assets you used that are not your own.</li>
<li>Use best practices with file/directory names and indentation:<ul><li>2 spaces per indent<ul><li>Nested HTML elements and CSS declarations should be indented</li></ul></li>
<li>See: <a href="https://gist.github.com/acidtone/d77059ec1851eff266339a3df70f6984" rel="nofollow">Files and Directories - Naming Conventions</a></li></ul></li>
<li>CSS declarations should be organized by category (box model, fonts, borders, flex, etc), separated by a space and commented.</li></ul>
<hr>
<h2 id="submission-requirements"><a aria-hidden="true" tabindex="-1" href="#submission-requirements"><span class="icon icon-link"></span></a>Submission Requirements</h2>
<ul><li>Push this assignment to a GitHub repo named <code>cpnt260-a2</code> and enable GitHub Pages;</li>
<li>ZIP all files required for the site to operate and submit to Brightspace;</li>
<li>Include the following as a comment in your Brightspace submission:<ul><li>GH repo</li>
<li>GH Pages site</li></ul></li></ul>`;
});
export {
  Assignment_2 as default,
  metadata
};
