import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
const metadata = {
  "title": "Vector Design",
  "excerpt": "A focus on the basics of vector editing using Figma as a tool. We will examine basic vector manipulation tools and best practices for managing designs.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _03_day_3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep Materials &amp; Background Knowledge</h2>
<ul><li>Video (15 min): <a href="https://youtu.be/ZJSCl6XEdP8?si=P7v200PjULJNDEWC" rel="nofollow">Overview of SVGs</a> by Kevin Powell</li>
<li>Article: <a href="https://www.adobe.com/ca/creativecloud/file-types/image/comparison/raster-vs-vector.html" rel="nofollow">Raster vs Vector</a> by Adobe</li></ul>
<h3 id="things-to-bring-to-class"><a aria-hidden="true" tabindex="-1" href="#things-to-bring-to-class"><span class="icon icon-link"></span></a>Things to Bring to Class</h3>
<ul><li>A mouse (very important)</li>
<li>Something to draw on (tablet, phone, pen &amp; paper) - if you decide to go digital, find a good drawing app (ie: <a href="https://concepts.app/en/" rel="nofollow">Concepts</a>)</li></ul>
<h3 id="if-design-is-new-to-you"><a aria-hidden="true" tabindex="-1" href="#if-design-is-new-to-you"><span class="icon icon-link"></span></a>If Design is New to You</h3>
<ul><li><a href="https://www.youtube.com/watch?v=gnscqweM_NU&list=PLXDU_eVOJTx6zk5MDarIs0asNoZqlRG23" rel="nofollow">Figma Tutorial Series</a></li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2 id="standup">Daily Standup</h2>
<p>A standup is a 15 minute team check-in activity from <a href="https://www.organizeagile.com/what-is-scrum/" rel="nofollow">scrum</a>. It’s a meeting that is short enough for everyone to “stand up”. For the rest of DSGN-270, we will take the first 15* minutes of class to do standups.</p>
<h3 id="teams-standups"><a aria-hidden="true" tabindex="-1" href="#teams-standups"><span class="icon icon-link"></span></a>Teams Standups</h3>
<ul><li>In each block of dsgn-270, you’ll have a group of 3-4 with whom you’ll discuss what your working on and how it’s going</li>
<li>The objective of this is to get comfortable talking about your progress, issues you’re running into, and your workflow</li></ul>
<h3 id="each-person-takes-a-turn-to-answer-the-following-questions"><a aria-hidden="true" tabindex="-1" href="#each-person-takes-a-turn-to-answer-the-following-questions"><span class="icon icon-link"></span></a>Each person takes a turn to answer the following questions:</h3>
<ol><li>What did you do yesterday?</li>
<li>What will you do today?</li>
<li>Anything blocking your progress?</li></ol>
<h4 id="check-out-this-link-for-information-on-successful-standups"><a aria-hidden="true" tabindex="-1" href="#check-out-this-link-for-information-on-successful-standups"><span class="icon icon-link"></span></a>Check out this link for information on successful standups</h4>
<a href="https://geekbot.com/blog/daily-standup-meeting/?k_id=dsa-910872033553&adgroup_id=96910465570&campaign_name_ad=10071775578&gclid=CjwKCAjwgZCoBhBnEiwAz35Rwl5kiqR3Kg2iA73l65JLBH1GWTM_ODIe2HPCWeO_Kq2kIKBRyqueHRoCBC0QAvD_BwE#h.c5udhxafpjb0" class="block"><img src="/images/agile/standup-tips.png" alt="qr code to a blogpost on standups" class="w-48"></a>
<hr>
<h2 id="warmup">Design Warmup</h2>
<p>Regardless of your level of drawing skills, it is a good idea to do some type of warmup. This class assumes little to no art experience, and most of our design work is focused on UI elements so we will take a basics approach to warming up. <strong>5 minutes or so</strong></p>
<h3 id="tools"><a aria-hidden="true" tabindex="-1" href="#tools"><span class="icon icon-link"></span></a>Tools</h3>
<ul><li>Something to draw on:<ul><li>tablet + stylus</li>
<li>phone + finger/stylus</li>
<li>paper + pen/pencil</li></ul></li>
<li><strong>Do not use desktop design software</strong></li></ul>
<h3 id="tasks"><a aria-hidden="true" tabindex="-1" href="#tasks"><span class="icon icon-link"></span></a>Tasks</h3>
<ul><li>Draw horizontal and vertical lines (go in multiple directions)</li>
<li>Draw squares, rectangles, and other polyons</li>
<li>Draw circles and ovals</li></ul>
<h2 id="logos-manual">Logo Design By Hand</h2>
<p>While this isn’t how we will be creating vector logos, we can ground how we understand vector design software like Figma by sketching. The shapes that you draw are vector paths (if using an app like canvas), or at least are like them.</p>
<h3 id="pick-a-logo-or-icon-to-create"><a aria-hidden="true" tabindex="-1" href="#pick-a-logo-or-icon-to-create"><span class="icon icon-link"></span></a>Pick a logo or icon to create</h3>
<p><em>you will do this first by hand, and then in figma</em></p>
<ol><li>Copy an image of the logo into a design app (or have it open on your phone)</li>
<li>Sketch a grid through the logo that marks out the primary sections</li>
<li>Reduce the logo to basic shapes (lines, polygons, circles…)<ul><li>trace over the image, or draw a shape version of the logo</li></ul></li>
<li>Draw the logo<ul><li>either tracing or free hand. Do whatever is more comfortable at your skill level</li></ul></li></ol>
<h4 id="debrief"><a aria-hidden="true" tabindex="-1" href="#debrief"><span class="icon icon-link"></span></a>Debrief</h4>
<ul><li>Was the logo more complex or simple than you anticipated?</li>
<li>Did the grid or basic shape render help map out how to draw the logo?</li></ul>
<h2>Break</h2>
<hr>
<h2 id="rasters-vectors">Rasters and Vectors</h2>
<a href="https://docs.google.com/presentation/d/1_quygONzrxFQ5FSJq87FAydkUn35_eysPe9zhhSvS0w/edit?usp=sharing"><img src="/images/design/rasters-vectors-slideshow.png" alt="raster vs vectors slideshow"></a>
<h3 id="key-takeaways"><a aria-hidden="true" tabindex="-1" href="#key-takeaways"><span class="icon icon-link"></span></a>Key Takeaways</h3>
<ul><li>Rasters are made of of pixels with color values. Their clarity at a given size is determined by their resolution</li>
<li>Vectors are mathematically calculated paths that can scale to any size</li>
<li>Rasters are great for images or complex heavily detailed illustrations</li>
<li>Vectors are great for most illustrations, animated content, logos, icons</li></ul>
<h2 id="vector-design">Vector Design Basics</h2>
<a href="https://help.figma.com/hc/en-us/articles/360040450133-Basic-shape-tools-in-Figma-design"><img src="/images/design/figma-docs.png" alt="Screenshot of figma basic tools"></a>
<h3 id="how-designs-are-organized"><a aria-hidden="true" tabindex="-1" href="#how-designs-are-organized"><span class="icon icon-link"></span></a>How Designs are Organized</h3>
<ul><li><p><a href="https://help.figma.com/hc/en-us/articles/360041539473-Frames-in-Figma" rel="nofollow">Frames</a> <strong>important now</strong></p></li>
<li><p><a href="https://help.figma.com/hc/en-us/articles/360039831974-View-layers-and-pages-in-the-left-sidebar" rel="nofollow">Layers</a> <strong>important now</strong></p></li>
<li><p><a href="https://www.figma.com/blog/introducing-figma-pages/" rel="nofollow">Pages</a> <strong>important later</strong></p></li>
<li><p><a href="https://help.figma.com/hc/en-us/articles/360040450513-Create-layout-grids-with-grids-columns-and-rows" rel="nofollow">Grids</a> <strong>important later but useful now</strong></p></li></ul>
<h2>Create the Android Logo</h2>
<h3 id="steps"><a aria-hidden="true" tabindex="-1" href="#steps"><span class="icon icon-link"></span></a>Steps</h3>
<ol><li>Create the body as a rectangle with rounded corners</li>
<li>Create an arm and duplicate it 3 more times</li>
<li>Move one arm to the other side of the body</li>
<li>Move the legs to the bottom of the body</li>
<li>Use the <a href="https://help.figma.com/hc/en-us/articles/360039956914-Adjust-alignment-rotation-and-position" rel="nofollow">alignment tools</a> to</li>
<li>Create a circle that’s the same width as the body</li>
<li>Make an extra square that’s wider than the circle</li>
<li>Center the square over the center of the circle and use it to cut the circle in half with <a href="https://help.figma.com/hc/en-us/articles/360039957534-Boolean-operations" rel="nofollow">subtract</a></li>
<li>Create 2 more circles for the eyes, align them</li>
<li>Create a line and rotate it 45 degrees</li>
<li>Align the eyes and antenna</li>
<li>Name all of the paths and group them logically</li></ol>
<h2>Lab Time</h2>
<ul><li><a href="https://bezier.method.ac/" rel="nofollow">Play the Bezier Curve Game</a> to learn the pen tool</li>
<li>Recreate the logo that you drew by hand at the beginning of class in figma.</li></ul>`;
    }
  })}`;
});
export {
  _03_day_3 as default,
  metadata
};
