import { writable } from 'svelte/store';
import { scheduleByWeek } from './schedule';
import { lessons } from './helpers/importLessons';

let days = {}; // tracker for course iteration counts
let courseDays = {
	'dsgn-270': [],
	'cpnt-200': [],
	'cpnt-201': [],
	'cpnt-260': [],
	'cpnt-262': [],
	'cpnt-265': [],
	'cpnt-264': [],
	'cpln-240': []
}; // tracker for lesson dates by course

let lessonsObj = {};
lessons.forEach((lesson) => {
  lessonsObj[`${lesson.code}/${parseInt(lesson.day)}`] = lesson
});
let prevLessonId = '';

export const schedule = writable(scheduleByWeek.map((week) => {
  return week.map((day) => {
    let lessonId = '';

    if(day.type === 'lesson') {
			let title = 'TBA';
			let excerpt = null;
			let status = 'draft';
			let path = null;
			let fileName = null;
			let codeLabel = null;

			if (typeof days[day.code] === 'undefined') {
				days[day.code] = 1;
				day.day = days[day.code];
			} else {
				days[day.code]++;
				day.day = days[day.code];
			}

			lessonId = `${day.code}/${parseInt(days[day.code])}`;
			courseDays[day.code].push(day.date);

			if (lessonsObj[lessonId]) {
				// Spice up the base lesson with schedule-specific 	info
				lessonsObj[lessonId].date = day.date;
				lessonsObj[lessonId].prev = prevLessonId.replace('/', '/day-');
				lessonsObj[lessonId].next = ''; // populates on next iteration
				if (prevLessonId && lessonsObj[prevLessonId]) {
					lessonsObj[prevLessonId].next = lessonId.replace('/', '/day-');
				}				
				({title, excerpt, status, path, fileName, codeLabel } = lessonsObj[lessonId]);
			}
			prevLessonId = lessonId;

      return {...day, title, excerpt, status, codeLabel, path, fileName};
    } else {
      return day;
    }
  })
})
);

export const courses = writable([
	{
		code: 'dsgn-270',
		codeLabel: 'DSGN 270',
		title: "Web Design Fundamentals",
		excerpt: "This course will introduce the best practices in design including web usability/accessibility, visual hierarchy and vector-based design using Figma.",
		days: courseDays['dsgn-270'],
		type: 'technical',
		status: 'closed'
	},
	{
		code: 'cpnt-201',
		codeLabel: 'CPNT 201',
		title: "Web Development Tools and Techniques",
		excerpt: "This course will introduce you to the tools you need to program in industry. Topics include source code control using Git, optimizing your text editor (VS Code) and using third-party software with npm.",
		days: courseDays['cpnt-201'],
		type: 'technical',
		status: 'closed'
	},
	{
		code: 'cpnt-260',
		codeLabel: 'CPNT 260',
		title: "Web Page Construction Fundamentals",
		excerpt: "This web design course provides the foundation of web site creation using the most recent version of Hypertext Markup Language (HTML) and Cascading Style Sheets (CSS) to develop consistent web pages that are intuitive and maintainable.",
		days: courseDays['cpnt-260'],
		type: 'technical',
		status: 'closed'
	},
	{
		code: 'cpnt-262',
		codeLabel: 'CPNT 262',
		title: "Web Client and Server Programming",
		excerpt: "This course provides an introduction to web application development using Javascript. The first half of the course will cover programming concepts using vanilla Javascript. The second half of the course will introduce you more complex application concepts using SvelteKit.",
		days: courseDays['cpnt-262'],
		type: 'technical',
		status: 'closed'
	},
	{
		code: 'cpnt-200',
		codeLabel: 'CPNT 200',
		title: "Headless Content Management Systems",
		excerpt: "This course will introduce modern backend content management systems that will feed your web applications. Topics include SQL, data modelling and authentication.",
		days: courseDays['cpnt-200'],
		type: 'technical',
		status: 'closed'
	},
	{
		code: 'cpnt-265',
		codeLabel: 'CPNT 265',
		title: "Final Capstone Project",
		excerpt: "Using the knowledge you've learned in this program, you will create your own web application. Final projects will be presented on the last day of the program.",
		days: courseDays['cpnt-265'],
		type: 'technical',
		status: 'closed'
	},
	{
		code: 'cpnt-264',
		codeLabel: 'CPNT 264',
		title: "Career and Consulting Essentials",
		days: courseDays['cpnt-264'],
		type: 'support'
	},
	{
		code: 'cpln-240',
		codeLabel: 'CPLN 240',
		title: "Guest Speaker Day",
		days: courseDays['cpln-240'],
		type: 'support'
	},
]);

export const lessonsById = writable(lessonsObj);