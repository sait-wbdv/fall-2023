---
title: Assignment 4 - Full-page Layout
type: assignment
points: 10
---

In this assignment, you will be creating a full-page layout of a web page!

## Content topic
The goal of this assignment is to create an internal page of a traditional website, such as a:
- Blog post;
- Contact page;
- About page;
- a 404 Page Not found page;
- etc.

To create this page you will:
- Choose a site title, owner, concept for your site;
- Choose a list of four (or more) your primary navigation menu;
    - You do not have to create content for any other pages;
    - Link to `#` or choose an external site of your choice.
- Populate the main area of the page with (well-formed and accessible) content of your choice;
- Add a footer with copyright info at the bottom of the page;
- Make it funny/pretty/useful!

---

## Instructions
1. Create a [`index.html`](https://gist.github.com/acidtone/6871979b4f4b04375edb6312dcdba5b7) page with the following semantic elements:
    - `<header>` - Site banner
    - `<nav>` - Primary navigation
    - `<main>` - Page content 
    - `<footer>` - Copyright information
2. Use [valid HTML](https://validator.w3.org/) and [CSS](https://jigsaw.w3.org/css-validator/);
    - **New**: CSS must be linked externally in an `./css/[style|main|etc].css`;
3. Design a full page layout of a site's web page according to the requirements listed below.

---

## Marking Rubric
**Each of the following requirements will be worth 2 points** for a total of 10 points.

### 1. Horizontal Flexbox navigation
Build a horizontal primary navigation menu that:
- [ ] contains at least four navigation links (link `href` may be `#`);
- [ ] includes a logo and/or site name;
- [ ] is accessible (see below);
- [ ] uses colour and the box model to make links obviously and easily clickable;
- [ ] uses a `<ul>` as a flex container and `<li>` as items;
- [ ] justify the links to fit your design.

### 2. Content and footer
Build a page of valid HTML ([W3C HTML Validator](https://validator.w3.org/)) page content and with a footer:
- Page content:
    - [ ] Content that matches the theme of your page (you may use content from openly licensed sources, previous assignments or sample code given in);
- Footer:
    - [ ] Copyright year with `&copy;` HTML entity;
    - [ ] Site owner;

### 3. Responsiveness and Accessibility
Your content should be responsive and accessible to screen readers:
- [ ] All navigation should be wrapped in a `<nav>` element;
    - `<nav>` should be nested inside a `<header>`
- [ ] Navigation should never overflow horizontally off the screen:
    - `flex-wrap` is a good place to start;
- [ ] The page has a `<title>` in the `<head>`;
- [ ] Main page content is wrapped in a `<main>` container;
- [ ] Footer content is wrapped in a `<footer>` container at the bottom of the page;
- [ ] The page content is a readable size and not touch the edge of any boundary (such as a background colour change).

**Plus these**:
- [ ] Line length should not exceed 40 characters on wide screens;
- [ ] No horizontal scroll bars should be visible at any device screen width;
- [ ] On mobile, content should be at least `1rem` away from the edge of the screen;
- [ ] Text should have at least a AA contrast ratio rating for its size;

### 4. Above and Beyond
Show off your coding skills by using ONE (use of more than one does not guarantee more marks) of the following:
- add a social navigation menu, OR;
- incorporate an inline SVG image for your company logo, OR;
- Google Map in the footer, OR;
- add your primary navigation to the footer.
    - it shouldn't look like primary navigation.

Provide a clear indication of which option you've chosen in your README (see below):
- Which did you choose?
- What file(s) and line number(s) can it be found?

### 5. Documentation and Code Quality
In addition to the standard requirements, include the following in your `README.md`:
- A helpful resource that helped you with this assignment;
- the search term you would use to find this resource again.

**Plus these**:
- Include a `README.md` at the root of your project that contains the following information:
  - Course title;
  - Assignment name;
  - Author name;
  - **GH Pages** site
  - **Attributions** for code and/or assets you used that are not your own.
- Use best practices with file/directory names and indentation:
  - 2 spaces per indent
    - Nested HTML elements and CSS declarations should be indented
  - See: [Files and Directories - Naming Conventions](https://gist.github.com/acidtone/d77059ec1851eff266339a3df70f6984)
- CSS declarations should be organized by category (box model, fonts, borders, flex, etc), separated by a space and commented.

---

## Submission Requirements
- Push this assignment to a GitHub repo named `cpnt260-a3` and enable GitHub Pages;
- ZIP all files required for the site to operate and submit to Brightspace;
- Include the following as a comment in your Brightspace submission:
  - GH repo
  - GH Pages site
