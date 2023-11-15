import { _ as __variableDynamicImportRuntimeHelper } from "../../../../../../chunks/dynamic-import-helper.js";
import { e as error } from "../../../../../../chunks/index.js";
import { l as lessons } from "../../../../../../chunks/importLessons.js";
const load = async ({ params }) => {
  try {
    const code = params.code;
    let day;
    if (params.day < 10) {
      day = `0${params.day}`;
    } else {
      day = `${params.day}`;
    }
    const lesson = lessons.find((item) => item.day === params.day && item.code === code);
    const lessonContent = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../../../lib/content/courses/cpln-240/01-day-1.md": () => import("../../../../../../chunks/01-day-1.js"), "../../../../../lib/content/courses/cpnt-200/01-day-1.md": () => import("../../../../../../chunks/01-day-12.js"), "../../../../../lib/content/courses/cpnt-200/02-day-2.md": () => import("../../../../../../chunks/02-day-2.js"), "../../../../../lib/content/courses/cpnt-200/03-day-3.md": () => import("../../../../../../chunks/03-day-3.js"), "../../../../../lib/content/courses/cpnt-200/04-day-4.md": () => import("../../../../../../chunks/04-day-4.js"), "../../../../../lib/content/courses/cpnt-200/05-day-5.md": () => import("../../../../../../chunks/05-day-5.js"), "../../../../../lib/content/courses/cpnt-200/06-day-6.md": () => import("../../../../../../chunks/06-day-6.js"), "../../../../../lib/content/courses/cpnt-200/07-day-7.md": () => import("../../../../../../chunks/07-day-7.js"), "../../../../../lib/content/courses/cpnt-201/01-day-1.md": () => import("../../../../../../chunks/01-day-13.js"), "../../../../../lib/content/courses/cpnt-201/02-day-2.md": () => import("../../../../../../chunks/02-day-22.js"), "../../../../../lib/content/courses/cpnt-201/03-day-3.md": () => import("../../../../../../chunks/03-day-32.js"), "../../../../../lib/content/courses/cpnt-201/04-day-4.md": () => import("../../../../../../chunks/04-day-42.js"), "../../../../../lib/content/courses/cpnt-201/05-day-5.md": () => import("../../../../../../chunks/05-day-52.js"), "../../../../../lib/content/courses/cpnt-201/06-day-6.md": () => import("../../../../../../chunks/06-day-62.js"), "../../../../../lib/content/courses/cpnt-201/07-day-7.md": () => import("../../../../../../chunks/07-day-72.js"), "../../../../../lib/content/courses/cpnt-201/08-day-8.md": () => import("../../../../../../chunks/08-day-8.js"), "../../../../../lib/content/courses/cpnt-260/01-day-1.md": () => import("../../../../../../chunks/01-day-14.js"), "../../../../../lib/content/courses/cpnt-260/02-day-2.md": () => import("../../../../../../chunks/02-day-23.js"), "../../../../../lib/content/courses/cpnt-260/03-day-3.md": () => import("../../../../../../chunks/03-day-33.js"), "../../../../../lib/content/courses/cpnt-260/04-day-4.md": () => import("../../../../../../chunks/04-day-43.js"), "../../../../../lib/content/courses/cpnt-260/05-day-5.md": () => import("../../../../../../chunks/05-day-53.js"), "../../../../../lib/content/courses/cpnt-260/06-day-6.md": () => import("../../../../../../chunks/06-day-63.js"), "../../../../../lib/content/courses/cpnt-260/07-day-7.md": () => import("../../../../../../chunks/07-day-73.js"), "../../../../../lib/content/courses/cpnt-260/08-day-8.md": () => import("../../../../../../chunks/08-day-82.js"), "../../../../../lib/content/courses/cpnt-260/09-day-9.md": () => import("../../../../../../chunks/09-day-9.js"), "../../../../../lib/content/courses/cpnt-260/10-day-10.md": () => import("../../../../../../chunks/10-day-10.js"), "../../../../../lib/content/courses/cpnt-262/01-day-1.md": () => import("../../../../../../chunks/01-day-15.js"), "../../../../../lib/content/courses/cpnt-262/02-day-2.md": () => import("../../../../../../chunks/02-day-24.js"), "../../../../../lib/content/courses/cpnt-262/03-day-3.md": () => import("../../../../../../chunks/03-day-34.js"), "../../../../../lib/content/courses/cpnt-262/04-day-4.md": () => import("../../../../../../chunks/04-day-44.js"), "../../../../../lib/content/courses/cpnt-262/05-day-5.md": () => import("../../../../../../chunks/05-day-54.js"), "../../../../../lib/content/courses/cpnt-262/06-day-6.md": () => import("../../../../../../chunks/06-day-64.js"), "../../../../../lib/content/courses/cpnt-262/07-day-7.md": () => import("../../../../../../chunks/07-day-74.js"), "../../../../../lib/content/courses/cpnt-262/08-day-8.md": () => import("../../../../../../chunks/08-day-83.js"), "../../../../../lib/content/courses/cpnt-262/09-day-9.md": () => import("../../../../../../chunks/09-day-92.js"), "../../../../../lib/content/courses/cpnt-262/10-day-10.md": () => import("../../../../../../chunks/10-day-102.js"), "../../../../../lib/content/courses/cpnt-262/11-day-11.md": () => import("../../../../../../chunks/11-day-11.js"), "../../../../../lib/content/courses/cpnt-262/12-day-12.md": () => import("../../../../../../chunks/12-day-12.js"), "../../../../../lib/content/courses/cpnt-262/13-day-13.md": () => import("../../../../../../chunks/13-day-13.js"), "../../../../../lib/content/courses/cpnt-262/14-day-14.md": () => import("../../../../../../chunks/14-day-14.js"), "../../../../../lib/content/courses/cpnt-262/15-day-15.md": () => import("../../../../../../chunks/15-day-15.js"), "../../../../../lib/content/courses/cpnt-262/16-day-16.md": () => import("../../../../../../chunks/16-day-16.js"), "../../../../../lib/content/courses/cpnt-262/17-day-17.md": () => import("../../../../../../chunks/17-day-17.js"), "../../../../../lib/content/courses/cpnt-262/18-day-18.md": () => import("../../../../../../chunks/18-day-18.js"), "../../../../../lib/content/courses/cpnt-262/19-day-19.md": () => import("../../../../../../chunks/19-day-19.js"), "../../../../../lib/content/courses/cpnt-262/20-day-20.md": () => import("../../../../../../chunks/20-day-20.js"), "../../../../../lib/content/courses/cpnt-264/01-day-1.md": () => import("../../../../../../chunks/01-day-16.js"), "../../../../../lib/content/courses/cpnt-264/02-day-2.md": () => import("../../../../../../chunks/02-day-25.js"), "../../../../../lib/content/courses/cpnt-264/03-day-3.md": () => import("../../../../../../chunks/03-day-35.js"), "../../../../../lib/content/courses/cpnt-264/04-day-4.md": () => import("../../../../../../chunks/04-day-45.js"), "../../../../../lib/content/courses/cpnt-265/01-day-1.md": () => import("../../../../../../chunks/01-day-17.js"), "../../../../../lib/content/courses/cpnt-265/02-day-2.md": () => import("../../../../../../chunks/02-day-26.js"), "../../../../../lib/content/courses/cpnt-265/03-day-3.md": () => import("../../../../../../chunks/03-day-36.js"), "../../../../../lib/content/courses/cpnt-265/04-day-4.md": () => import("../../../../../../chunks/04-day-46.js"), "../../../../../lib/content/courses/cpnt-265/05-day-5.md": () => import("../../../../../../chunks/05-day-55.js"), "../../../../../lib/content/courses/cpnt-265/06-day-6.md": () => import("../../../../../../chunks/06-day-65.js"), "../../../../../lib/content/courses/cpnt-265/07-day-7.md": () => import("../../../../../../chunks/07-day-75.js"), "../../../../../lib/content/courses/cpnt-265/08-day-8.md": () => import("../../../../../../chunks/08-day-84.js"), "../../../../../lib/content/courses/cpnt-265/09-day-9.md": () => import("../../../../../../chunks/09-day-93.js"), "../../../../../lib/content/courses/cpnt-265/10-day-10.md": () => import("../../../../../../chunks/10-day-103.js"), "../../../../../lib/content/courses/cpnt-265/11-day-11.md": () => import("../../../../../../chunks/11-day-112.js"), "../../../../../lib/content/courses/dsgn-270/01-day-1.md": () => import("../../../../../../chunks/01-day-18.js"), "../../../../../lib/content/courses/dsgn-270/02-day-2.md": () => import("../../../../../../chunks/02-day-27.js"), "../../../../../lib/content/courses/dsgn-270/03-day-3.md": () => import("../../../../../../chunks/03-day-37.js"), "../../../../../lib/content/courses/dsgn-270/04-day-4.md": () => import("../../../../../../chunks/04-day-47.js"), "../../../../../lib/content/courses/dsgn-270/05-day-5.md": () => import("../../../../../../chunks/05-day-56.js"), "../../../../../lib/content/courses/dsgn-270/06-day-6.md": () => import("../../../../../../chunks/06-day-66.js"), "../../../../../lib/content/courses/dsgn-270/07-day-7.md": () => import("../../../../../../chunks/07-day-76.js"), "../../../../../lib/content/courses/dsgn-270/08-day-8.md": () => import("../../../../../../chunks/08-day-85.js") }), `../../../../../lib/content/courses/${code}/${day}-day-${params.day}.md`);
    return {
      lessonContent: lessonContent.default.render().html
    };
  } catch (err) {
    throw error(404, err);
  }
};
export {
  load
};
