---
title: Assignment 4 - Hero Section with Call-to-Action
type: assignment
points: 10
---

## Content topic
The goal of this assignment is to build a Hero Section that directs the user to click a Call-to-Action link:
- Choose a Hero title (could be a site title or the topic of your page);
- Choose a placeholder image for the background of your Hero section;
    - Image can be hosted by Lorem Picsum (or similar service);
    - The image should support (or at least not distract from) your chosen topic;
- Choose a phrase and link for your Call-to-Action that makes sense with your chosen topic;
- Make it funny/pretty/useful!

---

## Instructions
1. Create a [`index.html`](https://gist.github.com/acidtone/6871979b4f4b04375edb6312dcdba5b7) page with a semantic `<header>` containing a heading and Call-to-Action card;
2. Use [valid HTML](https://validator.w3.org/) and [CSS](https://jigsaw.w3.org/css-validator/);
    - CSS must be linked externally in an `./css/[style|main|etc].css`;
3. Design a full page layout of a site's Hero Section and Call-to-Action according to the requirements listed below.

## Marking Rubric
**Each of the following requirements will be worth 2 points** for a total of 10 points.

## 1. Content
- [ ] Display and Text fonts should not be default and have proper fallbacks;
- [ ] If HTML images are used, they cannot be distorted and should scale to fit the design;
- [ ] `font-size` and `line-height` should be larger than browser defaults;
- [ ] Content should be at least `1rem` away from all boundaries (sides of screen, containers, cards, etc);
- [ ] Text should have at least a AA contrast ratio rating for its size.
- [ ] No text overlapping high-frequency image areas at any screen size;

## 2. Hero section
- [ ] All Hero content wrapped in a `<header>` element for screen readers;
- [ ] One level 1 heading for your Hero topic (unless it is the Site Title) in a Display font; this is _in addition_ to the Call-to-Action;
- [ ] Heading `font-size` should be large and obvious;
- [ ] Full-viewport background CSS image that runs to the left, top and right edges of the screen and should take up at least 50% of the screen;
- [ ] Call-to-Action (see below) added in a balanced layout with heading text;
- [ ] Add any additional content that does not interfere with the rest of the assignment requirements;

## 3. Call-to-Action card
- [ ] At least one paragraph/phrase (max 50 words) accompanying the CTA link;
- [ ] Optional: additional level 2 or 3 heading for CTA;
- [ ] Line length should not exceed 40 characters on wide screens;
- [ ] The CTA card should appear self-contained and separate from Hero title (i.e. doesn't need to have a visible boundary);
- [ ] Only clickable area should be a link (or two) styled to look like a button (i.e. make it look obviously clickable);
- [ ] There should be a custom colour defined for Call-to-Action link;
- [ ] Hover effect added to button to confirm to the user that it's clickable;

## 4. Above and Beyond
Show off your coding skills by using ONE (use of more than one does not guarantee more marks) of the following:

- Host your images locally in an `images` directory in your project;

**OR**

- A GitHub Project board with 5 or or more cards that you used to manage your work on this assignment;

**OR**

- Both of the following CSS properties in your Hero Section:
    - [`linear-gradient`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient) or [`radial-gradient`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient)
    - [`background-blend-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode)

## 5. Documentation and Code Readability
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
- Push this assignment to a GitHub repo named `cpnt260-a4` and enable GitHub Pages;
- ZIP all files required for the site to operate and submit to Brightspace;
- Include the following as a comment in your Brightspace submission:
  - GH repo
  - GH Pages site

