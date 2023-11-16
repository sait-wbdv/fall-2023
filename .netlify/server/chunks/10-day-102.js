import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
const metadata = {
  "title": "In Class Hackathon",
  "excerpt": "In a structured format, we will summarize our vanilla javascript knowledge with a hackathon. The format of the hackathon will emulate that of real hackathons. There will be a show and tell at the end of class.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _10_day_10 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep</h2>
- Think of something that you&#39;d like to build
  - this can be a precursor to your final project ideas
  - it can also be time to work on an assignment
  - or to work through and practice challenging concepts
- Note topics that you&#39;ve been struggling with or are excited about
`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Hackathon Setup</h2>
<ol><li>Introduction</li>
<li>Idea Pitches<ul><li>Everyone will get a chance to say what they’re working on</li>
<li>If you want to collaborate, or aren’t sure what you want to do, this is an opportunity to branch off</li>
<li><strong>Prompt</strong>: What do you want to build? would you like collaborators?</li></ul></li>
<li>Get set up to work<ul><li>acquire materials</li>
<li>find a space to do your thing</li>
<li>stock up on beverages</li></ul></li></ol>
<hr>
<h2>Lunch Break 11-12</h2>
<hr>
<h2>Show and Tell 2:30-3</h2>
<ul><li>Process:<ul><li>Plug into the projector</li>
<li>Take 5 minutes max to talk through what you worked on<ul><li>what was your goal?</li>
<li>how did it go?</li>
<li>describe notable victorys, aha moments, or bugs</li></ul></li></ul></li></ul>`;
    }
  })}`;
});
export {
  _10_day_10 as default,
  metadata
};
