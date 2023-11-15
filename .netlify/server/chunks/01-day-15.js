import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Think like a programmer",
  "excerpt": "Learn how to programmatically create and problem solve using Scratch as a visual tool. This class introduces basic programming principles.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _01_day_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep</h2>
<ul><li>Watch <a href="https://www.youtube.com/watch?v=azcrPFhaY9k" rel="nofollow">How to begin thinking like a programmer</a>: A lecture by Andy Harris - we will watch a few sections in class for discussion</li>
<li>Sign up and check out people’s projects on <a href="https://scratch.mit.edu" rel="nofollow">Scratch</a> - we will use this for our first graded activity</li>
<li>Advanced Reading: <a href="https://medium.com/@idrazhar/0-to-1-series-how-javascript-works-under-the-hood-ffca74f1cc65" rel="nofollow">Javascript Under the Hood</a><ul><li>how javascript works</li>
<li>history of javascript</li></ul></li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>CPNT-262 Course High Level Overview</h2>
<ul><li><strong>Objectives</strong>:<ul><li>to learn fundamentals about computer programming</li>
<li>to be able to build websites using modern technologies</li>
<li><strong>to create a foundation for your future in tech</strong></li></ul></li>
<li><strong>How to be successful at programming</strong>:<ul><li>focus on problem solving</li>
<li>spending enough time practicing to understand concepts</li>
<li>collaborate with others</li>
<li>avoid comparing yourself to others</li>
<li>don’t copy/paste code without understanding how it works</li></ul></li>
<li><strong>Scrum Teams</strong><ul><li>Scrum Standup Sessions will take place at the beginning of open lab</li>
<li>You’ll have 1 team for days 1-10 and another for 11-20</li>
<li>Scrum Standup Sessions shouldn’t last more than 15 minutes</li>
<li>Answer the following:<ul><li>what I did yesterday</li>
<li>what I’m doing today</li>
<li>am I blocked by anything</li></ul></li></ul></li></ul>
<a href="https://docs.google.com/presentation/d/1zu5ruNcKQ8knm2fPr0zGaTRhR9PXsYKGWdPqwoxjXww/edit?usp=sharing"><img src="/images/slides/cpnt-262/cpnt-262-overview.png" alt="class intro slide"></a>
<hr>
<h2>Flow Charts</h2>
<p><a href="/slides/cpnt-262/js-flowcharts"><img src="/images/slides/cpnt-262/js-flowcharts.png" alt="Slides - Flowcharts"></a></p>
<h3 id="activity-algorithms-in-everyday-life-30-minutes"><a aria-hidden="true" tabindex="-1" href="#activity-algorithms-in-everyday-life-30-minutes"><span class="icon icon-link"></span></a>Activity: Algorithms in Everyday Life (30 minutes)</h3>
<p><strong>Focus</strong>: Anything goes! (within a sharable school context)</p>
<ol><li>Create a flowchart of something that you enjoy doing using the instructions linked below (15 minutes)</li>
<li>Briefly discuss your findings:<ul><li>What activity did you document? What step(s) did you break down into micro steps?</li>
<li><strong>Walk each other through your steps</strong></li>
<li>When broken into micro steps, did you underestimate how complex the activity actually was?</li></ul></li></ol>
<a href="https://gist.github.com/lilyx13/423ffbe6e8da87497b134985ba90ab15"><h3>Instructions Link</h3>
  <img src="/images/qr-codes/algorithm-activity.png" alt="activity qr code" class="w-48"></a>
