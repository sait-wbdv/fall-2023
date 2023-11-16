import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "CSS Images and Hero Sections",
  "excerpt": "In this session, we'll talk about using background images and flexbox when making Hero sections.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _07_day_7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Housekeeping</h2>
<ul><li><a href="/courses/cpnt-260/assessments/assignment-3">Assignment 3</a> Announced<ul><li>Weight: 10%</li>
<li>Due: Friday, September 29 @ 11:59pm</li></ul></li></ul>
<hr>
<h2>Achievement Spoilers</h2>
<h3 id="sample-code"><a aria-hidden="true" tabindex="-1" href="#sample-code"><span class="icon icon-link"></span></a>Sample Code</h3>
<ul><li><a href="https://github.com/sait-wbdv/dailies-f23/tree/main/2023-09-25-media-flex/03-nested-flex-banner" rel="nofollow">Nested Banner with Menu Toggle</a></li></ul>
<hr>
<h2>2. Hero Sections with Flexbox</h2>
<p><a href="/slides/cpnt-260/hero-sections"><img src="/images/slides/cpnt-260/hero-sections.png" alt="Heros and banners slides"></a></p>
<h3 id="materials"><a aria-hidden="true" tabindex="-1" href="#materials"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure" rel="nofollow">Document and Website Structure</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders" rel="nofollow">Backgrounds and Borders</a></li>
<li>Layout Land by Jen Simmons<ul><li><a href="https://youtu.be/_sgF8I-Q1Gs" rel="nofollow">Introduction to Viewport Units</a></li>
<li><a href="https://www.youtube.com/watch?v=0X6zrW2QW8Q" rel="nofollow">Unlocking the Power of CSS Overrides</a><ul><li>This is Part 4 of a 7-part series. Parts 1-3 are listed below as optional (but recommended) background theory.</li></ul></li></ul></li></ul>
<h3 id="activity-hero-section"><a aria-hidden="true" tabindex="-1" href="#activity-hero-section"><span class="icon icon-link"></span></a>Activity: Hero Section</h3>
<p>Create your own full-viewport hero section:</p>
<ol><li>Select an large-format image on your file system or on Lorem Picsum for your background image;</li>
<li>Create a full-viewport <code>&lt;header&gt;</code> with a height of <code>100vh</code>;</li>
<li>Add a CSS background image using the image you selected;</li>
<li>Add HTML content of your choice to the <code>&lt;header&gt;</code>;</li>
<li>Using Flexbox (of Grid), position your content over top your background image so that it’s pretty and readable.</li></ol>
<hr>
<h2>Sticky Footers</h2>
<h3 id="materials-1"><a aria-hidden="true" tabindex="-1" href="#materials-1"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://css-tricks.com/couple-takes-sticky-footer/" rel="nofollow">Sticky Footer, Five Ways</a></li></ul>
<hr>`;
    }
  })}
<hr>
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="hero-banner-show-and-tell"><a aria-hidden="true" tabindex="-1" href="#hero-banner-show-and-tell"><span class="icon icon-link"></span></a>Hero Banner Show and Tell</h3>
<p>In groups of two or three, you will try to find an example of a hero section and answer the following questions:</p>
<ul><li>Is there text over an image? What is the contrast ratio?</li>
<li>What is the Call to Action? What purpose does the her section have?</li>
<li>Is the hero section responsive? How does it change on mobile devices? How many breakpoints can you see?</li></ul>
<p>You will be presenting your findings in class for your marks:</p>
<ul><li>5 minute time limit</li>
<li><strong>Important</strong>: Marks will be lost if you pick the same site as someone else! Pick a site that is unique and no one else knows about.</li></ul>
<h4 id="submission-instructions"><a aria-hidden="true" tabindex="-1" href="#submission-instructions"><span class="icon icon-link"></span></a>Submission Instructions</h4>
<p>Submit your link to the Dropbox in Brightspace and mention your partner.</p>`;
    }
  })}
<hr>
${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Lesson Prep</h2>
<h3 id="reading-list"><a aria-hidden="true" tabindex="-1" href="#reading-list"><span class="icon icon-link"></span></a>Reading list</h3>
<ul><li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders" rel="nofollow">Backgrounds and Borders</a></li></ul>
<h3 id="watch-list"><a aria-hidden="true" tabindex="-1" href="#watch-list"><span class="icon icon-link"></span></a>Watch list</h3>
<ul><li>Layout Land by Jen Simmons<ul><li><a href="https://youtu.be/_sgF8I-Q1Gs" rel="nofollow">Introduction to Viewport Units</a></li>
<li><a href="https://www.youtube.com/watch?v=0X6zrW2QW8Q" rel="nofollow">Unlocking the Power of CSS Overrides</a><ul><li>This is Part 4 of a 7-part series. Parts 1-3 are listed below as optional (but recommended) background theory.</li></ul></li></ul></li></ul>
<h3 id="digging-deeper-optional"><a aria-hidden="true" tabindex="-1" href="#digging-deeper-optional"><span class="icon icon-link"></span></a>Digging Deeper (optional)</h3>
<ul><li>Resilient CSS by Jen Simmons<ul><li>Part 1: <a href="https://www.youtube.com/watch?v=u00FY9vADfQ" rel="nofollow">Introduction to Resilient CSS</a></li>
<li>Part 2: <a href="https://www.youtube.com/watch?v=WM_cKHH7bZ0" rel="nofollow">The Secrets of “Can I Use”</a></li>
<li>Part 3: <a href="https://www.youtube.com/watch?v=NJjlzxud4_M" rel="nofollow">How Browsers Handle Errors in CSS</a></li></ul></li></ul>`;
    }
  })}`;
});
export {
  _07_day_7 as default,
  metadata
};
