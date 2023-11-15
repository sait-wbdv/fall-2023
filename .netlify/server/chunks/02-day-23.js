import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Web Typography",
  "excerpt": "This session we'll re-visit the idea of visual hierarchy and apply the concept to web typography. Along the way we'll introduce the Box Model.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _02_day_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Housekeeping</h2>
<ul><li>CPNT 260 Assignment Overview<ul><li>Achievements: 10 x 3%</li>
<li>Assignments: 4 x 10%</li>
<li>Final Project: 30%</li></ul></li>
<li><a href="/courses/cpnt-260/assessments/assignment-1">Assignment 1: Text Column</a><ul><li>Weight: 10%</li>
<li>Due: Friday @ 11:59pm</li></ul></li></ul>
<hr>
<h2>1. Group Activity: Google Doc Triad</h2>
<p>In groups of 3 or 4, decide which part of the triad controls the following features commonly found in document editors.</p>
<p><a href="/slides/cpnt-260/ui-triad-quiz"><img src="/images/slides/cpnt-260/ui-triad-quiz.png" alt="Slides: UI Triad Quiz"></a></p>
<hr>
<h2>2. Review: Visual hierarchy</h2>
<h3 id="watch-party"><a aria-hidden="true" tabindex="-1" href="#watch-party"><span class="icon icon-link"></span></a>Watch party</h3>
<ul><li><a href="https://www.youtube.com/watch?v=qZWDJqY27bw" rel="nofollow">Design principles: Visual hierarchy</a></li></ul>
<hr>
<h2>3. Demo: Wikipedia Markup</h2>
<p>To follow along (this is your daily achievement for today):</p>
<ol><li>Pick a hobby or interest that you could build a webpage around;</li>
<li>Find open source content on Wikipedia that contains examples of:<ul><li>Headings</li>
<li>Paragraphs</li>
<li>Links</li>
<li>Bold and italicized text</li>
<li>Bullet and/or numbered lists</li></ul></li>
<li>Create an <code>index.html</code> file in your workspace<ul><li>Pro-tip: type <code>!</code> and then the <code>Tab</code> key inside an empty <code>.html</code> file to create an empty page!</li></ul></li>
<li>Copy and paste the Wikipedia content inside the <code>&lt;body&gt;</code> element of your <code>.html</code> page;</li>
<li>Wrap the text in the appropriate html element<ul><li><code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code> for headings</li>
<li><code>&lt;p&gt;</code> for paragraphs</li>
<li><code>&lt;a&gt;</code> for links</li>
<li><code>&lt;strong&gt;</code> for bold text</li>
<li><code>&lt;em&gt;</code> for italic text</li>
<li><code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code> for bullet lists</li>
<li><code>&lt;ol&gt;</code> and <code>&lt;li&gt;</code> for numbered lists</li>
<li>etc, etc</li></ul></li></ol>
<hr>
<h2>4. Introduction to CSS</h2>
<p><a href="/slides/cpnt-260/css-introduction"><img src="/images/slides/cpnt-260/css-introduction.png" alt="Slides: CSS Introduction"></a></p>
<h3 id="materials"><a aria-hidden="true" tabindex="-1" href="#materials"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals" rel="nofollow">Fundamental text and font styling</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks" rel="nofollow">Creating hyperlinks</a><ul><li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links" rel="nofollow">Styling links</a></li></ul></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units" rel="nofollow">CSS values and units</a></li></ul>
<hr>
<h2>5. Web Typography</h2>
<p><a href="/slides/cpnt-260/web-typography"><img src="/images/slides/cpnt-260/web-typography.png" alt="Web typography"></a></p>
<h3 id="materials-1"><a aria-hidden="true" tabindex="-1" href="#materials-1"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://www.youtube.com/watch?v=8zhhc5pzE9Y" rel="nofollow">Design principles: Repetition</a><ul><li>Typography example @1:43 </li></ul></li>
<li><a href="https://www.youtube.com/watch?v=3dESVj7-XzI" rel="nofollow">Design principles: Space in design</a><ul><li>Typography example @3:48</li></ul></li>
<li><a href="https://www.youtube.com/watch?v=yom0nogFN3k" rel="nofollow">Design principles: Typography</a></li></ul>
<h3 id="sample-code"><a aria-hidden="true" tabindex="-1" href="#sample-code"><span class="icon icon-link"></span></a>Sample code</h3>
<ul><li><a href="https://codepen.io/browsertherapy/pen/wvzZPqK" rel="nofollow">Generic font families</a></li>
<li><a href="https://codepen.io/browsertherapy/pen/eYNmYQP" rel="nofollow">Web-safe font stacks</a></li></ul>
<h3 id="tools"><a aria-hidden="true" tabindex="-1" href="#tools"><span class="icon icon-link"></span></a>Tools</h3>
<ul><li><a href="https://fonts.google.com/" rel="nofollow">Google Fonts</a></li></ul>
<hr>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="styling-text"><a aria-hidden="true" tabindex="-1" href="#styling-text"><span class="icon icon-link"></span></a>Styling Text</h3>
<p>Feel free to play around and experiment with different properties and HTML elements. You will be marked based on honest effort (i.e. try something from each of the categories below).</p>
<p>If you have trouble thinking of styles to apply, try the following:</p>
<ol><li><strong>Customize headings</strong>: Use one or more of the following properties to customize the appearance of your headings (<code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, etc):<ul><li>Add a background color with <a href="https://css-tricks.com/almanac/properties/b/background-color/" rel="nofollow"><code>background-color</code></a> (and add <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding" rel="nofollow"><code>padding</code></a> so the text doesn’t touch the edge);</li>
<li>Add an accent line using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-left" rel="nofollow"><code>border-left</code></a> or <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom" rel="nofollow"><code>border-bottom</code></a>;</li>
<li>Remove the bold style using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight" rel="nofollow"><code>font-weight</code></a>;</li>
<li>Centre the text within the heading using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-align" rel="nofollow"><code>text-align</code></a>;</li></ul></li>
<li><strong>Limit body text to a readable line length</strong>:<ul><li>Use the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/max-width" rel="nofollow"><code>max-width</code></a> property to limit the line length of your text to <code>650px</code> (or similar);<ul><li>Hint: you can apply this to a container (i.e. <code>&lt;body&gt;</code> or <code>&lt;main&gt;</code>) to affect all text inside the container.</li></ul></li>
<li>Italicize the first paragraph using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-style" rel="nofollow"><code>font-style</code></a> and a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors" rel="nofollow">class selector</a>;</li></ul></li>
<li><strong>Center body text on the page</strong>:<ul><li>Use <a href="https://www.hongkiat.com/blog/css-margin-auto/" rel="nofollow"><code>margin: auto</code></a> to add equal spacing to the sides of a container of body text;</li>
<li>Note: this will only work if the container width is less than 100%;</li></ul></li>
<li><strong>Customize list styles</strong>:<ul><li>Customize a list using one of the methods shown in the article: <a href="https://css-tricks.com/list-style-recipes/" rel="nofollow">List Style Recipes </a>;</li></ul></li></ol>
<h3 id="submission-instructions"><a aria-hidden="true" tabindex="-1" href="#submission-instructions"><span class="icon icon-link"></span></a>Submission Instructions</h3>
<p>Push and deploy your code to GH Pages. Submit the following links to Brightspace:</p>
<ul><li>GH repo<ul><li>Example: <code>github.com/[username]/[repo-name]</code></li></ul></li>
<li>GH Pages live site<ul><li>Example: <code>[username].github.io/[repo-name]</code></li></ul></li></ul>`;
    }
  })}
<hr>
${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep</h2>
<h3 id="reading-list"><a aria-hidden="true" tabindex="-1" href="#reading-list"><span class="icon icon-link"></span></a>Reading list</h3>
<p>This is a great intro to the Box Model by Shay Howe, from his course (<em>Learn to Code HTML &amp; CSS</em>)(<a href="https://learn.shayhowe.com/html-css/" rel="nofollow">https://learn.shayhowe.com/html-css/</a>) (which is not required reading for this course).</p>
<ul><li><strong><a href="https://learn.shayhowe.com/html-css/opening-the-box-model/" rel="nofollow">Opening the Box Model</a></strong></li></ul>
<p><strong>Mozilla Developer Network</strong>: </p>
<ul><li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals" rel="nofollow">Fundamental text and font styling</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks" rel="nofollow">Creating hyperlinks</a><ul><li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links" rel="nofollow">Styling links</a></li></ul></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units" rel="nofollow">CSS values and units</a></li></ul>
<h3 id="watch-list"><a aria-hidden="true" tabindex="-1" href="#watch-list"><span class="icon icon-link"></span></a>Watch list</h3>
<p>Kevin Powell is one of the most popular CSS Youtubers that has some of the best videos on beginner and advanced topics. We’ll start with this 26 min video from his course <a href="https://www.youtube.com/playlist?list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-" rel="nofollow">HTML and CSS for Beginners</a>:</p>
<ul><li><strong><a href="https://www.youtube.com/watch?v=Elg66-ASVXg" rel="nofollow">HTML &amp; CSS for Beginners Part 14: Style Text with CSS</a></strong></li></ul>`;
    }
  })}`;
});
export {
  _02_day_2 as default,
  metadata
};
