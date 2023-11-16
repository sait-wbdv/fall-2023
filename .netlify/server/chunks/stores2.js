import { w as writable } from "./index2.js";
import { l as lessons } from "./importLessons.js";
const scheduleByWeek = [
  // Week 1
  [
    {
      date: "2023-09-04",
      type: "holiday",
      label: "Labour Day"
    },
    {
      date: "2023-09-05",
      type: "lesson",
      code: "dsgn-270"
    },
    {
      date: "2023-09-06",
      type: "lesson",
      code: "dsgn-270"
    },
    {
      date: "2023-09-07",
      type: "lesson",
      code: "cpnt-201"
    },
    {
      date: "2023-09-08",
      type: "lesson",
      code: "cpnt-201"
    }
  ],
  // Week 2
  [
    {
      date: "2023-09-11",
      type: "lesson",
      code: "cpnt-260"
    },
    {
      date: "2023-09-12",
      type: "lesson",
      code: "cpnt-260"
    },
    {
      date: "2023-09-13",
      type: "lesson",
      code: "cpnt-260"
    },
    {
      date: "2023-09-14",
      type: "lesson",
      code: "cpnt-264"
    },
    {
      date: "2023-09-15",
      type: "lesson",
      code: "cpnt-260"
    }
  ],
  // Week 3
  [
    {
      date: "2023-09-18",
      type: "lesson",
      code: "cpnt-260"
    },
    {
      date: "2023-09-19",
      type: "lesson",
      code: "dsgn-270"
    },
    {
      date: "2023-09-20",
      type: "lesson",
      code: "dsgn-270"
    },
    {
      date: "2023-09-21",
      type: "lesson",
      code: "cpnt-201"
    },
    {
      date: "2023-09-22",
      type: "lesson",
      code: "cpnt-201"
    }
  ],
  // Week 4
  [
    {
      date: "2023-09-25",
      type: "lesson",
      code: "cpnt-260"
    },
    {
      date: "2023-09-26",
      type: "lesson",
      code: "cpnt-260"
    },
    {
      date: "2023-09-27",
      type: "lesson",
      code: "cpnt-260"
    },
    {
      date: "2023-09-28",
      type: "lesson",
      code: "cpnt-260"
    },
    {
      date: "2023-09-29",
      type: "holiday",
      label: "Truth and Reconciliation Day"
    }
  ],
  // Week 5
  [
    {
      date: "2023-10-02",
      type: "lesson",
      code: "cpnt-260"
    },
    {
      date: "2023-10-03",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2023-10-04",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2023-10-05",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2023-10-06",
      type: "lesson",
      code: "cpnt-262"
    }
  ],
  // Week 6
  [
    {
      date: "2023-10-09",
      type: "holiday",
      label: "Thanksgiving"
    },
    {
      date: "2023-10-10",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2023-10-11",
      type: "lesson",
      code: "dsgn-270"
    },
    {
      date: "2023-10-12",
      type: "lesson",
      code: "dsgn-270"
    },
    {
      date: "2023-10-13",
      type: "lesson",
      code: "cpnt-201"
    }
  ],
  // Week 7
  [
    {
      date: "2023-10-16",
      type: "lesson",
      code: "cpnt-201"
    },
    {
      date: "2023-10-17",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2023-10-18",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2023-10-19",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2023-10-20",
      type: "lesson",
      code: "cpnt-264"
    }
  ],
  // Week 8
  [
    {
      date: "2023-10-23",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2023-10-24",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2023-10-25",
      type: "lesson",
      code: "dsgn-270"
    },
    {
      date: "2023-10-26",
      type: "lesson",
      code: "dsgn-270"
    },
    {
      date: "2023-10-27",
      type: "lesson",
      code: "cpnt-201"
    }
  ],
  // Week 9
  [
    {
      date: "2023-10-30",
      type: "lesson",
      code: "cpnt-201"
    },
    {
      date: "2023-10-31",
      type: "lesson",
      code: "cpnt-264"
    },
    {
      date: "2023-11-01",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2023-11-02",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2023-11-03",
      type: "lesson",
      code: "cpnt-262"
    }
  ],
  // Week 10
  [
    {
      date: "2023-11-06",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2023-11-07",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2023-11-08",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2023-11-09",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2023-11-10",
      type: "lesson",
      code: "cpnt-262"
    }
  ],
  // Week 11
  [
    {
      date: "2023-11-13",
      type: "holiday",
      label: "Remembrance Day"
    },
    {
      date: "2023-11-14",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2023-11-15",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2023-11-16",
      type: "lesson",
      code: "cpnt-200"
    },
    {
      date: "2023-11-17",
      type: "lesson",
      code: "cpnt-200"
    }
  ],
  // Week 12
  [
    {
      date: "2023-11-20",
      type: "lesson",
      code: "cpnt-200"
    },
    {
      date: "2023-11-21",
      type: "lesson",
      code: "cpnt-200"
    },
    {
      date: "2023-11-22",
      type: "lesson",
      code: "cpln-240"
    },
    {
      date: "2023-11-23",
      type: "lesson",
      code: "cpnt-264"
    },
    {
      date: "2023-11-24",
      type: "lesson",
      code: "cpnt-200"
    }
  ],
  // Week 13
  [
    {
      date: "2023-11-27",
      type: "lesson",
      code: "cpnt-200"
    },
    {
      date: "2023-11-28",
      type: "lesson",
      code: "cpnt-200"
    },
    {
      date: "2023-11-29",
      type: "lesson",
      code: "cpnt-265"
    },
    {
      date: "2023-11-30",
      type: "lesson",
      code: "cpnt-265"
    },
    {
      date: "2023-12-01",
      type: "lesson",
      code: "cpnt-265"
    }
  ],
  // Week 14
  [
    {
      date: "2023-12-04",
      type: "lesson",
      code: "cpnt-265"
    },
    {
      date: "2023-12-05",
      type: "lesson",
      code: "cpnt-265"
    },
    {
      date: "2023-12-06",
      type: "lesson",
      code: "cpnt-265"
    },
    {
      date: "2023-12-07",
      type: "lesson",
      code: "cpnt-265"
    },
    {
      date: "2023-12-08",
      type: "lesson",
      code: "cpnt-265"
    }
  ],
  // Week 15
  [
    {
      date: "2023-12-11",
      type: "lesson",
      code: "cpnt-265"
    },
    {
      date: "2023-12-12",
      type: "lesson",
      code: "cpnt-265"
    },
    {
      date: "2023-12-13",
      type: "lesson",
      code: "cpnt-265"
    },
    {
      date: "2023-12-14",
      type: "holiday",
      label: "No Classes"
    },
    {
      date: "2023-12-15",
      type: "holiday",
      label: "No Classes"
    }
  ]
];
const imports = Object.entries(/* @__PURE__ */ Object.assign({ "../content/courses/cpln-240.md": () => import("./cpln-240.js"), "../content/courses/cpnt-200.md": () => import("./cpnt-200.js"), "../content/courses/cpnt-201.md": () => import("./cpnt-201.js"), "../content/courses/cpnt-260.md": () => import("./cpnt-260.js"), "../content/courses/cpnt-262.md": () => import("./cpnt-262.js"), "../content/courses/cpnt-264.md": () => import("./cpnt-264.js"), "../content/courses/cpnt-265.md": () => import("./cpnt-265.js"), "../content/courses/dsgn-270.md": () => import("./dsgn-270.js") }));
const courseInfo = await Promise.all(
  imports.map(async ([path, resolver]) => {
    const { metadata } = await resolver();
    return { ...metadata };
  })
);
let days = {};
let courseDays = {};
let lessonsObj = {};
lessons.forEach((lesson) => {
  lessonsObj[`${lesson.code}/${parseInt(lesson.day)}`] = lesson;
});
let prevLessonId = "";
const schedule = writable(
  scheduleByWeek.map((week) => {
    return week.map((day) => {
      let lessonId = "";
      if (day.type === "lesson") {
        let title = "TBA";
        let excerpt = null;
        let status = "draft";
        let path = null;
        let fileName = null;
        let codeLabel = null;
        if (typeof days[day.code] === "undefined") {
          days[day.code] = 1;
          day.day = days[day.code];
        } else {
          days[day.code]++;
          day.day = days[day.code];
        }
        lessonId = `${day.code}/${parseInt(days[day.code])}`;
        if (!courseDays.hasOwnProperty(day.code)) {
          courseDays[day.code] = [];
        }
        courseDays[day.code].push(day.date);
        if (lessonsObj[lessonId]) {
          lessonsObj[lessonId].date = day.date;
          lessonsObj[lessonId].prev = prevLessonId.replace("/", "/day-");
          lessonsObj[lessonId].next = "";
          if (prevLessonId && lessonsObj[prevLessonId]) {
            lessonsObj[prevLessonId].next = lessonId.replace("/", "/day-");
          }
          ({ title, excerpt, status, path, fileName, codeLabel } = lessonsObj[lessonId]);
        }
        prevLessonId = lessonId;
        return { ...day, title, excerpt, status, codeLabel, path, fileName };
      } else {
        return day;
      }
    });
  })
);
courseInfo.map((course) => {
  course.days = courseDays[course.code];
  return course;
});
const courses = writable(courseInfo.sort((a, b) => {
  if (a.days[0] < b.days[0])
    return -1;
  return 1;
}));
const lessonsById = writable(lessonsObj);
export {
  courses as c,
  lessonsById as l,
  schedule as s
};
