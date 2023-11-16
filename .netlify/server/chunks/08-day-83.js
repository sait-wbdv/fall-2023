import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Loops | An algorithm's repeat",
  "excerpt": "Loops allow us to automate a repeated task. This class looks at some basic uses for loops.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _08_day_8 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep</h2>
<ul><li>Read <a href="https://www.freecodecamp.org/news/master-the-art-of-looping-in-javascript-with-these-incredible-tricks-a5da1aa1d6c5/" rel="nofollow">Master the art of looping in Javascript</a></li>
<li>Read <a href="https://www.freecodecamp.org/news/javascript-for-loops/" rel="nofollow">Javascript for loops</a></li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2 id="debugging-and-code-warmups"><a aria-hidden="true" tabindex="-1" href="#debugging-and-code-warmups"><span class="icon icon-link"></span></a>Debugging and Code Warmups</h2>
<ul><li>Various examples using loops and methods</li></ul>
<h3 id="morning-activity-plan-out-a-repeated-action"><a aria-hidden="true" tabindex="-1" href="#morning-activity-plan-out-a-repeated-action"><span class="icon icon-link"></span></a>Morning Activity: Plan out a repeated action</h3>
<p><strong>Focus:</strong> Based on any of your brainstorming activities (or look at live websites), find situations where repetition is necessary</p>
<ul><li>In small groups, take about 5 minutes to review your past ideas for things that could be looped. <strong>find 1 simple example</strong><ul><li><em>tip: consider sites, apps, or anything that you have interest in building</em></li></ul></li>
<li>Talk through one another’s loops, help consider potential bugs, problems, or code that could be useful</li>
<li>Take notes on each other feedback</li>
<li>These can be used in your assignment 4</li></ul>
<h4 id="class-debrief"><a aria-hidden="true" tabindex="-1" href="#class-debrief"><span class="icon icon-link"></span></a>Class Debrief</h4>
<ul><li>Everyone will get a couple minutes to talk about their loops and the elements that are looping</li></ul>
<hr>
<h2 id="for-loops"><a aria-hidden="true" tabindex="-1" href="#for-loops"><span class="icon icon-link"></span></a>For Loops</h2>
<ul><li>The traditional Loop</li>
<li><a href="/slides/cpnt-262/js-for-loops">Slides</a></li></ul>
<h3 id="in-class-activity-render-things-with-loops"><a aria-hidden="true" tabindex="-1" href="#in-class-activity-render-things-with-loops"><span class="icon icon-link"></span></a>In Class Activity: Render things with loops</h3>
<ol><li>in a code pen, Log text out in a console with a for loop</li>
<li>in the same code pen, render the content onto the web page</li></ol>
<h2 id="for-in-loops"><a aria-hidden="true" tabindex="-1" href="#for-in-loops"><span class="icon icon-link"></span></a>For In Loops</h2>
<ul><li>These can be used to loop through objects</li></ul>
<h3 id="activity"><a aria-hidden="true" tabindex="-1" href="#activity"><span class="icon icon-link"></span></a>Activity</h3>
<ol><li>Create a simple object in a codepen</li>
<li>iterate through and render the keys in a console</li>
<li>iterate through and render the values in a console</li>
<li>iterate through and render both the keys and values onto a page</li></ol>
<hr>
<h2 id="for-of-loop"><a aria-hidden="true" tabindex="-1" href="#for-of-loop"><span class="icon icon-link"></span></a>For Of Loop</h2>
<ul><li>A simpler and more modern for loop</li></ul>
<h3 id="activity-1"><a aria-hidden="true" tabindex="-1" href="#activity-1"><span class="icon icon-link"></span></a>Activity</h3>
<ul><li>Create an array of objects</li>
<li>use a for of loop to iterate through the array</li>
<li>use a for in loop inside the for of loop</li>
<li>render values from the object to the console</li></ul>
<h2>Other Loops</h2>
<ul><li>While Loops<ul><li>excel when you don’t know the number of iterations</li></ul></li>
<li>Do While Loops<ul><li>great for when you need to execute someonething once before evaluating the looping condition</li></ul></li></ul>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="end-of-day-activity-recreate-morning-algorithm-in-js"><a aria-hidden="true" tabindex="-1" href="#end-of-day-activity-recreate-morning-algorithm-in-js"><span class="icon icon-link"></span></a>End of Day Activity: Recreate Morning Algorithm in JS</h3>
<ul><li><strong>Focus</strong>: Use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration" rel="nofollow">looping syntax</a>, pick loop types that make the most sense with your topic<ul><li>Take the loop idea from the morning and create a minimal example of it rendered onto an html page</li></ul></li></ul>
<hr>`;
    }
  })}`;
});
export {
  _08_day_8 as default,
  metadata
};
