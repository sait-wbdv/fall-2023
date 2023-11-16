import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": null,
  "excerpt": null,
  "status": "draft"
};
const { title, excerpt, status } = metadata;
const _10_day_10 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2 id="prep"><a aria-hidden="true" tabindex="-1" href="#prep"><span class="icon icon-link"></span></a>Prep</h2>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2 id="housekeeping"><a aria-hidden="true" tabindex="-1" href="#housekeeping"><span class="icon icon-link"></span></a>Housekeeping</h2>
<hr>
<h2 id="topic-1"><a aria-hidden="true" tabindex="-1" href="#topic-1"><span class="icon icon-link"></span></a>Topic 1</h2>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {})}`;
});
export {
  _10_day_10 as default,
  metadata
};
