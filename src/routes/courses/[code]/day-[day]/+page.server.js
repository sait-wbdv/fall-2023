import { error } from '@sveltejs/kit'
import { lessons } from '$lib/helpers/importLessons.js';



export const load = async ({ params }) => {
	try {	
		// Course code
		const code = params.code;

		// Add leading zero to day if less than 10
		let day;
		if ( params.day < 10) {
			day = `0${params.day}`;
		} else {
			day = `${params.day}`;
		}

		const lesson = lessons.find((item) => item.day === params.day && item.code === code)
		const lessonContent = await import(`../../../../lib/content/courses/${code}/${day}-day-${params.day}.md`);
		return {
			lessonContent: lessonContent.default.render().html,
		}
	} catch(err) {
		throw error(404, err)
	}
}
