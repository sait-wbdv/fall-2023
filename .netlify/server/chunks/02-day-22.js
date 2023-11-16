import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Introduction to Git and GitHub Pages",
  "excerpt": "Today you will be introduced to version control using Git. We will configure Git, set up a GitHub account and deploy our first website!",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _02_day_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2 id="housekeeping"><a aria-hidden="true" tabindex="-1" href="#housekeeping"><span class="icon icon-link"></span></a>Housekeeping</h2>
<ul><li>Do we change class-time to 8:30am-3:30pm?</li>
<li><a href="/courses/cpnt-201/assessments/assignment-1">Assignment 1</a> Announced<ul><li>Weight: 20% of CPNT 201 final mark</li>
<li>Due: Wednesday, Sept 13 @ 11:59pm</li></ul></li></ul>
<hr>
<h2>1. Introduction to Git</h2>
<p><a href="/slides/cpnt-201/git-github"><img src="/images/slides/cpnt-201/git-github.png" alt="Git and Github"></a></p>
<hr>
<h2>2. Cloning our first (read-only) repo</h2>
<h3 id="instructions"><a aria-hidden="true" tabindex="-1" href="#instructions"><span class="icon icon-link"></span></a>Instructions</h3>
<ol><li>Create a <code>read-only</code> directory in your workspace;</li>
<li>Navigate to this directory in your terminal;<ul><li>Pro-tip: You can open the embedded terminal in VS Code!</li></ul></li>
<li>Open the <strong><a href="https://gist.github.com/acidtone/1a6e3324d97e61fa0ee59bc4cba3ef33" rel="nofollow">Clone Happy</a></strong> activity and clone some code!</li></ol>
<h3 id="materials"><a aria-hidden="true" tabindex="-1" href="#materials"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://gist.github.com/acidtone/1a6e3324d97e61fa0ee59bc4cba3ef33" rel="nofollow">Clone Happy Activity</a></li></ul>
<hr>
<h2>3. First-time Git Config Setup</h2>
<p>Cloning 3rd party repos is great, but we’d like to create our own repos eventually (i.e. today!). But first, we need to set our name and email in Git.</p>
<h3 id="materials-1"><a aria-hidden="true" tabindex="-1" href="#materials-1"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><strong><a href="https://gist.github.com/acidtone/6ca4c62d88570732d3760904ef965e4d" rel="nofollow">Git - First-time setup</a></strong></li></ul>
<hr>
<h2>4. Publishing our First Website</h2>
<p>Now that we’ve set up Git, let’s actually use it!</p>
<h3 id="materials-2"><a aria-hidden="true" tabindex="-1" href="#materials-2"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><strong><a href="https://gist.github.com/acidtone/5d45f96bc11fada75038e552f9ba1a5c" rel="nofollow">Project: Publish a webpage with Git and GitHub Pages</a></strong></li>
<li>Optional(?): <a href="https://gist.github.com/acidtone/dd9ae11a238e9f14ad0b066298f35dc5" rel="nofollow">Set up SSH Keys</a> if you’re having trouble pushing code to GitHub.</li></ul>`;
    }
  })}
<hr>
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<p>Weight: 2.5% of your CPNT 201 mark</p>
<h3 id="deployed-github-pages-repo"><a aria-hidden="true" tabindex="-1" href="#deployed-github-pages-repo"><span class="icon icon-link"></span></a>Deployed GitHub Pages repo</h3>
<p>In today’s daily achievement dropbox, submit the following links:</p>
<ol><li>A GitHub repo with at least one commit pushed from your local machine;</li>
<li>A deployed GitHub Pages link for your GH repo.</li></ol>`;
    }
  })}`;
});
export {
  _02_day_2 as default,
  metadata
};
