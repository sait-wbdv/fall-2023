import { c as create_ssr_component } from "../../../../chunks/index3.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<aside></aside>
<section class="house-rules">${slots.default ? slots.default({}) : ``}</section>`;
});
export {
  Layout as default
};
