---
title: Assignment 3 - Tailwind in a Branch
excerpt: In this assignment, you will demonstrate your knowledge of TailwindCSS.
points: 20
type: assignment
status: published
---

## Instructions

Use TailwindCSS to style a web page. You can use the code from a previous assignment or write new code, either is acceptable. Practice using this utility class framework to either recreate the styles that you made in vanilla css or try building content from scratch.

**If you use code from a previous assignment, it must be copied into a new repo for this assignment**

For this assignment you will be [installing TailwindCSS via a CDN](https://tailwindcss.com/docs/installation/play-cdn).

## Constraints
- Assignment criteria must be implemented using TailwindCSS utility classes and modifiers.
- Your work should not be trivial. Using Tailwind classes and modifiers that create basic effects on the page may not earn full marks.
- Use Tailwind to create practical effects that would be used in a real web project. 

---

## Marking Criteria
**Each of the following requirements will be worth 4 points** for a total of 20 points.

### 1. Accessible Text
Use Tailwind classes to create an accessible block of long-form text:
- [ ] Increase the default font size to more than the default `16px`
- [ ] Increase the line-height to more than the default `1.2`
- [ ] Limit the maximum line length on wide screens
- [ ] Set a text colour and background colour while preserving AA contrast ratio
- [ ] Centre the text on the screen on wide screens
- [ ] Ensure that headings and paragraphs are spaced appropriately

### 2. Pseudo-classes
Use at least THREE Tailwind modifiers to conditionally activate a utility class. Popular examples:
- [`hover:`](https://tailwindcss.com/docs/hover-focus-and-other-states#hover)
- [`checked:`](https://tailwindcss.com/docs/hover-focus-and-other-states#checked)
- [`empty:`](https://tailwindcss.com/docs/hover-focus-and-other-states#empty)
- [`first:`](https://tailwindcss.com/docs/hover-focus-and-other-states#first)
- [`last:`](https://tailwindcss.com/docs/hover-focus-and-other-states#last)
- [`only:`](https://tailwindcss.com/docs/hover-focus-and-other-states#only)
- [`even:`](https://tailwindcss.com/docs/hover-focus-and-other-states#even)/[`:odd`](https://tailwindcss.com/docs/hover-focus-and-other-states#odd),
- etc.

See the [Pseudo-class Reference](https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-class-reference) for a complete list of available pseudo-classes.

### 3. Layouts
Use [Flexbox](https://tailwindcss.com/docs/flex) or [CSS Grid](https://tailwindcss.com/docs/grid-template-columns) with Tailwind to create a layout such as:
- Horizontal nav bar
- Image gallery
- Hero section
- etc.

### 4. Media Queries
Use [responsive media queries](https://tailwindcss.com/docs/responsive-design) to make at least one _mobile-first breakpoint_ (i.e. use `lg:` instead of `sm:`) that conditionally changes the presentation of your page, such as:
- Create a mobile nav menu button
- Change a full-page layout (i.e. create a side nav bar on desktop devices)
- Make font size and margin/padding larger on desktop screens

Full marks will be given for work that is not trivial and represents media query effects that would be used in an actual production website.

### 5. Git Branch
Demonstrate your knowledge of Git branches by doing your work in a branch called `201-a3`.
1. Push this branch to GitHub
2. Merge your `201-a3` branch into `main` so they are in sync
3. Publish your `main` branch to GitHub Pages.

---
## Submission Requirements
- Add a `README.md` file to the root of your project that contains:
    - your name
    - course and assignment number
    - link to deployed github page
    - link to github repo
    - attributions to assets
- Push this assignment to a GitHub repo named `cpnt201-a3` and enable GitHub Pages;
- ZIP all files required for the site to operate and submit to Brightspace;
- Include links to the following as a comment in your Brightspace submission:
  - GH repo
  - Direct link to your `201-a3` branch
  - GH Pages site
