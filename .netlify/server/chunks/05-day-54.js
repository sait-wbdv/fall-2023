import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Functions | The Verbs of Programming",
  "excerpt": "We will practice wrapping conditional logic and mathematical expressions within functions for increased reusability.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _05_day_5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep</h2>
<ul><li><a href="https://www.freecodecamp.org/news/what-are-functions-in-javascript-a-beginners-guide/#:~:text=A%20function%20is%20a%20block,prompt()%2C%20and%20confirm()." rel="nofollow">Read What are Functions in Javascript</a></li>
<li><strong>For Discussion</strong>: Browse the web and find 5 examples of actions that you can do<ul><li>if you can’t find examples on websites, try web apps and video games</li></ul></li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="morning-activity-flowchart-or-pseudocode-a-process-15-minutes"><a aria-hidden="true" tabindex="-1" href="#morning-activity-flowchart-or-pseudocode-a-process-15-minutes"><span class="icon icon-link"></span></a>Morning Activity: Flowchart or pseudocode a process (15 minutes)</h3>
<p><strong>Focus</strong>: Draft code to build one of the processes documented in your treasure hunt from last week.</p>
<ol><li>Pick one of the functionalities that you want to document</li>
<li>Sketch a flowchart for how it works from an end user perspective</li>
<li>Write down your initial hypothesis on how this would work (css classes that may be selected, logic that might be useful)</li>
<li>Write down specific questions that you have about how things work</li></ol>
<hr>
<h2>1. Introduction to Functions</h2>
<p><a href="/slides/cpnt-262/js-functions"><img src="/images/slides/cpnt-262/js-functions.png" alt="Intro to functions"></a></p>
<h3 id="key-takeaways"><a aria-hidden="true" tabindex="-1" href="#key-takeaways"><span class="icon icon-link"></span></a>Key Takeaways</h3>
<ul><li>Functions make code re-usable and portable</li>
<li>Functions make code safer</li>
<li>Declare a function to make it invocable, invoke it to use it</li>
<li>JS has traditional <strong>and</strong> fat-arrow syntax for functions</li>
<li>Functions can take parameters as arguments</li>
<li>Functions return values</li></ul>
<h3 id="activity-convert-code-into-functions"><a aria-hidden="true" tabindex="-1" href="#activity-convert-code-into-functions"><span class="icon icon-link"></span></a>Activity: Convert Code into Functions</h3>
<ul><li>Work and discuss in your scrum groups</li>
<li>Review JS scripts written on days 2 and 3</li>
<li>Pick 2-3 (everyone does this) and turn them into functions<ul><li>try using arguments for variables</li>
<li>pass the values that you used on days 2 and 3 into the function as arguments</li>
<li>use a <code>return</code> statement to render the output</li></ul></li></ul>
<hr>
<h2>2. Build session: DRYing code with functions</h2>
<p>DRY → Don’t Repeat Yourself</p>
<ul><li><a href="https://github.com/sait-wbdv/dailies-w23/tree/main/2023-02-23-functions/01-tip-calculator-starter" rel="nofollow">Starter code</a></li></ul>
<h2>3. Learning Feedback</h2>
<ul><li>Tomorrow will be a concept oriented class that allows us to review syntax and and application</li>
<li>A poll will be released in Slack to pick a few topics that we can cover in more detail or as a review<ul><li>Students can (and are encouraged to) suggest topics</li></ul></li>
<li>Please respond by before you leave today</li></ul>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="end-of-day-activity-recreate-morning-algorithm-in-js"><a aria-hidden="true" tabindex="-1" href="#end-of-day-activity-recreate-morning-algorithm-in-js"><span class="icon icon-link"></span></a>End of Day Activity: Recreate Morning Algorithm in JS</h3>
<ul><li><strong>Focus</strong>: Create <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions" rel="nofollow">functions</a> with traditional or fat arrow syntax that reflect actions in your flow chart.</li>
<li>Suggestion: Create 1-3 functions that are used inside of a main function</li></ul>
<a href="https://gist.github.com/lilyx13/c81f1e72f83586efcd97206b806fd494"><h3>Instructions Link</h3>
  <img src="/images/qr-codes/algorithm-followup-activity.png" alt="activity qr code" class="w-48"></a>
<hr>
<h2><a href="/courses/cpnt-262/assessments/activity-3">Graded Activity 3: Objects and Arrays</a></h2>
<ul><li><strong>Due:</strong>: October 13th</li>
<li><strong>Weight</strong>: 10%</li>
<li><strong>Objective</strong>: Structure data in objects and arrays. Render content onto a webpage</li></ul>`;
    }
  })}`;
});
export {
  _05_day_5 as default,
  metadata
};
