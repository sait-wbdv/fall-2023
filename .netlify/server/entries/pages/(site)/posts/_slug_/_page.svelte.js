import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index3.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { T as TableOfContents } from "../../../../../chunks/TableOfContents.js";
import dayjs from "dayjs";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const post = data.post;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${post.status === "draft" ? `<h1>Post not Found</h1>
  <p>This post has not been published.</p>` : `<header class="my-4 lg:my-6 mx-4"><time>${escape(dayjs(post.date).format("dddd, MMM D"))}</time>
    <h1 class="h1 mb-2">${escape(post.title)}</h1>
    <p>${escape(post.excerpt)}</p></header>
  <div class="flex justify-between"><article class="mx-4 container"><!-- HTML_TAG_START -->${data.content}<!-- HTML_TAG_END --></article>
    ${validate_component(TableOfContents, "TableOfContents").$$render(
    $$result,
    {
      allowedHeadings: "h2",
      rounded: "rounded-md",
      active: "bg-primary-800/20",
      class: "hidden lg:block sticky top-10"
    },
    {},
    {}
  )}</div>`}`;
});
export {
  Page as default
};
