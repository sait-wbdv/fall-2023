import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Clickable Links and the CSS Cascade",
  "excerpt": "In this session we'll dig deeper into colour and build a Call to Action button out of a link.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _04_day_4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2 id="housekeeping"><a aria-hidden="true" tabindex="-1" href="#housekeeping"><span class="icon icon-link"></span></a>Housekeeping</h2>
<ul><li><a href="/courses/cpnt-260/assessments/assignment-2">Assignment 2: Single Card</a><ul><li>Weight: 10%</li>
<li>Due Tuesday, September 19 @ 11:59pm</li></ul></li>
<li><a href="/courses/cpnt-260/assessments/assignment-1">Assignment 1</a> due tonight</li>
<li><a href="/courses/cpnt-260/day-5">Homework posted for Monday</a></li></ul>
<hr>
<h2>1. Colour models and you</h2>
<p><a href="/slides/cpnt-260/colour"><img src="/images/slides/cpnt-260/colour.png" alt="Colour models"></a></p>
<h3 id="materials"><a aria-hidden="true" tabindex="-1" href="#materials"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://www.youtube.com/watch?v=eqZqx6lRPe0" rel="nofollow">Read color hex codes</a> by David DeSandro</li></ul>
<hr>
<h2>2. Clickable Links</h2>
<h3 id="materials-1"><a aria-hidden="true" tabindex="-1" href="#materials-1"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li>MDN: <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks" rel="nofollow">Creating hyperlinks</a></li>
<li><a href="https://www.youtube.com/watch?v=UWwNIMHFdW4" rel="nofollow">60-30-10 Color Rule</a> by Jesse Showalter</li>
<li><a href="https://github.com/sait-wbdv/dailies-w23/tree/main/2023-01-23-html-images-links-color/03-call-to-action-starter" rel="nofollow">Starter code</a></li></ul>
<h3 id="activity-styling-a-links-as-buttons"><a aria-hidden="true" tabindex="-1" href="#activity-styling-a-links-as-buttons"><span class="icon icon-link"></span></a>Activity: Styling a links as buttons</h3>
<ol><li>Define a colour palette;<ul><li>Try the 60-30-10 rule;</li>
<li>Convert your colours to <code>hsl()</code>;</li></ul></li>
<li>Create a simple Call-to-Action with a paragraph and link;</li>
<li>Remove the underline with <code>text-decoration</code>;</li>
<li>Make the link more “buttony” with <code>padding</code>;<ul><li>optional: add a <code>border</code> and/or round the corners with <code>border-radius</code>;</li></ul></li>
<li>Double-check your colour contrast;</li>
<li>Define a complimentary colour for the link <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:hover" rel="nofollow"><code>:hover</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:visited" rel="nofollow"><code>:visited</code></a> states;</li>
<li>Choose a contrasting colour for the link <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:active" rel="nofollow"><code>:active</code></a> state.</li></ol>
<hr>
<h2>3. Inspecting the CSS Cascade</h2>
<p><a href="/slides/cpnt-260/css-cascade"><img src="/images/slides/cpnt-260/css-cascade.png" alt="CSS Cascade"></a></p>
<hr>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="call-to-action"><a aria-hidden="true" tabindex="-1" href="#call-to-action"><span class="icon icon-link"></span></a>Call-to-Action</h3>
<p>Submit links to the work you completed in today’s activity:</p>
<ul><li>GitHub repo</li>
<li>GH Pages live link</li></ul>`;
    }
  })}
<hr>
${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Lesson Prep</h2>
<h3 id="reading-list"><a aria-hidden="true" tabindex="-1" href="#reading-list"><span class="icon icon-link"></span></a>Reading list</h3>
<ul><li><a href="https://web.dev/responsive-web-design-basics/" rel="nofollow">Responsive web design basics</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance" rel="nofollow">CSS Cascade, specificity, and inheritance</a></li></ul>
<h3 id="watch-list"><a aria-hidden="true" tabindex="-1" href="#watch-list"><span class="icon icon-link"></span></a>Watch List</h3>
<ul><li><a href="https://www.youtube.com/watch?v=aHUtMbJw8iA" rel="nofollow">Why is CSS so Weird?</a> by Miriam Suzanne</li>
<li><a href="https://www.youtube.com/watch?v=Sp9ZfSvpf7A" rel="nofollow">Inspecting the CSS Cascade using Firefox DevTools</a></li></ul>`;
    }
  })}`;
});
export {
  _04_day_4 as default,
  metadata
};
