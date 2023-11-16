import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Collaborative Git",
  "excerpt": "In this session you will use Git to collaborate on a project with a classmate. While you're doing this you will re-create a challenging situation - the dreaded merge conflict.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _03_day_3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Housekeeping</h2>
<ul><li><a href="/courses/cpnt-260/assessments/assignment-1">CPNT 260 Assignment 1</a> marks returned.<ul><li>Example Submission:<ul><li><a href="https://github.com/sait-wbdv/f23-spoilers-cpnt260-a1" rel="nofollow">GitHub repo</a></li>
<li><a href="https://sait-wbdv.github.io/f23-spoilers-cpnt260-a1/" rel="nofollow">GH Pages site</a></li></ul></li></ul></li>
<li>Announced: <a href="/courses/cpnt-201/assessments/assignment-2">CPNT 201 Assignment 2</a><ul><li>Weight: 20%</li>
<li>Due: Friday September 22 @ 11:59pm</li></ul></li></ul>
<hr>
<h2>Activity: Commit Catch and Markdown Review</h2>
<h3 id="materials"><a aria-hidden="true" tabindex="-1" href="#materials"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://www.markdownguide.org/cheat-sheet/" rel="nofollow">Markdown Cheat Sheet</a></li>
<li><a href="https://gist.github.com/acidtone/3a7ff64489b4fc641f0b96be8edd561d" rel="nofollow">Commit Catch</a></li></ul>
<h3 id="instructions"><a aria-hidden="true" tabindex="-1" href="#instructions"><span class="icon icon-link"></span></a>Instructions</h3>
<p>In pairs, or groups of three:</p>
<ol><li>Set up a shared repo with your partner(s) according to the instructions in <a href="https://gist.github.com/acidtone/3a7ff64489b4fc641f0b96be8edd561d" rel="nofollow">Commit Catch</a>.</li>
<li>Think of a job, game, sport, task, something that you share with your partner.</li>
<li>Pick a partner to create a new <code>README.md</code> document;</li>
<li>Add a level one heading with a title of your document:<ul><li>An h1 heading <code># Name of activity</code></li></ul></li>
<li>Add, commit and push your changes and switch roles;</li>
<li>Have the other partner pull the changes just added and repeat Steps 4 and 5 by adding at one of the following:<ul><li>A very short description of the activity (just write)</li>
<li>An h2 heading <code>## Task List</code></li>
<li>A list of steps involved in your task <strong>or</strong> your task’s responsibilities (ordered with numbers or unordered with dashes)</li>
<li>Include a link to a website that relates to your activity in some way <code>[text that is seen](https://pathtosite.org)</code></li></ul></li>
<li>Continue until your document contains satisfies the requirements for <a href="/courses/cpnt-201/day-3#todays-achievement">Today’s Achievement</a>.</li></ol>
<hr>
<h2>Merge Conflicts</h2>
<h3 id="activity-creating-a-merge-conflict"><a aria-hidden="true" tabindex="-1" href="#activity-creating-a-merge-conflict"><span class="icon icon-link"></span></a>Activity: Creating a Merge Conflict</h3>
<p>Using the same partner(s) and repo from the earlier activity, create a merge conflict.</p>
<h3 id="instructions-1"><a aria-hidden="true" tabindex="-1" href="#instructions-1"><span class="icon icon-link"></span></a>Instructions</h3>
<p>With a clean working tree and up-to-date local repos:</p>
<ol><li>Have both/all partners make a change to the same line of code;</li>
<li>Have one partner add, commit and push their changes;</li>
<li>Have the second partner try to add, commit and push their changes;</li>
<li>Resolve the resulting merge conflict by following the instructions in <a href="https://gist.github.com/acidtone/d8c2e285c9b25fcb7443a4f0f4e4b4e6#resolve-merge-conflict" rel="nofollow">this activity</a>.</li></ol>
<h3 id="terminology"><a aria-hidden="true" tabindex="-1" href="#terminology"><span class="icon icon-link"></span></a>Terminology</h3>
<dl><dt>Merge</dt><dd>When two branches in Git are merged into one. This will often happen if two developers are submitted code to a project or one developer is submitting code from two machines.</dd><dt>Merge conflict</dt><dd>When two branches edit the same line of code. Git doesn&#39;t know which change to keep so it leaves it to the developer to decide when remote code is pulled.</dd><dt>Current Change</dt><dd>The change (relevant to the conflict) that was made on the local repo.</dd><dt>Incoming Change</dt><dd>The change that is incoming from the remote repo.</dd></dl>
<hr>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="commit-catch"><a aria-hidden="true" tabindex="-1" href="#commit-catch"><span class="icon icon-link"></span></a>Commit Catch</h3>
<p>Submit the repo that you created with your partner(s) to Brightspace.</p>
<p>As a comment in your submission, include:</p>
<ul><li>A link to your GitHub repo (which should include your partner(s) as collaborators).</li>
<li>The classmate(s) you created the document with.</li></ul>
<h4 id="marking-criteria"><a aria-hidden="true" tabindex="-1" href="#marking-criteria"><span class="icon icon-link"></span></a>Marking Criteria</h4>
<ol><li>Your document should include at least one of the following in valid markdown syntax:<ul><li>Level 1 heading</li>
<li>Level 2 heading</li>
<li>Paragraph</li>
<li>Bold text</li>
<li>Italicized text</li>
<li>A numbered list OR a bulleted list</li>
<li>A link to an external website</li></ul></li>
<li>There should be at least two commits from <em>EACH</em> team member in your Git history.</li></ol>`;
    }
  })}`;
});
export {
  _03_day_3 as default,
  metadata
};
