import { c as create_ssr_component } from "./index3.js";
const Homework = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  return `<section class="homework">${status === "announced" || status === "published" ? `${slots.default ? slots.default({}) : ``}` : ``}</section>`;
});
export {
  Homework as H
};
