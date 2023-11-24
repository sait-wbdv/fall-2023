import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Content Management Systems",
  "excerpt": null,
  "status": "announced"
};
const { title, excerpt, status } = metadata;
const _05_day_5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {})}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2><a href="/courses/cpnt-200/assessments/activity-2">Assignment 2</a></h2>
- Due date: Monday November 27th
- Focus: Importing data into supabase
<h2>Intro to Content Management</h2>
<ul><li>We’ve been using locally hosted files in our websites for data. However this is not sustainable for many projects<ul><li>issues:<ul><li>you need to be a coder to be able to edit page data</li>
<li>page data isn’t stored in a structured environment and requires editing template files to change things</li>
<li>Data in data.js type files requires going in and editing them</li></ul></li>
<li>solutions:<ul><li>host data in a database (as we’ve started to learn how to do)</li>
<li>set up a CMS that provides a user friendly way to edit, update, and access data<ul><li>ie: Wordpress</li></ul></li></ul></li></ul></li>
<li>A CMS (content management system) is a way to solve these issues</li>
<li>Popular CMS’ include: Wordpress, Drupal, Strapi, Sanity…</li>
<li>Traditionally CMS’ like Wordpress bundles the actual data with the presentation through a theme</li></ul>
<h3 id="headless-vs-monolithic-cms-architecture"><a aria-hidden="true" tabindex="-1" href="#headless-vs-monolithic-cms-architecture"><span class="icon icon-link"></span></a>Headless vs Monolithic CMS Architecture</h3>
<ul><li>Video: <a href="https://www.youtube.com/watch?v=-Uor3I0n_vQ" rel="nofollow">What’s the point of a headless CMS</a></li>
<li>Traditional cms’ are heavy and susceptible to attack, their plugin systems offer a lot of customizability but also introduce vulnerabilities, bloat, and pay walls</li>
<li>Headless CMS’, while taking more initial setup time offer:<ul><li>lighter deployment</li>
<li>separation of data from presentation</li>
<li>added security</li>
<li>better developer experience</li>
<li>cheaper to run</li>
<li>more customizability</li></ul></li>
<li>However the drawbacks are:<ul><li>the project will need a developer (this is good for us, and actually good for client even if they don’t see it)</li>
<li>more setup time is required</li>
<li>more decisions need to be made at the beginning</li>
<li>initial setup time can be longer</li></ul></li></ul>
<hr>
<h2>Our Stack: Supabase + Directus</h2>
<ul><li><strong><a href="https://supabase.com/" rel="nofollow">Supabase</a>: Database</strong></li>
<li><strong><a href="https://directus.io/" rel="nofollow">Directus</a>: Content Management Interface</strong></li>
<li><a href="https://kit.svelte.dev" rel="nofollow">Sveltekit</a>: Frontend</li>
<li><a href="https://netlify.com" rel="nofollow">Nelify</a>: Deployment</li>
<li><a href="https://github.com" rel="nofollow">Github</a>: Code Storage</li></ul>
<h3 id="what-does-directus-do-and-how-are-we-using-it"><a aria-hidden="true" tabindex="-1" href="#what-does-directus-do-and-how-are-we-using-it"><span class="icon icon-link"></span></a>What does Directus do? and how are we using it</h3>
<ul><li>Directus is an open source headless CMS</li>
<li>Allows you rto build an interface for adding, deleting, modifying information in the database</li>
<li>While it has it’s own hosting, that costs money, so we are using it as an NPM project just like our website. <strong>we configure it to connect to supabase</strong><ul><li>benefits of this: it gives you the power and freedom of supabase, with the user friendly (especially for non devs) content editing experience</li></ul></li></ul>
<h3 id="demo-set-up-and-configure-directussupabase"><a aria-hidden="true" tabindex="-1" href="#demo-set-up-and-configure-directussupabase"><span class="icon icon-link"></span></a>Demo: Set up and configure Directus+Supabase</h3>
<ul><li><a href="https://supabase.com/partners/integrations/directus" rel="nofollow">Tutorial</a></li></ul>
<h3 id="activity-connect-directus-to-supabase"><a aria-hidden="true" tabindex="-1" href="#activity-connect-directus-to-supabase"><span class="icon icon-link"></span></a>Activity: Connect directus to Supabase</h3>
<ul><li>using the deployed supabase project from last class</li>
<li>set up directus as per the tutorial instructions</li>
<li>run directus locally</li></ul>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {})}`;
});
export {
  _05_day_5 as default,
  metadata
};
