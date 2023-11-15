import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Skeleton UI, Routing",
  "excerpt": null,
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _16_day_16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="documentation"><a aria-hidden="true" tabindex="-1" href="#documentation"><span class="icon icon-link"></span></a>Documentation</h3>
<ul><li>Skim the <a href="https://www.skeleton.dev/" rel="nofollow">SkeletonUI</a> website</li>
<li>Read <a href="https://kit.svelte.dev/docs/routing" rel="nofollow">Routing</a></li></ul>
<h3 id="tutorials"><a aria-hidden="true" tabindex="-1" href="#tutorials"><span class="icon icon-link"></span></a>Tutorials</h3>
<p><strong>Introduction</strong></p>
<ul><li><a href="https://svelte.dev/tutorial/basics" rel="nofollow">Basics</a></li>
<li><a href="https://svelte.dev/tutorial/adding-data" rel="nofollow">Adding data</a></li></ul>
<h3 id="watch-list"><a aria-hidden="true" tabindex="-1" href="#watch-list"><span class="icon icon-link"></span></a>Watch list</h3>
<p>Source: <a href="https://www.youtube.com/@Codevolution" rel="nofollow">Codevolution</a></p>
<ul><li><a href="https://www.youtube.com/watch?v=IFZM2CGQ4cU" rel="nofollow">SvelteKit Tutorial - 4 - Routing</a></li>
<li><a href="https://www.youtube.com/watch?v=1UiDq3RAD8c" rel="nofollow">SvelteKit Tutorial - 5 - Nested Routes</a></li>
<li><a href="https://www.youtube.com/watch?v=C_ZUTipbXkg" rel="nofollow">SvelteKit Tutorial - 13 - Route Layout</a></li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2 id="scrum-meeting">Scrum Session</h2>
<ul><li>Check in with each other:<ul><li>what have you been working on?</li>
<li>what do you plan to be doing?</li>
<li>do you have any blocks?</li></ul></li></ul>
<hr>
<h2>Assignment 2: Skeleton UI Layouts</h2>
<ul><li><a href="/courses/cpnt-262/assessments/assignment-2">Link to Assignment</a></li>
<li>Due: November 17</li>
<li>Focus:<ul><li>Creating multiple layouts</li>
<li>Using a UI library</li></ul></li></ul>
<hr>
<h2 id="file-routing">1. File-based routing</h2>
<p><a href="https://sait-wbdv.github.io/slides/w23/cpnt-262/sveltekit-introduction.html" rel="nofollow"><img src="/images/slides/sveltekit-intro.png" alt="Slides - Introduction to Routing"></a></p>
<hr>
<h2 id="tutorial">2. Tutorial Walk-through</h2>
<ul><li><a href="https://svelte.dev/tutorial/basics" rel="nofollow">Basics</a></li>
<li><a href="https://svelte.dev/tutorial/adding-data" rel="nofollow">Adding data</a></li>
<li><a href="https://svelte.dev/tutorial/dynamic-attributes" rel="nofollow">Dynamic attributes</a></li>
<li><a href="https://svelte.dev/tutorial/styling" rel="nofollow">Styling</a></li>
<li><a href="https://svelte.dev/tutorial/nested-components" rel="nofollow">Nested components</a></li></ul>
<hr>
<h2>Skeleton UI</h2>
<ul><li><a href="https://www.skeleton.dev/" rel="nofollow">SkeletonUI</a> is a UI component library built on Tailwind</li>
<li>It ships with prebuild svelte and tailwind components (check the sidebar of their website for the docs)</li>
<li>These components use <strong>props</strong> to customize and tailor them to your needs</li>
<li>Use <a href="https://www.skeleton.dev/docs/tokens" rel="nofollow">Design Tokens</a> to style content according to a theme</li></ul>
<h3 id="setup-and-configuration"><a aria-hidden="true" tabindex="-1" href="#setup-and-configuration"><span class="icon icon-link"></span></a>Setup and Configuration</h3>
<ul><li><a href="https://www.skeleton.dev/docs/get-started" rel="nofollow">Get started instructions</a><ul><li>SkeletonUI can be added to a project that’s already been started<ul><li><strong>however</strong>, they recommend to start a new project with their template</li>
<li>ie: <code>npm create skeleton-app@latest name-of-app</code> (don’t choose typescript during this course)</li></ul></li>
<li>Tailwind will be installed by default when you use their command (review docs for configuration notes if you don’t use their command)</li>
<li>Next you add a theme. For 262, use a default one until you’re comfortable getting more custom. <a href="https://www.skeleton.dev/docs/themes#dark-mode" rel="nofollow">docs on theme configuration</a><ul><li>a great step for making your own is to use their <a href="https://www.skeleton.dev/docs/generator" rel="nofollow">theme generator</a></li></ul></li></ul></li></ul>
<h3 id="building-with-skeleton-components"><a aria-hidden="true" tabindex="-1" href="#building-with-skeleton-components"><span class="icon icon-link"></span></a>Building with Skeleton Components</h3>
<ol><li>Create your site layout using <a href="https://www.skeleton.dev/components/app-shell" rel="nofollow">app-shell</a>, <a href="https://www.skeleton.dev/components/app-bar" rel="nofollow">app-bar</a><ul><li>if you would like a persistent rail on the side (like in vscode), use the <a href="https://www.skeleton.dev/components/app-rail" rel="nofollow">app-rail</a></li></ul></li>
<li>Then add some testing content to a route and make sure everything is working as expected. <strong>document future features that you would like to add based on a look over of the documentation</strong></li>
<li><em>Now it’s time to have some fun!</em> Check out the list of components and pick 2-3 to try out <strong>pay attention to the props, events and usage tabs in the docs</strong></li></ol>
<h4 id="activity-plan-out-a-ui"><a aria-hidden="true" tabindex="-1" href="#activity-plan-out-a-ui"><span class="icon icon-link"></span></a>Activity: Plan out a UI</h4>
<ul><li>Use any of your design or 260 assignments as a <em>“mockup”</em></li>
<li>Audit elements that could be components<ul><li>start with elements that are duplicated or specialized</li>
<li>also consider elements that get really code heavy to clean up your routes</li></ul></li>
<li>Review the Skeleton docs for prebuilt components that fit your use case</li>
<li>Make notes on the elements that will need to become custom components</li></ul>
<h3 id="in-class-demonstration-add-components-to-our-sveltekit-app"><a aria-hidden="true" tabindex="-1" href="#in-class-demonstration-add-components-to-our-sveltekit-app"><span class="icon icon-link"></span></a>In Class Demonstration: Add Components to our Sveltekit app</h3>
<ul><li>We will walk through adding some more components and making a small page<ul><li>light mode toggle</li>
<li>layout components</li>
<li>Accordion</li></ul></li></ul>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Refactor Part of a Website into SkeletonUI+Sveltekit</h2>
<ul><li>Using the component audit that you did, select 1 aspect of the site to build</li>
<li>Focus on something that will only involve the skeletonUI components</li>
<li>Build it and don’t overthink it</li></ul>`;
    }
  })}`;
});
export {
  _16_day_16 as default,
  metadata
};
