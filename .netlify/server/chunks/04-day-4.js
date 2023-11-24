import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "More Supabase and a DB Security Primer",
  "excerpt": null,
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _04_day_4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep</h2>
<h3 id="reading-list"><a aria-hidden="true" tabindex="-1" href="#reading-list"><span class="icon icon-link"></span></a>Reading list</h3>
<ul><li>Supabase Documentation: - <a href="https://supabase.com/docs/guides/database/tables" rel="nofollow">Tables and Data</a> - <a href="https://supabase.com/docs/guides/auth/row-level-security" rel="nofollow">Row Level Security</a> - Reference: <a href="https://supabase.com/docs/reference/javascript/introduction" rel="nofollow">Javascript Client Library</a></li></ul>
<h3 id="watch-list"><a aria-hidden="true" tabindex="-1" href="#watch-list"><span class="icon icon-link"></span></a>Watch list</h3>
<p><strong>Supabase Auth Deep Dive</strong></p>
<ul><li><a href="https://supabase.com/docs/learn/auth-deep-dive/auth-deep-dive-jwts" rel="nofollow">Part One: JWTs</a></li>
<li><a href="https://supabase.com/docs/learn/auth-deep-dive/auth-row-level-security" rel="nofollow">Part Two: Row Level Security</a></li>
<li><a href="https://supabase.com/docs/learn/auth-deep-dive/auth-policies" rel="nofollow">Part Three: Policies</a></li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2><a href="/courses/cpnt-200/assessments/activity-1">Assignment 1</a></h2>
- Due Friday November 24th
- Organize data in csv and json files
- Fetch data using Postman
<hr>
<h2><a href="/courses/cpnt-200/assessments/final-project">Final Project</a></h2>
- Due: Monday December 4th 
- Create a blog using directus, supabase, sveltekit, and skeletonUI
- TIP: Use work done with your team for the smaller assignments
<h2>1. Demo: RLS and Policies</h2>
<dl><dt>RLS</dt><dd>Row-level Security is PostgreSQL&#39;s (the database engine used by Supabase) method of auth for each row of a database table.</dd><dt>Access Policies</dt><dd>PostgreSQL&#39;s method of allowing access to each row in a database table.</dd></dl>
<h3 id="instructions"><a aria-hidden="true" tabindex="-1" href="#instructions"><span class="icon icon-link"></span></a>Instructions</h3>
<ol><li>Open Postman in the browser and sign-in;</li>
<li>In Supabase, go to API Docs → <code>counties</code> and scroll down to <code>Insert rows</code> or <code>Update</code> rows;</li>
<li>In the top right column click <code>Bash</code>;</li>
<li>Copy the command you want to use;</li>
<li>Paste this into the Address field in Postman and:<ul><li>change the URL to <code>https://szwovebnfgeezuwjnmyz.supabase.co/rest/v1/countries</code></li>
<li>if “updating”, change <code>some_column</code> to <code>name</code> and <code>eq.someValue</code> to <code>eq.Canada</code> (or similar);</li>
<li>under Headers copy/past the apiKey you Instructor pasted in the Zoom chat where it says SUPABASE_KEY</li>
<li>under body: change JSON to match the column and value that you want to change/insert;</li></ul></li>
<li>Press SEND!</li></ol>
<h3 id="key-takeaways"><a aria-hidden="true" tabindex="-1" href="#key-takeaways"><span class="icon icon-link"></span></a>Key Takeaways</h3>
<ul><li>If RLS is disabled on a table, anyone can read/write/edit records in the table.</li>
<li>Once RLS is enabled on a table, <em>no one</em> can read/write/edit records in a table.</li>
<li>A Policy is required on RLS-enabled tables before anyone can read/write/edit records in a table.</li></ul>
<p>It this course we will <em>enable</em> RLS and set Policies so that anyone with an <anon>token can read a table but no one can write or edit a table unless they are using the admin panel.</anon></p>
<hr>
<h2>2. Authentication vs Authorization</h2>
<p><a href="https://sait-wbdv.github.io/slides/w23/cpnt-200/authentication-authorization.html" rel="nofollow"><img src="/images/slides/authentication-vs-authorization.png" alt="Slides - Authentication vs Authorization"></a></p>
<h3 id="materials"><a aria-hidden="true" tabindex="-1" href="#materials"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://supabase.com/docs/learn/auth-deep-dive/auth-deep-dive-jwts" rel="nofollow">Part One: JWTs</a></li>
<li><a href="https://supabase.com/docs/learn/auth-deep-dive/auth-row-level-security" rel="nofollow">Part Two: Row Level Security</a></li>
<li><a href="https://supabase.com/docs/learn/auth-deep-dive/auth-policies" rel="nofollow">Part Three: Policies</a></li></ul>
<h3 id="key-takaways"><a aria-hidden="true" tabindex="-1" href="#key-takaways"><span class="icon icon-link"></span></a>Key Takaways</h3>
<ul><li>In <em>Supabase</em>: - Authentication happens first with the <anon><code>apiKey</code> token. - Authorization happens second with the <code>Authorization</code> Bearer token.</anon></li>
<li>Even if RLS is <em>Disabled</em>, users still need an <anon>API key to read or make changes to a database table.</anon></li></ul>
<hr>
<h2>3. Importing a database using CSVs</h2>
<h3 id="materials-1"><a aria-hidden="true" tabindex="-1" href="#materials-1"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://docs.google.com/spreadsheets/d/1fl8swPUfXc1rwv73wra7XqiZBGnHOmuQovDoJ1FtMF8/edit?usp=sharing" rel="nofollow">RPG Players</a></li></ul>
<h3 id="instructions-1"><a aria-hidden="true" tabindex="-1" href="#instructions-1"><span class="icon icon-link"></span></a>Instructions</h3>
<ol><li>Export each Google Sheet as a CSV file;</li>
<li>In Supabase, create each table by importing its respective CSV and: - <em>Enable</em> RLS; - set <code>id</code> as primary; - set an appropriate data type (use <code>text</code> instead of <code>varchar</code>); - allow <code>NULL</code> as needed.</li>
<li>Add appropriate foreign keys for all one-to-many relationships;</li>
<li>Add a policy to each table that allows anyone to read the table.</li></ol>
<hr>
<h2>Deplyment to Netlify</h2>
<h3 id="environment-variables"><a aria-hidden="true" tabindex="-1" href="#environment-variables"><span class="icon icon-link"></span></a>Environment Variables</h3>
<ul><li>These are how you set up your api keys on netlify or any other serverless hosting platform. Services like Mongo Atlas, Wordpress, AWS and others will have similar approaches (but with potentially different features and tasks)</li>
<li>Just like how we use a <code>.env</code> file for API keys, in netlify when you’re setting up a project, you add environment variables to your netlify deployment</li>
<li><strong>note</strong> Frameworks have variations on the syntax used to import and access keys from .env files, refer to documentation when needed</li></ul>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h4 id="activity-deploy-your-demo-site-to-netlify"><a aria-hidden="true" tabindex="-1" href="#activity-deploy-your-demo-site-to-netlify"><span class="icon icon-link"></span></a>Activity: Deploy your demo site to netlify</h4>
<ol><li>Make sure your repo is up to date and pushed</li>
<li>In netlify create a new project and connect it to your repo</li>
<li>when setting it up, add the environment variable key values that you have in your .env file</li>
<li>run deploy</li></ol>
<p><strong>NOTE</strong>: you can add environment variables or change them after the fact</p>`;
    }
  })}`;
});
export {
  _04_day_4 as default,
  metadata
};
