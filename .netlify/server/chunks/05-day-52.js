import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Git Branches",
  "excerpt": "In this session, we'll learn how to make changes to a repo in a branch!",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _05_day_5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Housekeeping</h2>
<ul><li>Early dismissal: Once you’ve completed today’s Activity, you can go home!</li>
<li><a href="/courses/cpnt-201/day-6">Homework for Monday</a> has been posted.</li></ul>
<hr>
<h2>Using Git Branches</h2>
<p><a href="/slides/cpnt-201/git-collaboration"><img src="/images/slides/cpnt-201/git-workflows.png" alt="Slides: Git workflows"></a></p>
<hr>
<h2>Javascript Review</h2>
<p>Git any questions about any Javascript you’ve covered so far?</p>
<hr>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="making-changes-in-a-branch"><a aria-hidden="true" tabindex="-1" href="#making-changes-in-a-branch"><span class="icon icon-link"></span></a>Making changes in a Branch</h3>
<ol><li>Create an empty <code>index.html</code> page in a new Git repo in your workspace and publish to GitHub.</li>
<li>In this project, create a new branch called <code>201-ach-5</code>.<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">$ git checkout -b 201-ach-5</code>`}<!-- HTML_TAG_END --></pre></li>
<li>Add TailwindCSS to <code>index.html</code> by adding the following line to the <code>&lt;head&gt;</code> of the document:<pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.tailwindcss.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre></li>
<li>Add and commit changes to this branch.</li>
<li>Try changing the background color using TailwindCSS:<pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-amber-600<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre></li>
<li>Add and commit changes to this branch.</li>
<li>Push this branch to GitHub.<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">$ git push --set-upstream origin 201-ach-5</code>`}<!-- HTML_TAG_END --></pre><ul><li>Pro-tip: Git will give you the above code if you try to <code>git push</code>. Copy and paste this code as a new command.</li></ul></li>
<li>Checkout your <code>main</code> branch.<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">$ git checkout main</code>`}<!-- HTML_TAG_END --></pre></li>
<li>Merge the <code>201-ach-5</code> branch into the main branch:<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">$ git merge 201-ach-5</code>`}<!-- HTML_TAG_END --></pre><ul><li>Note: you always have to checkout the branch you’re merging changes <em>into</em>.</li></ul></li>
<li>Push these new changes to <code>main</code> branch on GitHub.<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">$ git push</code>`}<!-- HTML_TAG_END --></pre></li></ol>
<h3 id="submission-instructions"><a aria-hidden="true" tabindex="-1" href="#submission-instructions"><span class="icon icon-link"></span></a>Submission Instructions</h3>
<p>Publish the <code>main</code> branch to GH Pages and submit the following to Brightspace:</p>
<ul><li>GH repo</li>
<li>GH Pages link</li>
<li>A link to the <code>201-ach-5</code> branch that you pushed<ul><li>You can select the branch in a drop-down menu on your repo home page.</li></ul></li></ul>`;
    }
  })}`;
});
export {
  _05_day_5 as default,
  metadata
};
