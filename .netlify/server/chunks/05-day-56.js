import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Wireframing and UI Design",
  "excerpt": "Draft layout concepts on anything from a napkin to Figma, we will practice reducing user interfaces to low fidelity wireframes. By the end of this class you will have the skills to quickly create wireframes for your projects.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _05_day_5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep Materials</h2>
<ul><li>Read <a href="https://medium.com/detaux/what-is-ui-ux-wireframe-designerrs-46dac9c8a153" rel="nofollow">Wireframing in UI/UX Design</a></li>
<li>Watch <a href="https://youtu.be/TIV1y11xz7k?si=BROBmfhYGT0-N5-K" rel="nofollow">User Flow Tutorial</a></li>
<li>Read <a href="https://www.lucidchart.com/pages/how-to-make-a-wireframe" rel="nofollow">7 Tips for Making Wireframes</a></li>
<li>Review <a href="https://bootcamp.uxdesign.cc/12-8-4-column-system-for-responsive-grids-df207a58ebc" rel="nofollow">12 - 8 - 4 Column Grids for Responsive Design</a></li></ul>
<h3 id="tools-for-class"><a aria-hidden="true" tabindex="-1" href="#tools-for-class"><span class="icon icon-link"></span></a>Tools for Class</h3>
<ul><li>Either pen and paper, tablet and stylus, or phone and stylus/finger</li>
<li>If you’re using a mobile device for design, find a good app to work with. For Example: <a href="https://concepts.app/en/" rel="nofollow">Concepts App is supported on most platforms</a></li></ul>
<hr>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Sketch a UI in 10 minutes</h2>
<p>Let’s start today off by reverse engineering a wireframe. Don’t worry if you dont know the term “wireframe” yet. <strong>Just focus on creating outlines for the content on a web page</strong>.first-letter:</p>
<h3 id="elements-to-use"><a aria-hidden="true" tabindex="-1" href="#elements-to-use"><span class="icon icon-link"></span></a>Elements to Use</h3>
<ul><li>Images: Squares with X in it</li>
<li>Icons: Circle or square with an X in it</li>
<li>Text: squiggles</li>
<li>Headings: Functional or Semantic (Go with what makes the most sense)</li>
<li>Cards, buttons, lists: squares, rounded squares, dots &amp; numbers</li></ul>
<h3 id="tools-to-use"><a aria-hidden="true" tabindex="-1" href="#tools-to-use"><span class="icon icon-link"></span></a>Tools to Use</h3>
<ul><li>Tablet, phone, or pen and paper.</li></ul>
<h3 id="steps"><a aria-hidden="true" tabindex="-1" href="#steps"><span class="icon icon-link"></span></a>Steps</h3>
<ol><li>Pick a website home page</li>
<li>Visually scan through it, take mental note of it’s <strong>information hierarchy</strong> and the <strong>ui elements</strong></li>
<li>Using your tool of choice, sketch a wireframe of the entire page</li>
<li>Compare with member(s) of your scrum team. Give each other constructive feedback<ul><li>Can someone else scan through it and understand what everything is? if not, what changes would help this (keep the scope in mind)</li></ul></li></ol>
<hr>
<h2>Wireframes and Web Design</h2>
<a href="https://docs.google.com/presentation/d/1GKMLXrThbNU5My3HywnR4Jjk_tLnGgYGW1B6Ffg-t6M/edit?usp=sharing"><img src="/images/design/wireframe-lecture-slides.png" alt="A link to the wireframe lecture slide content"></a>
<h3 id="key-takeaways--final-notes"><a aria-hidden="true" tabindex="-1" href="#key-takeaways--final-notes"><span class="icon icon-link"></span></a>Key Takeaways &amp; Final Notes</h3>
<ul><li>Wireframes are used to plan, debug, analyze designs</li>
<li>Wireframes are especially useful for blocking out how a site’s information hierarchy will be visually organized</li>
<li>Use wireframing to prevent bad UI/UX choices down the road</li>
<li>Low Fidelity Wireframes contain little to no detail</li>
<li>Medium Fidelity Wireframes contain some detail depending on the stage/situation of design</li>
<li>High Fidelity Wireframes/Mockups look close to the finished product</li>
<li>Prototypes are wireframes/mockups with actual interactive behaviour</li></ul>
<h3 id="activity-create-another-wireframe"><a aria-hidden="true" tabindex="-1" href="#activity-create-another-wireframe"><span class="icon icon-link"></span></a>Activity: Create Another Wireframe</h3>
<p>Now that you understand what wireframes are a bit more, let’s repeat our first activity with a different page or site.</p>
<ul><li><strong>First</strong> check in with your team, have a 5 minute discussion on the following questions (it’s ok if you don’t talk about all of them)<ul><li>What worked well in your first wireframes?</li>
<li>Knowing what you know now, will you change your approach at all?</li></ul></li>
<li>Then follow the same steps as the first activity</li></ul>
<hr>
<h2>Wireflows: The Processual Wireframe</h2>
<p>A wireflow is like a flowchart version of a wireframe. It’s focused on capturing the process and <strong>task flow</strong> of particular tasks on a website.</p>
<p>We won’t be going into too much detail on wireflows, however we are going to outline wireflows based on one of the wireframes that we’ve sketched today.</p>
<h3 id="how-to-create-a-wireflow"><a aria-hidden="true" tabindex="-1" href="#how-to-create-a-wireflow"><span class="icon icon-link"></span></a>How to create a wireflow</h3>
<ol><li>Define the user objective (1 sentence statement on what the user would be trying to do)</li>
<li>Draw the start point and what page the user is on<ul><li>If there are multiple potential start points, you should write this down in a note</li>
<li>Generally use a square shape for the pages and stages</li></ul></li>
<li>Add steps based on the steps that exist<ul><li>diamond shapes represent decisions/questions that the user is faced with</li></ul></li>
<li>Continue documenting the possible options as the UI presents them until you reach the goal</li></ol>
<p><strong>Look at at the Wireflow in the introduction of this article for an example</strong></p>
<a href="https://www.nngroup.com/articles/wireflows/"><img src="/images/design/wireflow-article-nngroup.png" alt="QR Code to Wireflow Article" class="w-48"></a>
<h2>Wireflow Activity</h2>
<p>Using any of the wireframes that you’ve drafted and sketched today, use figjam to create a wireflow.</p>
<ol><li>Pick a wireframe, and copy into into the figjam file as your point of reference</li>
<li>Pick a task (that can be accomplished with the home page as the start point) and outline that title so it’s clear and easy to see</li>
<li>Step by step, work through everything needed to satisfy the userflow</li>
<li>Intentionally make wrong decisions, find out all aspects of the flow</li>
<li>Document other start points that exist (if they do)</li></ol>
<hr>
<h2 id="standup">Daily Standup Beginning of Lab</h2>
<ul><li>In each block of dsgn-270, you’ll have a group of 3-4 with whom you’ll discuss what your working on and how it’s going</li>
<li>The objective of this is to get comfortable talking about your progress, issues you’re running into, and your workflow</li></ul>
<h3 id="each-person-takes-a-turn-to-answer-the-following-questions"><a aria-hidden="true" tabindex="-1" href="#each-person-takes-a-turn-to-answer-the-following-questions"><span class="icon icon-link"></span></a>Each person takes a turn to answer the following questions:</h3>
<ol><li>What did you do yesterday?</li>
<li>What will you do today?</li>
<li>Anything blocking your progress?</li></ol>
<hr>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status, dueDate: false }, {}, {
    default: () => {
      return `<h3 id="assignment-2-create-a-website-wireframe"><a aria-hidden="true" tabindex="-1" href="#assignment-2-create-a-website-wireframe"><span class="icon icon-link"></span></a>Assignment 2: <a href="/courses/dsgn-270/assessments/assignment-2">Create a Website Wireframe</a></h3>
<ul><li><strong>Due Wednesday October 18 2023</strong></li>
<li><strong>Weight: 20%</strong></li>
<li>Create set low fidelity wireframes for a 4 page website</li>
<li>Use functional text in your wireframes to identify primary user flows</li>
<li>Practice outlining a multipage website layout</li></ul>`;
    }
  })}`;
});
export {
  _05_day_5 as default,
  metadata
};
