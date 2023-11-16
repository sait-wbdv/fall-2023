import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Graded Activity 4 - Loops and Conditionals",
  "excerpt": "Create conditional statements to render data in specific conditions. Use loops to access lists of content.",
  "points": 5,
  "type": "assignment",
  "status": "published"
};
const Activity_4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Overview</h2>
<p>For this activity, we are focusing on using loops and conditionals to solve basic algorithmic puzzles. Some of them are easier than others, and they can be solved in many ways. For this activity, please make sure to use loops and conditionals in your solutions.</p>
<h2>Instructions</h2>
<ul><li>Use at least 1 loop and 1 conditional while solving 2 of these challenges<ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration" rel="nofollow">Use loops highlighted here</a></li>
<li>Use if/else or ternary operators for conditionals<ul><li>else should be used as necessary</li></ul></li></ul></li></ul>
<h3 id="challenges"><a aria-hidden="true" tabindex="-1" href="#challenges"><span class="icon icon-link"></span></a>Challenges</h3>
<ul><li>Create an unstyled set of cards on an html page by rendering an array of objects (visual)</li>
<li>Reverse a String</li>
<li>Find the longest word in a string</li>
<li>Remove all falsey values from an array (must include <code>false</code>, and <code>0</code>)</li>
<li>Title Case a sentence (all words get capitalized for their first letter)</li>
<li>Render a set of objects based on the truthiness of one of the key-value pairs (visual &amp; logical)</li>
<li>Draw 2 shapes with characters (leet code like challenges)<ul><li>ie: star pyramid, star hollow square</li></ul></li></ul>
<h2>Rubric</h2>
<h3 id="3-points-code-content"><a aria-hidden="true" tabindex="-1" href="#3-points-code-content"><span class="icon icon-link"></span></a>3 Points (Code Content)</h3>
<ul><li>Use of a conditional in one solution</li>
<li>Use of a loop in one solution</li>
<li>Content is rendered on a page</li></ul>
<h3 id="2-points-code-"><a aria-hidden="true" tabindex="-1" href="#2-points-code-"><span class="icon icon-link"></span></a>2 Points (Code )</h3>
<p>Proper use of casing</p>
<ul><li>Proper use of whitespace and intendation</li>
<li>Your algorithmic process is outlined in comments</li></ul>
<h2>Submission Instructions</h2>
<ol><li>As a comment in D2L: share links to make it easy for the instructor to quickly evaluate your work:<ul><li>GH repos, Pages, Projects (Beta), etc.</li>
<li>Codepens, Figma, FigJam, etc.</li></ul></li>
<li>Double check the Activity for specific instructions.</li>
<li>If applicable, include a README containing the following;<ul><li>Activity name and author;</li>
<li>Attributions: Did anyone help you? Give credit to any classmates, articles, tutorials, etc that helped you complete this project.</li>
<li>Include self-assessments, observations, research, etc under the heading “Code Journal” in your README.</li></ul></li>
<li>Zip project repo and submit it.</li></ol>`;
});
export {
  Activity_4 as default,
  metadata
};
