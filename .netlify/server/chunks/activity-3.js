import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Assignment 3 - Content Management Configuration",
  "type": "assignment",
  "points": 20
};
const Activity_3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p><strong>Objectives</strong></p>
<ul><li>Set up a simple blog CMS UI</li>
<li>Connect Directus Headless CMS to Supabase</li>
<li>Fetch blog data in Sveltekit</li></ul>
<h2 id="steps"><a aria-hidden="true" tabindex="-1" href="#steps"><span class="icon icon-link"></span></a>Steps</h2>
<ul><li>Follow the <a href="https://supabase.com/partners/integrations/directus" rel="nofollow">official guide</a> to connect directus to supabase</li>
<li>In Directus, set up a schema for a blog post<ul><li>it should include these fields:<ul><li>Title</li>
<li>Author</li>
<li>Tags</li>
<li>Rich text or markdown content for body</li>
<li>Summary</li>
<li>Date</li></ul></li></ul></li>
<li>Create one blog post<ul><li>content can be 100% lorem ipsum style</li>
<li>use all the fields</li></ul></li>
<li>Set up a sveltekit app<ul><li>we will only use the main page (no new routes)</li>
<li>styling is not necessary beyond making sure the content is recognizable</li></ul></li>
<li>Set up the API Endpoint in Sveltekit</li>
<li>Fetch your blog post</li>
<li>Render the blog information onto the index page</li>
<li>Deploy to netlify</li></ul>
<h3 id="resources"><a aria-hidden="true" tabindex="-1" href="#resources"><span class="icon icon-link"></span></a>Resources</h3>
<ul><li><a href="https://docs.netlify.com/integrations/frameworks/sveltekit/" rel="nofollow">Netlify and Sveltekit Server Routes</a></li></ul>
<h2 id="marking-rubric"><a aria-hidden="true" tabindex="-1" href="#marking-rubric"><span class="icon icon-link"></span></a>Marking Rubric</h2>
<h3 id="5-points-directus-supabase-sveltekit-configuration"><a aria-hidden="true" tabindex="-1" href="#5-points-directus-supabase-sveltekit-configuration"><span class="icon icon-link"></span></a>5 Points: Directus, Supabase, Sveltekit Configuration</h3>
<ul><li>All 3 platforms are connected to one another</li>
<li>Access permissions are configured correctly</li>
<li>Platforms are all set up according to up to date instructions</li></ul>
<h3 id="5-points-blog-post-schema-and-sample-content"><a aria-hidden="true" tabindex="-1" href="#5-points-blog-post-schema-and-sample-content"><span class="icon icon-link"></span></a>5 Points: Blog post schema and sample content</h3>
<ul><li>Correct fields chosen for the blog post content</li>
<li>Sample post has been created</li>
<li>Schema is accessable</li>
<li>Data is secure on supabase side (Read only API used for Sveltekit)</li></ul>
<h3 id="5-points-blog-post-fetch-and-render"><a aria-hidden="true" tabindex="-1" href="#5-points-blog-post-fetch-and-render"><span class="icon icon-link"></span></a>5 Points: Blog post fetch and render</h3>
<ul><li>Read only api endpoint used with sveltekit and netlify (see link in resources)</li>
<li>Sample Data (lorem ipsum) is fetched in the svelte server route</li>
<li>Sample data (lorem ipsum) is rendered on page</li>
<li>Doesn’t need to look good, just needs to be readable</li></ul>
<h2 id="submission-instructions"><a aria-hidden="true" tabindex="-1" href="#submission-instructions"><span class="icon icon-link"></span></a>Submission Instructions</h2>
<ul><li>Submit a link to your deployed website</li>
<li>Also submit a read only link to your supabase endpoint</li></ul>`;
});
export {
  Activity_3 as default,
  metadata
};
