---
title: Graded Activity 7 - Create a Component
excerpt: Create and apply a component in svelte
points: 5
type: assignment
---

## Outline

Components are an important part of modern site and app building. Often we use components from libraries like SkeletonUI, but we also need to be able to create custom components that are able to take values from the page they are used on and render them appropriately.

This makes a site/app much easier to maintain by reducing code duplication.

## Instructions

- Either duplicate and rename your activity 5 or start a new sveltekit app with or withour skeletonUI
- Create a card component that takes the following props:
  - title
  - description
  - image (src and alt)
  - link (url and text)
- render the card on the main page 3 times using svelte syntax
  - each loop + array of objects that contain the information
- make sure to add the image files to `static/images/`

## Rubric

### Essential Requirements

- `node_modules/` directory **not** in github remote repo **or** zipped directory

### 3 Points: Component Setup

- Component created in the components directory and follows proper naming conventions
- Component takes props for the abovenoted content
- Props are used in the component

### 2 Points: Component Application

- Page uses an each loop to render 3 cards
- cards are passed data from an array of objects

## Submission

- Your project needs to be in a github repo
- Zip the repo and submit it to brightspace
- In the Text box of your submission submit a link to the github repo
