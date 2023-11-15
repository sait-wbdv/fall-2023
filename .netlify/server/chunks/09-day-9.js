import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Extras",
  "excerpt": "In this session, we'll be covering misc topics you will use in your final projects.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _09_day_9 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Housekeeping</h2>
<ul><li><a href="/courses/cpnt-260/assessments/assignment-3">Assignment 3</a> - Leave some text at the bottom</li>
<li><a href="/courses/cpnt-260/assessments/assignment-4">Assignment 4</a> Announced<ul><li>Weight: 10%</li>
<li>Due: Tuesday October 3, @ 11:59pm</li></ul></li>
<li>Monday: 9am start!</li></ul>
<hr>
<h2>Achievement Spoilers</h2>
<ul><li>Tic-Tac-Toe</li>
<li>Chessboard</li></ul>
<hr>
<h2>Sticky Footers</h2>
<h3 id="materials"><a aria-hidden="true" tabindex="-1" href="#materials"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure" rel="nofollow">Document and website structure</a></li>
<li><a href="https://css-tricks.com/couple-takes-sticky-footer/" rel="nofollow">Sticky Footer, Five Ways</a></li></ul>
<hr>
<h2>Menu Toggle on Mobile</h2>
<h3 id="materials-1"><a aria-hidden="true" tabindex="-1" href="#materials-1"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator" rel="nofollow">Adjacent sibling combinator</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:checked" rel="nofollow">:checked pseudo-class</a></li></ul>
<h3 id="sample-code"><a aria-hidden="true" tabindex="-1" href="#sample-code"><span class="icon icon-link"></span></a>Sample Code</h3>
<ul><li><a href="https://github.com/sait-wbdv/dailies-f23/tree/main/2023-09-25-media-flex/03-nested-flex-banner" rel="nofollow">Nested Banner with Menu Toggle</a></li></ul>
<hr>
<h2>CSS Variables</h2>
<h3 id="materials-2"><a aria-hidden="true" tabindex="-1" href="#materials-2"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" rel="nofollow">Using CSS custom properties (variables)</a></li>
<li>Video: <a href="https://www.youtube.com/watch?v=kZOJCVvyF-4" rel="nofollow">CSS Variables</a> by Lea Verou</li></ul>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `No Achievement Today. 6 point presentation on Monday.
`;
    }
  })}`;
});
export {
  _09_day_9 as default,
  metadata
};
