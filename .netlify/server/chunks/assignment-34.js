import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Assignment 3 - Webpage Mockup",
  "excerpt": "Create a high resolution mockup of a web page in Figma.",
  "type": "assignment",
  "points": 25,
  "status": "published"
};
const Assignment_3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="scenario">Scenario</h2>
<p>It’s time to make a hi fidelity mockup of the home page for a website. This needs to double as a proof of concept for your client as well as a visual guide for your frontend developer.</p>
<p>At this phase of the design process, it’s expected that minor changes may need to be made still. To enable a fast workflow, your mockup will be made using a design system that you will set up (use any plugins to generate this content that you like). You also need to create reusable figma components (these will be reviewed by your developers as well).</p>
<p>You can design for desktop or mobile. The design will be reviewed in Presentation mode and assessed for flow and overall design quality.</p>
<h2 id="instructions">Instructions</h2>
1. Create a new design file and rename page 1 as &quot;Mockups&quot; and page 2 as &quot;Component Library&quot;
2. Create a design system of the colors and fonts that you will be using
3. Build the components needed for your site (see the rubric for requirements)
4. Design your mockup using placeholder content
  - figure out relative sizes of things, use lorem ipsum for text and unsplash or pexels for images
5. Replace placeholder content with authentic content and adjust design when necessary
<h2 id="rubric">Rubric</h2>
<h3 id="design-overview-document--5-points"><a aria-hidden="true" tabindex="-1" href="#design-overview-document--5-points"><span class="icon icon-link"></span></a>Design Overview Document — 5 points</h3>
<ul><li>Describes the topic of the site</li>
<li>Outline 5 user objectives in hierarchical order</li></ul>
<h3 id="figma-design-system--5-points"><a aria-hidden="true" tabindex="-1" href="#figma-design-system--5-points"><span class="icon icon-link"></span></a>Figma Design System — 5 points</h3>
<ul><li>Color system configured and labelled</li>
<li>Typography system added and labelled</li>
<li>At least 3 colors + black and white</li>
<li>Content is styled using the design system</li></ul>
<h3 id="figma-component-design--5-points"><a aria-hidden="true" tabindex="-1" href="#figma-component-design--5-points"><span class="icon icon-link"></span></a>Figma Component Design — 5 points</h3>
<ul><li>3 styled reusable components</li>
<li>components are used consistently</li>
<li>components are organized on a separate page from the mockups</li>
<li>components are designed at a scale that fits on your mockup</li></ul>
<h3 id="mockup-design-quality--5-points"><a aria-hidden="true" tabindex="-1" href="#mockup-design-quality--5-points"><span class="icon icon-link"></span></a>Mockup Design Quality — 5 points</h3>
<ul><li>Design uses a 12 column grid for desktop and either a 4 or 5 column grid for mobile</li>
<li>Use a preset frame size of 1280px or 1920px for desktop. Any of the mobile options is fine for mobile design (if you go that route)</li>
<li>Visual hierarchy is well established and uses the principles learned in class</li></ul>
<h3 id="mockup-design-content--5-points"><a aria-hidden="true" tabindex="-1" href="#mockup-design-content--5-points"><span class="icon icon-link"></span></a>Mockup Design Content — 5 points</h3>
<ul><li>Content is authentic and on topic (no lorem ipsum)</li>
<li>There are 3 sections of content (excluding nav, footer, and page header)</li>
<li>headings go from h1 to h3 in nesting</li>
<li>Content includes the following UI elements:<ul><li>card layout or gallery</li>
<li>images and text together</li>
<li>visible text links (can include icons)</li>
<li>primary and secondary buttons</li></ul></li></ul>
<h2 id="submission-instructions">Submission Instructions</h2>
<p>Submit a viewable link to the presentation version of your site and a viewable link to your design space in the submission text box.</p>
<p>Export your mockup as a png and submit it to brightspace.</p>`;
});
export {
  Assignment_3 as default,
  metadata
};
