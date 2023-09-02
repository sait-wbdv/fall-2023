import { error } from '@sveltejs/kit'
import { assessments } from '$lib/helpers/importAssessments.js';
import { courses } from '$lib/stores'

export const load = async ({ params }) => {
	try {	
		const courseContent = await import(`../../../../lib/content/courses/${params.code}.md`);

		const courseAssessments = assessments.filter((assessment) => assessment.code === params.code);
		return {
			content: courseContent.default.render().html,
			assessments: courseAssessments,
			code: params.code
		}
	} catch(err) {
		throw error(404, err)
	}
}
