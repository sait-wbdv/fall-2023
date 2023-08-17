import {dueDates} from '$lib/due-dates'
const metaContent = Object.entries(import.meta.glob('$lib/content/assessments/**/*.md'));

export const assessments = await Promise.all(
  metaContent.map(async ([path, resolver]) => {
    const { metadata } = await resolver()

    const pathArray = path.split('/')
    const slug = pathArray.pop().slice(0,-3);
    const code = pathArray.pop();
        
    let status, due;
    
    const courseDueDates = dueDates.find((course) => code === course.code)?.dueDates;
    const lessonDueDate = courseDueDates?.find((lesson) => slug === lesson.slug);
    status = lessonDueDate?.status;
    due = lessonDueDate?.due;

    return { ...metadata, path, slug, code, status, due }
  })
)