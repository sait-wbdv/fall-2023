import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Software and Workspace Setup",
  "excerpt": "The first two days of CPNT 201 will show you how to set up your file folders (i.e. your workspace) and software so we can hit the ground running for HTML and CSS next week!",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _01_day_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Housekeeping</h2>
<ul><li>Due 3pm today: Follow the White Rabbit Achievement<ul><li>Weight: 2.5% of CNT 201</li></ul></li>
<li>Assignment 1 will be announced tomorrow.</li></ul>
<hr>
<h2>1. Installing all the things</h2>
<p>Today you will be installing some tools you’ll need for the rest of the program:</p>
<ol><li>VS Code</li>
<li>Git (and Git Bash for Windows users)</li>
<li>Firefox</li></ol>
<h3 id="materials"><a aria-hidden="true" tabindex="-1" href="#materials"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><strong><a href="/posts/initial-software-setup">Initial Software Setup Guide</a></strong></li></ul>
<hr>
<h2>2. Setting up your workspace</h2>
<p>Web development (all software development, actually) requires you to work with a lot of files. In this program, we don’t prescribe (i.e. tell you how to do it) how you should organize your files and projects but here we list some tips and best practices.</p>
<h3 id="materials-1"><a aria-hidden="true" tabindex="-1" href="#materials-1"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><strong><a href="/posts/setting-up-your-workspace">Setting up your Workspace</a></strong></li>
<li><a href="/posts/naming-conventions-files-directories">File/Directory naming conventions</a></li></ul>
<hr>
<h2>3. Group Activity: Hobbies!</h2>
<p>In groups of 3-4, take turns answering the following questions:</p>
<ul><li>What’s your favourite hobby at the moment? Why do you like it?</li>
<li>How can you recognize a high level of skill in your hobby? Low level of skill?</li>
<li>Were you excellent at that hobby when you first started?</li>
<li>How did you get better? Why do you keep trying?</li></ul>
<p>Pick a representative from your group to summarize your discussion at the end of the activity.</p>
<hr>
<h2>4. Command Line Basics</h2>
<p>Most of the command line tools you use as a developer (like Git, Node and npm) will <strong>assume that you are in the root directory (i.e. top folder) of your project</strong>. We will cover the three system commands that help up us navigate the file system.</p>
<h3 id="materials-2"><a aria-hidden="true" tabindex="-1" href="#materials-2"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><strong><a href="/posts/command-line-basics">Command Line Basics</a></strong></li></ul>`;
    }
  })}
<hr>
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<p>Weight: 2.5% of your CPNT 201 mark</p>
<h3 id="follow-the-white-rabbit"><a aria-hidden="true" tabindex="-1" href="#follow-the-white-rabbit"><span class="icon icon-link"></span></a>Follow the White Rabbit</h3>
<p>This is a command line exercise for practicing basic file system navigation commands:</p>
<ul><li><code>pwd</code>: Display your present (working) directory</li>
<li><code>ls</code>: List directory contents</li>
<li><code>cd</code>: Change directory</li></ul>
<h4 id="instructions"><a aria-hidden="true" tabindex="-1" href="#instructions"><span class="icon icon-link"></span></a>Instructions</h4>
<ol><li>Download <a href="/files/animal-world.zip"><code>animal-world.zip</code></a> and expand/extract the files;</li>
<li>Move these files into today’s <code>in-class</code> folder;</li>
<li>Using your terminal, find the white rabbit by navigating to it;<ul><li>Hint: It’s in the basement of the cottage!</li></ul></li>
<li>Take a screencap of your terminal history to show how you found the White Rabbit;</li>
<li>Upload your screencap to today’s Achievement dropbox in Brightspace.</li></ol>
<h4 id="criteria"><a aria-hidden="true" tabindex="-1" href="#criteria"><span class="icon icon-link"></span></a>Criteria</h4>
<p>This achievement will be marked out of 2.5 points based on:</p>
<ul><li>Did you use an <code>in-class</code> folder dated today? Did you follow naming conventions?</li>
<li>Did you find the White Rabbit?</li>
<li>How many <code>cd</code> commands did it take to find it? A single <code>cd</code> command will receive the most marks.</li></ul>`;
    }
  })}
<hr>
${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Lesson Prep</h2>
<h3 id="software-setup"><a aria-hidden="true" tabindex="-1" href="#software-setup"><span class="icon icon-link"></span></a>Software Setup</h3>
<ul><li>Watch <a href="https://www.youtube.com/watch?v=7tPZM5gwxtE" rel="nofollow">Intro to the Command Line</a></li>
<li>Windows users: <a href="https://www.atlassian.com/git/tutorials/git-bash" rel="nofollow">Install git bash</a></li>
<li>Everyone: <a href="https://code.visualstudio.com/" rel="nofollow">Install VS Code</a></li></ul>
<h3 id="markdown"><a aria-hidden="true" tabindex="-1" href="#markdown"><span class="icon icon-link"></span></a>Markdown</h3>
<ul><li>Skim this <a href="https://www.markdownguide.org/cheat-sheet/" rel="nofollow">Markdown Cheat Sheet</a></li></ul>`;
    }
  })}`;
});
export {
  _01_day_1 as default,
  metadata
};
