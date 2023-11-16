import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Assignment 4 - Vite Project with a Pull Request",
  "excerpt": "In this assignment, you will install a date library into a Vite project and submit your code in a Pull Request.",
  "points": 20,
  "type": "assignment",
  "status": "published"
};
const Assignment_4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="instructions"><a aria-hidden="true" tabindex="-1" href="#instructions"><span class="icon icon-link"></span></a>Instructions</h2>
<ol><li>Create a new <a href="https://vitejs.dev/guide/" rel="nofollow">Vanilla Vite project</a>.</li>
<li>Modify <code>package.json</code> according to the requirements listed in the Marking Criteria.</li>
<li>Modify the project structure according to the requirements listed in the Marking Criteria.</li>
<li>Initialize project as a Git repository and make your changes in a branch called <code>201-a4</code></li>
<li>Install a date library as an ESM module and demonstrate its use on the default Vanilla Vite home page.</li>
<li>Install a second <code>npm</code> package of your choice and demonstrate its use.</li>
<li>Add your changes to <code>main</code> branch as a Pull Request.</li>
<li>Deploy your project to a free host that supports Vite.</li></ol>
<hr>
<h2 id="marking-criteria"><a aria-hidden="true" tabindex="-1" href="#marking-criteria"><span class="icon icon-link"></span></a>Marking Criteria</h2>
<p><strong>Each of the following requirements will be worth 4 points</strong> for a total of 20 points.</p>
<h3 id="1-npm-project-setup"><a aria-hidden="true" tabindex="-1" href="#1-npm-project-setup"><span class="icon icon-link"></span></a>1. <code>npm</code> project setup</h3>
<p>Initialize an <code>npm</code> project that has properly formatted <code>package.json</code> and <code>.gitignore</code> files:</p>
<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> Project <code>name</code> set to <code>201-a4</code></li>
<li class="task-list-item"><input type="checkbox" disabled> Project <code>description</code> set to an a description of the assignment</li>
<li class="task-list-item"><input type="checkbox" disabled> Project <code>type</code> set to <code>module</code></li>
<li class="task-list-item"><input type="checkbox" disabled> Project <code>main</code> script set to the name of the entry page of your project</li>
<li class="task-list-item"><input type="checkbox" disabled> Project <code>author</code> set to your name</li>
<li class="task-list-item"><input type="checkbox" disabled> Project <code>license</code> set to <code>MIT</code></li>
<li class="task-list-item"><input type="checkbox" disabled> <code>.gitignore</code> file present that excludes <code>node_modules</code> directory, along with common Mac and Windows files/extensions<ul><li>This file will be set up for you when you initialize a project with Vite</li></ul></li></ul>
<h3 id="2-vite-project-improvements"><a aria-hidden="true" tabindex="-1" href="#2-vite-project-improvements"><span class="icon icon-link"></span></a>2. Vite Project Improvements</h3>
<p>Make the following improvements to Vite’s default vanilla project setup:</p>
<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> Move <code>.js</code> files to a dedicated <code>js</code> directory</li>
<li class="task-list-item"><input type="checkbox" disabled> Move <code>.css</code> files to a dedicated <code>css</code> directory</li>
<li class="task-list-item"><input type="checkbox" disabled> Move images (such as <code>.png</code>, <code>.svg</code>, etc) to a dedicated <code>images</code> directory<ul><li>This includes the <code>vite.svg</code> image located in the <code>public</code> directory</li></ul></li></ul>
<h3 id="3-date-library"><a aria-hidden="true" tabindex="-1" href="#3-date-library"><span class="icon icon-link"></span></a>3. Date Library</h3>
<p>Install a date library such as <code>DayJS</code>, <code>luxon</code> or <code>date-fns</code>:</p>
<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> Library listed as a local dependency in <code>package.json</code></li>
<li class="task-list-item"><input type="checkbox" disabled> Library imported into a Node or Vite project using ES Module <code>import</code> syntax</li>
<li class="task-list-item"><input type="checkbox" disabled> Project installs fresh dependencies properly when <code>npm install</code> is entered from the command line</li>
<li class="task-list-item"><input type="checkbox" disabled> Main script runs when <code>npm run dev</code> is entered from the command line</li>
<li class="task-list-item"><input type="checkbox" disabled> Using your chosen date library, output:<ul><li>the current date to the vanilla Vite home page in the following format: “Today’s date: Oct 30, 2023”;</li>
<li>The number of days since this program started on Sept 5, 2023.</li></ul></li></ul>
<h3 id="4-above-and-beyond"><a aria-hidden="true" tabindex="-1" href="#4-above-and-beyond"><span class="icon icon-link"></span></a>4. Above and Beyond</h3>
<p>Install a second <code>npm</code> package of your choice and demonstrate its use in your project. </p>
<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> Library listed as a local dependency in <code>package.json</code></li>
<li class="task-list-item"><input type="checkbox" disabled> Library imported into a Node or Vite project using ES Module <code>import</code> syntax</li>
<li class="task-list-item"><input type="checkbox" disabled> Project installs fresh dependencies properly when <code>npm install</code> is entered from the command line</li>
<li class="task-list-item"><input type="checkbox" disabled> Main script runs when <code>npm run dev</code> is entered from the command line</li>
<li class="task-list-item"><input type="checkbox" disabled> Package either makes a visual change to the Vite project output or improves the project in some non-trivial way</li>
<li class="task-list-item"><input type="checkbox" disabled> Include link to your chosen package in your <code>README</code></li></ul>
<h3 id="5-pull-request-and-deployment"><a aria-hidden="true" tabindex="-1" href="#5-pull-request-and-deployment"><span class="icon icon-link"></span></a>5. Pull Request and Deployment</h3>
<p>Demonstrate your knowledge of <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests" rel="nofollow">GitHub Pull Requests</a> by adding your work from a PR created from a branch called <code>201-a4</code>.</p>
<ol><li>Push <code>201-a4</code> branch to GitHub</li>
<li>Merge your changes into <code>main</code> from a Pull Request created from your pushed branch</li>
<li>Deploy your project to a free host that supports Vite, such as <a href="https://vercel.com/docs/frameworks/vite" rel="nofollow">Vercel</a> or <a href="https://docs.netlify.com/integrations/frameworks/vite/" rel="nofollow">Netlify</a></li></ol>
<hr>
<h2 id="submission-requirements"><a aria-hidden="true" tabindex="-1" href="#submission-requirements"><span class="icon icon-link"></span></a>Submission Requirements</h2>
<ul><li>Add a <code>README.md</code> file to the root of your project that contains:<ul><li>your name</li>
<li>course and assignment number</li>
<li>link to deployed github page</li>
<li>link to github repo</li>
<li>attributions to assets</li></ul></li>
<li>ZIP all files required for the site to operate and submit to Brightspace;</li>
<li>Include links to the following as a comment in your Brightspace submission:<ul><li>GH repo</li>
<li>Direct link to your <code>201-a4</code> Pull Request</li>
<li>Deployed site link</li></ul></li></ul>`;
});
export {
  Assignment_4 as default,
  metadata
};
