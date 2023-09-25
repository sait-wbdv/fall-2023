
# Responsive Banners
## Nested Flex and Media Queries

---

## Dealing with overflow
You usually want to avoid horizontal overflow on a page. This is a common problem with navigation on mobile:

![Example of horizontal navigation overflow](/images/css/nav-overflow.png)

---

## Option 1: `flex-wrap`
You can wrap items with [`flex-wrap`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-wrap). Wrapped nav elements are sometimes difficult to work nicely with but it's better than overflow:

```css
.container {
  display: flex;
  flex-wrap: wrap; /* default: nowrap */
}
```

![Example of wrapping navigation](/images/css/nav-wrap.png)

---

## Option 2: `@media` query
[Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/) are like if statements for CSS, based on some browser condition (i.e. screen width, but there are others):

```css
.container {
  display: block;
}

@media screen and (min-width: 40em) {
  /* screen is larger than 40em */
  .container {
    display: flex;
  }
}
```
This is a **mobile-first** media query: The mobile styles come first and are overridden when the screen is larger than `40em`;

---

### Resulting Breakpoint
Screen is narrower than `40em` (the default in a mobile-first design):

![Example of mobile navigation](/images/css/media-narrow.png)

Screen is wider than `40em`:

![Example of desktop navigation](/images/css/media-wide.png)

---

## Mobile-first vs Desktop-first
<dl>
  <dt>Mobile-first Design (recommended)</dt>
  <dd>When a designer builds a website for mobile and then adds more complex layouts for desktop with a <code>min-width</code> media query.</dd>
  <dt>Desktop-first Design</dt>
  <dd>When a designer builds a complex layout for desktop and then simplifies the layout on mobile screens with a <code>max-width</code> media query.</dd>
</dl>

---
### Hamburger menus
A common mobile pattern is to use a button toggle:

![Example of open nav menu](/images/css/toggle-open.png)

See: [Create a responsive navigation nav with no JS!](https://www.youtube.com/watch?v=8QKOaTYvYUA) by Kevin Powell

---


## Banners with Nested Flexboxes
### Key Takeaways
- Flexbox/Grid Items can also be Flex/Grid Containers;
- Nested containers are often used to layout primary navigation with site logos/titles;
- Common banner layout pattern for internal pages:
    ![Example banner for program website](/images/css/page-banner.png)

---

## Nested Example
The program website uses two nested Flexboxes (actually more) in its banner:

Outer Flexbox:
![Banner flex inspector](/images/css/outer-flexbox.png)

Logo/Site title Flexbox:
![Site title flex inspector](/images/css/site-title-flexbox.png)

Navigation Flexbox:
![Navigation flex inspector](/images/css/nav-flexbox.png)

---

## Further Learning
- MDN: [Beginner's guide to media queries](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries)
- Kevin Powell: [How to Take the Right Approach to Responsive Web Design](https://www.freecodecamp.org/news/taking-the-right-approach-to-responsive-web-design/)
    - Companion video: [Are you writing responsive CSS the wrong way?](https://www.youtube.com/watch?v=0ohtVzCSHqs)
- Kevin Powell: [Create a responsive navigation nav with no JS!](https://www.youtube.com/watch?v=8QKOaTYvYUA)

