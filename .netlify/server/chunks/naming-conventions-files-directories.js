import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Files, directories and naming conventions",
  "excerpt": "As you work on your craft as a programmer, you will be generating many files and directories for your projects. Naming and directory structure is one of the first steps to building professional websites and apps.",
  "date": "2023-09-01",
  "status": "published"
};
const Naming_conventions_files_directories = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Prerequisites</h2>
<ul><li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files" rel="nofollow">Dealing with files</a></li>
<li><a href="https://www.coffeecup.com/help/articles/absolute-vs-relative-pathslinks/" rel="nofollow">Absolute vs Relative file paths</a></li>
<li>Terminology: <a href="https://gist.github.com/acidtone/2062459ab8b9ee758ca1b5ab312f2440" rel="nofollow">Files, directories and paths</a></li></ul>
<hr>
<h2>File naming conventions/guidelines</h2>
<ul><li>Files should be named consistently</li>
<li>Filenames should be short but descriptive (less than 25 characters)</li>
<li>Use alpha numeric characters when possible</li>
<li>Use underscores or hyphens instead of spaces</li>
<li>In general, use lower case characters. Note: exceptions include README files, operating system directories (<code>Users</code>, <code>Desktop</code>, <code>Documents</code>, etc)</li></ul>
<h3 id="examples"><a aria-hidden="true" tabindex="-1" href="#examples"><span class="icon icon-link"></span></a>Examples</h3>
<ul><li>GOOD<ul><li><code>/Users/tony/Documents/work/resume-2021.pdf</code></li>
<li><code>/Users/tony/Documents/school/projects/project-1/index.html</code></li></ul></li>
<li>BAD<ul><li><code>/Users/tony/Desktop/Resume 2021.pdf</code><ul><li>In general, don’t store common files in your <code>Desktop</code> or <code>Downloads</code> folders. This is what the <code>Documents</code> folder is for.</li></ul></li>
<li><code>/Users/tony/Documents/ABC University/Class Projects/Project 1/index.html</code><ul><li>Using spaces is considered bad practice for paths that you will be accessing from the command line.</li></ul></li></ul></li></ul>`;
});
export {
  Naming_conventions_files_directories as default,
  metadata
};
