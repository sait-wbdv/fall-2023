import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "SQL Test & Final Project",
  "excerpt": null,
  "status": "announced"
};
const { title, excerpt, status } = metadata;
const _07_day_7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2 id="prep"><a aria-hidden="true" tabindex="-1" href="#prep"><span class="icon icon-link"></span></a>Prep</h2>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>SQL Syntax Review</h2>
<hr>
<h2>SQL Syntax Test</h2>
<hr>
<h2>Work on Final Project</h2>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {})}`;
});
export {
  _07_day_7 as default,
  metadata
};
