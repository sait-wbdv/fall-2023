import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Object Methods",
  "excerpt": "We will introduce the concept of this and built in vs custom object methods. This class requires a basic understanding of functions, methods, and objects.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _09_day_9 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep</h2>
<ul><li>Read <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions" rel="nofollow">Method definitions</a></li>
<li>Reread <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects" rel="nofollow">Standard built in objects</a></li>
<li>Read <a href="https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript" rel="nofollow">how to use object methods</a> by Tania Rascia</li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="morning-activity-draft-a-pitch-for-the-hackathon"><a aria-hidden="true" tabindex="-1" href="#morning-activity-draft-a-pitch-for-the-hackathon"><span class="icon icon-link"></span></a>Morning Activity: Draft a pitch for the hackathon</h3>
<ul><li>Come up with a few potential things to work on (262-assignment 1 is a good option)<ul><li>pick topics and content focus</li>
<li>brainstorm and <strong>ideate</strong></li></ul></li>
<li><strong>Draft a sayable statement (1-2 sentences) of the problem that you are trying to solve</strong><ul><li>not code focused, what does the user get out of your app</li>
<li>It does not need to be unique. In fact it’s a good idea to do something that’s got lots of examples to work off of</li></ul></li>
<li>If you have time left over, do some research for tutorials, docs, concepts etc.</li></ul>
<hr>
<h2>1. Object Methods</h2>
<p><a href="/slides/cpnt-262/js-object-methods"><img src="/images/slides/cpnt-262/js-object-methods" alt="Object Methods"></a></p>
<h3 id="key-takeaways"><a aria-hidden="true" tabindex="-1" href="#key-takeaways"><span class="icon icon-link"></span></a>Key Takeaways</h3>
<ul><li>Objects are challenging because you cant loop through them the way you can with arrays</li>
<li>However if you need to access an object’s properties in this way, you can use these methods</li>
<li>Other object methods can be used to prevent future changes to an object’s properties, duplicate an object, and other tasks</li></ul>
<hr>
<h2>2. Creating Object Methods</h2>
<ul><li>These are different from the methods that we looked at above<ul><li>They work more like array methods instead of accessing the Object constructor</li></ul></li>
<li>Objects may need to be able to perform actions themselves</li>
<li>to do this, you can add functions into the k/v pairs of objects</li>
<li>gives access to a scoped <code>this</code></li></ul>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">const obj = &#123;
  propertyOne: &quot;Object Name&quot;,
  methodOne () &#123;
    return this.propertyOne
  &#125;
&#125;</code>`}<!-- HTML_TAG_END --></pre>
<ul><li>You can then run the method like this:</li></ul>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">console.log(obj.methodOne());</code>`}<!-- HTML_TAG_END --></pre>
<hr>
<h2>3. Local Storage</h2>
- Store information in the users&#39;s browser
- This is useful for understanding how state and advanced features will work
<h3 id="advantages-and-disadvantages"><a aria-hidden="true" tabindex="-1" href="#advantages-and-disadvantages"><span class="icon icon-link"></span></a>Advantages and Disadvantages</h3>
<ul><li>Data doesn’t expire and can be accessed offline</li>
<li>more secure than cookie storage</li>
<li>Greater storage capacity</li></ul>
<h3 id="disadvantages"><a aria-hidden="true" tabindex="-1" href="#disadvantages"><span class="icon icon-link"></span></a>Disadvantages</h3>
<ul><li>It’s synchronous (things happen 1 at a time)<ul><li>small bits of data, user won’t notice but larger amounts could cause a slowdown</li></ul></li>
<li>Don’t use to store sensitive data</li>
<li>Data can only be strings</li>
<li>Too much data will slow down the application</li></ul>
<h3 id="local-storage-cookies-session-storage"><a aria-hidden="true" tabindex="-1" href="#local-storage-cookies-session-storage"><span class="icon icon-link"></span></a><a href="https://youtu.be/GihQAC1I39Q?si=7K8VCbK_MAyeUgmA" rel="nofollow">Local Storage, Cookies, Session Storage</a></h3>
<ul><li>Difference between these two ways of storing information</li></ul>
<h3 id="in-class-demo"><a aria-hidden="true" tabindex="-1" href="#in-class-demo"><span class="icon icon-link"></span></a>In Class Demo</h3>
<ul><li>Add persistant storage to a counter</li></ul>
<hr>
<h2>4. Third Party Libraries</h2>
<ul><li>Extend your site’s functionality with third party libraries.<ul><li>these can reduce the amount of code that you manually have to write</li>
<li>this allows you to integrate different features</li>
<li>common libraries to use:<ul><li><a href="https://greensock.com/" rel="nofollow">Greensock</a>: animation</li>
<li><a href="https://lodash.com/" rel="nofollow">lodash</a>: utility functions</li>
<li><a href="https://www.chartjs.org/" rel="nofollow">chartjs</a>: data visualization</li>
<li><a href="https://momentjs.com/" rel="nofollow">momentjs</a>: manage time and dates effectively</li>
<li><a href="https://expressjs.com/" rel="nofollow">express</a>: server micro framework</li>
<li><a href="https://masonry.desandro.com/" rel="nofollow">masonry</a>: cascading grid layout library</li>
<li><a href="https://threejs.org/" rel="nofollow">Threejs</a>: 3d designs</li>
<li><a href="https://tailwindcss.com" rel="nofollow">TailwindCSS</a>: Tailwind CSS Library</li></ul></li></ul></li></ul>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="activity-experiment-with-a-library"><a aria-hidden="true" tabindex="-1" href="#activity-experiment-with-a-library"><span class="icon icon-link"></span></a>Activity: Experiment with a library</h3>
<ul><li>Pick a 3rd party library from the abovenoted list</li>
<li>Follow it’s introductory tutorial</li>
<li>Deploy a github repo featuring your work</li></ul>
<hr>
<h2><a href="/courses/cpnt-262/assessments/assignment-1">Bring a Webpage to Life with Javascript</a></h2>
<ul><li><strong>Due:</strong>: October 30th</li>
<li><strong>Weight</strong>: 20%</li>
<li><strong>Objective</strong>: Use your knowledge of JS to give a wepage better functionality</li></ul>`;
    }
  })}`;
});
export {
  _09_day_9 as default,
  metadata
};
