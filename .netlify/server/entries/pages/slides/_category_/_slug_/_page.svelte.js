import { c as create_ssr_component, e as escape, v as validate_component, m as missing_component } from "../../../../../chunks/index3.js";
import "reveal.js";
import "reveal.js/plugin/highlight/highlight.js";
import "reveal.js/plugin/markdown/markdown.js";
import "reveal.js/plugin/notes/notes.js";
/* empty css                         */const reveal = "";
const sky = "";
const monokai = "";
const copycode = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".reveal.svelte-t4hivu .slides.svelte-t4hivu{font-size:28px;text-align:left}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1czvvnk_START --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"><!-- HEAD_svelte-1czvvnk_END -->`, ""}
<div class="reveal svelte-t4hivu"><div class="slides svelte-t4hivu">${data.type == "md" ? `<section data-markdown><div data-template>${escape(data.module)}</div></section>` : `${validate_component(data.module || missing_component, "svelte:component").$$render($$result, {}, {}, {})}`}</div>
</div>`;
});
export {
  Page as default
};
