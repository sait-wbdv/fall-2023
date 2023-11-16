import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "User Testing and Maintainable Designs",
  "excerpt": "This lesson will give you practical experience conducting user tests. We will learn to use design tool features that make adjusting designs easier. The objective is to be able to make designs that can be edited in response to feedback.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _07_day_7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep Materials</h2>
<ul><li>Watch <a href="https://youtu.be/r3j_dwMbLo0?si=P8CyrIDUvUzmFsWj" rel="nofollow">User Testing vs Usability Testing</a> for context on user tests</li>
<li>Watch <a href="https://youtu.be/1UCDUOB_aS8?si=ZhJqExlhnVjRxMdH" rel="nofollow">Steve Krug’s Demo Usability Test</a> for an example of a full user test session</li>
<li>Skim <a href="https://www.nngroup.com/articles/design-systems-101/" rel="nofollow">Design Systems 101</a> for information on design systems</li>
<li>Read <a href="https://help.figma.com/hc/en-us/articles/360038746534-Create-color-text-effect-and-layout-grid-styles" rel="nofollow">Colors, text, effects, and layouts in Figma</a> for details about setting up a design system in Figma</li></ul>
<hr>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Teams Standups</h2>
<ul><li>In each block of dsgn-270, you’ll have a group of 3-4 with whom you’ll discuss what your working on and how it’s going</li>
<li>The objective of this is to get comfortable talking about your progress, issues you’re running into, and your workflow</li></ul>
<h3 id="each-person-takes-a-turn-to-answer-the-following-questions"><a aria-hidden="true" tabindex="-1" href="#each-person-takes-a-turn-to-answer-the-following-questions"><span class="icon icon-link"></span></a>Each person takes a turn to answer the following questions:</h3>
<ol><li>What did you do yesterday?</li>
<li>What will you do today?</li>
<li>Anything blocking your progress?</li></ol>
<hr>
<h2>In Class Usability Test</h2>
<h3 id="participants"><a aria-hidden="true" tabindex="-1" href="#participants"><span class="icon icon-link"></span></a>Participants</h3>
<ul><li>1 Volunteer to be the test subject</li>
<li>4 Volunteers to represent the dev team</li></ul>
<h3 id="process"><a aria-hidden="true" tabindex="-1" href="#process"><span class="icon icon-link"></span></a>Process</h3>
<p><em>Note that the test subject isn’t normally sitting infront of a whole classroom</em></p>
<ol><li>Introduction &amp; Consent Process</li>
<li>Walkthrough of the home page</li>
<li>Test Tasks</li>
<li>Wrap up</li>
<li>Team debrief (in figjam)<ul><li>Team to discuss issues they saw the user run into</li>
<li>Note the percieved severity of the issue(s)</li>
<li>Brainstorm potential fixes</li></ul></li></ol>
<hr>
<h2>How to Conduct a Usability Test</h2>
<a href="https://docs.google.com/presentation/d/11nmiZ5FjS70B7wdyKxfg5O-RkC1Var1DhFil2e50jLU/edit?usp=sharing"><img src="/images/design/usability-test-slides.png" alt="Slideshow for usability testing"></a>
<h3 id="key-takeaways-and-final-notes"><a aria-hidden="true" tabindex="-1" href="#key-takeaways-and-final-notes"><span class="icon icon-link"></span></a>Key Takeaways and Final Notes</h3>
<ul><li>Test often and prioritize small focused tests over big tests</li>
<li>Use usability testing to discover problems before they are too difficult to fix</li>
<li>Don’t get defensive and fight the urge to explain the interface to your test subjects</li>
<li>Whenever possible, get as many of your teammates to participate as observers</li>
<li>Take time to debrief as soon after the test as possible</li></ul>
<hr>
<h2>Student Led Usability Tests</h2>
<p>The rest of class will provide you with opportunities to conduct usability tests. Feel free to use <strong>your own</strong> or any other sites. By the end of the day, you should have conducted and debriefed from 2-3 tests.</p>
<h3 id="preparations"><a aria-hidden="true" tabindex="-1" href="#preparations"><span class="icon icon-link"></span></a>Preparations</h3>
<ul><li>In your scrum group, decide on 2-3 sites to test</li>
<li>Determine your roles (tester, test subject, observers (devs, designers))</li>
<li><strong>Test subject should not be present for the task question planning</strong></li>
<li>Pick the tasks that you want your user to test</li></ul>
<h3 id="the-test"><a aria-hidden="true" tabindex="-1" href="#the-test"><span class="icon icon-link"></span></a>The Test</h3>
<ul><li>Follow the pattern noted above</li></ul>
<h3 id="debrief"><a aria-hidden="true" tabindex="-1" href="#debrief"><span class="icon icon-link"></span></a>Debrief</h3>
<ul><li>For the debrief, any member of the team can host it</li>
<li>Test Subjects can meet in the test subject area and debrief on their experiences as well<ul><li><a href>Class wide test subject debrief board</a> <strong>TO BE ENABLED DAY OF CLASS</strong></li></ul></li></ul>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status, dueDate: false }, {}, {
    default: () => {
      return `<h3 id="graded-activity-conduct-a-userusability-test"><a aria-hidden="true" tabindex="-1" href="#graded-activity-conduct-a-userusability-test"><span class="icon icon-link"></span></a>Graded Activity: <a href="/courses/dsgn-270/assessments/graded-activities">Conduct a User/Usability Test</a></h3>
<ul><li><strong>Due Monday October 30 2023</strong></li>
<li><strong>Weight: 10%</strong></li>
<li>Conduct a small user test</li>
<li>Practice managing feedback</li></ul>`;
    }
  })}`;
});
export {
  _07_day_7 as default,
  metadata
};
