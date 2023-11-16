import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "SVGs on the Web",
  "excerpt": "This class will cover a few advanced features of vector manipulation along with how to export and use vectors on web pages.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _04_day_4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep Materials &amp; Background Knowledge</h2>
<ul><li>Video: (short overview) <a href="https://youtu.be/emFMHH2Bfvo?si=L-DZqTo9IUs8zaKX" rel="nofollow">SVG in 100 Seconds</a></li>
<li>Video: (part of a longer video) <a href="https://youtu.be/cWh0de8IhX4?si=kfc4Kgh86AJXKdUp&t=1321" rel="nofollow">SVG Cleanup and Optimization</a></li>
<li>Article: (css-tricks) <a href="https://css-tricks.com/svg-properties-and-css/" rel="nofollow">Style SVGs with CSS</a></li>
<li>Video: (figma tutorial) <a href="https://youtu.be/8ZaX6qEcUCU?si=5yFBuxyH4c7Fs6Hu" rel="nofollow">Boolean Operators Tutorial</a></li></ul>
<h3 id="bring-to-class"><a aria-hidden="true" tabindex="-1" href="#bring-to-class"><span class="icon icon-link"></span></a>Bring to class:</h3>
<ul><li>A mouse</li>
<li>Something you can draw on (mobile app or pen &amp; paper)</li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Daily Standup</h2>
<p>In the same groups as last class</p>
<h3 id="each-person-takes-a-turn-to-answer-the-following-questions"><a aria-hidden="true" tabindex="-1" href="#each-person-takes-a-turn-to-answer-the-following-questions"><span class="icon icon-link"></span></a>Each person takes a turn to answer the following questions:</h3>
<ol><li>What did you do yesterday?</li>
<li>What will you do today?</li>
<li>Anything blocking your progress?</li></ol>
<hr>
<h2>Boolean Operations</h2>
<p>These are used to manipulate paths with one another. They are essential for creating high quality designs.</p>
<a href="https://help.figma.com/hc/en-us/articles/360039957534-Boolean-operations"><img src="/images/design/booleans.png" alt="Boolean operations slides"></a>
<h3 id="most-useful-booleans"><a aria-hidden="true" tabindex="-1" href="#most-useful-booleans"><span class="icon icon-link"></span></a>Most useful Booleans</h3>
<ul><li>Union: They will become 1 shape</li>
<li>Subtract: The top shape cuts off from the bottom shape</li></ul>
<p><strong>Union is different from grouping. Grouping doesn’t actually change any elements</strong></p>
<h2>SVG Optimization</h2>
<a href="https://docs.google.com/presentation/d/1PXRKHVNnxK0XZlxBNbGwWEk9ouJCtmx21QZiFlm8crc/edit?usp=sharing"><img src="/images/design/svg-slides.png" alt="SVG Slides"></a>
<h3 id="instructor-led-activity-update-the-android-logo-using-booleans"><a aria-hidden="true" tabindex="-1" href="#instructor-led-activity-update-the-android-logo-using-booleans"><span class="icon icon-link"></span></a>Instructor Led Activity: Update the Android logo Using Booleans</h3>
<ul><li>Let’s Look at our android logo and use subtract and union to reduce the paths</li>
<li>Use <a href="https://jakearchibald.github.io/svgomg/" rel="nofollow">SVGOMG</a> to optimize and prepare the svg for use in code<ul><li><strong>remove height and width</strong> when you need it to be responsive</li>
<li><strong>Prefer viewbox</strong></li>
<li><strong>Prettify output</strong></li></ul></li></ul>
<h2>Style SVGs with CSS</h2>
<a href="https://docs.google.com/presentation/d/1zIfstZwArqenWj85LdXJjat5vx7wdgvIucKlzEqyTwc/edit?usp=sharing"><img src="/images/design/svg-css-slides.png" alt="style svg with css tips"></a>
<p><strong><a href="https://css-tricks.com/lodge/svg/" rel="nofollow">CSS Tricks Essential SVG Resource</a></strong></p>
<h3 id="key-takeaways"><a aria-hidden="true" tabindex="-1" href="#key-takeaways"><span class="icon icon-link"></span></a>Key Takeaways</h3>
<ul><li>You have 3 options to load svgs onto a web page</li>
<li>Pick the option that makes sense for the use case</li>
<li>Inline SVGs can be edited with css and js</li></ul>
<hr>
<h2>Expectations of working with SVGs</h2>
<p>As a developer, you might not have to work with svgs too much. However when you do, you’ll want to nail these points:</p>
<ul><li>Always clean up your design files by labelling, grouping, removing unnecessary paths, and running booleans when necessary</li>
<li>Always optimize your svgs so that the files are small and so they can be used inline without headaches</li>
<li>Be aware of the size of your frame<ul><li>SVGs are scalable, but big designs create big files</li></ul></li>
<li>Consider how your logo will look monochrome (1 color &amp; transparent)</li></ul>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status, dueDate: false }, {}, {
    default: () => {
      return `<h3 id="graded-activity-design-an-svg-logo"><a aria-hidden="true" tabindex="-1" href="#graded-activity-design-an-svg-logo"><span class="icon icon-link"></span></a>Graded Activity: <a href="/courses/dsgn-270/assessments/graded-activities">Design an SVG Logo</a></h3>
<ul><li><strong>Due Monday September 25 2023</strong></li>
<li><strong>Weight: 10%</strong></li>
<li>Create a simple svg logo in figma</li>
<li>Add your logo to a web page</li>
<li>Manipulate your logo with css</li></ul>`;
    }
  })}`;
});
export {
  _04_day_4 as default,
  metadata
};
