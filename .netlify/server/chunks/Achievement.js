import { c as create_ssr_component, e as escape } from "./index3.js";
const Achievement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { dueDate = "Today at 3pm" } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.dueDate === void 0 && $$bindings.dueDate && dueDate !== void 0)
    $$bindings.dueDate(dueDate);
  return `${status === "published" ? `<section id="achievement" class="achievement"><h2>Today&#39;s Achievement</h2>
  ${dueDate ? `<p>Due: <strong>${escape(dueDate)}</strong> in Brightspace.</p>` : ``}
  ${slots.default ? slots.default({}) : ``}</section>` : ``}`;
});
export {
  Achievement as A
};
