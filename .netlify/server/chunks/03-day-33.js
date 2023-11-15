import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Imagery and Colour",
  "excerpt": "This session we'll spice up our text with HTML images and begin implementing colour palettes.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _03_day_3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Review and Spoilers</h2>
<ol><li>Git repo strategies for Daily Achievements</li>
<li>HTML and CSS Validation<ul><li><a href="https://validator.w3.org/" rel="nofollow">W3C Markup Validation Service</a></li>
<li><a href="https://jigsaw.w3.org/css-validator/" rel="nofollow">CSS Validation Service</a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=HTMLHint.vscode-htmlhint" rel="nofollow">HTMLHint VS Code Extension</a></li></ul></li></ol>
<hr>
<h2>Activity: Easy Images</h2>
<p><img src="/images/html/water-drops-banner.png" alt="water drops"></p>
<h3 id="materials"><a aria-hidden="true" tabindex="-1" href="#materials"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML" rel="nofollow">Images in HTML</a></li>
<li><a href="https://github.com/sait-wbdv/dailies-f23/tree/main/2023-09-13-images-colour/01-wiki-starter" rel="nofollow">Starter Code</a></li></ul>
<h3 id="tools"><a aria-hidden="true" tabindex="-1" href="#tools"><span class="icon icon-link"></span></a>Tools</h3>
<ul><li><a href="https://picsum.photos/" rel="nofollow">Lorem Picsum</a></li></ul>
<h3 id="instructions"><a aria-hidden="true" tabindex="-1" href="#instructions"><span class="icon icon-link"></span></a>Instructions</h3>
<h4 id="responsive-image"><a aria-hidden="true" tabindex="-1" href="#responsive-image"><span class="icon icon-link"></span></a>Responsive Image</h4>
<ol><li>Copy and paste the <a href="https://github.com/sait-wbdv/dailies-f23/tree/main/2023-09-13-images-colour/01-wiki-starter" rel="nofollow">starter code</a> into your workspace or use your own code from yesterday.</li>
<li>Add an <code>&lt;img&gt;</code> element to the top of the page inside the <code>&lt;section&gt;</code> element:<ul><li>Set <code>src</code> to a <a href="https://picsum.photos/" rel="nofollow">Lorem Picsum</a> images such as:<ul><li><code>https://picsum.photos/id/237/200/300</code></li>
<li>Experiment with the last two numbers in the URL to set different a height and width of the image.</li></ul></li>
<li>Set <code>alt</code> text to something that describes your image;</li></ul></li>
<li>In your CSS, target your new image with a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors" rel="nofollow">type selector</a>:<ul><li>Set <code>display</code> to <code>block</code></li>
<li>Set <code>width</code> to <code>100%</code> (this makes your image responsive)</li></ul></li></ol>
<h4 id="floated-circular-image"><a aria-hidden="true" tabindex="-1" href="#floated-circular-image"><span class="icon icon-link"></span></a>Floated Circular Image</h4>
<ol><li>Repeat Steps 1 and 2 above, placing the image before an <code>&lt;h2&gt;</code> element;</li>
<li>In your CSS, target your second image using a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors" rel="nofollow">class selector</a> and:<ul><li>Set <code>float</code> property to <code>left</code> or <code>right</code> (try both and see what happens)</li>
<li>Set <code>border-radius</code> to <code>50%</code> or some other length value.</li></ul></li></ol>
<hr>
<h2>Activity: Adding a Splash of Colour</h2>
<p><img src="/images/html/colour-banner.png" alt="article screen cap"></p>
<h3 id="materials-1"><a aria-hidden="true" tabindex="-1" href="#materials-1"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li>Your Moodboard colour palettes!</li>
<li><a href="https://heyreliable.com/ultimate-google-font-pairings/" rel="nofollow">The Ultimate Collection of Google Font Pairings</a> (for its colours)</li></ul>
<h3 id="tools-1"><a aria-hidden="true" tabindex="-1" href="#tools-1"><span class="icon icon-link"></span></a>Tools</h3>
<ul><li><a href="https://contrast-ratio.com" rel="nofollow">Contrast Ration Checker</a></li>
<li><a href="https://firefox-source-docs.mozilla.org/devtools-user/eyedropper/index.html" rel="nofollow">Firefox Eyedropper Tool</a></li></ul>
<h3 id="instructions-1"><a aria-hidden="true" tabindex="-1" href="#instructions-1"><span class="icon icon-link"></span></a>Instructions</h3>
<ol><li><strong>In Firefox</strong>, go to a webpage with a colour pallette you’d like to copy such as <a href="https://heyreliable.com/ultimate-google-font-pairings/" rel="nofollow">The Ultimate Collection of Google Font Pairings</a>.</li>
<li>Inspect the page by right-clicking on the page;</li>
<li>Click the <a href="https://firefox-source-docs.mozilla.org/devtools-user/eyedropper/index.html" rel="nofollow">eyedropper tool</a> and click a light colour to copy it to your clipboard;</li>
<li>In the CSS of your <a href="https://github.com/sait-wbdv/dailies-f23/tree/main/2023-09-13-images-colour/01-wiki-starter" rel="nofollow">starter code</a>:<ul><li>Set the <code>color</code> of your <code>body</code> element to the colour you copied.</li></ul></li>
<li>Repeat Step 3 with a dark colour;</li>
<li>In the CSS of your <a href="https://github.com/sait-wbdv/dailies-f23/tree/main/2023-09-13-images-colour/01-wiki-starter" rel="nofollow">starter code</a>:<ul><li>Set the <code>background-color</code> of your <code>body</code> element to the second colour you copied.</li></ul></li>
<li>Important! Use the <a href="https://contrast-ratio.com" rel="nofollow">Contrast Ration Checker</a> to confirm that your colour selections have enough contrast.</li>
<li>Now try adding a third colour to the <code>section</code> element.</li></ol>`;
    }
  })}
<hr>
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="htmlcss-video-or-article"><a aria-hidden="true" tabindex="-1" href="#htmlcss-video-or-article"><span class="icon icon-link"></span></a>HTML/CSS Video or Article</h3>
<p>Find a video (&gt; 10 mins) or article (&gt; 350 words) about HTML/CSS that you found during today’s coding activities. It should be current, helpful and come from a credible source.</p>
<h4 id="instructions-2"><a aria-hidden="true" tabindex="-1" href="#instructions-2"><span class="icon icon-link"></span></a>Instructions</h4>
<ol><li>Submit the link to your chosen video or article in Brightspace.</li>
<li>Include answers to the following questions with your submission:<ul><li>How did this resource help you?</li>
<li>What problem were you trying to solve?</li>
<li>Does the content creator have any other videos or articles that might be helpful?</li></ul></li></ol>`;
    }
  })}
<hr>
${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep</h2>
<h3 id="watch-list"><a aria-hidden="true" tabindex="-1" href="#watch-list"><span class="icon icon-link"></span></a>Watch list</h3>
<ul><li><a href="https://www.youtube.com/watch?v=eqZqx6lRPe0" rel="nofollow">Read color hex codes</a> by David DeSandro</li>
<li><a href="https://www.youtube.com/watch?v=0xoztJCHpbQ" rel="nofollow">HTML &amp; CSS for Beginners Part 6: Images</a> by Kevin Powell</li></ul>
<h3 id="reading-list"><a aria-hidden="true" tabindex="-1" href="#reading-list"><span class="icon icon-link"></span></a>Reading List</h3>
<p><strong>Mozilla Developer Network</strong></p>
<ul><li><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML" rel="nofollow">Images in HTML</a></li></ul>`;
    }
  })}`;
});
export {
  _03_day_3 as default,
  metadata
};
