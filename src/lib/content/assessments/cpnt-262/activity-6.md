---
title: Assignment 6 - Reactivity and Events
type: assignment
points: 10
---

Reactivity is a key feature of web frameworks. Create a svelte app that updates data and uses component events.

1. Scaffold a new sveltekit app
2. On the index page, create an array of objects and render it to the page
   - then add input fields for new values to be added
   - set up a button that will add the values to the array and update the DOM
   - use an event modifier (you can use a second button for this example if it makes more sense)
3. Create a component that **dispatches** an event
   - your event should render onto the page
   -
4. Create another component that wraps around the component in step 3
   - use forwarding so that the inner event can be triggered from the page
   - Add a prop (ie: a title) to the outer component and apply that on the page
5. Create an inline event handler
   - use this to manipulate css

### Note: data can be stored in arrays on the page

---

## Marking Rubric

Each of the following will be **worth 2 points for a total of 10 points**:

### Reactivity and Data Updates

- Data updates and renders its respective updates
- Up to date syntax is used

### Functions

- Code is organized into specific functions
- Functions are designed in a reusable way

### Inline Event Handler

- Correct syntax is used
- The use case is something that would likely be used only once

### Component Event Dispatch

- A function is executed using dispatch

### Component Event Forwarding

- The dispatch component is nested inside another component and input is passed from the page using forwarding
- A prop is set on the outer component and changed on the page

---

**Points will be deducted for**:

- Syntax and logic errors
- Poor naming conventions

---

## Submission Instructions

- Push this assignment to a GitHub repo named `cpnt262-a6` and deploy to Vercel or similar platform;
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
  - A link to the deployed site;
  - **(new)** Search research notes:
    - for 1-3 things that you needed to look up, document and optimize your search
    - [Use this document as a guide](https://gist.github.com/lilyx13/4a2f49d1cdb29cfc624ef22c6ccedafe)
  - List the author and links to any Attributions for code and/or assets you used that are not your own;
- Follow guidelines in [Files and Directories - Naming Conventions](https://gist.github.com/acidtone/d77059ec1851eff266339a3df70f6984)
