import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Dependency Management with NPM",
  "excerpt": "In this session, we will use npm to extend our projects by installing software dependencies.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _08_day_8 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Housekeeping</h2>
<ul><li><a href="/courses/cpnt-201/assessments/assignment-4">CPNT 201 Assignment 4</a><ul><li>Weight: 20%</li>
<li>Due: Monday November 6, 2023</li></ul></li></ul>
<hr>
<h2>Hello <code>npm</code>
<h3 id="materials"><a aria-hidden="true" tabindex="-1" href="#materials"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://github.com/sait-wbdv/hello-npm" rel="nofollow">Hello <code>npm</code></a> GH repo</li></ul>
<hr>
<h2><code>npm</code> Basics</h2>
<p><a href="/slides/cpnt-201/npm"><img src="/images/slides/cpnt-201/npm.png" alt="Slides: npm Package Manager"></a></p>
<h3 id="materials-1"><a aria-hidden="true" tabindex="-1" href="#materials-1"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://nodesource.com/blog/the-basics-getting-started-with-npm/" rel="nofollow">An introduction to the npm package manager</a></li>
<li><a href="https://www.geeksforgeeks.org/where-does-npm-install-the-packages/" rel="nofollow">Where does npm install the packages?</a></li>
<li><a href="https://docs.npmjs.com/about-semantic-versioning" rel="nofollow">Semantic Versioning using npm</a></li>
<li><a href="https://www.digitalocean.com/community/tutorials/nodejs-package-json" rel="nofollow">Anatomy of a <code>package.json</code> file</a></li></ul>
<h3 id="activity"><a aria-hidden="true" tabindex="-1" href="#activity"><span class="icon icon-link"></span></a>Activity</h3>
<ul><li><a href="https://gist.github.com/acidtone/f2e901fb4b04bd41aa59755e2de9af4f" rel="nofollow">Initialize a new <code>npm</code> project</a></li></ul>
<hr>
<h2>Introduction to DayJS</h2>
<h3 id="materials-2"><a aria-hidden="true" tabindex="-1" href="#materials-2"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://gist.github.com/acidtone/232d9c9a0997692483fca51b6f624a61" rel="nofollow">Activity: Install DayJS using <code>npm</code></a></li></ul>
<hr>
<h2>Creating a Project with Vite</h2>
<h3 id="materials-3"><a aria-hidden="true" tabindex="-1" href="#materials-3"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://vitejs.dev/guide/" rel="nofollow">Vite Installation Guide</a></li>
<li><a href="https://blog.logrocket.com/commonjs-vs-es-modules-node-js/" rel="nofollow">CommonJS vs. ES modules in Node.js</a></li></ul></h2>`;
    }
  })}
<hr>
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="npm-package-treasure-hunt"><a aria-hidden="true" tabindex="-1" href="#npm-package-treasure-hunt"><span class="icon icon-link"></span></a><code>npm</code> Package Treasure Hunt</h3>
<p>In groups of 3 or 4:</p>
<ol><li>Search for a useful <code>npm</code> package that:<ul><li>can be used as an ES module;</li>
<li>is useable on the frontend in a Vanilla Vite project</li></ul></li>
<li>Find the installation instructions for your package that:<ul><li>extends the documentation provided in the <code>npm</code> Registry;</li>
<li>shows a usage example that can work with a Vanilla Vite project. </li></ul></li></ol>
<h3 id="submission-instructions"><a aria-hidden="true" tabindex="-1" href="#submission-instructions"><span class="icon icon-link"></span></a>Submission Instructions</h3>
<p><em>EACH</em> group member should submit the following links as their own Achievement in Brightspace:</p>
<ul><li>the package listed in the <code>npm</code> Registry</li>
<li>the Git Repository on GitHub (or other Git host, if applicable)</li>
<li>the installation instructions that extend the Registry documentation</li>
<li>the usage instructions if it is different than the installation instructions</li></ul>
<p>Include a list of your group members with your submission.</p>
<h3 id="constraints"><a aria-hidden="true" tabindex="-1" href="#constraints"><span class="icon icon-link"></span></a>Constraints</h3>
<p>Marks will be deducted if the following constraints are not fulfilled:</p>
<ul><li>Each group should submit a different package than the other groups</li>
<li>Your chosen package should be installable as an ES Module (uses <code>import</code> syntax)</li>
<li>Your chosen package should be useable in a Vanilla Vite project</li></ul>`;
    }
  })}
<hr>
${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Lesson Prep</h2>
<h3 id="npm"><a aria-hidden="true" tabindex="-1" href="#npm"><span class="icon icon-link"></span></a><code>npm</code></h3>
<ul><li>Video: <a href="https://www.youtube.com/watch?v=jHDhaSSKmB0" rel="nofollow">NPM Crash Course</a> by Traversy Media</li>
<li><a href="https://nodesource.com/blog/the-basics-getting-started-with-npm/" rel="nofollow">An introduction to the npm package manager</a></li>
<li><a href="https://www.geeksforgeeks.org/where-does-npm-install-the-packages/" rel="nofollow">Where does npm install the packages?</a></li>
<li><a href="https://docs.npmjs.com/about-semantic-versioning" rel="nofollow">Semantic Versioning using npm</a></li>
<li><a href="https://www.digitalocean.com/community/tutorials/nodejs-package-json" rel="nofollow">Anatomy of a <code>package.json</code> file</a></li></ul>
<h3 id="libraries-and-tools"><a aria-hidden="true" tabindex="-1" href="#libraries-and-tools"><span class="icon icon-link"></span></a>Libraries and Tools</h3>
<ul><li><a href="https://vitejs.dev/" rel="nofollow">Vite</a> for frontend tooling</li>
<li><a href="https://day.js.org/" rel="nofollow">DayJS</a> date library</li>
<li><a href="https://lodash.com/" rel="nofollow">Lodash</a> JS utility library</li></ul>`;
    }
  })}`;
});
export {
  _08_day_8 as default,
  metadata
};
