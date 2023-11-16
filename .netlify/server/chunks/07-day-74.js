import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "String & Array Methods",
  "excerpt": "We will expand our knowledge of built in string and array methods by comparing the two.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _07_day_7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep</h2>
<ul><li>Look up javascript string methods<ul><li>try to use 5 of them with sample content in a js file</li>
<li>note at least 1 example per method of an application of where it would be useful.</li></ul></li>
<li>Try the <a href="https://www.freecodecamp.org/news/complete-introduction-to-the-most-useful-javascript-array-methods/" rel="nofollow">Javascript array methods tutorial</a></li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="morning-activity-algorithms-in-everyday-life-15-minutes"><a aria-hidden="true" tabindex="-1" href="#morning-activity-algorithms-in-everyday-life-15-minutes"><span class="icon icon-link"></span></a>Morning Activity: Algorithms in Everyday Life (15 minutes)</h3>
<p><strong>Focus</strong>: Activities or tasks that involve things/people being grouped in some way</p>
<ol><li>Create a flowchart of something that you enjoy doing using the instructions linked below (15 minutes)</li>
<li>Briefly discuss your findings:<ul><li>What activity did you document? What step(s) did you break down into micro steps?</li>
<li><strong>Walk each other through your steps</strong></li>
<li>When broken into micro steps, did you underestimate how complex the activity actually was?</li></ul></li></ol>
<a href="https://gist.github.com/lilyx13/423ffbe6e8da87497b134985ba90ab15"><h3>Instructions Link</h3>
  <img src="/images/qr-codes/algorithm-activity.png" alt="activity qr code" class="w-48"></a>
<hr>
<h2>String Methods</h2>
<p><a href="/slides/cpnt-262/js-strings"><img src="/images/slides/cpnt-262/js-strings.png" alt="Slides - Javascript strings"></a></p>
<h3 id="key-takeaways"><a aria-hidden="true" tabindex="-1" href="#key-takeaways"><span class="icon icon-link"></span></a>Key Takeaways</h3>
<ul><li>JS can convert strings into a String object<ul><li>which includes an array for each character of the string</li>
<li>string methods for searching and manipulating strings</li></ul></li></ul>
<h3 id="activity-string-method-practice"><a aria-hidden="true" tabindex="-1" href="#activity-string-method-practice"><span class="icon icon-link"></span></a>Activity: String method practice</h3>
<p>In pairs, practice using string methods:</p>
<ol><li>Go to wikipedia and choose a sentence or phrase that interests you (or doesn’t);</li>
<li>In a new <code>client.js</code> file, create a <code>string</code> variable containing your selected phrase;</li>
<li>Try using the following string methods on your phrase:<ul><li>Using <code>String.length</code>, log the sentence “This phrase has Number characters”, replacing <code>[Number]</code> with the actual number of characters in the <code>string</code>.</li>
<li>Using <code>String.startsWith()</code>, log a <code>true</code> or <code>false</code> based on whether or not the the word “The” (or similar) matches the start of the <code>string</code>.</li>
<li>Using <code>String.endsWith()</code>, log whether or not the <code>string</code> is a question.</li>
<li>Using <code>String.includes()</code>, log a <code>true</code> or <code>false</code> based on whether or not the <code>string</code> contains the word “the” (or similar).</li>
<li>Using <code>String.indexOf()</code>, log the <code>index</code> of the first matching word (i.e. “the”) found in the <code>string</code>.</li>
<li>Add the <code>&lt;textarea&gt;</code> counter back into the starter form.</li>
<li>Using <code>String.split()</code>, log each character in the <code>string</code> as an array.</li></ul></li></ol>
<hr>
<h2>Array Methods</h2>
<ul><li>TODO: Edit slides</li></ul>
<p><a href="/slides/cpnt-262/js-higher-order-array-methods"><img src="/images/slides/cpnt-262/js-higher-order-array-methods.png" alt="Slides - Javascript strings"></a></p>
<h3 id="key-takeaways-1"><a aria-hidden="true" tabindex="-1" href="#key-takeaways-1"><span class="icon icon-link"></span></a>Key Takeaways</h3>
<ul><li>JS provides powerful methods for editing array elements</li>
<li><code>.forEach()</code>, <code>.map()</code>, <code>.filter()</code>, <code>.reduce()</code>, <code>.slice()</code>, <code>.sort()</code>, <code>.includes()</code> are all highly specialized</li>
<li>use array methods when possible for elegant code</li></ul>
<h3 id="todo-activity-array-method-experiment"><a aria-hidden="true" tabindex="-1" href="#todo-activity-array-method-experiment"><span class="icon icon-link"></span></a>TODO: Activity: Array Method Experiment</h3>
<ul><li>In your scrum groups, divide up some array methods and review their respective documentation</li>
<li>Come up with 2-3 potential use cases for each (feel free to search online for ideas)</li>
<li>Code a small POC for 4 of the array methods above</li>
<li>Demonstrate the POCs to each other</li>
<li>Class Presentations<ul><li>each team will then show 1 of their examples to the class</li></ul></li></ul>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="end-of-day-activity-recreate-morning-algorithm-in-js"><a aria-hidden="true" tabindex="-1" href="#end-of-day-activity-recreate-morning-algorithm-in-js"><span class="icon icon-link"></span></a>End of Day Activity: Recreate Morning Algorithm in JS</h3>
<ul><li><strong>Focus</strong>: Use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" rel="nofollow">array methods</a> or string methods depending on the situation.</li>
<li>Suggestion: Create two arrays of objects that need to pass values between one another</li></ul>
<a href="https://gist.github.com/lilyx13/c81f1e72f83586efcd97206b806fd494"><h3>Instructions Link</h3>
  <img src="/images/qr-codes/algorithm-followup-activity.png" alt="activity qr code" class="w-48"></a>
<hr>
<h2><a href="/courses/cpnt-262/assessments/activity-4">Graded Activity 4: Loops and Conditionals</a></h2>
<ul><li><strong>Due:</strong>: October 24nd</li>
<li><strong>Weight</strong>: 10%</li>
<li><strong>Objective</strong>: Create small algorithms that use conditionals and loops</li></ul>`;
    }
  })}`;
});
export {
  _07_day_7 as default,
  metadata
};
