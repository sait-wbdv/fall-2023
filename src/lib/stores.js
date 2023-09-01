import { writable } from 'svelte/store';
import { scheduleByWeek } from './schedule';
import { lessons } from './helpers/importLessons';
import { courseInfo } from './helpers/importCourseInfo';

let days = {}; // tracker for course iteration counts
let courseDays = {}; // tracker for lesson dates by course

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

			// Have we seen a day of this course already?
			if (!courseDays.hasOwnProperty(day.code)) {
				courseDays[day.code] = [];
			}
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

// Add scheduled lesson days to course info
// Cheating: .map() is mutating courseInfo
courseInfo.map(course => {
	course.days = courseDays[course.code];
	return course;
})

export const courses = writable(courseInfo.sort((a, b) => {
		if (a.days[0] < b.days[0]) {
			return -1;
		} else {
			return 1;
		}
	}));

export const lessonsById = writable(lessonsObj);