---
title: Graded Activity 8 - Server Route
excerpt: Create a server route that passes data to a page
points: 5
type: assignment
---

## Outline

Data can be fetched on the front end or from the server. Traditionally, Server Side Rendered (SSR) sites would build the page on request and then serve it. This is often important as it reduces the work a client devices needs to make. Here you will practice fetching data on a server route and passing that to a web page.

## Instructions

- Duplicate a previous activity or create a new one (neither skeletonUI or css in general are necessary for this activity)
- follow the instructions on the svelte docs to create a server route: [instructions can be found here](https://kit.svelte.dev/docs/routing)
- on your server route, make an async fetch to a Rest API of your choosing
- render a gallery (9-12 items) from the data fetch onto the page that corresponds to your server route

## Rubric

### Essential Requirements

- `node_modules/` directory **not** in github remote repo **or** zipped directory

### 3 Points: Server Route Setup

- a server route is set up for a home page
- the route makes an async fetch to a REST API
- error handling for when the fetch doesn't work

### 2 Points: Server Content Rendered

- Content from the fetch call is rendered on the page

## Submission

- Your project needs to be in a github repo
- Zip the repo and submit it to brightspace
- In the Text box of your submission submit a link to the github repo
