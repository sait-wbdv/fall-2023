import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Hi Fidelity Design Mockups",
  "excerpt": "For our last day of design, we will learn how to make a hi fidelity mockup of a web page. We will make use of figma components, design systems, frames and grids, image imports, and vector editing.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _08_day_8 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep Materials</h2>
<ul><li>Read <a href="https://www.uxpin.com/studio/blog/what-is-a-mockup-the-final-layer-of-ui-design/#:~:text=A%20UI%20mockup%20is%20a,no%20functionality%2Dlike%20a%20screenshot." rel="nofollow">What is a Mockup</a></li>
<li>Watch <a href="https://youtu.be/oZAKb_gs2Uo?si=jBiuewtU5jS-5GJJ" rel="nofollow">Figma UX Tutorial for Beginners: Mockups</a></li>
<li>Skim <a href="https://www.smashingmagazine.com/2018/03/guide-wireframing-prototyping/" rel="nofollow">A Comprehensive Guide to Wireframing and Prototyping</a></li></ul>
<h3 id="tools"><a aria-hidden="true" tabindex="-1" href="#tools"><span class="icon icon-link"></span></a>Tools</h3>
<ul><li>Color Palette Generators (there are many more, find one that you like)<ul><li><a href="https://uicolors.app/create" rel="nofollow">Generate Tailwind Color Palettes</a> (not Figma based)</li>
<li><a href="https://www.figma.com/community/plugin/1242548152689430610/Tailwind-CSS-Color-Generator" rel="nofollow">Figma Plugin Tailwind Color Generator</a></li>
<li><a href="https://www.figma.com/community/plugin/1113856043179009368/Color-Palette-Generator" rel="nofollow">Figma Color Palette Generator</a></li></ul></li>
<li>Text Generators<ul><li><a href="https://www.figma.com/community/plugin/759472336242530542/Text-Styles-Generator" rel="nofollow">Figma Text Styles Generator</a></li>
<li><a href="https://www.figma.com/community/plugin/1167391871470238568/Tailwind-CSS-Styles-Generator" rel="nofollow">Tailwind CSS Styles Generator</a> — generates text and color</li></ul></li></ul>
<hr>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Teams Standups</h2>
<ul><li>In each block of dsgn-270, you’ll have a group of 3-4 with whom you’ll discuss what your working on and how it’s going</li>
<li>The objective of this is to get comfortable talking about your progress, issues you’re running into, and your workflow</li></ul>
<h3 id="each-person-takes-a-turn-to-answer-the-following-questions"><a aria-hidden="true" tabindex="-1" href="#each-person-takes-a-turn-to-answer-the-following-questions"><span class="icon icon-link"></span></a>Each person takes a turn to answer the following questions:</h3>
<ol><li>What did you do yesterday?</li>
<li>What will you do today?</li>
<li>Anything blocking your progress?</li></ol>
<hr>
<h2>Design Assets</h2>
<p>While not necessary, it’s a good idea to set up your design assets like colors and fonts prior to building components. This allows you to make stylistic changes globally with little effort.</p>
<h3 id="set-up-colors-fonts-and-grids"><a aria-hidden="true" tabindex="-1" href="#set-up-colors-fonts-and-grids"><span class="icon icon-link"></span></a><a href="https://help.figma.com/hc/en-us/articles/360038746534-Create-color-text-effect-and-layout-grid-styles" rel="nofollow">Set up Colors, Fonts, and Grids</a></h3>
<h4 id="colors"><a aria-hidden="true" tabindex="-1" href="#colors"><span class="icon icon-link"></span></a>Colors</h4>
<ul><li>Remember from our earlier classes of color selection (these are some suggestions to work from): - 1 primary color: the main theme of the site (a good option for having 3+ shades) - 1 secondary color: a complementary color (also good for having 3+ shades) - 1 accent color: used for buttons, hover, interactions (this color should be clear on your theme colors)</li></ul>
<h4 id="activity-use-a-plugin-to-generate-colors-and-fonts"><a aria-hidden="true" tabindex="-1" href="#activity-use-a-plugin-to-generate-colors-and-fonts"><span class="icon icon-link"></span></a>Activity: Use a Plugin to Generate Colors and Fonts</h4>
<ul><li>Search the figma community plugins for a color generator</li>
<li>Generate a couple colors</li></ul>
<hr>
<h2>In Class Design Along</h2>
<p>I will go step by step (following the steps below) to make a small high fidelity navbar, hero section, and 3 card layout. The goal is for everyone to be able to design along with me and ask questions as we go.</p>
<hr>
<h2>Hi Fidelity Mockup Steps</h2>
<ol><li>Prep your design assets first (only uses colors and fonts from your defined styles)</li>
<li>Set up your grid on the main frame (used for creating the layout)</li>
<li>Sketch out a wireframe to follow</li>
<li>Get image and icon assets</li>
<li>Start Designing</li>
<li>When Finished, review labels and groupings —&gt; Optimize</li></ol>
<p><strong>Good Luck</strong></p>
<h2>Lab Time</h2>
- Add to the mockup that we made in class (add to it, tweak it etc)
- Create a new hi fidelity mockup
<hr>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status, dueDate: false }, {}, {
    default: () => {
      return `<h3 id="assignment-3-create-a-hi-fidelity-mockup"><a aria-hidden="true" tabindex="-1" href="#assignment-3-create-a-hi-fidelity-mockup"><span class="icon icon-link"></span></a>Assignment 3: <a href="/courses/dsgn-270/assessments/assignment-3">Create a Hi Fidelity Mockup</a></h3>
<ul><li><strong>Due Friday November 3 2023</strong></li>
<li><strong>Weight: 25%</strong></li>
<li>Create a single hi fidelity mockup for a webpage or app</li>
<li>Apply the skills and design principles learned in previous assignments</li>
<li>Practice design <strong>maintainability</strong> by using a design system</li></ul>`;
    }
  })}`;
});
export {
  _08_day_8 as default,
  metadata
};
