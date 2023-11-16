import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Review Day",
  "excerpt": "Last day of 260! Let's review and extend what we've covered.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _10_day_10 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Housekeeping</h2>
<ul><li><a href="/courses/cpnt-260/assessments/final-project">Final Project</a> Announced<ul><li>Weight: 30%</li>
<li>Due: Tuesday, October 10 @ 11:59pm</li></ul></li></ul>
<hr>
<h2>Assignment 2 Spoilers</h2>
<ul><li><a href="https://github.com/sait-wbdv/f23-spoilers-cpnt260-a2" rel="nofollow">Single Card repo</a></li>
<li><a href="https://sait-wbdv.github.io/f23-spoilers-cpnt260-a2/" rel="nofollow">Live site</a></li></ul>
<hr>
<h2>Review Day</h2>
<p>Submit topics that you’d like to review or ones that we haven’t covered in this course.</p>
<ul><li><a href="http://padlet.com/acidtone/last_day_topics_260" rel="nofollow">Padlet Submissions</a></li></ul>`;
    }
  })}
<hr>
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<p>This achievement will be worth double: 6 points toward your final mark in this course.</p>
<p><strong>Presentations start at 12:30pm</strong></p>
<p><strong>You have the option to present with a partner for a 10-minute talk</strong></p>
<h3 id="show-and-tell"><a aria-hidden="true" tabindex="-1" href="#show-and-tell"><span class="icon icon-link"></span></a>Show and Tell</h3>
<p>Do a 5-minute (10-minute if you’re in pairs) talk on a topic related to the course. It could be:</p>
<ul><li>Something you learned in this course;</li>
<li>A demo of something you built;</li>
<li>A tutorial on how to use a tool;</li>
<li>An awesome [thing here] you found online.</li>
<li>etc, etc.</li></ul>
<p><strong>Restrictions</strong></p>
<ul><li>The length of your talk must be 5 (or 10 with a partner) minutes +/- 2.5 minutes;</li></ul>`;
    }
  })}`;
});
export {
  _10_day_10 as default,
  metadata
};