<hr>
<h2>Computational Thinking</h2>
<h3 id="lecture-slides"><a aria-hidden="true" tabindex="-1" href="#lecture-slides"><span class="icon icon-link"></span></a>Lecture Slides</h3>
<a href="https://docs.google.com/presentation/d/1U9YnVCE4kvZzt2Fgc-QoFZkA6wEQFfUo6lgjl72dCdU/edit?usp=sharing"><img src="/images/slides/cpnt-262/computational-thinking.png" alt="computational thinking slides"></a>
<h3 id="key-takeaways"><a aria-hidden="true" tabindex="-1" href="#key-takeaways"><span class="icon icon-link"></span></a>Key Takeaways</h3>
<ul><li>Words, images, numbers… everything that we see on computers are representations of binary values</li>
<li>Programming logic can be viewed in flowcharts</li>
<li><strong>Variables</strong> are “buckets” that hold <strong>values</strong></li>
<li>When we think programmatically, we are breaking complex tasks down into small steps and dictating the results at each given step</li></ul>
<hr>
<h2>Pseudo Code</h2>
<ul><li>Pseudocode is used to think through the steps of an algorithm<ul><li>it exists between the flowcharting and code implementation phases</li>
<li>normally pseudocode is written in comments in your actual code</li>
<li>when pseudocoding, you move from how a human thinks to how a computer thinks<ul><li>your pseudocode will look like a number of things along this spectrum</li></ul></li></ul></li>
<li><a href="https://www.geeksforgeeks.org/how-to-write-a-pseudo-code/" rel="nofollow">Geeks for Geeks Article</a></li></ul>
<h3 id="activity-flowchart-bughunt-w-pseudocode"><a aria-hidden="true" tabindex="-1" href="#activity-flowchart-bughunt-w-pseudocode"><span class="icon icon-link"></span></a>Activity: Flowchart bughunt w/ Pseudocode</h3>
<ul><li>In teams of 2-3 (from scrum groups), review each others’ flowcharts</li>
<li>Identify complexities that haven’t been accounted for (ie: assumed decisions, loops, multi-step actions blended together)</li>
<li>Rewrite your flowchart in pseudocode. <strong>Break things down into small single line statements</strong><ul><li>Focus on a smaller section of your flowchart if it’s starting to get really big</li></ul></li></ul>
<h3 id="show-and-tell"><a aria-hidden="true" tabindex="-1" href="#show-and-tell"><span class="icon icon-link"></span></a>Show and Tell</h3>
<ul><li>In your scrum groups pick 2 flowchart + pseudocode to walk through (one from each pair)</li>
<li>1 person from each subgroup will walk through the flowchart</li>
<li>The other person will talk through the pseudocode debugging</li></ul>
<hr>
<h2>Scratch</h2>
<h2>Environment Setup for JS</h2>
<ul><li><p><strong>Working in your scrum teams, make sure that you’re able to access node to run .js files</strong></p></li>
<li><p>Install the <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" rel="nofollow">ESLint</a> extension for VS Code <strong>Linter</strong></p>
<ul><li>helps detect bugs</li></ul></li>
<li><p>Install the <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" rel="nofollow">Prettier</a> extension for VS Code <strong>Formatter</strong></p>
<ul><li>helps detect bad code style</li></ul></li>
<li><p>Install Node:</p>
<ul><li><strong>Easy</strong> - <a href="https://nodejs.org/en/download/" rel="nofollow">Binary Installer</a></li>
<li><strong>Maybe Tricky</strong> - <a href="https://www.google.com/search?q=nvm+getting+started" rel="nofollow">Try nvm</a> for that pro look.</li></ul></li></ul>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="end-of-day-activity-recreate-morning-activity-in-scratch"><a aria-hidden="true" tabindex="-1" href="#end-of-day-activity-recreate-morning-activity-in-scratch"><span class="icon icon-link"></span></a>End of Day Activity: Recreate Morning activity in Scratch</h3>
<ul><li>This can be later optimized for your 1st graded activity</li>
<li>When looking at the following gist, remember that Scratch is a programming language too (just a visual one)<a href="https://gist.github.com/lilyx13/c81f1e72f83586efcd97206b806fd494"><h3>Instructions Link</h3>
  <img src="/images/qr-codes/algorithm-followup-activity.png" alt="activity qr code" class="w-48"></a></li></ul>
<hr>
<h2><a href="/courses/cpnt-262/assessments/activity-1">Graded Activity 1: Program in Scratch</a></h2>
<ul><li><strong>Due:</strong>: October 5th</li>
<li><strong>Weight</strong>: 10%</li>
<li><strong>Objective</strong>: Learn about core programming concepts using a visual programming language</li></ul>
<hr>`;
    }
  })}`;
});
export {
  _01_day_1 as default,
  metadata
};
