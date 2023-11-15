import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Usability and Web Design",
  "excerpt": "Learn about how people navigate the web, and the things you can do to make it a positive experience for your users.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _02_day_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2 id="draw-toast">Draw Toast Activity</h2>
<p><img src="/images/qr-codes/dsgn/draw-toast-activity.png" alt="Draw Toast Activity">
<a href="https://gamestorming.com/draw-toast/#:~:text=On%20paper%20or%20index%20cards,have%20about%20the%20various%20drawings." rel="nofollow">Link to activity</a></p>
<h3 id="tedtalk-on-draw-toast"><a aria-hidden="true" tabindex="-1" href="#tedtalk-on-draw-toast"><span class="icon icon-link"></span></a><a href="https://www.ted.com/talks/tom_wujec_got_a_wicked_problem_first_tell_me_how_you_make_toast?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare" rel="nofollow">Tedtalk on Draw Toast</a></h3>
<hr>
<h2 id="mental-models">Mental Models</h2>
<p>The concept of mental models is useful for discovering how people relate to the methods they use to forage for information on the web. Especially when people have to learn to use a newer piece of technology. They will usually model their approach to it based on something familiar.</p>
<h3 id="watch-mental-models"><a aria-hidden="true" tabindex="-1" href="#watch-mental-models"><span class="icon icon-link"></span></a>Watch <a href="https://youtu.be/9gM8K4ooavY?si=Ei0WtVbFN4-N-jvu" rel="nofollow">Mental Models</a></h3>
<h2 id="usability">An Introduction to Usability</h2>
<p><a href="https://docs.google.com/presentation/d/1dQJo15UfAux64_-mvi-CjAnslWJXlwoKuCnNjq5sT6k/edit?usp=sharing" rel="nofollow"><img src="/images/design/usability-5-components.png" alt="Usability Slides"></a></p>
<h3 id="usability-is-a-full-stack-responsibility"><a aria-hidden="true" tabindex="-1" href="#usability-is-a-full-stack-responsibility"><span class="icon icon-link"></span></a>Usability is a full stack responsibility</h3>
<ul><li>While most discusson on usability focuses on the frontend, information architecture can also inform usability.</li>
<li>Backend response times to deliver data heavily impact a user’s experience of interaction cost</li>
<li>Usability work extends to things like how a CMS is set up for content editors to work</li>
<li>Learn to practice web development with usability in mind. But don’t let the perfect become the enemy of the good - that’s why we develop software in cycles</li></ul>
<h2 id="user-interface-elements">User Interface Design</h2>
<p><a href="https://docs.google.com/presentation/d/1w7xdPlt0t1FGJ5EgQcLrnXjKWT3u58lG6WczhHF3oC0/edit?usp=sharing" rel="nofollow"><img src="/images/design/user-interface-intro-slide.png" alt="User Interface Lesson"></a></p>
<ul><li>When planning a site or app, it’s important to take time to plan out (even if minimally) these visual aspects:<ul><li>Theme of the site (this is heavily influenced by brand and site identity)</li>
<li>Necessary ui elements (reusable patterns for displaying content)</li>
<li>Design assets (at minimum, colors and fonts)</li></ul></li></ul>
<h2 id="draw-a-user-flow">Draw a user flow</h2>
<p>This is essentially the same activity as our Draw Toast from this morning. However instead of mapping out how to make toast, we will map out our own mental models of how to shop online.</p>
<ol><li>Follow the same instructions as our morning activity (and without looking at an example on the web), map out how you would go about shopping and buying something online.</li>
<li>Next in pairs, search up an online shopping site. <strong>try to find something other than Amazon</strong></li>
<li>Walk through it’s user flow and then discuss how it fit or varied from your model</li></ol>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2><a href="/courses/dsgn-270/assessments/assignment-1" target="_self">Assignment 1: Moodboard</a></h2>
- **Due**: Monday September 11, 2023 @ 11:59 PM
- [Check out some of these links for inspiration](https://www.youtube.com/results?search_query=mood+board) (this link is just a search on youtube for moodboards)
- Explore other places as well such as **Pinterest**, or **Behance**
- Moodboards are intended to be creative spaces that we revisit -- **Create something that you would want to look at again later**
`;
    }
  })}`;
});
export {
  _02_day_2 as default,
  metadata
};
