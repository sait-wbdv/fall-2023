import { c as create_ssr_component, a as subscribe, v as validate_component, i as each, e as escape, b as add_attribute } from "../../../../../chunks/index3.js";
import { p as page } from "../../../../../chunks/stores.js";
import { c as courses } from "../../../../../chunks/stores2.js";
import dayjs from "dayjs";
import { P as PageHeader } from "../../../../../chunks/PageHeader.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $courses, $$unsubscribe_courses;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_courses = subscribe(courses, (value) => $courses = value);
  let { data } = $$props;
  const course = $courses.find((item) => item.code === $page.params.code);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  $$unsubscribe_courses();
  return `${validate_component(PageHeader, "PageHeader").$$render(
    $$result,
    {
      title: `${course.codeLabel} - ${course.title}`,
      description: course.excerpt
    },
    {},
    {}
  )}
<section class="container pl-4"><h2 class="h2">Lesson Schedule</h2>
  <ul>${each(course.days, (date, index) => {
    return `<li><a href="${escape(course.code, true) + "/day-" + escape(index + 1, true)}" class="h4 dark:hover:text-primary-500 dark:active:text-primary-300 hover:text-primary-700 active:text-primary-500 transition duration-150 ease-linear mb-4 block">Day ${escape(index + 1)} - ${escape(dayjs(date).format("MMMM D"))}</a>
      </li>`;
  })}</ul></section>
<section class="container pl-4"><h2>Assessments</h2>
  ${data.code === "cpnt-262" ? `` : ``}

  ${data.assessments.length ? `${each(data.assessments, (assessment) => {
    return `${assessment.type === "assignment" || assessment.type === "achievements" ? `${assessment.status === "published" ? `<a class="assessment" href="${escape(course.code, true) + "/assessments/" + escape(assessment.slug, true)}"><article${add_attribute("class", course.code, 0)}><h3>${escape(assessment.title)}</h3>
              <p>Weight: ${escape(assessment.points)}%</p>
              ${assessment.due ? `<p>Due: ${escape(assessment.due)}</p>` : `<p>Due: TBA</p>`}</article>
          </a>` : `<article><h3>${escape(assessment.title)}</h3>
            <p>Weight: ${escape(assessment.points)}%</p>
            ${assessment.due ? `<p>Due: ${escape(assessment.due)}</p>` : `<p>Due: TBA</p>`}
          </article>`}` : ``}`;
  })}` : `<p>To Be Announced</p>`}</section>`;
});
export {
  Page as default
};
