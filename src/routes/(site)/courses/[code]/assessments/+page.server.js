import { error } from '@sveltejs/kit'
import { assessments } from '$lib/helpers/importAssessments.js';

export const load = async ({ params }) => {
	try {	
		const courseAssessments = assessments.filter((assessment) => assessment.code === params.code);
		return {
			assessments: courseAssessments,
			code: params.code
		}
	} catch(err) {
		throw error(404, err)
	}
}
