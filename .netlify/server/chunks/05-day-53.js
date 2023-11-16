import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Horizontal Navigation with Flexbox",
  "excerpt": "In this session, we'll look at how we can apply Flexbox to a list of link to create a horizontal nav.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _05_day_5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Housekeeping</h2>
<ul><li><a href="/courses/cpnt-260/assessments/assignment-2">Assignment 2</a> due date pushed to Wednesday Sept 20 @ 11:59pm</li></ul>
<hr>
<h2>1. Activity: Dissect a nav menu</h2>
<h3 id="instructions"><a aria-hidden="true" tabindex="-1" href="#instructions"><span class="icon icon-link"></span></a>Instructions</h3>
<p>Search for an example of a horizontal navigation menu online that you think you can duplicate.</p>
<ol><li>Using the eyedropper tool, create a color palette based on your selected menu.<ul><li>Don’t forget hover and active states.</li></ul></li>
<li>Using the Font panel of the Inspector, try to find the font(s) used in the navigation.</li>
<li>Turn on the phone emulator in the inspector and open the mobile menu on your selected site. Take a screen cap of this menu for reference in the next activity.</li></ol>
<hr>
<h2>2. Accessible Horizontal Navigation</h2>
<p><a href="/slides/cpnt-260/flexbox-nav"><img src="/images/slides/cpnt-260/flexbox-nav.png" alt="Flex navigation slides"></a></p>
<h3 id="materials"><a aria-hidden="true" tabindex="-1" href="#materials"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li>Inspiration: <a href="https://acidtone.github.io/code-journal/#jan-29-2023" rel="nofollow">Tony’s nav banner research</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links#styling_links_as_buttons" rel="nofollow">Styling links as buttons</a></li>
<li>Sample Code<ul><li><a href="https://codepen.io/browsertherapy/pen/XWjwJGL" rel="nofollow">Typical vertical navigation menu</a></li></ul></li></ul>
<hr>
<h2>3. Activity: Make your own vertical nav menu</h2>
<p>Try to duplicate the nav menu and banner using today’s slides and sample code.</p>
<ol><li><a href="/slides/cpnt-260/flexbox-nav#/2">Create a list of HTML links</a> using the <code>&lt;nav&gt;</code> and <code>&lt;ul&gt;</code> elements.</li>
<li>Using CSS, <a href="/slides/cpnt-260/flexbox-nav#/3">remove the default bullets and padding</a> from the <code>&lt;ul&gt;</code>.</li>
<li><a href="/slides/cpnt-260/flexbox-nav#/4">Make your links clickable</a> by adding padding (and by making your links block-level).</li>
<li><a href="http://localhost:5173/slides/cpnt-260/flexbox-nav#/5" rel="nofollow">Define your colours</a> according to your selected palette from the earlier activity</li>
<li><a href="http://localhost:5173/slides/cpnt-260/flexbox-nav#/6" rel="nofollow">Define your fonts and any other styles</a> needed to match your nav bar to your online example.</li></ol>
<hr>
<h2>4. Demo: Flexbox Basics</h2>
<h3 id="materials-1"><a aria-hidden="true" tabindex="-1" href="#materials-1"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://flexboxfroggy.com/" rel="nofollow">Flexbox Froggy</a></li>
<li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" rel="nofollow">Complete Guide to Flexbox</a></li>
<li>Sample Code<ul><li><a href="https://codepen.io/browsertherapy/pen/YzqdGpR" rel="nofollow">Flexbox Navigation Examples</a></li></ul></li></ul>
<hr>
<h2>5. Activity: Horizontal navigation with Flexbox</h2>
<p>Try to duplicate the nav menu and banner using today’s slides and sample code.</p>
<ol><li><a href="/slides/cpnt-260/flexbox-nav#/11">Set your <code>&lt;ul&gt;</code> to <code>display: flex</code></a>.</li>
<li><a href="/slides/cpnt-260/flexbox-nav#/12">Choose a justification setting</a> based on your example navigation.</li>
<li>Stretch: Create a list of <code>&lt;img&gt;</code> elements from Lorem Picsum and create a gallery with Flexbox.<ul><li>What element will be your flex container?</li>
<li>Try using <code>gap</code> to space out your images</li></ul></li></ol>
<hr>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<p><strong>Note</strong>: for the rest of this course, the <strong>Proof of Work</strong> portion of the Daily Achievements will be 100% of the marks awarded. The <strong>Learning and Reflection</strong> portion are no longer for marks.</p>
<h3 id="complete-flexbox-froggy"><a aria-hidden="true" tabindex="-1" href="#complete-flexbox-froggy"><span class="icon icon-link"></span></a>Complete FlexBox Froggy</h3>
<p>Try to complete all 24 levels of the <a href="https://flexboxfroggy.com/" rel="nofollow">Flexbox Froggy</a> learning game. Take a screencap of the expanded Level Menu to show how many exercises you completed. </p>
<p><a href="https://flexboxfroggy.com/" rel="nofollow"><img src="/images/assessments/flexbox-froggy.png" alt="Screencap of a completed Flexbox Froggy game"></a></p>
<p>You will receive partial marks for each level you complete (around 1/3 marks for each 8 levels completed).</p>`;
    }
  })}
<hr>
${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2 id="prep"><a aria-hidden="true" tabindex="-1" href="#prep"><span class="icon icon-link"></span></a>Prep</h2>
<h3 id="reading-list"><a aria-hidden="true" tabindex="-1" href="#reading-list"><span class="icon icon-link"></span></a>Reading list</h3>
<ul><li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links#styling_links_as_buttons" rel="nofollow">Styling links as buttons</a></li>
<li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" rel="nofollow">Complete Guide to Flexbox</a></li>
<li><a href="https://dev.to/jungjungie/create-a-navbar-with-css-flexbox-2leh" rel="nofollow">Create a navbar with CSS flexbox </a></li></ul>
<h3 id="watch-list"><a aria-hidden="true" tabindex="-1" href="#watch-list"><span class="icon icon-link"></span></a>Watch list</h3>
<ul><li>Jenn Simmons: <a href="https://youtu.be/hs3piaN4b5I" rel="nofollow">Flexbox vs. CSS Grid — Which is Better?</a></li>
<li>Net Ninja: <a href="https://www.youtube.com/watch?v=2plKBskaKfY" rel="nofollow">Creating a Menu with Flexbox</a></li></ul>
<h3 id="digging-deeper-optional"><a aria-hidden="true" tabindex="-1" href="#digging-deeper-optional"><span class="icon icon-link"></span></a>Digging deeper (optional)</h3>
<ul><li><a href="https://flexbox.io/" rel="nofollow">What the Flexbox!?!</a><ul><li>A 20-video course on Flexbox by Web Bos;</li>
<li>Watch these videos if you want to learn more about Flexbox than what we cover in class.</li></ul></li></ul>`;
    }
  })}`;
});
export {
  _05_day_5 as default,
  metadata
};
