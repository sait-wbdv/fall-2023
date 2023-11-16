import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Initial Software Setup",
  "excerpt": "You will be responsible for maintaining your development environment for each course in this program. The specific requirements will change from course to course but the following software will be required for the entire program.",
  "date": "2023-09-07",
  "status": "published"
};
const Initial_software_setup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Code Editor: VS Code</h2>
<p>Most of your time in this program will be spent in your code editor. If you haven’t installed one yet, VS Code is the current industry favourite:</p>
<ul><li><a href="https://code.visualstudio.com/download" rel="nofollow">Install VS Code</a></li></ul>
<p>If you’ve been using one you like, stick with it! Your instructors will be using VS Code.</p>
<h3 id="configuration"><a aria-hidden="true" tabindex="-1" href="#configuration"><span class="icon icon-link"></span></a>Configuration</h3>
<p>In the User Settings, make the following changes:</p>
<ul><li>Set <code>Editor: Tab Size</code> to <code>2</code></li>
<li>Set <code>Editor: Word Wrap</code> to <code>on</code></li></ul>
<h3 id="recommended-extensions"><a aria-hidden="true" tabindex="-1" href="#recommended-extensions"><span class="icon icon-link"></span></a>Recommended Extensions</h3>
<p>The following VS Code extensions will make you look cool in front of nerds:</p>
<ul><li><a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" rel="nofollow">Live Server</a><ul><li>Allows you to open vanilla HTML websites in the browser using a local web server.</li></ul></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker" rel="nofollow">Code Spell Checker</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" rel="nofollow">Prettier</a></li></ul>
<hr>
<h2>Git</h2>
<p><a href="https://git-scm.com/" rel="nofollow">Git</a> will be a large component of this program for managing, sharing and deploying our source code.</p>
<ul><li><a href="https://git-scm.com/download/win" rel="nofollow">Binary Installer for PC</a></li>
<li><a href="https://sourceforge.net/projects/git-osx-installer/" rel="nofollow">Binary Installer for Mac</a> (or find an <a href="https://git-scm.com/download/mac" rel="nofollow">alternate method</a> if you’re feeling fancy)</li></ul>
<hr>
<h2>GitHub</h2>
GitHub is a private corporation (now owned by Microsoft) that has built a world-leading community around Git. All sample code and projects will be hosted on GH and this program website is hosted using Git.
<ol><li><a href="https://github.com/" rel="nofollow">Create a GitHub account</a> if you haven’t already. <strong>Don’t forget:</strong> your GH username will be seen by potential employers.</li>
<li><em>Watch</em> and/or <em>Star</em> the <a href="https://github.com/sait-wbdv/fall-2023" rel="nofollow">program repository</a>.</li>
<li>Sign up for GitHub Classroom to get your <a href="https://education.github.com/pack" rel="nofollow">Student Developer Pack</a> (handy free stuff)!</li></ol>
<hr>
<h2>Slack for messaging</h2>
<p>Slack is the preferred messaging tool for this program and is a popular tool in industry. You should see an invite to the SAIT WBDV Slack team sometime during orientation day.</p>
<ul><li>Optional: <a href="https://slack.com/intl/en-ca/downloads/" rel="nofollow">Install Slack</a> (web version available)</li>
<li>Tutorials: <a href="https://slack.com/intl/en-ca/resources/slack-101" rel="nofollow">Slack 101</a></li></ul>
<p>Note: The past cohorts of this program also have access to this Slack team but each cohort has a private channel. You’re free to meet and interact with past students of this program. You may also use MS Teams if you’d like to avoid outside students (and your instructor(s)).</p>
<hr>
<h2>Firefox Browser</h2>
<p>Regardless of which browser you prefer in your off-time, this course requires Firefox for its superior (for the moment) CSS Developer Tools. Chrome can be used for its Javascript Dev Tools in CPNT 262.</p>
<ul><li><a href="https://www.mozilla.org/" rel="nofollow">Install Firefox</a></li></ul>
<p>The Mozilla Developer Network (the makers of Firefox) recently launched an entire <a href="https://www.youtube.com/channel/UCh5UlGiu9d6LegIeUCW4N1w" rel="nofollow">Youtube channel</a> to teach developers how to use Firefox Developer Tools (your best friend).</p>`;
});
export {
  Initial_software_setup as default,
  metadata
};
