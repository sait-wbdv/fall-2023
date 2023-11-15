import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute, v as validate_component } from "../../../../../../chunks/index3.js";
import "../../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { T as TableOfContents } from "../../../../../../chunks/TableOfContents.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { l as lessonsById } from "../../../../../../chunks/stores2.js";
import dayjs from "dayjs";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $lessonsById, $$unsubscribe_lessonsById;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_lessonsById = subscribe(lessonsById, (value) => $lessonsById = value);
  let { data } = $$props;
  const lesson = $lessonsById[`${$page.params.code}/${$page.params.day}`];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  $$unsubscribe_lessonsById();
  return `<nav class="page-nav my-6 container lg:mx-auto"><ul class="flex justify-around lg:justify-between list-none">${lesson.prev ? `<li><a href="${"/courses/" + escape(lesson.prev, true)}" class="btn variant-filled rounded-md no-underline" target="_self">Prev</a></li>` : `<li><span class="btn varient-outline rounded-md">Prev</span></li>`}
    <li class="text-center"><time${add_attribute("datetime", lesson.date, 0)} class="text-3xl"><strong>${escape(dayjs(lesson.date).format("dddd, MMM D"))}</strong></time>
      <p>${escape(lesson.codeLabel)} - Day ${escape(lesson.day)}</p></li>
    ${lesson.next ? `<li><a href="${"/courses/" + escape(lesson.next, true)}" class="btn variant-filled rounded-md no-underline" target="_self">Next</a></li>` : `<li><span class="btn varient-outline rounded-md">Next</span></li>`}</ul></nav>

${lesson.status === "draft" ? `<h1>To be Announced</h1>
  <p>This lesson has not been released.</p>` : `<header class="my-4 lg:my-6 mx-4"><h1 class="h1 mb-2">${escape(lesson.title)}</h1>
    <p class="max-w-prose">${escape(lesson.excerpt)}</p></header>
  <div class="flex justify-between"><article class="mx-4 container"><!-- HTML_TAG_START -->${data.lessonContent}<!-- HTML_TAG_END --></article>
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
