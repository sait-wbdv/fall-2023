---
title: Final Project - Multi-page Website with Gallery (In Pairs)
type: assignment
points: 25
---

In this assignment, you will deploy a multi-page SvelteKit website based on a topic of your partner and your choice. Site images and text should reflect the intention of the site (no lorem ipsum).

---

## Marking Rubric

Each of the following will be **worth 5 points for a total of 25 points**:

### 1. Imported gallery data

Create a `/src/lib/data.js` file (name should be more descriptive to your content) that exports (using the `export` keyword) an **array** of at least 9 **objects** that contain information for an image-based gallery.

Each object should contain enough detailed information about your items to provide summary information in your gallery and detailed information on your item pages.

### 2. Gallery list entry page

Create a dynamic gallery page that is driven from an `{#each}` loop of the imported data above. Each gallery card should contain:

- the title as a heading;
- the description inside a paragraph or figcaption;
- a locally hosted (in `/static`) thumbnail image that:
  - has a proper `alt` attribute, and
  - links to an appropriately sized image (less than 500px).

The entire card should be clickable and link to a more detailed item page (see below).

Additionally, the gallery page should:

- contain a custom page title using `<svelte:head>`;
- contain all page-level CSS specific to the route;
- display its cards using an imported `Card.svelte` component with defined props.

### 3. Dynamic gallery item route

Using route parameters, create a dynamic route that will display the details of each gallery item above. Each page should:

- include more details than the summary cards on the gallery pages;
- be driven by the same imported data array as the gallery page;
- include a large version of the thumbnail shown on the gallery page (also hosted in `/static`);
- not show `undefined` values and show an "Item not found" message if invalid parameters are encountered.

Additionally, each item page should contain:

- a custom page title based on the imported data using `<svelte:head>`;
- all page-level CSS specific to the route.

### 4. Third-party library

Create a proof-of-concept example on your site using _ONE_ third-party library not covered in class such as:

- A date library such as [DayJS](https://day.js.org/).
- A charting library such as [`svelte-chartjs`](https://www.npmjs.com/package/svelte-chartjs).
- Write your content in markdown with [`mdsvex`](https://mdsvex.com/) (this is the library that powers the SAIT WBDV website).

You can find more in [Curated list of awesome Svelte resources](https://project-awesome.org/TheComputerM/awesome-svelte) but your mileage may vary.

### 5. Partner Score

- Give your partner a score out of 5. Take into count the following:
  - Communicates effectively
  - Finishes tasks in a timely manner
  - Stays in scope
  - Accountable
  - Pair Coding

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

- Push this assignment to a GitHub repo named `cpnt262-final-project` and deploy to Vercel or similar platform;
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
  - A link to the Netlify site;
  - **(new)** Search research notes:
    - for 1-3 things that you needed to look up, document and optimize your search
    - [Use this document as a guide](https://gist.github.com/lilyx13/4a2f49d1cdb29cfc624ef22c6ccedafe)
  - List the author and links to any Attributions for code and/or assets you used that are not your own;
- Follow guidelines in [Files and Directories - Naming Conventions](https://gist.github.com/acidtone/d77059ec1851eff266339a3df70f6984)
