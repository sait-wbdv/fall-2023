import { c as create_ssr_component, e as escape } from "./index3.js";
const PageHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Default H1 Title" } = $$props;
  let { description = "A brief descriptive paragraph." } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<header class="mt-4 xl:mt-12 mb-4 xl:mb-8 mx-4 xl:mx-0 pl-4"><h1 class="mb-2 xl:mb-3 text-transparent bg-gradient-to-r from-primary-500 to-pink-500 dark:from-primary-400/80 dark:to-tertiary-600 bg-clip-text">${escape(title)}</h1>
  <p class="text-lg xl:text-xl max-w-prose">${escape(description)}</p>
  ${slots.default ? slots.default({}) : ``}</header>`;
});
export {
  PageHeader as P
};
