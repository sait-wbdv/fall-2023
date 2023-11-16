import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Pull Requests and JS Review",
  "excerpt": "This session, we'll cover how to request changes to a 3rd-party repo using a Pull Request.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _07_day_7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Housekeeping</h2>
<ul><li>Today class starts at 9am in Zoom:<ul><li><a href="https://sait-ca.zoom.us/j/84500804914?pwd=L2lmZUlGcmNWQkhmRjdqaWlKcVFvdz09" rel="nofollow">Zoom link</a></li></ul></li></ul>
<hr>
<h2>Pull Requests</h2>
<p><a href="/slides/cpnt-201/git-collaboration"><img src="/images/slides/cpnt-201/git-workflows.png" alt="Slides: Git workflows"></a></p>
<h3 id="materials"><a aria-hidden="true" tabindex="-1" href="#materials"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests" rel="nofollow">About Pull Requests</a></li>
<li><a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests" rel="nofollow">About comparing branches in pull requests</a></li>
<li><a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request" rel="nofollow">Creating a Pull Request</a></li>
<li><a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork" rel="nofollow">Creating a pull request from a fork</a></li>
<li><a href="https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue" rel="nofollow">Linking a pull request to an issue</a></li></ul>
<hr>
<h2>Javascript Review</h2>
<p>Git any questions about any Javascript you’ve covered so far?</p>`;
    }
  })}
<hr>
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="creating-a-pull-request"><a aria-hidden="true" tabindex="-1" href="#creating-a-pull-request"><span class="icon icon-link"></span></a>Creating a Pull Request</h3>
<p>Improve this <a href="https://github.com/sait-wbdv/namor" rel="nofollow">Name Generator</a> (<a href="https://sait-wbdv.github.io/namor/" rel="nofollow">live site</a>) app by submitting a Pull Request that fixes one of the <a href="https://github.com/sait-wbdv/namor/issues" rel="nofollow">issues listed for the repo</a>.</p>
<ol><li><a href="https://docs.github.com/en/get-started/quickstart/fork-a-repo" rel="nofollow">Fork</a> the repository to your GitHub account.</li>
<li>Clone the fork to your workspace.</li>
<li>Choose <a href="https://github.com/sait-wbdv/namor/issues" rel="nofollow">an Issue</a> and fix it.<ul><li>Optional: make your changes within a separate branch.</li></ul></li>
<li>Push your changes to GitHub.</li>
<li>Create a Pull Request.<ul><li><strong>Link your PR to your chosen Issue</strong> by <a href="https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword" rel="nofollow">using a keyword in the PR description or as a comment</a>.</li></ul></li>
<li>Add a comment to your Pull Request with content of your choice.</li></ol>
<h3 id="submission-instructions"><a aria-hidden="true" tabindex="-1" href="#submission-instructions"><span class="icon icon-link"></span></a>Submission Instructions</h3>
<p>Submit the following links to Brightspace:</p>
<ul><li>The Pull Request you created;</li>
<li>The Issue you fixed;</li>
<li>The GH repo of your fork;</li></ul>`;
    }
  })}`;
});
export {
  _07_day_7 as default,
  metadata
};
