import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Conditionals | Decision making in Code",
  "excerpt": "Through introducing conditional statements, this class addresses flowcharting and how it maps algorithmic thinking.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _04_day_4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep</h2>
<ul><li>Skim <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals" rel="nofollow">Making decisions in your code - Conditionals</a></li>
<li>Read <a href="https://www.geeksforgeeks.org/an-introduction-to-flowcharts/" rel="nofollow">An introduction to flowcharts for algorithms</a></li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="morning-activity-interactivity-treasure-hunt-15-minutes"><a aria-hidden="true" tabindex="-1" href="#morning-activity-interactivity-treasure-hunt-15-minutes"><span class="icon icon-link"></span></a>Morning Activity: Interactivity Treasure Hunt (15 minutes)</h3>
<ul><li>Find 10 examples of interactivity on web pages.</li>
<li>Things to look for:<ul><li>anything with a button</li>
<li>sliders</li>
<li>carousels</li>
<li>things where the cursor is tracked</li></ul></li></ul>

<hr>
<h2>1. Conditionals</h2>
<p><a href="/slides/cpnt-262/js-conditional-code"><img src="/images/slides/cpnt-262/js-conditional-code.png" alt="Conditional Slides"></a></p>
<h3 id="key-takeaways"><a aria-hidden="true" tabindex="-1" href="#key-takeaways"><span class="icon icon-link"></span></a>Key Takeaways</h3>
<ul><li>Conditional statements are based in boolean truthy/falsy options</li>
<li>an if block doesn’t <em>need</em> and else block<ul><li>the else block is generally used when there is an <code>else if</code> block</li></ul></li>
<li>JS has equality and <strong>strict equality</strong></li>
<li>any value can be converted to a boolean value</li></ul>
<hr>
<h2>2. Javascript and Forms</h2>
<p><a href="/slides/cpnt-262/js-forms"><img src="/images/slides/cpnt-262/js-forms.png" alt="Javascript Forms Slides"></a></p>
<h3 id="key-takeaways-1"><a aria-hidden="true" tabindex="-1" href="#key-takeaways-1"><span class="icon icon-link"></span></a>Key Takeaways</h3>
<ul><li>Use the form element if:<ul><li>you’re submitting data to a server</li>
<li>the controls are triggered by a submit button</li></ul></li>
<li><a href="https://html.com/attributes/button-type/#:~:text=Both%20%3Cbutton%20type%3D%22submit,it%20is%20a%20null%20element" rel="nofollow">extra info on button type=submit vs input type=submit</a>.</li>
<li><code>event.preventDefault()</code> is important for when the page shouldn’t refresh on submit</li></ul>
<h3 id="todo-activity-log-form-data"><a aria-hidden="true" tabindex="-1" href="#todo-activity-log-form-data"><span class="icon icon-link"></span></a>TODO: Activity: log form data</h3>
<ul><li>Create a simple form in codepen and log values to the console on submit</li></ul>
<h2>Scrum Session</h2>
<ul><li>Reflect on the past week</li>
<li>Discuss topics that are making sense</li>
<li>Discuss topics that are confusing</li>
<li>Discuss strategies to practice the content we’re working on</li></ul>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="end-of-day-activity-create-a-flowchart-for-one-of-the-things-found-your-treasure-hunt"><a aria-hidden="true" tabindex="-1" href="#end-of-day-activity-create-a-flowchart-for-one-of-the-things-found-your-treasure-hunt"><span class="icon icon-link"></span></a>End of Day Activity: Create a flowchart for one of the things found your treasure hunt</h3>
<p>Opposite to how we normally do these, pick one of the interactive website elements that you found and create a flow chart to map it’s logic as best as you can.</p>
<p>You can also do this in pseudocode if you prefer</p>

<hr>`;
    }
  })}`;
});
export {
  _04_day_4 as default,
  metadata
};
