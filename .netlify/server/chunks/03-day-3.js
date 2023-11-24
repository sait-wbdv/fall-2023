import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Relational Databases and Supabase",
  "excerpt": null,
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _03_day_3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="watch-list"><a aria-hidden="true" tabindex="-1" href="#watch-list"><span class="icon icon-link"></span></a>Watch list</h3>
<ul><li><a href="https://www.youtube.com/watch?v=OqjJjpjDRLc" rel="nofollow">What is a Relational Database?</a></li>
<li>Free Code Camp: <a href="https://www.youtube.com/watch?v=HXV3zeQKqGY" rel="nofollow">SQL Tutorial - Full Database Course for Beginners</a> - [2:36] - <a href="https://www.youtube.com/watch?v=HXV3zeQKqGY&t=156s" rel="nofollow">What is a Database?</a> - [23:10] - <a href="https://www.youtube.com/watch?v=HXV3zeQKqGY&t=1390s" rel="nofollow">Tables &amp; Keys</a> - [43:31] - <a href="https://www.youtube.com/watch?v=HXV3zeQKqGY&t=2611s" rel="nofollow">SQL Basics</a></li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<p><strong>All classes this week are remote</strong></p>
<h2>Morning Activity</h2>
<ol><li>Pick a task app (preferably one that you use)</li>
<li>Create a table in Google sheets that has columns for each field on a task</li>
<li>Create a sample data set (5 rows)</li>
<li>Export the csv file</li></ol>
<hr>
<h2>1. Introduction to Relational Databases</h2>
<p><a href="/slides/cpnt-200/relational-db-sql"><img src="/images/slides/cpnt-200/relational-db-sql.png" alt="Slides - Relational DBs and SQL"></a></p>
<h3 id="materials"><a aria-hidden="true" tabindex="-1" href="#materials"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://www.youtube.com/watch?v=OqjJjpjDRLc" rel="nofollow">What is a Relational Database?</a></li>
<li>Free Code Camp: <a href="https://www.youtube.com/watch?v=HXV3zeQKqGY" rel="nofollow">SQL Tutorial - Full Database Course for Beginners</a> - [2:36] - <a href="https://www.youtube.com/watch?v=HXV3zeQKqGY&t=156s" rel="nofollow">What is a Database?</a> - [23:10] - <a href="https://www.youtube.com/watch?v=HXV3zeQKqGY&t=1390s" rel="nofollow">Tables &amp; Keys</a></li></ul>
<h3 id="mini-activity-create-a-second-table"><a aria-hidden="true" tabindex="-1" href="#mini-activity-create-a-second-table"><span class="icon icon-link"></span></a>Mini Activity: Create a second table</h3>
<ul><li>In the same google sheets file as last time, create another table</li>
<li>It should relate to the first one (users - posts, categories - articles…)</li>
<li>make sure it has an id and 1-2 other columns</li></ul>
<hr>
<h2>2. Introduction to SQL</h2>
<p><strong>There will be an open book SQL Syntax test on the last day of cpnt-200</strong></p>
<h3 id="materials-1"><a aria-hidden="true" tabindex="-1" href="#materials-1"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li>Free Code Camp: <a href="https://www.youtube.com/watch?v=HXV3zeQKqGY" rel="nofollow">SQL Tutorial - Full Database Course for Beginners</a> - [43:31] - <a href="https://www.youtube.com/watch?v=HXV3zeQKqGY&t=2611s" rel="nofollow">SQL Basics</a></li></ul>
<h3 id="syntax-notes"><a aria-hidden="true" tabindex="-1" href="#syntax-notes"><span class="icon icon-link"></span></a>Syntax Notes</h3>
<ul><li><a href="https://www.freecodecamp.org/news/basic-sql-commands/" rel="nofollow">Free Code Camp Article</a></li>
<li><a href="https://www.youtube.com/live/zrCLRC3Ci1c?si=xMchS-SSsAnVorwM" rel="nofollow">Harvard CS50 SQL Class</a>: Advanced video lesson. Examples use python, but the concepts apply to javascript regarding queries as well.</li></ul>
<h3 id="activity-practice-making-sql-queries-on-sqlzoo"><a aria-hidden="true" tabindex="-1" href="#activity-practice-making-sql-queries-on-sqlzoo"><span class="icon icon-link"></span></a>Activity: Practice making SQL Queries on SQLZoo</h3>
<ul><li><a href="https://sqlzoo.net/wiki/SQL_Tutorial" rel="nofollow">SQL Zoo</a><ul><li>an online site to learn and practice sql</li></ul></li>
<li>Tasks:Practice Queries 0-6</li>
<li>Write a query using syntax from one of the above activities but using <strong>your</strong> data set from google sheets</li></ul>
<hr>
<h2>Getting Started with Supabase</h2>
<p><a href="/slides/cpnt-200/supabase-introduction"><img src="/images/slides/cpnt-200/supabase-sveltekit.png" alt="Slides - Supabase with Sveltekit"></a></p>
<h3 id="helpful-videos"><a aria-hidden="true" tabindex="-1" href="#helpful-videos"><span class="icon icon-link"></span></a>Helpful Videos</h3>
<ul><li><a href="https://youtu.be/j31N0cWPvi8?si=wA2zHBdIeA8xj2C-" rel="nofollow">One to one relationships in Supabase</a></li>
<li><a href="https://youtu.be/5VrF9OVQ6rg?si=_DsgONDa5U_0Syi7" rel="nofollow">One to many relationships in Supabase</a></li></ul>
<h3 id="demo-tutorial-walkthrough"><a aria-hidden="true" tabindex="-1" href="#demo-tutorial-walkthrough"><span class="icon icon-link"></span></a>Demo: Tutorial Walkthrough</h3>
<p><em>Tasks Overview</em></p>
<ol><li>Create a project in Supabase</li>
<li>Add data to a database</li>
<li>Set up sveltekit on your computer</li>
<li>Import supabase library</li>
<li>Set up API Keys</li>
<li>configure <code>$lib/supabaseClient.js</code></li>
<li>Handle data imports with <code>+page.server.js</code> and <code>+page.svelte</code> files</li>
<li>Render the data with an <code>{#each}</code> loop</li></ol>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="activity-1-set-up-a-todo-app-in-supabase-and-sveltekit"><a aria-hidden="true" tabindex="-1" href="#activity-1-set-up-a-todo-app-in-supabase-and-sveltekit"><span class="icon icon-link"></span></a>Activity 1: Set up a TODO App in Supabase and Sveltekit</h3>
<ul><li><a href="https://youtu.be/DEGHlIRuIP8?si=NqjrkvS_vhf-zos2" rel="nofollow">Tutorial Video Series</a></li></ul>
<h3 id="activity-2-add-csv-files-to-supabase"><a aria-hidden="true" tabindex="-1" href="#activity-2-add-csv-files-to-supabase"><span class="icon icon-link"></span></a>Activity 2: Add CSV files to Supabase</h3>
<ol><li>copy data table from google sheets into supabase - Use the docs <a href="https://supabase.com/docs/guides/database/tables" rel="nofollow">here</a> for support</li>
<li>using the steps from the demo, import the data into sveltekit</li>
<li>console.log() your data</li>
<li>pass the data to a frontend page and render something from it</li></ol>`;
    }
  })}`;
});
export {
  _03_day_3 as default,
  metadata
};
