import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Async JS and Rest APIs",
  "excerpt": null,
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _18_day_18 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<ul><li>Read: <a href="https://www.redhat.com/en/topics/api/what-is-a-rest-api" rel="nofollow">What is a rest api</a></li>
<li>Skim: <a href="https://rapidapi.com/blog/most-popular-api/" rel="nofollow">useful rest api list</a><ul><li>find ones that are easy and interesting to use for sample work</li></ul></li>
<li><a href="https://javascript.info/async-await" rel="nofollow">async await syntax tutorial</a></li>
<li>Watch: <a href="https://www.youtube.com/watch?v=PfujVETI-i4" rel="nofollow">What is a rest api</a></li>
<li>Read <a href="https://kit.svelte.dev/docs/routing#server" rel="nofollow">Svelte server routes</a></li>
<li>Skim <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods" rel="nofollow">HTTP Request Methods</a></li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Class is Remote Today</h2>
<h2 id="scrum-meeting">Scrum Session</h2>
<ul><li>what have you been working on?</li>
<li>what do you plan to be doing?</li>
<li>do you have any blocks?</li>
<li><strong>discussion points</strong>:<ul><li>What interests you more? frontend or backend? why?</li>
<li>What kind of role do you see yourself playing in a development team?</li>
<li>Are there skills/roles that you’d like to improve on and feel ready to step a bit out of your comfort zone on?</li></ul></li></ul>
<h2>Error Handling Quick Review</h2>
<ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch" rel="nofollow">try / catch statements</a><ul><li>attempt to run code and handle an error if it fails</li></ul></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw" rel="nofollow">throw new Error()</a><ul><li>create custom error messages</li></ul></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/console/error" rel="nofollow">console.error()</a><ul><li>output more useful error messages</li></ul></li></ul>
<h3 id="example-syntax-of-all-3-methods-used-together"><a aria-hidden="true" tabindex="-1" href="#example-syntax-of-all-3-methods-used-together"><span class="icon icon-link"></span></a>Example Syntax of all 3 methods used together</h3>
<pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">"1"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">numOne<span class="token punctuation">,</span> numTwo</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> numOne <span class="token operator">!==</span> <span class="token string">"number"</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> numTwo <span class="token operator">!==</span> <span class="token string">"number"</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"at least one of the input values is not a number"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
<span class="token comment">// execute the function</span>
<span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Expected output-- Error: at least one of the input values is not a number</span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="rest-api">1. REST API</h2>
<ul><li><a href="https://youtu.be/PfujVETI-i4?si=qcRbOcBk-tRWHwz0" rel="nofollow">Explanatory Video</a><ul><li><strong>RE</strong>presentational <strong>S</strong>tate <strong>T</strong>ransfer</li>
<li>Request Types:<ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET" rel="nofollow">Get Request</a>: for retrieving data</li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST" rel="nofollow">Post Request</a>: for sending data</li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT" rel="nofollow">Put Request</a>: To replace data (update)</li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE" rel="nofollow">Delete Request</a>: to remove data (destructive)</li></ul></li></ul></li>
<li><a href="https://svelte.dev/repl/cb31be94ea444b41a11d1320d16ba6dc?version=3.32.3" rel="nofollow">Fetch Data with Svelte Intro</a><ul><li>uses <a href="https://svelte.dev/docs/svelte#onmount" rel="nofollow">onMount</a>: Runs when a component is mounted to the DOM (before lots of other stuff)</li>
<li>This example uses <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" rel="nofollow">Promises</a> with <a href="https://svelte.dev/repl/7e175db016b74c4ba4688c76114866c9?version=3.23.0" rel="nofollow">async</a> to make an asynchronous fetch call that can be rendered onto the template<ul><li>you can make these calls on front or backend, today we’ll do from the frontend and next class we’ll look at server fetch calls</li></ul></li></ul></li></ul>
<h2 id="async-js">2. Async Javascript</h2>
<ul><li>Used for functions that may take a long time such as fetching data from an api \`fetch()</li>
<li>Allows processes to happen while the async function is running</li>
<li>There are different syntaxes that have been used over time.<ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" rel="nofollow">Promises</a> where promises are chained together is a recent method</li>
<li><strong>however</strong> the modern and most effective way to write promises is with <code>async/await</code> syntax</li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function" rel="nofollow">async/await</a></li></ul></li></ul>
<h3 id="syntax-example"><a aria-hidden="true" tabindex="-1" href="#syntax-example"><span class="icon icon-link"></span></a>Syntax Example</h3>
<pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchDataFromApi</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">HTTP Error. Status: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>response<span class="token punctuation">.</span>status<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<h2>Activity</h2>
<p>In your scrum groups, create fetch calls to your choice of <a href="https://apipheny.io/free-api/" rel="nofollow">public api’s</a>. There are lots out there, this list will get you started.</p>
<ul><li>Everyone choose a different api</li>
<li>Make a client side fetch</li>
<li>Render some of the data</li></ul>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<ul><li>Assignment work time during lab</li>
<li>Book 1:1 sessions by messaging Ash on Slack</li></ul>`;
    }
  })}`;
});
export {
  _18_day_18 as default,
  metadata
};
