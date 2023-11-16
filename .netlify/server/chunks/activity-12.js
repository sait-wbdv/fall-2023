import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Graded Activity 1 - Program in Scratch",
  "excerpt": "Write a small program in the visual programming language Scratch.",
  "points": 5,
  "type": "assignment",
  "status": "published"
};
const Activity_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Overview</h2>
<p>The goal of this activity is to familiarize with basic programming concepts by using a visual building block style programming language called Scratch. This will be the only Scratch based activity in this program and will serve as a metaphor for learning Javascript.</p>
<p>You are welcome to build any type of project that Scratch allows. Common choices are: - Interactivty story - Game - Animation - Music video</p>
<h2>Instructions</h2>
<p>Create a project in scratch as noted above with the following requirements satisfied.</p>
<h3 id="project-requirements"><a aria-hidden="true" tabindex="-1" href="#project-requirements"><span class="icon icon-link"></span></a>Project Requirements</h3>
<ul><li>Use at least 2 sprites (neither can be the Scratch cat)</li>
<li>At least 3 scripts (in total)</li>
<li>At least 1 conditional</li>
<li>At least 1 loop</li>
<li>At least 1 variable</li>
<li>Use at least 1 custom block that takes an input</li></ul>
<h4 id="note-you-should-use-a-few-dozen-puzzle-pieces-overall-to-achieve-these-requirements-successfully"><a aria-hidden="true" tabindex="-1" href="#note-you-should-use-a-few-dozen-puzzle-pieces-overall-to-achieve-these-requirements-successfully"><span class="icon icon-link"></span></a><strong>NOTE</strong>: You should use a few dozen puzzle pieces overall to achieve these requirements successfully</h4>
<h3 id="code-quality"><a aria-hidden="true" tabindex="-1" href="#code-quality"><span class="icon icon-link"></span></a>Code Quality</h3>
<ul><li>The code works and the output (game/animation/story) is reasonably coherent</li>
<li>Use custom blocks with clear descriptive names when sequences get too long (ie: containing multiple steps and actions that aren’t actually dependent on one another)</li></ul>
<hr>
<h2>Rubric</h2>
<h3 id="3-points-content"><a aria-hidden="true" tabindex="-1" href="#3-points-content"><span class="icon icon-link"></span></a>3 Points: Content</h3>
<ul><li>Required elements are present and logically used</li>
<li>Block settings and content have been changed to make sense with the content</li>
<li>Storyline is bigger than a simple hello world type example</li></ul>
<h3 id="2-points-code-quality"><a aria-hidden="true" tabindex="-1" href="#2-points-code-quality"><span class="icon icon-link"></span></a>2 Points: Code Quality</h3>
<ul><li>Scripts run when expected</li>
<li>If user input is required, it’s clear when and how to do so</li>
<li>Correct blocks are chosen for the use case</li>
<li>Long scripts are broken up into custom blocks with descriptive names</li></ul>
<hr>
<h2>Submission Guidelines</h2>
<ul><li>Create an account with scratch and share a link to your project in the text submission box</li>
<li>Export the project file and attach it to your submission.</li></ul>`;
});
export {
  Activity_1 as default,
  metadata
};
