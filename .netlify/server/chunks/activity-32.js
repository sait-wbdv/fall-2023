import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Graded Activity 3 - Objects and Arrays",
  "excerpt": "Organize data into objects and arrays. Use built in methods to access and manipulate their data.",
  "points": 5,
  "type": "assignment",
  "status": "published"
};
const Activity_3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Overview</h2>
<p>In this activity, we will develop our understanding of how to use objects and arrays effectively. You will need to create an array and an object and render content from them by using their respective methods.</p>
<h2>Instructions</h2>
<ol><li>Create a new github repo</li>
<li>Inside it there should be 3 files:<ul><li>index.html</li>
<li>client.js</li>
<li>README.md</li></ul></li>
<li>Set up your HTML file and import the <code>client.js</code> file in the head tag with a defer attribute added</li>
<li>Create an array and a few objects</li>
<li>use array and object methods to extract specific information to render</li>
<li>render variables onto your html page</li>
<li>In your comments, note a practical use case for the code that you’ve used (what you’ve done doesn’t need to necessarily be a full version)</li></ol>
<h3 id="display-andor-modify-your-array-with-3-of-the-following-methods"><a aria-hidden="true" tabindex="-1" href="#display-andor-modify-your-array-with-3-of-the-following-methods"><span class="icon icon-link"></span></a>Display and/or modify your array with 3 of the following methods</h3>
<ul><li>Add to an array using the <code>.push()</code> or \`.unshift() method</li>
<li>Remove from an array using the <code>.pop()</code> or <code>.shift()</code> method</li>
<li>Merge two arrays together with <code>.concat()</code></li>
<li>Return a portion of an array with <code>.slice()</code> or <code>.splice()</code></li>
<li>Return only specific elements of an array with <code>.filter()</code> or <code>.find()</code></li>
<li>Verify if elements exist in an array with <code>.includes()</code>, .<code>every()</code>, or <code>.some()</code></li></ul>
<h3 id="display-andor-modify-your-object-with-3-of-the-following-methods"><a aria-hidden="true" tabindex="-1" href="#display-andor-modify-your-object-with-3-of-the-following-methods"><span class="icon icon-link"></span></a>Display and/or modify your object with 3 of the following methods</h3>
<ul><li>Create and log an array of the values of your object with <code>Object.values()</code></li>
<li>Create and log an array of all the keys of your object with <code>Object.keys()</code></li>
<li>Create a nested array from your object by using <code>Object.entries()</code></li>
<li>Reduce an object’s editability with <code>Object.freeze()</code> or <code>Object.seal()</code></li>
<li>Create a new object with the <code>new Object()</code> syntax</li>
<li>remove a key-value pair from an object with the <code>delete</code> keyword</li></ul>
<hr>
<h2>Rubric</h2>
<h3 id="3-points-content-application"><a aria-hidden="true" tabindex="-1" href="#3-points-content-application"><span class="icon icon-link"></span></a>3 Points: Content Application</h3>
<ul><li>A note on potential practical use cases for each render</li>
<li>3 Array Methods</li>
<li>2 Object Methods</li>
<li>README journal entry</li></ul>
<h3 id="2-points-code-quality"><a aria-hidden="true" tabindex="-1" href="#2-points-code-quality"><span class="icon icon-link"></span></a>2 Points: Code Quality</h3>
<ul><li>Uses camelCase correctly</li>
<li>Spacing and Indentation</li>
<li>Code Commenting</li>
<li>Code works</li></ul>
<h2>Submission Instructions</h2>
<ol><li>As a comment in D2L: share links to make it easy for the instructor to quickly evaluate your work:<ul><li>GH repos, Pages, Projects (Beta), etc.</li>
<li>Codepens, Figma, FigJam, etc.</li></ul></li>
<li>Double check the Activity for specific instructions.</li>
<li>If applicable, include a README containing the following;<ul><li>Activity name and author;</li>
<li>Attributions: Did anyone help you? Give credit to any classmates, articles, tutorials, etc that helped you complete this project.</li>
<li>Include self-assessments, observations, research, etc under the heading “Code Journal” in your README.</li></ul></li>
<li>Zip project repo and submit it.</li></ol>`;
});
export {
  Activity_3 as default,
  metadata
};
