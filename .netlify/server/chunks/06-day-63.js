import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Responsive Navigation with Media Queries",
  "excerpt": "In this session, we'll look at how to create responsive navigation with flexbox and media queries.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _06_day_6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Housekeeping</h2>
<ul><li>Tomorrow: Early Dismissal at 2pm</li></ul>
<hr>
<h2>1. Splitting Styles and Review</h2>
<h3 id="example-code"><a aria-hidden="true" tabindex="-1" href="#example-code"><span class="icon icon-link"></span></a>Example Code</h3>
<ul><li><a href="https://github.com/sait-wbdv/dailies-f23/tree/main/2023-09-25-media-flex/00-review-starter" rel="nofollow">Code-splitting Starter</a></li></ul>
<h3 id="activity-css-separation"><a aria-hidden="true" tabindex="-1" href="#activity-css-separation"><span class="icon icon-link"></span></a>Activity: CSS Separation</h3>
<ol><li>Take one of your projects with the most CSS.</li>
<li>Split your stylesheet logically into multiple files, such as:<ul><li><code>reset.css</code></li>
<li><code>typography.css</code></li>
<li><code>layout.css</code></li>
<li>etc</li></ul></li>
<li><code>&lt;link&gt;</code> to each of these files in your <code>index.html</code>.</li></ol>
<hr>
<h2>2. Review: Inspecting the CSS Cascade</h2>
<p><a href="/slides/cpnt-260/css-cascade"><img src="/images/slides/cpnt-260/css-cascade.png" alt="CSS Cascade"></a></p>
<hr>
<h2>3. Media Queries</h2>
<p><a href="/slides/cpnt-260/responsive-banners"><img src="/images/slides/cpnt-260/responsive-banners.png" alt="Responsive Banners Slides"></a></p>
<h3 id="materials"><a aria-hidden="true" tabindex="-1" href="#materials"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li>MDN: <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries" rel="nofollow">Beginner’s guide to media queries</a></li>
<li>Kevin Powell: <a href="https://www.freecodecamp.org/news/taking-the-right-approach-to-responsive-web-design/" rel="nofollow">How to Take the Right Approach to Responsive Web Design</a><ul><li>Video: <a href="https://www.youtube.com/watch?v=0ohtVzCSHqs" rel="nofollow">Are you writing responsive CSS the wrong way?</a></li></ul></li></ul>
<h3 id="example-code-1"><a aria-hidden="true" tabindex="-1" href="#example-code-1"><span class="icon icon-link"></span></a>Example Code</h3>
<ul><li><a href="https://github.com/sait-wbdv/dailies-f23/tree/main/2023-09-25-media-flex/01-media-query-min-width" rel="nofollow"><code>min-width</code> Media Query</a></li></ul>
<h3 id="activity-changing-background-color-with-a-media-query"><a aria-hidden="true" tabindex="-1" href="#activity-changing-background-color-with-a-media-query"><span class="icon icon-link"></span></a>Activity: Changing <code>background-color</code> with a media query</h3>
<p>To get you started on Today’s Achievement:</p>
<ol><li>Take an example of your own code from previous lessons in this course.</li>
<li>Create a <code>min-width</code> media query at the end of your stylesheet and change the <code>background-color</code> on Desktop screens.</li></ol>
<hr>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="min-width-media-query"><a aria-hidden="true" tabindex="-1" href="#min-width-media-query"><span class="icon icon-link"></span></a><code>min-width</code> Media Query</h3>
<p>Add a mobile-first media query to a project.</p>
<h4 id="instructions"><a aria-hidden="true" tabindex="-1" href="#instructions"><span class="icon icon-link"></span></a>Instructions</h4>
<ol><li>Take an example of your own code from previous lessons in this course.<ul><li>You may use <a href="https://github.com/sait-wbdv/dailies-f23/tree/main/2023-09-25-media-flex/03-nested-flex-banner" rel="nofollow">this sample code</a> for partial marks.</li></ul></li>
<li>Choose some styles within your project that you would like to show only on Desktop screens. For example, on Desktop:<ul><li>Show or hide an element;</li>
<li>Make the font-size larger;</li>
<li>Add a flexbox;</li></ul></li>
<li>Create a <code>min-width</code> media query at the end of your stylesheet and move your selected styles into it.</li>
<li>View your site on both mobile and desktop screen widths (you can do this in the Inspector).<ul><li>Does the design make sense to the user?</li></ul></li></ol>
<h4 id="marking-criteria"><a aria-hidden="true" tabindex="-1" href="#marking-criteria"><span class="icon icon-link"></span></a>Marking Criteria</h4>
<p>Full points will be awarded for media queries that:</p>
<ul><li>are practical;</li>
<li>extend the examples given in class;</li>
<li>show originality.</li></ul>`;
    }
  })}
<hr>
${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Lesson Prep</h2>
<h3 id="reading-list"><a aria-hidden="true" tabindex="-1" href="#reading-list"><span class="icon icon-link"></span></a>Reading list</h3>
<ul><li>MDN: <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries" rel="nofollow">Beginner’s guide to media queries</a></li>
<li>Kevin Powell: <a href="https://www.freecodecamp.org/news/taking-the-right-approach-to-responsive-web-design/" rel="nofollow">How to Take the Right Approach to Responsive Web Design</a></li></ul>
<h3 id="watch-list"><a aria-hidden="true" tabindex="-1" href="#watch-list"><span class="icon icon-link"></span></a>Watch List</h3>
<ul><li>Kevin Powell: <a href="https://www.youtube.com/watch?v=0ohtVzCSHqs" rel="nofollow">Are you writing responsive CSS the wrong way?</a></li></ul>`;
    }
  })}`;
});
export {
  _06_day_6 as default,
  metadata
};
