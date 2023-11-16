import { e as error } from "../../../../../../chunks/index.js";
import { a as assessments } from "../../../../../../chunks/importAssessments.js";
const load = async ({ params }) => {
  try {
    const courseAssessments = assessments.filter((assessment) => assessment.code === params.code);
    return {
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
