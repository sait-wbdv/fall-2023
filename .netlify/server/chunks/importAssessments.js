const cpnt201DueDates = [
  {
    slug: "assignment-1",
    due: "Wednesday September 13 @ 11:59PM",
    status: "published"
  },
  {
    slug: "assignment-2",
    due: "Friday September 22 @ 11:59pm",
    status: "published"
  },
  {
    slug: "assignment-3",
    due: "Friday October 20 @ 11:59pm",
    status: "published"
  },
  {
    slug: "assignment-4",
    due: "Monday, November 6 @ 11:59pm",
    status: "published"
  },
  {
    slug: "achievements",
    due: "TBA",
    status: "draft"
  }
];
const dsgn270DueDates = [
  {
    slug: "assignment-1",
    due: "Monday September 11 @ 11:59PM",
    status: "published"
  },
  {
    slug: "assignment-2",
    due: "Wednesday October 18 @ 11:59PM",
    status: "published"
  },
  {
    slug: "assignment-3",
    due: "Sunday November 5 @ 11:59PM",
    status: "published"
  },
  {
    slug: "graded-activities",
    due: "Due @ 11:59PM on specific days",
    status: "published"
  }
];
const cpnt260DueDates = [
  {
    slug: "achievements",
    due: "Due daily at 3pm",
    status: "published"
  },
  {
    slug: "assignment-1",
    due: "Friday, September 15 @ 11:59pm",
    status: "published"
  },
  {
    slug: "assignment-2",
    due: "Wednesday, September 20 @ 11:59pm",
    status: "published"
  },
  {
    slug: "assignment-3",
    due: "Friday, September 29 @ 11:59pm",
    status: "published"
  },
  {
    slug: "assignment-4",
    due: "Tuesday, October 3 @ 11:59pm",
    status: "published"
  },
  {
    slug: "final-project",
    due: "Tuesday October 10 @ 11:59pm",
    status: "published"
  }
];
const cpnt262DueDates = [
  {
    slug: "activity-1",
    due: "Thursday October 5 @ 11:59PM",
    status: "published"
  },
  {
    slug: "activity-2",
    due: "Sunday October 8 @ 11:59PM",
    status: "published"
  },
  {
    slug: "activity-3",
    due: "Friday October 15 @ 11:59PM",
    status: "published"
  },
  {
    slug: "activity-4",
    due: "Tuesday October 24 @ 11:59PM",
    status: "published"
  },
  {
    slug: "activity-5",
    due: "Tuesday November 7 @ 11:59PM",
    status: "published"
  },
  {
    slug: "activity-6",
    due: "Monday November 13 @ 11:59PM",
    status: "published"
  },
  {
    slug: "assignment-1",
    due: "Tuesday October 31 @ 11:59PM",
    status: "published"
  },
  {
    slug: "assignment-2",
    due: "Friday November 17 @ 11:59PM",
    status: "published"
  },
  {
    slug: "assignment-3",
    due: "Friday November 24 @ 11:59PM",
    status: "published"
  }
];
const cpnt200DueDates = [
  {
    slug: "activity-1",
    due: "Friday November 24 @ 11:59PM",
    status: "published"
  },
  {
    slug: "activity-2",
    due: "Monday November 27 @ 11:59PM",
    status: "published"
  },
  {
    slug: "activity-3",
    due: " Friday December 1 @ 11:59PM",
    status: "published"
  },
  {
    slug: "activity-4",
    due: "November 27th in class",
    status: "published"
  },
  {
    slug: "final-project",
    due: "Monday December 4 @ 11:59PM",
    status: "published"
  }
];
const dueDates = [
  {
    code: "cpnt-201",
    dueDates: cpnt201DueDates
  },
  {
    code: "dsgn-270",
    dueDates: dsgn270DueDates
  },
  {
    code: "cpnt-260",
    dueDates: cpnt260DueDates
  },
  {
    code: "cpnt-262",
    dueDates: cpnt262DueDates
  },
  {
    code: "cpnt-200",
    dueDates: cpnt200DueDates
  }
  // {
  //   code: 'cpnt-265',
  //   dueDates: cpnt265DueDates
  // }
];
const metaContent = Object.entries(/* @__PURE__ */ Object.assign({ "/src/lib/content/assessments/cpnt-200/activity-1.md": () => import("./activity-1.js"), "/src/lib/content/assessments/cpnt-200/activity-2.md": () => import("./activity-2.js"), "/src/lib/content/assessments/cpnt-200/activity-3.md": () => import("./activity-3.js"), "/src/lib/content/assessments/cpnt-200/activity-4.md": () => import("./activity-4.js"), "/src/lib/content/assessments/cpnt-200/final-project.md": () => import("./final-project.js"), "/src/lib/content/assessments/cpnt-201/assignment-1.md": () => import("./assignment-1.js"), "/src/lib/content/assessments/cpnt-201/assignment-2.md": () => import("./assignment-2.js"), "/src/lib/content/assessments/cpnt-201/assignment-3.md": () => import("./assignment-3.js"), "/src/lib/content/assessments/cpnt-201/assignment-4.md": () => import("./assignment-4.js"), "/src/lib/content/assessments/cpnt-260/assignment-1.md": () => import("./assignment-12.js"), "/src/lib/content/assessments/cpnt-260/assignment-2.md": () => import("./assignment-22.js"), "/src/lib/content/assessments/cpnt-260/assignment-3.md": () => import("./assignment-32.js"), "/src/lib/content/assessments/cpnt-260/assignment-4.md": () => import("./assignment-42.js"), "/src/lib/content/assessments/cpnt-260/final-project.md": () => import("./final-project2.js"), "/src/lib/content/assessments/cpnt-262/activity-1.md": () => import("./activity-12.js"), "/src/lib/content/assessments/cpnt-262/activity-2.md": () => import("./activity-22.js"), "/src/lib/content/assessments/cpnt-262/activity-3.md": () => import("./activity-32.js"), "/src/lib/content/assessments/cpnt-262/activity-4.md": () => import("./activity-42.js"), "/src/lib/content/assessments/cpnt-262/activity-5.md": () => import("./activity-5.js"), "/src/lib/content/assessments/cpnt-262/activity-6.md": () => import("./activity-6.js"), "/src/lib/content/assessments/cpnt-262/assignment-1.md": () => import("./assignment-13.js"), "/src/lib/content/assessments/cpnt-262/assignment-2.md": () => import("./assignment-23.js"), "/src/lib/content/assessments/cpnt-262/assignment-3.md": () => import("./assignment-33.js"), "/src/lib/content/assessments/dsgn-270/assignment-1.md": () => import("./assignment-14.js"), "/src/lib/content/assessments/dsgn-270/assignment-2.md": () => import("./assignment-24.js"), "/src/lib/content/assessments/dsgn-270/assignment-3.md": () => import("./assignment-34.js"), "/src/lib/content/assessments/dsgn-270/graded-activities.md": () => import("./graded-activities.js") }));
const assessments = await Promise.all(
  metaContent.map(async ([path, resolver]) => {
    const { metadata } = await resolver();
    const pathArray = path.split("/");
    const slug = pathArray.pop().slice(0, -3);
    const code = pathArray.pop();
    let status, due;
    const courseDueDates = dueDates.find((course) => code === course.code)?.dueDates;
    const lessonDueDate = courseDueDates?.find((lesson) => slug === lesson.slug);
    status = lessonDueDate?.status;
    due = lessonDueDate?.due;
    return { ...metadata, path, slug, code, status, due };
  })
);
export {
  assessments as a
};
