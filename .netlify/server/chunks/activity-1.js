import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Assignment 1 - Data Basics",
  "type": "assignment",
  "points": 10
};
const Activity_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p><strong>Objectives</strong></p>
<ul><li>Query a Public API of your choosing in</li>
<li>Set up JSON and CSV files of data</li></ul>
<h2 id="tasks"><a aria-hidden="true" tabindex="-1" href="#tasks"><span class="icon icon-link"></span></a>Tasks</h2>
<ul><li>Create a json file and use it to map web page content. Use any web page that you’ve previously made<ul><li>organize the content into logical blocks of arrays and objects</li></ul></li>
<li>Create a table in google sheets and export it as a csv<ul><li>it can be product, user, art… anything that has details that be organized into a database</li></ul></li>
<li>Make api requests toa public api using Postman</li></ul>
<h2 id="rubric"><a aria-hidden="true" tabindex="-1" href="#rubric"><span class="icon icon-link"></span></a>Rubric</h2>
<h3 id="2-points-json-data"><a aria-hidden="true" tabindex="-1" href="#2-points-json-data"><span class="icon icon-link"></span></a>2 Points: JSON Data</h3>
<ul><li>Create a json file and map of content from one of your web pages from a past assignment<ul><li>use a combination of arrays and objects dependingon the data</li>
<li>group by h2 headings</li>
<li>use proper json syntax</li></ul></li></ul>
<h3 id="2-points-csv-data"><a aria-hidden="true" tabindex="-1" href="#2-points-csv-data"><span class="icon icon-link"></span></a>2 Points: CSV Data</h3>
<ul><li>Create a table in google sheets<ul><li>it should have 5 columns</li>
<li>one of thos columns should be a unique id integer</li>
<li>no spaces (use underscores)</li>
<li>no capitals in column names</li>
<li>it should have 10 rows</li></ul></li></ul>
<h3 id="2-points-postman-api-calls"><a aria-hidden="true" tabindex="-1" href="#2-points-postman-api-calls"><span class="icon icon-link"></span></a>2 Points: Postman API Calls</h3>
<ul><li>Postman API fetch is made correctly</li>
<li>API data recieved makes sense with your queries</li>
<li>2 API requests</li></ul>
<h3 id="2-points-readme"><a aria-hidden="true" tabindex="-1" href="#2-points-readme"><span class="icon icon-link"></span></a>2 Points: README</h3>
<ul><li>Readme provides link to the API (landing plage)</li>
<li>Readme includes a list of the queries that you used to fetch data</li></ul>
<h2 id="submission-instructions"><a aria-hidden="true" tabindex="-1" href="#submission-instructions"><span class="icon icon-link"></span></a>Submission Instructions</h2>
<ul><li>Submit a zip folder that includes the following:<ul><li>1 csv files</li>
<li>1 json file</li>
<li>1 readme file</li></ul></li></ul>`;
});
export {
  Activity_1 as default,
  metadata
};
