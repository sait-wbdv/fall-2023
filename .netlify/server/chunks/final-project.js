import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Final Group Project - Blog Website",
  "type": "assignment",
  "points": 45
};
const Final_project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>In this group assignment, you will work with your classmates to create a database-driven blog that features a GUI CMS.</p>
<p><strong>Grading</strong>:</p>
<ul><li>Group mark: 40 points</li>
<li>Peer evaluation: 5 points</li></ul>
<hr>
<h2 id="marking-rubric"><a aria-hidden="true" tabindex="-1" href="#marking-rubric"><span class="icon icon-link"></span></a>Marking Rubric</h2>
<h3 id="10-points-database-configuration"><a aria-hidden="true" tabindex="-1" href="#10-points-database-configuration"><span class="icon icon-link"></span></a>10 points: Database Configuration</h3>
<ul><li>Supabase has been connected to your Sveltekit app</li>
<li>Supabase is also integraded with Directus CMS</li>
<li>Data organization of imported CSV data</li>
<li>Row level security policies</li></ul>
<h3 id="10-points-cms-fields-design--deployment"><a aria-hidden="true" tabindex="-1" href="#10-points-cms-fields-design--deployment"><span class="icon icon-link"></span></a>10 points: CMS Fields Design &amp; Deployment</h3>
<ul><li>Blog post fields configuration</li>
<li>Categories are used</li>
<li>2 different types of posts</li>
<li>Content added to Directus (each person will write one blog entry)</li>
<li>Authors are added to CMS and author info is connected to the blogs
\`</li></ul>
<h3 id="10-points-sveltekit-app-visual-and-infrastructural-design"><a aria-hidden="true" tabindex="-1" href="#10-points-sveltekit-app-visual-and-infrastructural-design"><span class="icon icon-link"></span></a>10 points: Sveltekit App visual and infrastructural design</h3>
<ul><li>Dynamic routes are used for posts</li>
<li>Normal pages are used for landing pages (non dynamic)</li>
<li>High Fidelity Design Quality</li>
<li>Filtering by category is set up on the frontend</li></ul>
<h3 id="5-points-peer-evaluation"><a aria-hidden="true" tabindex="-1" href="#5-points-peer-evaluation"><span class="icon icon-link"></span></a>5 points: Peer Evaluation</h3>
<p>At the end of the Final Project, all team members must evaluate their teammates on a scale of 1-10. Each member’s mark for this portion will be the average score given to them by their teammates.</p>
<ul><li>You must submit an evaluation to receive marks for this component;</li>
<li>Evaluations will be submitted confidentially in Brightspace;</li>
<li>Your Instructor will adjust this mark based on Assigned tasks (see below) plus commits submitted to GitHub.</li></ul>
<h3 id="group-charter-gh-project"><a aria-hidden="true" tabindex="-1" href="#group-charter-gh-project"><span class="icon icon-link"></span></a>Group Charter (GH Project)</h3>
<p>To facilitate group communication and transparency, submit a <a href="https://github.com/features/issues" rel="nofollow">GitHub Project Board</a> with the following:</p>
<ol><li>Board README listing Team members and general roles and responsibilities;</li>
<li>Agile columns (i.e. To do, Doing, Done)</li>
<li>At least two or three board cards converted to <a href="https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues" rel="nofollow">Issues</a> and <a href="https://docs.github.com/en/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users" rel="nofollow">Assigned</a> to each team member that (as a group) each of you have committed to completing;</li></ol>
<hr>
<h2 id="submission-instructions"><a aria-hidden="true" tabindex="-1" href="#submission-instructions"><span class="icon icon-link"></span></a>Submission Instructions</h2>
<ul><li>Only 1 person needs to submit the project repo and deployed link</li>
<li><strong>everyone</strong> needs to submit a score for their teammates</li></ul>`;
});
export {
  Final_project as default,
  metadata
};
