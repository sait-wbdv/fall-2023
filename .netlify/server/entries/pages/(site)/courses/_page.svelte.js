import { c as create_ssr_component, a as subscribe, i as each, e as escape } from "../../../../chunks/index3.js";
import { c as courses } from "../../../../chunks/stores2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $courses, $$unsubscribe_courses;
  $$unsubscribe_courses = subscribe(courses, (value) => $courses = value);
  $$unsubscribe_courses();
  return `${$$result.head += `<!-- HEAD_svelte-113vk3j_START -->${$$result.title = `<title>Courses</title>`, ""}<!-- HEAD_svelte-113vk3j_END -->`, ""}

<h1 class="pl-4">Courses</h1>
<section class="course-list pl-4">${each($courses, (course) => {
    return `${course.type === "technical" ? `<article class="${"course " + escape(course.code, true) + " max-w-fit"}"><a href="${"courses/" + escape(course.code, true)}" class="no-underline p-2 pr-8 hover:bg-primary-800/20 block rounded-md transition duration-150 ease-linear"><h2 class="mb-0">${escape(course.code.toUpperCase().replace("-", " "))}</h2>
          <h3>${escape(course.title)}</h3></a>
      </article>` : ``}`;
  })}</section>`;
});
export {
  Page as default
};
