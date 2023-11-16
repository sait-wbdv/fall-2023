import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Intro to Web Design & Visual Hierarchy",
  "excerpt": "Explore the basic roles and responsibilities of web designers, learn about visual hierarchy and review it in the physical and digital worlds.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _01_day_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {})}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2 id="course-overview">Course Overview</h2>
<p>DSGN-270 focuses on visual concepts used to make websites easy to navigate and use. We will practice skills used for User Interface (UI) design as well as User Experience (UX) research and design. This course will teach you to structure information effectively and to apply industry standard design principles to web content.</p>
<p>As design is partially a subjective discipline, grading won’t focus on stylistic choices beyond their relevance to the design concepts and principles learned in class.</p>
<h3 id="communication"><a aria-hidden="true" tabindex="-1" href="#communication"><span class="icon icon-link"></span></a>Communication</h3>
<ul><li><a href="https://join.slack.com/t/sait-wbdv/shared_invite/zt-22nemjzb7-AQk4xBvdkcl8zVeZQDMS7w" rel="nofollow">Slack Invite Link (click here)</a><ul><li>We will use the fall-2023 channel</li></ul></li></ul>
<h4 id="instructors"><a aria-hidden="true" tabindex="-1" href="#instructors"><span class="icon icon-link"></span></a>Instructors</h4>
<ul><li>Ashlyn Knox: <a href="mailto:ashlyn.knox@sait.ca">ashlyn.knox@sait.ca</a><ul><li>DSGN-270, CPNT-262, CPNT-200, CPNT-265</li></ul></li>
<li>Tony Grimes: <a href="mailto:tony.grimes@sait.ca">tony.grimes@sait.ca</a><ul><li>CPNT-201, CPNT-260, CPNT-265</li></ul></li></ul>
<h3 id="assessments"><a aria-hidden="true" tabindex="-1" href="#assessments"><span class="icon icon-link"></span></a>Assessments</h3>
<p>Assessments are broken up into smaller graded activities and assignments. Everything is open book and there are no in class tests.</p>
<p><strong>All assignments, graded activities, achievements are to be submitted in D2L</strong></p>
<h4 id="graded-activities-40"><a aria-hidden="true" tabindex="-1" href="#graded-activities-40"><span class="icon icon-link"></span></a>Graded Activities 40%</h4>
<ul><li>Visual Hierarchy Review <strong>10%</strong> Due: Friday September 8th</li>
<li>SVG Logo Design <strong>10%</strong></li>
<li>Card Component Design <strong>10%</strong></li>
<li>Conduct a User Test <strong>10%</strong></li></ul>
<h4 id="assignments-60"><a aria-hidden="true" tabindex="-1" href="#assignments-60"><span class="icon icon-link"></span></a>Assignments 60%</h4>
<ul><li>Assignment 1: Design Moodboard <strong>15%</strong> Due: Monday September 11</li>
<li>Assignment 2: Website Wireframe <strong>20%</strong></li>
<li>Assignment 3: Website Mockup <strong>25%</strong></li></ul>
<h3 id="tools--software"><a aria-hidden="true" tabindex="-1" href="#tools--software"><span class="icon icon-link"></span></a>Tools &amp; Software</h3>
<ul><li><a href="https://figma.com" rel="nofollow">Figma</a>: Vector Design Tool</li>
<li><a href="https://www.figma.com/figjam/" rel="nofollow">Figjam</a>: Whiteboarding Tool</li>
<li><a href="https://jakearchibald.github.io/svgomg/" rel="nofollow">SVGOMG</a>: SVG Optimization Tool</li>
<li>Pen and Paper</li>
<li>Sticky Notes</li>
<li>Colored Markers</li></ul>
<h3 id="readings--resources"><a aria-hidden="true" tabindex="-1" href="#readings--resources"><span class="icon icon-link"></span></a>Readings &amp; Resources</h3>
<ul><li><a href="https://sensible.com/dont-make-me-think/" rel="nofollow">Don’t Make Me Think (Book)</a> by Steve Krug</li>
<li><a href="https://www.nngroup.com/" rel="nofollow">Nielsen Norman Group (Website)</a></li>
<li><a href="https://www.smashingmagazine.com/" rel="nofollow">Smashing Magazine (Website)</a></li>
<li><a href="https://help.figma.com" rel="nofollow">Figma Learn (Documentation)</a></li>
<li><hr></li></ul>
<h2 id="what-is-web-design">Overview of Web Design</h2>
<ul><li><a href="https://docs.google.com/presentation/d/1zT0zi6J7FBx70zMU0jepoAz0iwh6dZQwNLEiRBdbVaY/edit?usp=sharing" rel="nofollow">Link to Slide Deck</a><ul><li>Web design is generally broken up into UI and UX design.</li>
<li>It can help a developer to be able to at least speak in design terms for better team communication.</li>
<li>Depending on your team, you may have to do some design work. However in a lot of cases, there is a dedicated design team or designer that you would collaborate with.</li></ul></li></ul>
<h3 id="tool-introduction-figjam"><a aria-hidden="true" tabindex="-1" href="#tool-introduction-figjam"><span class="icon icon-link"></span></a>Tool Introduction: <a href="https://www.figma.com/figjam/" rel="nofollow">Figjam</a></h3>
<ul><li>Figjam is used alongside Figma as a whiteboarding space</li>
<li>Create an account with figma</li>
<li>Use figjam to plan, mindmap, brainstorm, and <strong>collaborate</strong></li>
<li><a href="https://help.figma.com/hc/en-us/articles/1500004362321-Guide-to-FigJam" rel="nofollow">Figjam Guide</a></li></ul>
<h2 id="visual-hierarchy">Visual Hierarchy</h2>
<ul><li><a href="https://docs.google.com/presentation/d/18unmG1QqIiGCRloMizCkD-0c7PY4bcMBMpMvGF0b1K0/edit?usp=sharing" rel="nofollow">Link to Slide Deck</a></li>
<li>Core Elements of Visual Hierarchy:<ul><li>Color and Contrast</li>
<li>Scale</li>
<li>Grouping</li></ul></li></ul>
<h3 id="in-class-activity-visual-hierarchy-treasure-hunt"><a aria-hidden="true" tabindex="-1" href="#in-class-activity-visual-hierarchy-treasure-hunt"><span class="icon icon-link"></span></a>In Class Activity: Visual Hierarchy Treasure Hunt</h3>
<ul><li>Preperation: One team member must duplicate <a href="https://www.figma.com/file/LVOlT64Nj5MDCU5VZgmiFl/Visual-Hierarchy-Scavenger-Hunt-Example?type=whiteboard&node-id=0%3A1&t=4dCfQGp3KfnnjVMP-1" rel="nofollow">this figjam file</a><ul><li>Then invite the other team members to it <strong>with editor status</strong>. <a href="https://help.figma.com/hc/en-us/articles/360039481034-Invite-team-members" rel="nofollow">How to invite instructions</a></li></ul></li></ul>
<ol><li>(20 minutes) In a group, go around campus and take pictures of at least 3 examples of visual hierarchy (posters, signs, maps, menus…).<ul><li><strong>goal</strong>: you want to capture at least 1 example of the 9 principles of visual hierarchy noted in the slides.</li>
<li>An image can be used for more than 1 principle (multiple are usually employed).</li></ul></li>
<li>(20 minutes) Upload your images and add them to the relevant boxes in the figjam file - make small notes using the text tool that explain why each image is an example of the principle. Discuss as a team while you work.</li>
<li>Be prepared to discuss your points in a full class debrief</li></ol>
<h2 id="common-design-principles">Common Design Principles</h2>
<ul><li><a href="https://docs.google.com/presentation/d/17C-oY8ZOibOFufUVVl7uoryfmwLprEozVMZjifNey0M/edit?usp=sharing" rel="nofollow">Link to Slide Deck</a></li>
<li>Important Concept: <strong>Cognitive Load</strong><ul><li>The amount of mental effort needed to use/figure out how to use a site/app</li></ul></li>
<li>Design Principles:<ul><li>Repetition</li>
<li>Space</li>
<li>Grid systems and alignment</li>
<li>Typography</li></ul></li></ul>
<h3 id="activity-find-web-examples-of-design-principles-in-the-web"><a aria-hidden="true" tabindex="-1" href="#activity-find-web-examples-of-design-principles-in-the-web"><span class="icon icon-link"></span></a>Activity: Find Web Examples of Design Principles in the Web</h3>
<ul><li>Note: If you created the figjam file in the first activity, then let someone else do it this time.</li>
<li>Create a figjam file with 4 sections (you can choose between any of the design principles we discussed today)</li>
<li>Invite all team members to the space with editor status</li>
<li>Pick a website or app and analyze it for the design principles that we’ve learned about</li>
<li>Screenshot each example and add the images to the figjam file in the appropriate section</li>
<li>Write a brief description on why/why not this was used effectively.</li></ul>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Graded Activity: Apply Visual Hierarchy to a Document</h2>
<ul><li>Overview: Format a provided document (it is an unformatted copy of the <a href="https://en.wikipedia.org/wiki/Visual_hierarchy" rel="nofollow">wikipedia article on visual hierarchy</a>).</li>
<li>Due Date: Friday September 8th, 2023 @ 11:59PM</li>
<li>Submit an exported doc file to the appropriate drop box in Brightspace (D2L)</li></ul>
<h3 id="instructions"><a aria-hidden="true" tabindex="-1" href="#instructions"><span class="icon icon-link"></span></a>Instructions</h3>
<ol><li>Copy <a href="https://docs.google.com/document/d/1BZccKb7_ia6K22nSlclfTY62eP1L2Fo2q6541lSoyIw/edit?usp=sharing" rel="nofollow">this google doc of the abovenoted wikipedia article</a> (you are welcome to use microsoft word instead of google docs)</li>
<li>Rename the article so that it includes your name in the filename. ie: Lastname Firstname - Visual Hierarchy Format Activity</li>
<li>Format the article by applying headings. Make sure to nest h2 in h1 and so on. Use the outline feature of the word processor to view the results of your formatting</li>
<li>Apply 5 different principles of visual hierarchy to your document. Get creative but focus on enhancing the visual hierarchy of the document</li>
<li>In a bulleted list under provided heading, write a 1-2 sentence description of what principle you used and why you chose it.</li></ol>
<h3 id="rubric"><a aria-hidden="true" tabindex="-1" href="#rubric"><span class="icon icon-link"></span></a>Rubric</h3>
<ul><li>5 points for properly applying and nesting headings</li>
<li>5 points for applying 5 different principles of visual hierarchy<ul><li>0.5 point per principle</li>
<li>0.5 point for bulleted description of how you used it (Note the heading at the bottom of the document)</li></ul></li></ul>`;
    }
  })}`;
});
export {
  _01_day_1 as default,
  metadata
};
