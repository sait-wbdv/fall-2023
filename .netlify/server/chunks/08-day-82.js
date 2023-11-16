import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Galleries with Flexbox and CSS Grid",
  "excerpt": "In this session, we'll use Flexbox and CSS Grid to achieve responsive gallery layouts.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _08_day_8 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Video Watch party day!</h2>
<h3 id="1-flex-vs-grid"><a aria-hidden="true" tabindex="-1" href="#1-flex-vs-grid"><span class="icon icon-link"></span></a>1. Flex vs Grid</h3>
<p><a href="https://youtu.be/hs3piaN4b5I" rel="nofollow"><img src="/images/lessons/flex-vs-grid.png" alt="Flexbox vs. CSS Grid — Which is Better?"></a></p>
<ul><li><a href="https://youtu.be/hs3piaN4b5I" rel="nofollow">Flexbox vs. CSS Grid — Which is Better?</a> by Jenn Simmons</li></ul>
<hr>
<h3 id="2-introduction-to-css-grid"><a aria-hidden="true" tabindex="-1" href="#2-introduction-to-css-grid"><span class="icon icon-link"></span></a>2. Introduction to CSS Grid</h3>
<p><a href="https://gridbyexample.com/video/" rel="nofollow"><img src="/images/lessons/intro-to-grid.png" alt="Defining a Grid"></a></p>
<ul><li><a href="https://gridbyexample.com/video/series-define-a-grid/" rel="nofollow">Defining a Grid</a></li>
<li><a href="https://gridbyexample.com/video/series-the-fr-unit/" rel="nofollow">The <code>fr</code> unit</a></li>
<li><a href="https://gridbyexample.com/video/series-repeat/" rel="nofollow">Repeat Notation</a></li></ul>
<hr>
<h2>Activity: 2-up, 4-up</h2>
<h3 id="materials"><a aria-hidden="true" tabindex="-1" href="#materials"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://github.com/sait-wbdv/dailies-f23/tree/main/2023-09-27-gallaries/01-2up-starter" rel="nofollow">Starter Code</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child" rel="nofollow"><code>nth-child</code></a><ul><li>useful for alternating colours in a design</li></ul></li></ul>
<p>In groups of 2 or 3, build 3 grid layouts:</p>
<ol><li>Make a split-hero section: fill the page with two items with different background colours, side-by-side.</li>
<li>Refactor your code to be a 2x2 grid.</li></ol>
<hr>
<h2>Demo: Image gallery</h2>
<h3 id="materials-1"><a aria-hidden="true" tabindex="-1" href="#materials-1"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://gridbyexample.com/video/series-minmax/" rel="nofollow">Introducing <code>minmax()</code></a></li>
<li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" rel="nofollow">Complete Guide to CSS Grid</a></li></ul>
<h3 id="starter-code"><a aria-hidden="true" tabindex="-1" href="#starter-code"><span class="icon icon-link"></span></a>Starter Code</h3>
<ul><li><a href="https://github.com/sait-wbdv/dailies-f23/tree/main/2023-09-27-gallaries/00c-gallery-starter" rel="nofollow">Starter code</a></li></ul>
<hr>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="game-board"><a aria-hidden="true" tabindex="-1" href="#game-board"><span class="icon icon-link"></span></a>Game board</h3>
<p>Using CSS Grid, build ONE of the following:</p>
<p><strong>An empty Tic-Tac-Toe grid:</strong>
<img src="/images/css/tic-tac-toe.png" alt="Tic Tac Toe Board"></p>
<ul><li><a href="https://github.com/sait-wbdv/dailies-f23/tree/main/2023-09-27-gallaries/00a-tic-tac-toe-starter" rel="nofollow">Starter Code</a></li>
<li>3x3 grid of squares</li>
<li>Borders <strong>between</strong> each square</li>
<li>Optional: Add static, centred “X” and “O” content in some or all of the squares</li></ul>
<p><strong>OR</strong></p>
<p><strong>Chess board:</strong>
<img src="/images/css/chess.png" alt="Chess Board"></p>
<ul><li><a href="https://github.com/sait-wbdv/dailies-f23/tree/main/2023-09-27-gallaries/00b-chess-board-starter" rel="nofollow">Starter Code</a></li>
<li>8x8 grid of squares</li>
<li>Each square alternates colours like a chess board <ul><li>hint: the <code>nth-child(even)</code> selector might come in handy</li></ul></li>
<li>Optional: Add static, centred “X” and “O” content in some or all of the squares</li></ul>
<p><strong>OR</strong></p>
<p><strong>Some other layout</strong> that demonstrates the knowledge you learned today.</p>
<h3 id="criteria"><a aria-hidden="true" tabindex="-1" href="#criteria"><span class="icon icon-link"></span></a>Criteria</h3>
<p>Points will be awarded for layouts that:</p>
<ul><li>Use CSS Grid;</li>
<li>Incorporate non-grid CSS such as borders, backgrounds, size control (i.e. squares, hero section, etc);</li>
<li>Show originality.</li></ul>
<h3 id="submission-instructions"><a aria-hidden="true" tabindex="-1" href="#submission-instructions"><span class="icon icon-link"></span></a>Submission Instructions</h3>
<p>Submit your GH repo and Pages links to the Dropbox in Brightspace.</p>`;
    }
  })}
<hr>
${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Lesson Prep</h2>
<h3 id="reading-list"><a aria-hidden="true" tabindex="-1" href="#reading-list"><span class="icon icon-link"></span></a>Reading list</h3>
<ul><li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" rel="nofollow">Complete Guide to Grid</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids" rel="nofollow">Learning CSS Grid</a> on MDN</li></ul>
<h3 id="watch-list"><a aria-hidden="true" tabindex="-1" href="#watch-list"><span class="icon icon-link"></span></a>Watch list</h3>
<ul><li>On <a href="https://gridbyexample.com/" rel="nofollow">Grid by Example</a>:<ul><li><a href="https://gridbyexample.com/video/series-define-a-grid/" rel="nofollow">Defining a Grid</a></li>
<li><a href="https://gridbyexample.com/video/series-the-fr-unit/" rel="nofollow">The <code>fr</code> unit</a></li>
<li><a href="https://gridbyexample.com/video/series-minmax/" rel="nofollow">Introducing <code>minmax()</code></a></li></ul></li>
<li><a href="https://youtu.be/KOvGeFUHAC0" rel="nofollow">Build a Classic Layout FAST in CSS Grid</a> by Miriam Suzanne<ul><li>You can stop watching @6:05; the rest describes an obscure way of doing the same thing (that you might like better).</li></ul></li></ul>
<h3 id="digging-deeper-optional"><a aria-hidden="true" tabindex="-1" href="#digging-deeper-optional"><span class="icon icon-link"></span></a>Digging deeper (optional)</h3>
<ul><li>Other CSS Grid videos on <a href="https://gridbyexample.com/video/" rel="nofollow">Grid by Example</a></li>
<li><a href="https://youtu.be/tFKrK4eAiUQ" rel="nofollow">Incredibly Easy Layouts with CSS Grid</a> by Jenn Simmons</li>
<li><a href="https://www.youtube.com/watch?v=u044iM9xsWU" rel="nofollow">Learn flexbox the easy way</a> by Kevin Powell</li></ul>`;
    }
  })}`;
});
export {
  _08_day_8 as default,
  metadata
};
