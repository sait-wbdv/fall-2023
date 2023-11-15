import { c as create_ssr_component } from "./index3.js";
const LessonPlan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  return `<section class="lesson-plan">${status == "published" ? `${slots.default ? slots.default({}) : ``}` : ``}</section>`;
});
export {
  LessonPlan as L
};
