import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Component Crafting in Figma",
  "excerpt": "We will learn how to make reusable components in Figma. Focusing on medium to high fidelity design, this class covers techniques used to design UI elements that can be replicated across a broader design.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _06_day_6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep Materials</h2>
<ul><li><a href="https://help.figma.com/hc/en-us/articles/360038662654-Guide-to-components-in-Figma" rel="nofollow">A Guide to Components in Figma</a></li>
<li><a href="https://www.figma.com/best-practices/components-styles-and-shared-libraries/" rel="nofollow">Components, Styles, and Shared Libraries Best Practices</a></li></ul>
<hr>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2 id="standup">Daily Standup</h2>
<ul><li>In each block of dsgn-270, you’ll have a group of 3-4 with whom you’ll discuss what your working on and how it’s going</li>
<li>The objective of this is to get comfortable talking about your progress, issues you’re running into, and your workflow</li></ul>
<h3 id="each-person-takes-a-turn-to-answer-the-following-questions"><a aria-hidden="true" tabindex="-1" href="#each-person-takes-a-turn-to-answer-the-following-questions"><span class="icon icon-link"></span></a>Each person takes a turn to answer the following questions:</h3>
<ol><li>What did you do yesterday?</li>
<li>What will you do today?</li>
<li>Anything blocking your progress?</li></ol>
<hr>
<h2>Preparation Activity: Moodboard</h2>
- Time: 15 minutes
- Goal: Create a moodboard to document 3 variations of each of these elements
	- you can choose different elements, but they have to be elements that are used repeatedly
- Constraint: Each variation must be **structurally distinct** featuring different layouts (not just minor changes like color)
- Tool: This activity must be done in Figjam
<h3 id="elements-to-document"><a aria-hidden="true" tabindex="-1" href="#elements-to-document"><span class="icon icon-link"></span></a>Elements to Document</h3>
<ul><li>Buttons</li>
<li>Cards</li>
<li>Navbars (desktop or mobile)</li></ul>
<h3 id="outcome"><a aria-hidden="true" tabindex="-1" href="#outcome"><span class="icon icon-link"></span></a>Outcome</h3>
<ul><li>You will have a moodboard with elements to model your own components on</li></ul>
<hr>
<h2>Creating Figma Components</h2>
<h3 id="benefits-of-making-components"><a aria-hidden="true" tabindex="-1" href="#benefits-of-making-components"><span class="icon icon-link"></span></a>Benefits of making components</h3>
<ul><li>They are reusable</li>
<li>You have a master component to make edits to (instead of editing each instance)</li>
<li>You can create variants of the component</li>
<li>They make your design <strong>maintainable</strong></li></ul>
<h3 id="downsides-to-making-components"><a aria-hidden="true" tabindex="-1" href="#downsides-to-making-components"><span class="icon icon-link"></span></a>Downsides to making components</h3>
<ul><li>It’s a new skill that takes time to get used too</li>
<li>You can overthink your component strategy and making things more complicated than necessary</li>
<li>They might not be necessary for smaller designs</li></ul>
<h3 id="types-of-elements-that-you-should-componentize-in-figma"><a aria-hidden="true" tabindex="-1" href="#types-of-elements-that-you-should-componentize-in-figma"><span class="icon icon-link"></span></a>Types of elements that you should componentize in Figma</h3>
<ul><li>Buttons</li>
<li>Icons</li>
<li>Formatted Headings</li>
<li>Cards</li>
<li>Footer</li>
<li>Navigation Bar</li></ul>
<iframe width="560" height="315" src="https://www.youtube.com/embed/9xiRHz72du4?si=qe7gz1hqQuz3RAop" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<h2>Make a Button</h2>
- Time: 15 minutes
- Following the documentation, create a reusable button component based on the ones in your moodboard.
- Make variants if you finish early
<hr>
<h2>Lab Time</h2>
<h3 id="create-components-based-on-your-moodboard-design"><a aria-hidden="true" tabindex="-1" href="#create-components-based-on-your-moodboard-design"><span class="icon icon-link"></span></a>Create components based on your moodboard design</h3>
<ul><li>Make sure to test the sizes on things so that they fit on a relevant sized frame (ie: don’t have a 1200px wide card for a 1280px wide screen)</li>
<li>Make a medium resolution mockup using your components and Added Headings</li>
<li><strong>Reflect on visual hierarchy and usability principles while designing</strong></li>
<li>Optimize when you think it’s ready</li></ul>
<p><strong>Recommendation:</strong> Don’t just make 1 card for your assignment and finish. Try making and applying a few components to get a hang of the workflow.</p>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status, dueDate: false }, {}, {
    default: () => {
      return `<h3 id="graded-activity-build-a-card-component"><a aria-hidden="true" tabindex="-1" href="#graded-activity-build-a-card-component"><span class="icon icon-link"></span></a>Graded Activity: <a href="/courses/dsgn-270/assessments/graded-activities">Build a Card Component</a></h3>
<ul><li><strong>Due Monday October 16 2023</strong></li>
<li><strong>Weight: 10%</strong></li>
<li>Create a reusable card component in figma</li>
<li>Practice creating design elements that can be batch tweaked</li>
<li>Improve the maintainability of your projects</li></ul>`;
    }
  })}`;
});
export {
  _06_day_6 as default,
  metadata
};
