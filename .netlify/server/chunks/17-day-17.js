import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Error Handling, Stores, Sveltekit Specifics",
  "excerpt": null,
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _17_day_17 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep</h2>
<ul><li>Look up the Fox, Goose, and Corn Problem</li>
<li>Read <a href="https://playcode.io/javascript/getter-setter" rel="nofollow">Getters and Setters</a></li>
<li>Skim <a href="https://vercel.com/docs/beginner-sveltekit/svelte-stores" rel="nofollow">What is a Store</a></li>
<li>Practice <a href="https://learn.svelte.dev/tutorial/writable-stores" rel="nofollow">the svelte stores tutorial group</a></li>
<li>Read <a href="https://betterprogramming.pub/what-are-svelte-stores-and-how-to-use-them-a4963968ee89" rel="nofollow">What are svelte stores and how to use them?</a></li>
<li>Review <a href="https://svelte.dev/docs/svelte-store" rel="nofollow">Svelte Store documentation</a></li>
<li>Practice <a href="https://learn.svelte.dev/tutorial/introducing-sveltekit" rel="nofollow">Basic Sveltekit</a></li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Graded Activity 6: Reactivity and Events</h2>
<ul><li><a href="/courses/cpnt-262/assessments/activity-6">Link to assignment</a></li>
<li>Due: November 13 @ 11:59PM</li>
<li>The last graded activity for 262!</li>
<li><strong>Focus</strong>: Create events in svelte</li></ul>
<hr>
<h2>The Fox, Goose, and Corn Problem</h2>
- A farmer needs to get a fox, goose, and bag of corn across a river
- the farmer can only move 1 at a time
<h3 id="conditions"><a aria-hidden="true" tabindex="-1" href="#conditions"><span class="icon icon-link"></span></a>Conditions</h3>
<ul><li>The fox cannot be alone with the goose</li>
<li>The goose cannot be alone with the corn</li></ul>
<h3 id="how-to-solve"><a aria-hidden="true" tabindex="-1" href="#how-to-solve"><span class="icon icon-link"></span></a>How to solve?</h3>
<h2 id="scrum-meeting">Scrum Session</h2>
<ul><li>what have you been working on?</li>
<li>what do you plan to be doing?</li>
<li>do you have any blocks?</li>
<li>Outline an algorithmic approach to solving the fox, goose, and corn problem</li></ul>
<hr>
<h2>Morning WarmUp: Sveltekit Tutorial Review</h2>
<ul><li>We will walk through parts of: <a href="https://learn.svelte.dev/tutorial/introducing-sveltekit" rel="nofollow">Basic Sveltekit</a><ul><li>Routing: Route parameters</li>
<li>Loading Data: Page Data</li>
<li>Svelte Lifecycle</li></ul></li>
<li>Video: <a href="https://www.youtube.com/watch?v=3ITICCcNxOE" rel="nofollow">What are Lifecycle Hooks?</a></li></ul>
<hr>
<h2>Error Handling</h2>
<ul><li>Using <code>try/catch</code> blocks<ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch" rel="nofollow">mdn docs</a></li>
<li>These are used to <strong>“try”</strong> to run code, but if it fails, <strong>“catch”</strong> it</li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/console/error" rel="nofollow"><code>console.error()</code></a> is better for error handling than <code>console.log()</code></li>
<li><a href="https://linuxhint.com/what-is-the-difference-between-consoleerror-and-consolelog-methods/" rel="nofollow">difference between console.error() and console.log()</a></li></ul></li>
<li>Review <a href="https://learn.svelte.dev/tutorial/error-basics" rel="nofollow">Error handling and Redirects in sveltes tutorial</a><ul><li>throw Error syntax</li>
<li>Error Pages</li>
<li>Redirects</li></ul></li></ul>
<h3 id="demonstration-error-handling-to-the-animal-problem"><a aria-hidden="true" tabindex="-1" href="#demonstration-error-handling-to-the-animal-problem"><span class="icon icon-link"></span></a>Demonstration: Error handling to the animal problem</h3>
<hr>
<h2>Stores</h2>
<p>All frontend frameworks have a way of handling state, these are usually referred to as stores</p>
<ul><li>In Svelte, stores are built into the frameowrk</li>
<li>For Vue or React, you’d use Pinia or Redux (respectively)</li></ul>
<h3 id="component-state-vs-global-state-vs-localstorage"><a aria-hidden="true" tabindex="-1" href="#component-state-vs-global-state-vs-localstorage"><span class="icon icon-link"></span></a>Component State vs Global State vs localStorage</h3>
<ul><li>localStorage can be used to save information in a client’s browser. Like session storage, this can be useful for seamless UX, however it can open up security issues… and conflates your app’s storage with the client’s storage</li>
<li><strong>Stores are great for data that is manipulated by many pages and/or components</strong></li>
<li><a href="https://svelte.dev/docs/svelte-store" rel="nofollow">Svelte Store Docs</a></li></ul>
<h3 id="types-of-stores"><a aria-hidden="true" tabindex="-1" href="#types-of-stores"><span class="icon icon-link"></span></a>Types of Stores</h3>
<ul><li>writable: data can be modified by “subscribers” (components)<ul><li>use for data that components should change</li></ul></li>
<li>readable: data can only be read by “subscribers”<ul><li>use for data that should only be read</li></ul></li></ul>
<h4 id="example-1-global-readable-data"><a aria-hidden="true" tabindex="-1" href="#example-1-global-readable-data"><span class="icon icon-link"></span></a>Example 1: Global Readable Data</h4>
<ul><li>Set up a store with reusable data</li>
<li>Render the data on multiple routes and components</li></ul>
<h4 id="example-2-multi-component-counter"><a aria-hidden="true" tabindex="-1" href="#example-2-multi-component-counter"><span class="icon icon-link"></span></a>Example 2: Multi Component Counter</h4>
<ul><li>Goal: Break a counter up into multiple components</li>
<li>render the value on a second page to demonstrate how it can be updated</li></ul>
<h4 id="activity-built-a-counter-and-prep-for-a-like-tracker"><a aria-hidden="true" tabindex="-1" href="#activity-built-a-counter-and-prep-for-a-like-tracker"><span class="icon icon-link"></span></a>Activity: Built a counter and prep for a “like” tracker</h4>
<ul><li>Finish recreating the counter used</li>
<li>Plan out how you might use similar logic to track social media likes for a post, image, or other type of media</li></ul>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Add Error Handling to code</h2>
<ul><li>Take some code that you’ve worked on, and try adding error handling to it<ul><li>try/catch for logic blocks</li>
<li>console.error()</li>
<li>a redirect</li>
<li>throw error syntax</li></ul></li>
<li>It can be helpful to make something that’s intentionally broken and use try/catch + console.error to experiment</li></ul>`;
    }
  })}`;
});
export {
  _17_day_17 as default,
  metadata
};
