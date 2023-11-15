import { _ as __variableDynamicImportRuntimeHelper } from "../../../../../chunks/dynamic-import-helper.js";
import { e as error } from "../../../../../chunks/index.js";
import { a as assessments } from "../../../../../chunks/importAssessments.js";
import "../../../../../chunks/stores2.js";
const load = async ({ params }) => {
  try {
    const courseContent = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../../lib/content/courses/cpln-240.md": () => import("../../../../../chunks/cpln-240.js"), "../../../../lib/content/courses/cpnt-200.md": () => import("../../../../../chunks/cpnt-200.js"), "../../../../lib/content/courses/cpnt-201.md": () => import("../../../../../chunks/cpnt-201.js"), "../../../../lib/content/courses/cpnt-260.md": () => import("../../../../../chunks/cpnt-260.js"), "../../../../lib/content/courses/cpnt-262.md": () => import("../../../../../chunks/cpnt-262.js"), "../../../../lib/content/courses/cpnt-264.md": () => import("../../../../../chunks/cpnt-264.js"), "../../../../lib/content/courses/cpnt-265.md": () => import("../../../../../chunks/cpnt-265.js"), "../../../../lib/content/courses/dsgn-270.md": () => import("../../../../../chunks/dsgn-270.js") }), `../../../../lib/content/courses/${params.code}.md`);
    const courseAssessments = assessments.filter((assessment) => assessment.code === params.code);
    return {
      content: courseContent.default.render().html,
      assessments: courseAssessments,
      code: params.code
    };
  } catch (err) {
    throw error(404, err);
  }
};
export {
  load
};
