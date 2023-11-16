import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Forms, Events, and Expressions",
  "excerpt": "This class is all about summarizing and reinforcing the concepts and techniques learned over the first 5 days. We introduce the concept of statements and expressions to frame what we've learned so far.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _06_day_6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep</h2>
<ul><li>Read <a href="https://www.freecodecamp.org/news/statement-vs-expression-whats-the-difference-in-programming/#:~:text=Expressions%20can%20be%20assigned%20or,are%20two%2Dsided%20in%20execution." rel="nofollow">Statements vs Expressions</a></li>
<li>MDN: <a href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls" rel="nofollow">Basic native form controls</a><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" rel="nofollow"><code>&lt;button&gt;</code> element</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox" rel="nofollow">checkboxes</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select" rel="nofollow"><code>&lt;select&gt;</code> menu</a></li></ul></li>
<li>MDN: <a href="https://developer.mozilla.org/en-US/docs/Web/Events" rel="nofollow">Event Reference</a> - <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events" rel="nofollow">Mouse events</a></li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="morning-activity-plan-out-a-beverage-app"><a aria-hidden="true" tabindex="-1" href="#morning-activity-plan-out-a-beverage-app"><span class="icon icon-link"></span></a>Morning Activity: Plan out a beverage app</h3>
<ul><li>Outline the following for how you make your morning beverage<ul><li>objective: what is the primary action that is being accomplished (all others are a part of this)</li>
<li>variables: the items involved and their properties</li>
<li>functions: what actions can be done? are they part of variable properties or things that you do?</li></ul></li></ul>
<h2>1. Statements vs Expressions</h2>
<p><a href="/slides/cpnt-262/js-expressions-vs-statements"><img src="/images/slides/cpnt-262/js-expressions-vs-statements.png" alt="Slides - Statements vs Expressions"></a></p>
<h3 id="key-takeaways"><a aria-hidden="true" tabindex="-1" href="#key-takeaways"><span class="icon icon-link"></span></a>Key Takeaways</h3>
<ul><li>statements contain expressions</li>
<li>if a chunk of js returns undefined, it’s a statement (otherwise it’s an expression)</li>
<li>all the operators we’ve covered are functions that return values —&gt; <strong>expressions</strong></li></ul>
<h3 id="morning-beverage-statements"><a aria-hidden="true" tabindex="-1" href="#morning-beverage-statements"><span class="icon icon-link"></span></a>Morning Beverage Statements</h3>
<ul><li>in programmatic terms but still pseudocode, write down statements that you might use to code your beverages</li>
<li>ie: assign and set up variables and named functions</li>
<li>work in js if you’re able to visualize it, if not focus on objectives and outcomes</li></ul>
<h4 id="debrief"><a aria-hidden="true" tabindex="-1" href="#debrief"><span class="icon icon-link"></span></a>Debrief</h4>
<ul><li>Discuss a statement that you had difficulty composing</li>
<li>Give one another feedback</li></ul>
<hr>
<h2>Syntax and Concept Review</h2>
<p>Based on feedback from our poll</p>
<h3 id="topics"><a aria-hidden="true" tabindex="-1" href="#topics"><span class="icon icon-link"></span></a>Topics</h3>
<ul><li>string, array, object, or Math methods</li>
<li>Manipulating things with functions</li>
<li>Variables and displaying them on an html page</li></ul>
<h3 id="demonstrations"><a aria-hidden="true" tabindex="-1" href="#demonstrations"><span class="icon icon-link"></span></a>Demonstrations</h3>
<ul><li><a href="https://codepen.io/lilyx/pen/zYyeLaP" rel="nofollow">Responsive Navigation</a><ul><li>follow up with things we’ve started</li>
<li>demo using matchMedia and classList</li></ul></li>
<li>Create a food app<ul><li>explore using predefined methods</li>
<li>create functions</li>
<li>add methods to objects</li>
<li>testing output</li></ul></li></ul>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="end-of-day-activity-code-your-morning-beverage"><a aria-hidden="true" tabindex="-1" href="#end-of-day-activity-code-your-morning-beverage"><span class="icon icon-link"></span></a>End of Day Activity: Code your Morning Beverage</h3>
<ul><li>Similar to the in class demonstrations, try to create some logic that would be used to automate a morning beverage making process</li>
<li>functions for:<ul><li>pouring</li>
<li>heating</li>
<li>steeping</li></ul></li>
<li>variables for:<ul><li>water/water source</li>
<li>method of heating</li>
<li>source of tea/coffee/…</li>
<li>addons?</li></ul></li></ul>
<hr>`;
    }
  })}`;
});
export {
  _06_day_6 as default,
  metadata
};
