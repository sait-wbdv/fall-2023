---
title: Final Project - Three-page Website
type: assignment
points: 30
---
In this assignment, you will use all the knowledge learned in this course to deploy a multi-page static website based on a topic of your choice.

## Base Requirements
All pages and code in this assignment will be graded against the following requirements (see past Assignments for details), in addition to the specific rubric category requirements: 
- Accessibility
- Responsiveness
- Code quality and readability
- Project README with:
    - Course and assignment information
    - Author name
    - Attributions

---

## Marking Rubric
The following criteria will be worth a **total of 30 points**.

### 5 Points: Image gallery
A gallery of image-based cards such as a product list on an online store, players on a sports team, movies playing in a theatre, etc.
- At least 9 cards
- 2-4 per items row on desktop; 1 per row on mobile;
- Cards entirely clickable like in Assignment 2;
- Each item card must include an image, title and details/description;
    - Images must be locally hosted. For example, Lorem Picsum or other absolute web links not permitted;
    - Images can either be HTML or CSS images;
- Link can go to external website.

### 5 Points: Locally hosted image files
- Image files stored in a dedicated `images` directory next to your `css` directory;
- Open-source or your own images that match the topic of your project (if possible);
- Proper file and directory naming conventions;
- File resolutions/sizes appropriate for use in a thumbnail gallery.

### 10 Points: Additional pages
At least two pages of your choice in addition to the Gallery page to make up a three-page website. You must incorporate **at least three** of the following page elements, in total:

- **Contact form** driven by [Formspree](https://formspree.io/) or similar service;
- **Hero section** and call to action containing at least **two** image elements such as:
    - CSS background image, 
    - HTML image,
    - CSS gradient
- **Blog post** containing:
    - Level 2 and level 3 headings (in addition to level 1 page title);
    - At least one list, either bulleted or numbered;
    - at least 200 words of your own text (no lorem ipsum or text copied from openly licensed sources);
- A **1x3 card block**: one row of three cards on desktop (one column of 3 rows on mobile);
- **Embedded video** in an `<iframe>` with proper labels/context (i,e, headings and description) and attributions;

**Important**: Duplication of CSS across your pages should be minimized. Separate your CSS into logical files based on which pages need them. For example, your CSS directory could look like this:
- `main.css`
- `fonts.css`
- `about.css`
- `gallery.css`
- `home-page.css`

### 5 points: Global layout elements
The following persistent layout elements must exist on every page of the project: 
- Global page banner with logo and site title
- Global Navigation
    - Current page highlighted and obvious to the user;
    - Hover effects added to navigation links;
    - Mobile navigation menu (can be a vertical menu);
- Footer with:
    - @copy; 2022 [Team name]
    - Doormat navigation (see: [Footers 101: Design Patterns and When to Use Each](https://www.nngroup.com/articles/footers/))
        - Primary navigation should be duplicated in footer but should not look like primary navigation.

### 5 points: Above and Beyond
Incorporate **one of the following** techniques that were not covered in class:

- **Sticky footer**: when a page doesn't have enough content to fill the page, the footer should still sit at the bottom of the page.
    - Note: one of your pages should be short enough to show the footer "sticking" to the bottom of the page;

**OR**

- **Mobile hamburger menu toggle**: A CSS-only (you can use Javascript, if desired) button that shows and hides your global navigation on mobile screens.

**OR**

- Your instructor is open to suggestions...

---

## Submission Requirements
- Push this assignment to a GitHub repo named `cpnt260-final-project` and enable GitHub Pages;
- ZIP all files required for the site to operate and submit to Brightspace;
- Include the following as a comment in your Brightspace submission:
  - GH repo
  - GH Pages site
