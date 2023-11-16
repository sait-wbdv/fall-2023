import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Assignment 2 - Git Merge Conflict",
  "excerpt": "In this assignment, you will re-create a merge conflict with a partner.",
  "points": 20,
  "type": "assignment",
  "status": "published"
};
const Assignment_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="instructions"><a aria-hidden="true" tabindex="-1" href="#instructions"><span class="icon icon-link"></span></a>Instructions</h2>
<p>In a group, practice creating and resolving merge conflicts in a codebase. This is a small but very important skill to practice as when you are working with other developers, merge conflicts will occur and you will be expected to be able to resolve them properly.</p>
<p>Your instructor will assign the groups. This assignment should be able to be completed by the end of labtime, however it’s recommended to practice a few times together to build good habits.</p>
<h3 id="1-git-collaboration"><a aria-hidden="true" tabindex="-1" href="#1-git-collaboration"><span class="icon icon-link"></span></a>1. Git Collaboration</h3>
<ol><li>Choose one person to create a new repository on GitHub;</li>
<li>Once the repo is created, the owner should <a href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository" rel="nofollow">invite their partner as a Collaborator</a>.</li>
<li>Once you both have access to the repo <a href="https://gist.github.com/acidtone/3a7ff64489b4fc641f0b96be8edd561d" rel="nofollow">play at least two rounds of commit catch</a> while <a href="https://gist.github.com/acidtone/caa20b2520814a94240043c40301024a" rel="nofollow">pair programming</a>.</li></ol>
<p>The goals and content of the repository and paired coding session are up to you. Some suggestions:</p>
<ul><li>Collaborate on a joint journal entry</li>
<li>Write a poem together</li>
<li>Pick a topic to Google and compile the best search results</li></ul>
<h3 id="2-resolve-a-merge-conflict"><a aria-hidden="true" tabindex="-1" href="#2-resolve-a-merge-conflict"><span class="icon icon-link"></span></a>2. Resolve a merge conflict</h3>
<p>While pair coding, each of you should resolve a merge conflict.</p>
<ol><li>Both of you edit the same line of code;</li>
<li>One of you should push your changes first (or you can race);</li>
<li>The other partner will then have to pull code and resolve a merge conflict<ul><li>Note: you can practice merge conflicts on your own by following this activity: <a href="https://gist.github.com/acidtone/d8c2e285c9b25fcb7443a4f0f4e4b4e6" rel="nofollow">Create a merge conflict on purpose (by yourself)</a></li></ul></li>
<li>Repeat the process, having the other partner resolve a conflict.</li></ol>
<h2 id="submission-instructions"><a aria-hidden="true" tabindex="-1" href="#submission-instructions"><span class="icon icon-link"></span></a>Submission Instructions</h2>
<p>Note: Although you will complete this assignment with a partner(s), this will be marked as an individual assignment. Each you will have to upload a submission to Brightspace.</p>
<p>Once you’ve completed your pair-code session, each of you has resolved <strong>TWO</strong> merge conflicts and pushed your up-to-date code to GitHub:</p>
<ul><li>Download a ZIP of the repo from GitHub and submit to Brightspace;</li>
<li>As a comment on the submission:<ul><li>add a link to the repo you created with your partner(s);</li>
<li>add links to the specific commits that YOU pushed to resolve the conflict (<a href="https://github.com/acidtone/commit-catch-and-cocktails/commit/8d22f5535466e6b4702dbd23fbe312ca0ac85908" rel="nofollow">example commit</a>):<ul><li>it has two parents listed.</li>
<li>“Resolved conflict” is in the commit message</li>
<li>There is no left over text from VS Codes merge wizard</li></ul></li></ul></li></ul>
<h2 id="marking-rubric"><a aria-hidden="true" tabindex="-1" href="#marking-rubric"><span class="icon icon-link"></span></a>Marking Rubric</h2>
<ol><li>Repo with all collaborators 5 Points<ul><li>repo is named <code>cpnt201-a2</code>;</li>
<li>repo has an owner and with the other partner(s) listed as a collaborator(s);</li>
<li>repo contains at least two alternating commits (NOT including the resolved conflict below) from each partner (four commits at minimum; six for a group of three) within the same time period (i.e. during a pair coding session).</li></ul></li>
<li>2 Merge Commits: 15 Points<ul><li>Two links to the specific merge commits are provided with submission.</li>
<li>The commit has two parents.</li>
<li>The commit has the message “Resolved conflict”.</li>
<li>The resolving commit was pushed by YOU (i.e. each of you needs to resolve a conflict to receive marks for their submission).</li></ul></li></ol>`;
});
export {
  Assignment_2 as default,
  metadata
};
