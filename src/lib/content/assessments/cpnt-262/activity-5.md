---
title: Assignment 5 - Components and Props
type: assignment
points: 10
---

In this assignment, you will create a SvelteKit route that displays a single, clickable card on the page which:

1. imports an object containing card data from an external file;
2. imports a `<Card>` component from an external file;
3. displays the card data by declaring `<Card>` props.

The card can contain information based on a topic of your choice.

---

## Marking Rubric

Each of the following will be **worth 2 points for a total of 10 points**:

### Page route

Create a route in a SvelteKit project that contains a valid `+page.svelte` file which:

- is displayed with header navigation and a footer using a root `+layout.svelte` page;
- imports card data from an external file (see below);
- displays the imported card information using an imported `<Card />` component (see below).

### Card component

Create a `/src/lib/components/Card.svelte` file that accepts the above card data as a prop and displays:

- the title a heading;
- the description inside a paragraph or figcaption;
- a locally hosted image with a proper `alt` attribute.

The entire card should be clickable and link to the external website url provided.

### Card data

Create a `/src/lib/data.js` file that exports (using the `export` keyword) an object that contains information for your card, including:

- title;
- description;
- image `src` information needed to link to an image file in `/static/images`;
- external website url to link to.

### Prop declaration

In `+page.svelte`, display the card by passing the imported card data to the `<Card />` component as a prop so that:

- no `undefined` fields are displayed on the card;
- if card data is `undefined`, the card does not display.

### Multiple Cards

2 points are available if you display multiple cards on the page by:

- importing an array of objects in `/src/lib/data.js` instead of one object;
- displaying each card using an `{#each}` loop.

---

**Points will be deducted for**:

- violations of accessibility, usability and SvelteKit best practices;
- a page that is incomplete or of low fidelity;
- projects that aren't deployed (3 point deduction);
- syntax errors,
- logic errors,
- not following the guidelines in [Javascript Basics](https://sait-wbdv.github.io/slides/w23/cpnt-262/js-introduction.html), starting at [Slide 9](https://sait-wbdv.github.io/slides/w23/cpnt-262/js-introduction.html#/9).

---

## Submission Instructions

- Push this assignment to a GitHub repo named `cpnt262-a7` and deploy to Vercel or similar platform;
- ZIP all files required for the site to operate and submit to Brightspace;
- Include the following as a comment in your Brightspace submission:
  - GH repo
  - Live deploy link

### Submission requirements

Points will be deducted for failing to fulfill the following:

- Include a `README.md` in your project that contains the following information:
  - Course title;
  - Assignment name;
  - Author name;
  - A link to the GH Pages site;
  - **(new)** Search research notes:
    - for 1-3 things that you needed to look up, document and optimize your search
    - [Use this document as a guide](https://gist.github.com/lilyx13/4a2f49d1cdb29cfc624ef22c6ccedafe)
  - List the author and links to any Attributions for code and/or assets you used that are not your own;
- Follow guidelines in [Files and Directories - Naming Conventions](https://gist.github.com/acidtone/d77059ec1851eff266339a3df70f6984)
