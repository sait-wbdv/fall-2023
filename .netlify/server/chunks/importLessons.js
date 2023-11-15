const imports = Object.entries(/* @__PURE__ */ Object.assign({ "../content/courses/cpln-240.md": () => import("./cpln-240.js"), "../content/courses/cpln-240/01-day-1.md": () => import("./01-day-1.js"), "../content/courses/cpnt-200.md": () => import("./cpnt-200.js"), "../content/courses/cpnt-200/01-day-1.md": () => import("./01-day-12.js"), "../content/courses/cpnt-200/02-day-2.md": () => import("./02-day-2.js"), "../content/courses/cpnt-200/03-day-3.md": () => import("./03-day-3.js"), "../content/courses/cpnt-200/04-day-4.md": () => import("./04-day-4.js"), "../content/courses/cpnt-200/05-day-5.md": () => import("./05-day-5.js"), "../content/courses/cpnt-200/06-day-6.md": () => import("./06-day-6.js"), "../content/courses/cpnt-200/07-day-7.md": () => import("./07-day-7.js"), "../content/courses/cpnt-201.md": () => import("./cpnt-201.js"), "../content/courses/cpnt-201/01-day-1.md": () => import("./01-day-13.js"), "../content/courses/cpnt-201/02-day-2.md": () => import("./02-day-22.js"), "../content/courses/cpnt-201/03-day-3.md": () => import("./03-day-32.js"), "../content/courses/cpnt-201/04-day-4.md": () => import("./04-day-42.js"), "../content/courses/cpnt-201/05-day-5.md": () => import("./05-day-52.js"), "../content/courses/cpnt-201/06-day-6.md": () => import("./06-day-62.js"), "../content/courses/cpnt-201/07-day-7.md": () => import("./07-day-72.js"), "../content/courses/cpnt-201/08-day-8.md": () => import("./08-day-8.js"), "../content/courses/cpnt-260.md": () => import("./cpnt-260.js"), "../content/courses/cpnt-260/01-day-1.md": () => import("./01-day-14.js"), "../content/courses/cpnt-260/02-day-2.md": () => import("./02-day-23.js"), "../content/courses/cpnt-260/03-day-3.md": () => import("./03-day-33.js"), "../content/courses/cpnt-260/04-day-4.md": () => import("./04-day-43.js"), "../content/courses/cpnt-260/05-day-5.md": () => import("./05-day-53.js"), "../content/courses/cpnt-260/06-day-6.md": () => import("./06-day-63.js"), "../content/courses/cpnt-260/07-day-7.md": () => import("./07-day-73.js"), "../content/courses/cpnt-260/08-day-8.md": () => import("./08-day-82.js"), "../content/courses/cpnt-260/09-day-9.md": () => import("./09-day-9.js"), "../content/courses/cpnt-260/10-day-10.md": () => import("./10-day-10.js"), "../content/courses/cpnt-262.md": () => import("./cpnt-262.js"), "../content/courses/cpnt-262/01-day-1.md": () => import("./01-day-15.js"), "../content/courses/cpnt-262/02-day-2.md": () => import("./02-day-24.js"), "../content/courses/cpnt-262/03-day-3.md": () => import("./03-day-34.js"), "../content/courses/cpnt-262/04-day-4.md": () => import("./04-day-44.js"), "../content/courses/cpnt-262/05-day-5.md": () => import("./05-day-54.js"), "../content/courses/cpnt-262/06-day-6.md": () => import("./06-day-64.js"), "../content/courses/cpnt-262/07-day-7.md": () => import("./07-day-74.js"), "../content/courses/cpnt-262/08-day-8.md": () => import("./08-day-83.js"), "../content/courses/cpnt-262/09-day-9.md": () => import("./09-day-92.js"), "../content/courses/cpnt-262/10-day-10.md": () => import("./10-day-102.js"), "../content/courses/cpnt-262/11-day-11.md": () => import("./11-day-11.js"), "../content/courses/cpnt-262/12-day-12.md": () => import("./12-day-12.js"), "../content/courses/cpnt-262/13-day-13.md": () => import("./13-day-13.js"), "../content/courses/cpnt-262/14-day-14.md": () => import("./14-day-14.js"), "../content/courses/cpnt-262/15-day-15.md": () => import("./15-day-15.js"), "../content/courses/cpnt-262/16-day-16.md": () => import("./16-day-16.js"), "../content/courses/cpnt-262/17-day-17.md": () => import("./17-day-17.js"), "../content/courses/cpnt-262/18-day-18.md": () => import("./18-day-18.js"), "../content/courses/cpnt-262/19-day-19.md": () => import("./19-day-19.js"), "../content/courses/cpnt-262/20-day-20.md": () => import("./20-day-20.js"), "../content/courses/cpnt-264.md": () => import("./cpnt-264.js"), "../content/courses/cpnt-264/01-day-1.md": () => import("./01-day-16.js"), "../content/courses/cpnt-264/02-day-2.md": () => import("./02-day-25.js"), "../content/courses/cpnt-264/03-day-3.md": () => import("./03-day-35.js"), "../content/courses/cpnt-264/04-day-4.md": () => import("./04-day-45.js"), "../content/courses/cpnt-265.md": () => import("./cpnt-265.js"), "../content/courses/cpnt-265/01-day-1.md": () => import("./01-day-17.js"), "../content/courses/cpnt-265/02-day-2.md": () => import("./02-day-26.js"), "../content/courses/cpnt-265/03-day-3.md": () => import("./03-day-36.js"), "../content/courses/cpnt-265/04-day-4.md": () => import("./04-day-46.js"), "../content/courses/cpnt-265/05-day-5.md": () => import("./05-day-55.js"), "../content/courses/cpnt-265/06-day-6.md": () => import("./06-day-65.js"), "../content/courses/cpnt-265/07-day-7.md": () => import("./07-day-75.js"), "../content/courses/cpnt-265/08-day-8.md": () => import("./08-day-84.js"), "../content/courses/cpnt-265/09-day-9.md": () => import("./09-day-93.js"), "../content/courses/cpnt-265/10-day-10.md": () => import("./10-day-103.js"), "../content/courses/cpnt-265/11-day-11.md": () => import("./11-day-112.js"), "../content/courses/dsgn-270.md": () => import("./dsgn-270.js"), "../content/courses/dsgn-270/01-day-1.md": () => import("./01-day-18.js"), "../content/courses/dsgn-270/02-day-2.md": () => import("./02-day-27.js"), "../content/courses/dsgn-270/03-day-3.md": () => import("./03-day-37.js"), "../content/courses/dsgn-270/04-day-4.md": () => import("./04-day-47.js"), "../content/courses/dsgn-270/05-day-5.md": () => import("./05-day-56.js"), "../content/courses/dsgn-270/06-day-6.md": () => import("./06-day-66.js"), "../content/courses/dsgn-270/07-day-7.md": () => import("./07-day-76.js"), "../content/courses/dsgn-270/08-day-8.md": () => import("./08-day-85.js") }));
const lessons = await Promise.all(
  imports.map(async ([path, resolver]) => {
    const { metadata } = await resolver();
    const pathArray = path.split("/");
    const fileName = pathArray.pop().slice(0, -3);
    const day = fileName.slice(0, 2);
    const code = pathArray.pop();
    const codeLabel = code.toUpperCase().replace("-", " ");
    return { ...metadata, path, fileName, day, code, codeLabel };
  })
);
export {
  lessons as l
};
