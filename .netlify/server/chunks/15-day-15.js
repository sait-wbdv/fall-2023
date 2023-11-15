import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Events and Reactivity",
  "excerpt": null,
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _15_day_15 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<ul><li><a href="https://svelte.dev/tutorial/dynamic-attributes" rel="nofollow">Dynamic attributes</a></li>
<li><a href="https://svelte.dev/tutorial/styling" rel="nofollow">Styling</a></li>
<li><a href="https://svelte.dev/tutorial/nested-components" rel="nofollow">Nested components</a></li>
<li>Read <a href="https://kit.svelte.dev/docs/load" rel="nofollow">Loading Data</a></li>
<li>Extra Reading: <a href="https://eloquentjavascript.net/15_event.html" rel="nofollow">Handling Events</a> -&gt; Ch.15 of Eloquent Javascript</li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Events Review</h2>
<ul><li>Events are things that happen in JS</li>
<li>They can be triggered by the user or other factors (such as the page loading)</li>
<li>Common use cases: toggles, input fields, sliders</li></ul>
<h2 id="scrum-meeting">Scrum Session</h2>
<ul><li>what have you been working on?</li>
<li>what do you plan to be doing?</li>
<li>do you have any blocks?</li>
<li>discuss solutions that you found to bugs (be ready to highlight 1 as a group)</li></ul>
<h3 id="in-class-demonstration-convert-the-carousel-from-day-12-into-svelte"><a aria-hidden="true" tabindex="-1" href="#in-class-demonstration-convert-the-carousel-from-day-12-into-svelte"><span class="icon icon-link"></span></a>In Class Demonstration: Convert the carousel from day 12 into Svelte</h3>
<ul><li><strong>Step 1</strong>: Migrate vanilla code and set up assets and rendering variations</li>
<li>Objective: Build a carousel that can be used on any page</li>
<li>Content: render an array of images with descriptions</li>
<li>Conditional example: set up 2 elements to feature special content</li></ul>
<h2 id="svelte-events">Svelte Events</h2>
<h3 id="introduce-svelte-syntax"><a aria-hidden="true" tabindex="-1" href="#introduce-svelte-syntax"><span class="icon icon-link"></span></a>Introduce Svelte Syntax</h3>
<ul><li><code>&lt;el on:event={functionName}&gt;...&lt;/el&gt;</code></li>
<li>They can also be done inline</li>
<li><a href="https://learn.svelte.dev/tutorial/dom-events" rel="nofollow">Link to Tutorial</a></li></ul>
<p><a href="https://sait-wbdv.github.io/slides/w23/cpnt-262/svelte-events.html" rel="nofollow"><img src="/images/slides/svelte-events.png" alt="Slides - Svelte Events"></a></p>
<h3 id="in-class-demonstration-make-the-carousel-interactive"><a aria-hidden="true" tabindex="-1" href="#in-class-demonstration-make-the-carousel-interactive"><span class="icon icon-link"></span></a>In Class Demonstration: Make the carousel interactive</h3>
<ol><li>Configure the buttons</li>
<li>Check for potential event modifiers that we may want to use</li>
<li>Test</li>
<li>Deploy</li></ol>
<h3 id="in-class-activity-create-a-darkmode-toggle"><a aria-hidden="true" tabindex="-1" href="#in-class-activity-create-a-darkmode-toggle"><span class="icon icon-link"></span></a>In Class Activity: Create a darkmode toggle</h3>
<ul><li>Use tailwind css and svelte’s event handling to toggle between dark and light mode</li>
<li><a href="https://tailwindcss.com/docs/dark-mode" rel="nofollow">Tailwind Dark Mode Docs</a></li>
<li><a href="https://svelte.dev/repl/ed4fef4beceb4b0eb295d1f9fdf3bd62?version=3.6.9" rel="nofollow">Svelte Repl Darkmode Example</a></li></ul>
<hr>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="lab-activities"><a aria-hidden="true" tabindex="-1" href="#lab-activities"><span class="icon icon-link"></span></a>Lab Activities</h3>
<ul><li>easy mode: create a mobile nav menu using on:click</li>
<li>medium mode: create an accordion that opens and closes</li>
<li>hard mode: interact with the users’s cursor and trigger actions based on it’s position</li>
<li>Darkmode toggle is also an option</li></ul>`;
    }
  })}`;
});
export {
  _15_day_15 as default,
  metadata
};
