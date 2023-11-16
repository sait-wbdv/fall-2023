import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Hackathon Day II",
  "excerpt": null,
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _20_day_20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<ul><li>Meet with your partner for the final assignment of 262 and get a foundation planned for your project.<ul><li>set up a project board in your repo (high level)</li>
<li>discuss each other’s roles and areas where you anticipate difficult</li></ul></li>
<li>Create a quick moodboard for your project</li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>1 Hour: Planning Phase</h2>
<ul><li>Outline your scope/goals for this hackathon (less is more)</li>
<li>Sketch wireframes of the pages you intend to build today</li>
<li>Make a note about what your followup steps will be after the hackathon</li>
<li>Initialize the repo and set up permissions (if you haven’t yet), set up a dev branch if you plan to use branching</li>
<li>Divide up your work</li></ul>
<h2>3 Hours of Hacking!</h2>
<ul><li>Create and build</li>
<li>You are free to work anywhere on campus</li></ul>
<h2>Lunch 45 Minutes @ 12</h2>
<ul><li>Meet at the 4 Nine’s in the John Ware Building</li></ul>
<h2>2 Hours of Hacking!</h2>
<ul><li>Take 5 minutes to check in with each other (if you haven’t yet)</li>
<li>Finish up features that you’re working on</li>
<li>Make sure everything works, comment out and/or put into a debug branch if you can’t get specifics working</li>
<li>Optimize code and prepare it to merge to main</li></ul>
<h2>End of Day</h2>
<ul><li>Merge code to main</li>
<li>Debrief and note what each other’s next steps will be</li></ul>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {})}`;
});
export {
  _20_day_20 as default,
  metadata
};
