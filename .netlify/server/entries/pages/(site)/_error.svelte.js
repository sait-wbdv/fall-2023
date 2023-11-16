import { c as create_ssr_component, a as subscribe, e as escape } from "../../../chunks/index3.js";
import { p as page } from "../../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `


<h2>${escape($page.status)}</h2>
<p class="subhead">${escape($page.error.message)}</p>

<p><strong>Sorry!</strong> Maybe try one of these links?</p>
<ul><li><a href="/">Home</a></li></ul>`;
});
export {
  Error as default
};
