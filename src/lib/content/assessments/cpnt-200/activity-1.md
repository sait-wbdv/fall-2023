---
title: Assignment 1 - Accessing Data
type: assignment
points: 10
---

**Objectives**

- Parse and Render data stored in JSON and CSV files into a Svelte App
- Query a Public API of your choosing in

## Setup

- Create and populate a csv file in google docs, import it into the `lib` folder in sveltekit
  - have at least 3 rows and 4 columns, the information can all be string data
- Create and populate a json file in the `lib` folder of your sveltekit app
  - data should include in any configuration: arrays, objects, strings, numbers
- Create a minimal sveltekit app (this will be used to show your work)
- Install Postman (this is for making API calls)
- Select a public api that you can fetch data from

## Tasks

1. Using `JSON.parse` and `JSON.stringify` syntax, render information from the json file into the server route of your index svelte page
2. Pass this data to the `+page.svelte` file and render it in a section (minimally styled)
3. Using the d3 or Papa Parse Library import the csv data onto the same server route as the json data
4. Pass this data to the `+page.svelte` file and render it in a different section (also minimally styled)
5. Use Postman to fetch data from your api
   - make 3 api calls for different data
   - take screenshots of your queries and the results
6. add the images to your sveltekit app
7. Render the images using a loop into a new section of the app.

## Rubric

### 2 Points: JSON Data

- JSON Data file syntax
- Data has been imported and rendered on page

### 2 Points: CSV Data

- CSV table has been called into the server route
- CSV data has been rendered onto the page

### 2 Points: Postman API Cals

- Postman API fetch is made correctly
- API data recieved makes sense with your queries

### 2 Points: README and General Requirements

- Readme provides link to the API
- README also includes your name and a link to the deployed site

## Submission Instructions

- Submit a link to your repo
- Submit a link to the live site
- Submit a zipped folder of your project
