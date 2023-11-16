import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Server Side Code",
  "excerpt": null,
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _19_day_19 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep</h2>
<ul><li>Read <a href="https://kit.svelte.dev/docs/server-only-modules" rel="nofollow">Server Only Modules</a></li>
<li>Read <a href="https://en.wikipedia.org/wiki/Server-side_scripting" rel="nofollow">Server Side Scripting</a></li>
<li>Read <a href="https://www.aplyca.com/en/blog/sveltekit-blurring-the-line-between-backend-and-frontend#heading-3" rel="nofollow">SveltKit: The best of Two Worlds</a></li>
<li>Watch <a href="https://www.youtube.com/watch?v=Lr9WUkeYSA8" rel="nofollow">Node.js Crash Course Express Apps</a></li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2 id="scrum-meeting">Scrum Session</h2>
<ul><li>what have you been working on?</li>
<li>what do you plan to be doing?</li>
<li>do you have any blocks?</li>
<li><strong>discussion topic</strong>: What data did you fetch or create? what was a key takeaway from that experience for you?</li></ul>
<hr>
<h2>Assignment 3: Multi Page Website (Pair Project)</h2>
<ul><li><a href="/courses/cpnt-262/assessments/assignment-3">Link to Assignment</a></li>
<li>Create a full featured multipage website.</li>
<li>Your site will have a gallery and use a third party api of your choice</li></ul>
<hr>
<h2 id="api-routes">3. Sveltekit API Routes</h2>
<p><a href="https://sait-wbdv.github.io/slides/w23/cpnt-262/http-rest.html" rel="nofollow">Slides - Introduction to Routing</a></p>
<ul><li><a href="https://youtu.be/eW8uTGspyV8" rel="nofollow">Overview Video</a><ul><li>Sveltekit features server side routes. These are great for using as API routes</li>
<li>This makes it easier to build a full featured app without the need for a separate backend</li></ul></li></ul>
<h3 id="demonstrations"><a aria-hidden="true" tabindex="-1" href="#demonstrations"><span class="icon icon-link"></span></a>Demonstrations</h3>
<ol><li>load page data in a <code>+page.js</code> file and log it</li>
<li>Create a fetch call on an api route and log it</li></ol>
<h3 id="serverjs-vs-pagejs-vs-pageserverjs"><a aria-hidden="true" tabindex="-1" href="#serverjs-vs-pagejs-vs-pageserverjs"><span class="icon icon-link"></span></a>+server.js vs +page.js vs +page.server.js</h3>
<ul><li>+server.js files should be in an <code>api/</code> directory<ul><li>these are for API routes and use GET and POST requests</li></ul></li>
<li>+page.js files should be with their respective +page.svelte files<ul><li>these are used to load page data</li>
<li><strong>do not put api keys in these files</strong></li></ul></li>
<li>+page.server.js<ul><li>only runs on the server</li>
<li>use for content that the client should never see <strong>like api keys</strong></li></ul></li></ul>
<h3 id="in-class-activity-build-api-routes"><a aria-hidden="true" tabindex="-1" href="#in-class-activity-build-api-routes"><span class="icon icon-link"></span></a>In Class Activity: Build API Routes</h3>
<ul><li>In your teams, create new routes with unique names (ie: 1 person does about/ while another does gallery)</li>
<li>In each of those folders, create \`+server.js+ files (1 per folder)</li>
<li>Use the following syntax to create a server route that will display the text</li>
<li>make a get request with the following syntax:</li>
<li>Example:<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">export function GET() &#123;
  return new Response(&quot;Hello from the API&quot;)
&#125;</code>`}<!-- HTML_TAG_END --></pre></li>
<li>Take turns pushing and pulling (or if you have been using branches, merge down)</li>
<li>Test out each others routes by running a dev server and navigating to the route</li></ul>
<hr>
<h2>Render data in a +page.svelte</h2>
<ul><li><a href="https://kit.svelte.dev/docs/routing#server-receiving-data" rel="nofollow">Recieving Data from an api route</a></li>
<li>Just like a separately hosted API, the data needs to be called into the route for use</li>
<li>use a fetch call to your api, this will allow you to make a</li>
<li>Data is passed using json, so you’ll need to use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" rel="nofollow">json.stringify</a> to handle data</li></ul>
<h4 id="activity-render-the-data-from-your-server-routes-onto-a-pagesvelte"><a aria-hidden="true" tabindex="-1" href="#activity-render-the-data-from-your-server-routes-onto-a-pagesvelte"><span class="icon icon-link"></span></a>Activity: Render the data from your server routes onto a +page.svelte</h4>
<ul><li></li></ul>
<h2 id="route-params">2. Route parameters</h2>
<ul><li>Route parameters and dynamic routes all you to create things like blogs and product pages really easily</li></ul>
<p><strong>Routing Tutorial</strong></p>
<ul><li>Review: <a href="https://learn.svelte.dev/tutorial/pages" rel="nofollow">Pages</a></li>
<li>Review: <a href="https://learn.svelte.dev/tutorial/layouts" rel="nofollow">Layouts</a></li>
<li><a href="https://learn.svelte.dev/tutorial/params" rel="nofollow">Route parameters</a></li></ul>
<p>Slides: <a href="https://sait-wbdv.github.io/slides/w23/cpnt-262/sveltekit-introduction.html#/13" rel="nofollow">Dynamic Routes</a></p>
<h3 id="key-takeaways"><a aria-hidden="true" tabindex="-1" href="#key-takeaways"><span class="icon icon-link"></span></a>Key Takeaways</h3>
<ul><li><p>Route params are variables we import from the URL with <code>[]</code>;</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">/players/[id]/+page.svelte</code>`}<!-- HTML_TAG_END --></pre>
<ul><li>This creates an <code>id</code> variable that stores the URL segment as it’s value</li></ul></li></ul>
<h4 id="activity-make-a-dynamic-route"><a aria-hidden="true" tabindex="-1" href="#activity-make-a-dynamic-route"><span class="icon icon-link"></span></a>Activity: Make a dynamic route</h4>
<ul><li>Create a dynamic route as per the docs</li>
<li>Match it to render markdown files in a content directory</li>
<li>Render a few lines of text in markdown</li>
<li>Verify that the new routes are created</li></ul>
<hr>
<h2>Node Express (a very abbreviated intro)</h2>
<ul><li>Express puts the E in <strong>MERN</strong>, <strong>MEVN</strong>, and <strong>MEAN</strong> stacks (react, vue, and angular respectively)</li>
<li>It is a server micro library</li>
<li>Modern frameworks like Sveltekit, NextJS, and NuxtJS support server side routes</li>
<li>However you may work on projects that have a separate backend (or you might just really like backend development)</li>
<li>A standalone backend will give you more control over ports and how everything works, but it’s much more challenging to configure and get working</li></ul>
<h3 id="hello-express-tutorial"><a aria-hidden="true" tabindex="-1" href="#hello-express-tutorial"><span class="icon icon-link"></span></a>Hello Express Tutorial</h3>
<ul><li>This will show you the basics of creating a server with endpoints. You would use this to create a standalone backend</li>
<li><a href="https://expressjs.com/en/starter/hello-world.html" rel="nofollow">Hello World Example</a></li></ul>
<hr>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Lab Time Activity</h2>
<ul><li>Plan your A3 site</li>
<li>Outline what your team’s objectives will be for the hackathon. These should be seen as finishable.</li>
<li>Note any particular svelte or general programming concepts you think you’ll need to work with</li>
<li>Note any 3rd party libraries or API’s you intend to use.</li></ul>`;
    }
  })}`;
});
export {
  _19_day_19 as default,
  metadata
};
