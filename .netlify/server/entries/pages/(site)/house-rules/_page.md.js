import { c as create_ssr_component, e as escape } from "../../../../chunks/index3.js";
import { a as siteTitle } from "../../../../chunks/config.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-cnbvpd_START -->${$$result.title = `<title>${escape(siteTitle)}</title>`, ""}<!-- HEAD_svelte-cnbvpd_END -->`, ""}


<h1 id="house-rules"><a aria-hidden="true" tabindex="-1" href="#house-rules"><span class="icon icon-link"></span></a>House Rules</h1>
<h2 id="daily-schedule"><a aria-hidden="true" tabindex="-1" href="#daily-schedule"><span class="icon icon-link"></span></a>Daily Schedule</h2>
<ol><li>Class begins <strong>8am</strong> sharp in Zoom for all courses, except:<ul><li>CPNT 264: Career and Consulting Essentials<ul><li>Dasa will email you with details</li></ul></li>
<li>CPLN 240: Guest Speaker Day<ul><li>You will receive information by email</li></ul></li></ul></li>
<li><strong>Lunch</strong> from 11:30am - 12:30pm<ul><li>There will also be multiple breaks throughout the day.</li></ul></li>
<li>There will be opportunities to earn late starts and early dismissals! Ask your instructors for details.</li></ol>
<hr>
<h2 id="one-on-ones-with-instructors"><a aria-hidden="true" tabindex="-1" href="#one-on-ones-with-instructors"><span class="icon icon-link"></span></a>One-on-ones with Instructors</h2>
<p>Contact an Instructor anytime (response time usually within a day) if you have a private <strong>non-coding</strong> concern or question.</p>
<h3 id="tony-grimes"><a aria-hidden="true" tabindex="-1" href="#tony-grimes"><span class="icon icon-link"></span></a>Tony Grimes</h3>
<ul><li>Slack DM (preferred method of contact)</li>
<li>Email: <a href="mailto:tony.grimes@sait.ca">tony.grimes@sait.ca</a></li></ul>
<h3 id="ashlyn-knox"><a aria-hidden="true" tabindex="-1" href="#ashlyn-knox"><span class="icon icon-link"></span></a>Ashlyn Knox</h3>
<ul><li>Slack DM (preferred method of contact)</li>
<li>Email: <a href="mailto:ashlyn.knox@sait.ca">ashlyn.knox@sait.ca</a></li></ul>
<hr>
<h2 id="coding-help"><a aria-hidden="true" tabindex="-1" href="#coding-help"><span class="icon icon-link"></span></a>Coding help</h2>
<p>For <strong>coding help</strong>, it’s encouraged you (in this order):</p>
<ol><li>Spend an honest amount of effort toward solving the problem yourself;</li>
<li>During class time: <ul><li>ask a question in Zoom!</li>
<li>Come to the Instructor’s breakout room during Lab Time.</li></ul></li>
<li>Outside of class time: <ul><li>Post a question in the <code>#winter-2023</code> or <code>general</code> channel on Slack;</li></ul></li>
<li>Last resort: you can DM your instructor for coding help outside of class time but don’t expect a response until next class.</li></ol>`;
});
export {
  Page as default
};
