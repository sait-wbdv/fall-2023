import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Setting Up Your Workspace",
  "excerpt": "Web development (all software development, actually) requires you to work with a lot of files. In this program, we don't prescribe (i.e. tell you how to do it) how you should organize your files and projects but here we list some tips and best practices.",
  "date": "2023-09-07",
  "status": "published"
};
const Setting_up_your_workspace = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>SAIT-WBDV Workspace</h2>
It&#39;s recommended that you create a dedicated directory (workspace) for the code and materials you will be creating in this program. This directory can be placed in your \`Documents\` directory:
<pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html">/Users/your-username/Documents/sait-wbdv/
  ├─ assignments/
  ├─ code-journal/
  ├─ in-class/
  └─ projects/</code>`}<!-- HTML_TAG_END --></pre>
<hr>
<h2>Assignments</h2>
You should keep your assignments separate from all other code. You can put them all into an \`assignments\` folder or maybe create parent directories for each course. It&#39;s up to you.
<pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html">/sait-wbdv/assignments/
  ├─ cpnt-200/
  ├─ cpnt-201/
  ├─ cpnt-260/
    ├─ a1/
      ├─ css/
      ├─ images/
      ├─ js/
      └─ index.html
    ├─ a2/
    ├─ a3/
    └─ a4/
  └─ etc/</code>`}<!-- HTML_TAG_END --></pre>
<hr>
<h2>Coding Journal</h2>
<p>The purpose of a learning journal: </p>
<ul><li>to give you the ability to self-assess accurately;</li>
<li>to keep track of helpful resources and content creators;</li>
<li>to promote meta-learning (learning to become a more effective learner).</li></ul>
<p>See: <a href="https://acidtone.github.io/code-journal/" rel="nofollow">Grimes’s Coding Journal</a></p>
<h3 id="three-components-to-a-learning-journal"><a aria-hidden="true" tabindex="-1" href="#three-components-to-a-learning-journal"><span class="icon icon-link"></span></a>Three components to a learning journal</h3>
<ol><li>Define the learning goal concretely and precisely.<ul><li>Example: running a marathon<ul><li><strong>A good goal</strong>: “I want to be able to run a marathon in less than 4 hours.”</li>
<li><strong>NOT a good goal</strong>: “I want to finish first in a marathon.”</li></ul></li></ul></li>
<li>Write down the learning process.</li>
<li>Make observations, collect data, self-reflect and develop new learning strategies.</li></ol>
<pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html">/sait-wbdv/code-journal/
  └─ README.md</code>`}<!-- HTML_TAG_END --></pre>
<p>Note: Placing all your journal entries in a single <code>README.md</code> is a good start but you may separate entries by date if you wish.</p>
<hr>
<h2>Daily in-class code</h2>
<p>In this program, you will be creating a lot of “throw-away” code each day (experiments, challenges, pair coding). It often makes sense to organize your code by date so it doesn’t get in the way of your longer-term projects:</p>
<pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html">/sait-wbdv/in-class/
  ├─ 2021-09-11-intro-to-html/
    ├─ hello-world/
    ├─ my-first-website/
    └─ etc/
  ├─ 2021-09-12-typography/
  ├─ 2021-09-13-colour/
  └─ 2021-09-14-etc-etc/</code>`}<!-- HTML_TAG_END --></pre>
<hr>
<h2>Class/personal/work Projects</h2>
It&#39;s recommended that you create a dedicated workspace folder for your projects. If you have multiple contexts (i.e. personal vs work) that deal with code, you can make a separate folder for each.
<pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html">/sait-wbdv/projects/
  ├─ portfolio-website/
    ├─ css/
    ├─ images/
    ├─ js/
    └─ index.html
  ├─ cool-idea-1/
  ├─ flexbox-experiment
  └─ moms-baking-website/</code>`}<!-- HTML_TAG_END --></pre>`;
});
export {
  Setting_up_your_workspace as default,
  metadata
};
