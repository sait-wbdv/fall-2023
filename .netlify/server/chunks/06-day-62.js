import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "TailwindCSS",
  "excerpt": "In this session, we'll look at TailwindCSS, a popular CSS utility library.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _06_day_6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Housekeeping</h2>
<ul><li><a href="/courses/cpnt-201/assessments/assignment-3">Assignment 3 Announced</a><ul><li>Weight: 20%</li>
<li>Due: Friday October 20 @ 11:59pm</li></ul></li></ul>
<hr>
<h2>Core Tailwind Concepts</h2>
<h3 id="materials"><a aria-hidden="true" tabindex="-1" href="#materials"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://tailwindcss.com/docs/installation/play-cdn" rel="nofollow">Install with Play CDN</a></li>
<li><a href="https://tailwindcss.com/docs/utility-first" rel="nofollow">Utility-First Fundamentals</a></li>
<li><a href="https://tailwindcss.com/docs/hover-focus-and-other-states" rel="nofollow">Handling Hover, Focus, and Other States</a></li>
<li><a href="https://tailwindcss.com/docs/responsive-design" rel="nofollow">Responsive Design</a></li></ul>
<h3 id="starter-code"><a aria-hidden="true" tabindex="-1" href="#starter-code"><span class="icon icon-link"></span></a>Starter Code</h3>
<ul><li><a href="https://github.com/acidtone/wiki-markup" rel="nofollow">wiki-markup repo</a></li></ul>
<hr>
<h2>Box Model utilities</h2>
<ul><li><a href="https://tailwindcss.com/docs/padding" rel="nofollow">padding</a></li>
<li><a href="https://tailwindcss.com/docs/margin" rel="nofollow">margins</a></li>
<li><a href="https://tailwindcss.com/docs/space" rel="nofollow">space between</a></li>
<li><a href="https://tailwindcss.com/docs/border-radius" rel="nofollow">border radius</a></li>
<li><a href="https://tailwindcss.com/docs/border-width" rel="nofollow">border width</a></li>
<li><a href="https://tailwindcss.com/docs/border-color" rel="nofollow">border colour</a></li>
<li><a href="https://tailwindcss.com/docs/border-style" rel="nofollow">border style</a></li></ul>
<hr>
<h2>Colour</h2>
<ul><li><a href="https://tailwindcss.com/docs/customizing-colors" rel="nofollow">default color palette</a></li>
<li><a href="https://tailwindcss.com/docs/text-color" rel="nofollow">Text Color</a></li>
<li><a href="https://tailwindcss.com/docs/background-color" rel="nofollow">Background Color</a></li></ul>
<hr>
<h2>Typography</h2>
<ul><li><a href="https://tailwindcss.com/docs/font-family" rel="nofollow">Font Family</a></li>
<li><a href="https://tailwindcss.com/docs/font-size" rel="nofollow">Font Size</a></li>
<li><a href="https://tailwindcss.com/docs/font-style" rel="nofollow">Font Style</a></li>
<li><a href="https://tailwindcss.com/docs/font-weight" rel="nofollow">Font Weight</a></li></ul>
<hr>
<h2>Transition and Animation</h2>
<ul><li><a href="https://tailwindcss.com/docs/transition-property" rel="nofollow">Transition property</a></li></ul>`;
    }
  })}
<hr>
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="match-a-layout"><a aria-hidden="true" tabindex="-1" href="#match-a-layout"><span class="icon icon-link"></span></a>Match a layout</h3>
<p>Using TailwindCSS utility classes, try to re-create a design/layout of your choice from a screen cap such as this one:</p>
<p><img src="/images/lessons/201-ach-6.png" alt="Screencap of some text"></p>
<h4 id="instructions"><a aria-hidden="true" tabindex="-1" href="#instructions"><span class="icon icon-link"></span></a>Instructions</h4>
<ol><li>Take a screencap of one of your assignments, projects, designs that you would like to re-create with TailwindCSS.</li>
<li>Using Tailwind utility classes, re-create the design to the best of your ability.</li>
<li>Submit the following to Brightspace:<ul><li>The screen cap you used for this achievement</li>
<li>The GH repo of your work</li>
<li>The deployed GH Pages link</li></ul></li></ol>`;
    }
  })}
<hr>
${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Lesson Prep</h2>
<ul><li><a href="https://tailwindcss.com/docs/installation" rel="nofollow">TailwindCSS Docs</a></li>
<li><a href="https://kopi.dev/tailwind-css-with-cdn-html/" rel="nofollow">How to Use Tailwind CSS with CDN in HTML</a></li></ul>
<h3 id="tailwind-core-concepts"><a aria-hidden="true" tabindex="-1" href="#tailwind-core-concepts"><span class="icon icon-link"></span></a>Tailwind Core Concepts</h3>
<ul><li><a href="https://tailwindcss.com/docs/utility-first" rel="nofollow">Utility-First Fundamentals</a></li>
<li><a href="https://tailwindcss.com/docs/hover-focus-and-other-states" rel="nofollow">Handling Hover, Focus, and Other States</a></li>
<li><a href="https://tailwindcss.com/docs/responsive-design" rel="nofollow">Responsive Design</a></li></ul>`;
    }
  })}`;
});
export {
  _06_day_6 as default,
  metadata
};
