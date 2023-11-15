import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Assignment 2 - Import Data into Supabase",
  "type": "assignment",
  "points": 10
};
const Activity_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p><strong>Objectives</strong></p>
<ul><li>Import a csv into supabase</li>
<li>Set row level secruity</li>
<li>Query the data using Postman</li></ul>
<h2 id="tasks"><a aria-hidden="true" tabindex="-1" href="#tasks"><span class="icon icon-link"></span></a>Tasks</h2>
<ul><li>Create a new poject in Supabase</li>
<li>Import one of these google docs files into the database:<ul><li><a href="https://docs.google.com/spreadsheets/d/1ARDRrwVdeGgTMx5f0sLcnV6MliOf9UqYjWOEMLKOm4M" rel="nofollow">The Office</a></li>
<li><a href="https://docs.google.com/spreadsheets/d/1fl8swPUfXc1rwv73wra7XqiZBGnHOmuQovDoJ1FtMF8/edit?usp=sharing" rel="nofollow">RPG Players</a></li></ul></li>
<li>Set up row level security so everything is only READ</li>
<li>Make 4 queries of the API end point with Postman<ul><li>Document your queries and the output with a screenshot</li>
<li>label your images for easy search and according to web standards (ie: no spaces or capitalization, kebab-case or snake_case)<ul><li>labels should reflect the queries and be systematically named</li></ul></li></ul></li>
<li>Cread a readme that links all of your images in a list. List text should describe the objective of the query (the query should be visible in the image)</li>
<li>Add the api endpoint to the readme (I will use this to verify your queries)</li></ul>
<h2 id="rubric-10-points-total"><a aria-hidden="true" tabindex="-1" href="#rubric-10-points-total"><span class="icon icon-link"></span></a>Rubric 10 Points Total</h2>
<h3 id="2-points-successful-data-import"><a aria-hidden="true" tabindex="-1" href="#2-points-successful-data-import"><span class="icon icon-link"></span></a>2 Points: Successful data import</h3>
<ul><li>Data has been correctly imported into the database</li>
<li>Data is also made accessable via an endpoint</li></ul>
<h3 id="2-points-row-level-security-configuration"><a aria-hidden="true" tabindex="-1" href="#2-points-row-level-security-configuration"><span class="icon icon-link"></span></a>2 Points: Row Level Security Configuration</h3>
<ul><li>RLS principles are followed</li>
<li>Rows set to read</li></ul>
<h3 id="2-points-queries-sql-syntax-usage"><a aria-hidden="true" tabindex="-1" href="#2-points-queries-sql-syntax-usage"><span class="icon icon-link"></span></a>2 Points: Queries SQL syntax usage</h3>
<ul><li>SQL syntax has been correctly used</li>
<li>SQL recommended practices are followed</li></ul>
<h3 id="images-naming-conventions"><a aria-hidden="true" tabindex="-1" href="#images-naming-conventions"><span class="icon icon-link"></span></a>Images Naming Conventions</h3>
<ul><li>image files are named consistently</li>
<li>make an indexable, query related, or solution related naming convention</li>
<li>use snake_case or kebab-case</li></ul>
<h3 id="2-points-readme-content"><a aria-hidden="true" tabindex="-1" href="#2-points-readme-content"><span class="icon icon-link"></span></a>2 Points: README Content</h3>
<ul><li>links to images open image files or show images in markdown</li>
<li>Endpoint exists and is correct</li></ul>
<h2 id="submission-instructions"><a aria-hidden="true" tabindex="-1" href="#submission-instructions"><span class="icon icon-link"></span></a>Submission Instructions</h2>
<ul><li>Submit a zipped folder with the assets</li></ul>`;
});
export {
  Activity_2 as default,
  metadata
};
