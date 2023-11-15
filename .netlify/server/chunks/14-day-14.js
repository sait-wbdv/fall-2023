import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Components Review and Svelte Logic",
  "excerpt": null,
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _14_day_14 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Vanilla Conditional Review</h2>
<ul><li>Conditionals are used to return different values based on specific conditions</li>
<li>use traditional if/else blocks or ternary operators</li></ul>
<h2 id="scrum-meeting">Scrum Session</h2>
<ul><li>what have you been working on?</li>
<li>what do you plan to be doing?</li>
<li>do you have any blocks?</li>
<li>identify a question regarding svelte or tailwind that your group cannot answer</li></ul>
<hr>
<h2>Refresh on Component Syntax</h2>
<ol><li>Nested Props</li>
<li>Slots</li>
<li><strong>Spread Operator</strong>: Use this to pass a whole object to a component (the object <strong>must</strong> map to the component’s props)<ul><li>This can really clean up your code when used right</li></ul></li>
<li>Style Props<ul><li><a href="https://svelte.dev/repl/89053145d4ad440ba4320dd663949d40?version=4.2.2" rel="nofollow">check out these examples</a></li></ul></li></ol>
<p><strong>Tutorial Review</strong></p>
<ul><li><a href="https://learn.svelte.dev/tutorial/declaring-props" rel="nofollow">Declaring props</a></li>
<li><a href="https://learn.svelte.dev/tutorial/default-values" rel="nofollow">Default values</a></li>
<li><a href="https://learn.svelte.dev/tutorial/spread-props" rel="nofollow">Spread props</a></li></ul>
<h3 id="review-topics"><a aria-hidden="true" tabindex="-1" href="#review-topics"><span class="icon icon-link"></span></a>Review Topics</h3>
<ul><li><p>Pages vs Components</p>
<ul><li>syntax differences</li>
<li>use case differences</li></ul></li>
<li><p>Rendering Components</p>
<ul><li>file organization and naming</li>
<li>import syntax</li>
<li>props vs slots</li>
<li>style props</li></ul></li>
<li><p>Each Syntax for looping</p>
<ul><li>destructuring</li>
<li>spread operator<h2>Conditional Rendering</h2></li></ul></li>
<li><p>Svelte uses it’s own custom if else syntax</p></li>
<li><p>This allows you to render variations based on things like prop values</p></li>
<li><p><a href="https://svelte.dev/examples/else-if-blocks" rel="nofollow">Example: Else If Blocks</a></p></li></ul>
<h3 id="in-class-example"><a aria-hidden="true" tabindex="-1" href="#in-class-example"><span class="icon icon-link"></span></a>In class Example:</h3>
<ul><li>Render specific images based on conditions</li></ul>
<h3 id="activity-conditional-rendering-in-components"><a aria-hidden="true" tabindex="-1" href="#activity-conditional-rendering-in-components"><span class="icon icon-link"></span></a>Activity: Conditional Rendering in Components</h3>
<ul><li>Make a component that renders different content based on prop values<ul><li>ie: <code>if name === &#39;Shaggy&#39;</code> render a picture of a scooby snack, <code>else</code> render the mystery machine</li>
<li>you could also use numerical values <strong>arguably easier to start</strong></li>
<li>remember the <code>{:else}</code> clause</li></ul></li>
<li>Render styles differently based a prop boolean:<ul><li>ie: a feature card might be different from an info card in few enough ways to use the same component but with conditional rendering<ul><li>suggestion: set the InfoCard to be a default in the <code>{:else}</code> and have the Feature card include a button and more visual prominance or something</li>
<li>for the prop, you can do this with a boolean prop</li></ul></li></ul></li></ul>
<hr>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {})}`;
});
export {
  _14_day_14 as default,
  metadata
};
