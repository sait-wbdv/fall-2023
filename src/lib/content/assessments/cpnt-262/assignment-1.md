---
title: Assignment 1 - Bring a webpage to life
excerpt: Use your knowledge from the first 4 activities to add functionality to a webpage. In particular, use functions to create maintainable and well organized code
points: 20
type: assignment
---

<h2>Overview</h2>

For this assignment, you will create a full html web page that uses minimal styling. The main focus is to create interactive content by way of toggles and other types of user input. This assignment is functionally a summary of CPNT-260 and the first half of CPNT-262 as your html and css is required to be well written and following industry conventions.

For a topic, you can use any concept you like and you are welcome to reuse html and css from CPNT-260 assignments; however, a new repository is required (note copied content in your commit message).

The objective of this assignment is to be a final chance to sharpen and demonstrate your understanding of javascript syntax and general programming concepts.

<h2>Instructions</h2>

1. In a new Github repo, create a webpage.
   - Text and image content can all be placeholders like lorem ipsum, but the images do need to be optimized and stored in an `assets/images/` directory
   - Minor Color and Typography theming is required (ie: minimal noted styles in DSGN-270 assignments)
     - 2 typefaces
     - 2 colors + a shade of black and white to be used consistently
   - For the navigation bar, use anchor tags that scroll down the page (3-5 headings)
   - there should be a header and footer
   - there should be a 3 card layout or 9 image gallery (generated with JS in step 2)
   - There should be 2 types of input fields (text, checkboxes, radio buttons)
   - There should be a button (that's not part of a form/input fields)
2. Render your cards or images from an array of objects
   - use javascript to generate your card or image layout
3. Add 2 toggles
   - for example:
     - navigation mobile menu toggle
     - classList toggle
     - hide/show an info box
4. In your readme, outline the features that you have implemented and their respective line numbers in your `client.js` file

<h2>Rubric</h2>

### 5 Points: HTML Web Page

- A web page with nav, header, 3-5 sections, and footer
- Use of Semantic HTML
- Code indentation
- Minimal styling is applied and functions as expected
- CSS manipulated at least once with javascript

### 5 Points: Card or Gallery Layout

- Images or cards are rendered from a javascript array of objects
- Image assets are stored in an `assets/images` directory
- A loop is used to render your content

### 5 Points: Toggles

- There are 2 working toggles
- Conditionals are used
- Page doesn't refresh on click
- They are written as functions

### 5 Points: README and General Requirements

- README contains information about bugs that you ran into and what their solution was (and sources that helped you)
- Code is well commented
- JS is in 'use strict' mode
- Code indentation and whitespace has been well organized
- Minimal error handling is used in functions
- Code has been pushed in at least 4 commits with descriptive and accurate commit messages

<h2>Submission Instructions</h2>

1. As a comment in D2L: share links to make it easy for the instructor to quickly evaluate your work:
   - GH repos, Pages, Projects (Beta), etc.
   - Codepens, Figma, FigJam, etc.
2. Double check the Activity for specific instructions.
3. If applicable, include a README containing the following;
   - Activity name and author;
   - Attributions: Did anyone help you? Give credit to any classmates, articles, tutorials, etc that helped you complete this project.
   - Include self-assessments, observations, research, etc under the heading “Code Journal” in your README.
4. Zip project repo and submit it.
