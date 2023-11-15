import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Assignment 1 - Accessing Data",
  "type": "assignment",
  "points": 10
};
const Activity_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p><strong>Objectives</strong></p>
<ul><li>Parse and Render data stored in JSON and CSV files into a Svelte App</li>
<li>Query a Public API of your choosing in</li></ul>
<h2 id="setup"><a aria-hidden="true" tabindex="-1" href="#setup"><span class="icon icon-link"></span></a>Setup</h2>
<ul><li>Create and populate a csv file in google docs, import it into the <code>lib</code> folder in sveltekit<ul><li>have at least 3 rows and 4 columns, the information can all be string data</li></ul></li>
<li>Create and populate a json file in the <code>lib</code> folder of your sveltekit app<ul><li>data should include in any configuration: arrays, objects, strings, numbers</li></ul></li>
<li>Create a minimal sveltekit app (this will be used to show your work)</li>
<li>Install Postman (this is for making API calls)</li>
<li>Select a public api that you can fetch data from</li></ul>
<h2 id="tasks"><a aria-hidden="true" tabindex="-1" href="#tasks"><span class="icon icon-link"></span></a>Tasks</h2>
<ol><li>Using <code>JSON.parse</code> and <code>JSON.stringify</code> syntax, render information from the json file into the server route of your index svelte page</li>
<li>Pass this data to the <code>+page.svelte</code> file and render it in a section (minimally styled)</li>
<li>Using the d3 or Papa Parse Library import the csv data onto the same server route as the json data</li>
<li>Pass this data to the <code>+page.svelte</code> file and render it in a different section (also minimally styled)</li>
<li>Use Postman to fetch data from your api<ul><li>make 3 api calls for different data</li>
<li>take screenshots of your queries and the results</li></ul></li>
<li>add the images to your sveltekit app</li>
<li>Render the images using a loop into a new section of the app.</li></ol>
<h2 id="rubric"><a aria-hidden="true" tabindex="-1" href="#rubric"><span class="icon icon-link"></span></a>Rubric</h2>
<h3 id="2-points-json-data"><a aria-hidden="true" tabindex="-1" href="#2-points-json-data"><span class="icon icon-link"></span></a>2 Points: JSON Data</h3>
<ul><li>JSON Data file syntax</li>
<li>Data has been imported and rendered on page</li></ul>
<h3 id="2-points-csv-data"><a aria-hidden="true" tabindex="-1" href="#2-points-csv-data"><span class="icon icon-link"></span></a>2 Points: CSV Data</h3>
<ul><li>CSV table has been called into the server route</li>
<li>CSV data has been rendered onto the page</li></ul>
<h3 id="2-points-postman-api-cals"><a aria-hidden="true" tabindex="-1" href="#2-points-postman-api-cals"><span class="icon icon-link"></span></a>2 Points: Postman API Cals</h3>
<ul><li>Postman API fetch is made correctly</li>
<li>API data recieved makes sense with your queries</li></ul>
<h3 id="2-points-readme-and-general-requirements"><a aria-hidden="true" tabindex="-1" href="#2-points-readme-and-general-requirements"><span class="icon icon-link"></span></a>2 Points: README and General Requirements</h3>
<ul><li>Readme provides link to the API</li>
<li>README also includes your name and a link to the deployed site</li></ul>
<h2 id="submission-instructions"><a aria-hidden="true" tabindex="-1" href="#submission-instructions"><span class="icon icon-link"></span></a>Submission Instructions</h2>
<ul><li>Submit a link to your repo</li>
<li>Submit a link to the live site</li>
<li>Submit a zipped folder of your project</li></ul>`;
});
export {
  Activity_1 as default,
  metadata
};
