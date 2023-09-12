---
title: Assignment 2 - Single Card
type: assignment
points: 10
---

In this assignment, you will be creating a card of summarized information that displays properly on both desktop and mobile devices.

While you can use open-source content as inspiration, it should be unique and on-topic.

## Content Topic
The goal of this assignment is to summarize information for the user. If they want to read more, they can click the (entire) card to read/watch/buy/etc more.

For example, you may write a card for:
- a blog post on your portfolio website;
- an item in an online store;
- a how-to article on your favourite hobby;
- a Team card for an employee/classmate/you/etc.
- etc.

The content should make sense and be of potential value to the (hypothetical) reader.

- See: [Tony's "moodboard" on cards](https://acidtone.github.io/code-journal/#july-16th-2022) for some layout examples

**Note: you will _NOT_ need the full information for this assignment. Only content needed to build your card is required.**

---

## Instructions
1. Write a short heading and paragragh (max 50 words) for your card;
2. Select an image for your card;
    - This image can be a placeholder served by [Lorem Picsum](https://picsum.photos/) or similar image generator.
2. Use valid HTML and CSS to make a card of information that displays properly on desktop and mobile;
3. Place your card in a validated HTML file named `index.html` (CSS may be embedded in a `style` element in the `head` of `index.html`).

---

## Marking Rubric
**Each of the following requirements will be worth 2 points** for a total of 10 points. 

### Card content
Enhance the visual hierarchy of your card by using:
- [ ] One level 3 heading for your card title in a Display font;
- [ ] One placeholder HTML image with `alt`, `width` and `height` attributes;
- [ ] A short paragraph containing bold and/or italic text in a body text font;
- [ ] Card content should be wrapped in an `article` element;

### Responsiveness and Accessibility
Your content should be responsive and accessible to screen readers:
- [ ] Line length should not exceed 40 characters on wide screens;
- [ ] The image cannot be distorted and should scale to fit the card;
- [ ] No horizontal scroll bars should be visible at any device screen width;
- [ ] On mobile, content should be at least `1rem` away from the edge of the screen;
- [ ] Text should have at least a [AA contrast ratio rating](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) for its size.

### Clickable card
**User story**: 
> As a [`user`|`learner`|`shopper`], 
> I would like to click on a [`summary of information`] so that 
> I can [`create and account`|`learn the guitar`|`see if it supports HDMI 2`].

- [ ] Entire Card should be clickable with no gaps;
    - Card can link to any valid external webpage.
- [ ] The Card should have a visible boundary;
- [ ] Clickable area should not exceed the Card boundary;
- [ ] No links should be used inside the Card;
- [ ] Hover effect added to tell the user the Card is clickable;

### Above and Beyond
Show off your coding skills by using ONE (use of more than one does not guarantee more marks) of the following:
- Use of the `figure` and `ficaption` elements instead of `article` and `p`, OR
- At least two of the following CSS properties:
    - [`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
    - [`mix-blend-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode)
    - [`clip-path`](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)

Provide a clear indication of which option you've chosen in your README (see below):
- Which did you choose?
- What file(s) and line number(s) can it be found?

### Documentation and Code Quality
- Include a `README.md` in your project that contains the following information:
  - Course title;
  - Assignment name;
  - Author name;
  - A link to the GH Pages site
- **Important**: Any attributions for code and/or assets you used that are not your own.
- Use best practices with file/directory names and indentation:
  - 2 spaces per indent
    - Nested HTML elements and CSS declarations should be indented
  - See: [Files and Directories - Naming Conventions](https://gist.github.com/acidtone/d77059ec1851eff266339a3df70f6984)
- CSS declarations should be organized by category (box model, fonts, borders, flex, etc), separated by a space and commented.

---

## Submission Requirements
- Push this assignment to a GitHub repo named `cpnt260-a2` and enable GitHub Pages;
- ZIP all files required for the site to operate and submit to Brightspace;
- Include the following as a comment in your Brightspace submission:
  - GH repo
  - GH Pages site

