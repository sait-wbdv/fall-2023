import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Introduction to HTML and CSS",
  "excerpt": "For the first day of CPNT 260, we will be covering some of the basics of HTML and CSS",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _01_day_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<hr>
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Housekeeping</h2>
<ul><li>Marks returned for CPNT 201 Achievements 1 and 2</li></ul>
<hr>
<h2>1. Git Review</h2>
<p>We’ll do a quick review of Git and introduce you to the VS Code Git panel.</p>
<h3 id="activity-draw-toast-but-with-git"><a aria-hidden="true" tabindex="-1" href="#activity-draw-toast-but-with-git"><span class="icon icon-link"></span></a>Activity: Draw Toast but with Git</h3>
<p>In groups of 3 or 4, draw out the steps needed to push changes to a GitHub repo.</p>
<hr>
<h2>2. Hello Vanilla</h2>
<p>A simple one page website. Although this one is broken!</p>
<h3 id="materials"><a aria-hidden="true" tabindex="-1" href="#materials"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://github.com/sait-wbdv/dailies-f23" rel="nofollow">Hello Vanilla Sample Code</a></li></ul>
<hr>
<h2>3. The Triad</h2>
<p><a href="/slides/cpnt-260/browser-triad"><img src="/images/slides/cpnt-260/browser-triad.png" alt="Slides: The Browser Triad"></a></p>
<h3 id="materials-1"><a aria-hidden="true" tabindex="-1" href="#materials-1"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started" rel="nofollow">Getting started with HTML</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS" rel="nofollow">What is CSS?</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started" rel="nofollow">Getting started with CSS</a></li></ul>
<hr>
<h2>4. Introduction to HTTP</h2>
<p><a href="/slides/cpnt-260/http-introduction"><img src="/images/slides/cpnt-260/http-introduction.png" alt="Slides: Introduction to HTTP"></a></p>
<hr>
<h2>Better Search Phrases</h2>
<p><a href="/slides/cpnt-260/better-search-phrases"><img src="/images/slides/cpnt-260/better-search-phrases.png" alt="Slides: Better Search Phrases"></a></p>
<hr>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="pair-coding"><a aria-hidden="true" tabindex="-1" href="#pair-coding"><span class="icon icon-link"></span></a>Pair Coding!</h3>
<p><strong>Materials</strong></p>
<ul><li><a href="https://gist.github.com/acidtone/caa20b2520814a94240043c40301024a" rel="nofollow">Pair programming process with Fiona and Semira</a></li></ul>
<p><strong>Instructions</strong></p>
<p>Download or clone <a href="https://github.com/sait-wbdv/dailies-f23/tree/main/2023-09-11-triad-intro/hello-vanilla" rel="nofollow">Hello Vanilla</a> into your workspace.</p>
<ol><li>Identify asset files in the root directory that should be in dedicated folders:<ul><li>CSS files should be in a <code>css</code> directory;</li>
<li>Javascript files should be in a <code>js</code> directory;</li>
<li>Images (<code>jpg</code>, <code>png</code>, <code>svg</code>, etc) should be in an <code>images</code> directory.</li></ul></li>
<li>For each of the files you identified, create a dedicated directory in the project root.</li>
<li>Move each identified file into the appropriate directory.</li>
<li>Ensure the names of all files and directories conform to accepted naming conventions.</li>
<li>Fix any links to these files that may have broken when you moved the files. The project should operate just as it did before you moved the files.</li></ol>
<p><strong><a href="https://gist.github.com/acidtone/bb688eb6e16c861422b865bf0e9abf4a" rel="nofollow">More Challenges!</a></strong></p>`;
    }
  })}
<hr>
${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Lesson Prep</h2>
<h3 id="videos"><a aria-hidden="true" tabindex="-1" href="#videos"><span class="icon icon-link"></span></a>Videos</h3>
<ul><li><a href="https://www.youtube.com/watch?v=HGTJBPNC-Gw" rel="nofollow">HTML &amp; CSS Full Course for free (2023)</a><ul><li>You don’t have to watch the whole video (4 hrs long). Feel free to skip around to get the basics.</li></ul></li></ul>
<h3 id="mozilla-developer-network"><a aria-hidden="true" tabindex="-1" href="#mozilla-developer-network"><span class="icon icon-link"></span></a>Mozilla Developer Network</h3>
<p>This is the official textbook for this course (as well as CPNT 262). These two Guides will get you started with HTML and CSS but you are encourage to check out more of their content as needed:</p>
<ul><li><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started" rel="nofollow">Getting started with HTML</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS" rel="nofollow">What is CSS?</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started" rel="nofollow">Getting started with CSS</a></li></ul>
<h3 id="optional-free-online-courses"><a aria-hidden="true" tabindex="-1" href="#optional-free-online-courses"><span class="icon icon-link"></span></a>Optional: Free Online Courses</h3>
<p>There are a lot of courses available online but these are recommended for beginners:</p>
<ul><li><a href="https://mimo.org" rel="nofollow">Mimo</a><ul><li>This site has many courses for different languages but their Web Development stream comes highly recommended by past students.</li></ul></li>
<li><a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/" rel="nofollow">Free Code Camp</a><ul><li>This is probably one of the most well known online course. </li></ul></li></ul>`;
    }
  })}`;
});
export {
  _01_day_1 as default,
  metadata
};
