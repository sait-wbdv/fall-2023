# Flexbox navigation
## Containers, Items & Semantic HTML

---

## Accessible Navigation
Screen readers recognize the following semantic HTML elements as special:
- `<header>` 
- `<main>`
- `<nav>`
- `<footer>`

These are given special labels that a blind user can navigate to on a page. `<section>`, `<article>` and `<aside>` are treated like any other `<div>`.

---

## Navigation best practices
```html
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="#">Blog</a></li>
  </ul>
</nav>
```
- Wrap links in an unordered list;
- Wrap unordered list in a `<nav>` element;

![Flex container](/images/css/nav-vanilla.png)

---

## Styling lists as navigation
**Step 1**: Remove a list's bullets and left padding:
```css
nav ul {
  list-style: none;
  padding-left: 0;
}
```

![Flex container](/images/css/nav-bullets-padding.png)

---

**Step 2**: Make your links clickable by adding `padding` to the _link_ (not the list item). You will need to make you links block-level elements for this to work:
```css
nav a {
  display: block;
  padding: 0.5rem 1rem;
}
```

![Flex container](/images/css/nav-link-padding.png)

---

**Step 3**: Add `:hover` states to add interaction for the user:
```css
nav a:hover {
  background-color: black;
  color: white;
}
```

![Flex container](/images/css/nav-link-hover.png)

---

**Step 4**: Style your navigation as needed using properties such as:

- `color`
- `background-color`
- `border`
- `text-decoration`
- `font-family`
- `font-variant`
- `box-shadow`

---

## Typical Vertical nav bar 
With some added padding, typography and colour:

![Typical vertical nav bar](/images/css/vertical-nav.png)

See: [Live Demo](https://codepen.io/browsertherapy/pen/XWjwJGL)

---

## Making Navigation horizontal
### Flexbox to the rescue

---

## Terminology

**Flex Container**
: An element with `display: flex` which creates a "flex context" for its items. This is most often the `<ul>` in nav bars.

**Flex Item**
: All direct children of the Flex container. Often selected with a child selector such as `.container > *`. This is most often the `<li>` in nav bars.

See: [Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

## Flex Axis and Direction
A key concept with Flexbox is the **Main Axis** and the **Cross Axis**:

![Diagram of Flexbox Axis](/images/css/flexbox-axis.png)

Source: [Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
---

## `ul` as Flex Container
The first step in creating a horizontal nav bar is to create a Flex Container on the `<ul>`:

```css
nav ul {
  display: flex;
}
```

Which will create the default layout:

![Flex container](/images/css/flex-default.png)

---

## Justifying Flex Items
`justify-content` is the property that controls items in the **Main Axis** direction.

You can justify the links to the opposite end with `justify-content: flex-end`:

```css
nav ul {
  display: flex;
  justify-content: flex-end;
}
```

Which will create the following layout:

![Justify end](/images/css/flex-end.png)

---

## Place links in the centre
You can centre the links in the menu with `justify-content: center`:

```css
nav ul {
  display: flex;
  justify-content: center;
}
```

Which will create the following layout:

![Justify centre](/images/css/justify-centre.png)

---

## All extra space between the links
You can put all empty space between the links:

```css
nav ul {
  display: flex;
  justify-content: space-between;
}
```

Which will create the following layout:

![Space between](/images/css/space-between.png)

---

## Equal space around each link
You can put an equal amount of space between each link (half-space on ends):

```css
nav ul {
  display: flex;
  justify-content: space-around;
}
```

Which will create the following layout:

![Space around](/images/css/space-around.png)

---

## Equal space, including ends
You can space the link equally, including ends, with:

```css
nav ul {
  display: flex;
  justify-content: space-evenly;
}
```

Which will create the following layout:

![Space evenly](/images/css/space-evenly.png)

---

## Links grow to fill extra space
You can have the links expand to fill all emtpy space with:

```css
/* container */
nav ul {
  display: flex;
}

/* items */
nav ul > * {
  flex: auto;
}
```

Which will create the following layout:

![Grow to fill space](/images/css/flex-grow.png)

---

## Key Takeaways
- If an element is a **direct child** of a Flex container, it becomes a Flex item;
- Flex Items can be of a mix of any element type;
- The default direction for `display: flex` is left-to-right;
- The **main-axis** is controlled with `justify-content`;
- The **cross-axis** is controlled with `align-items`;
- **Important**: If the direction of a flexbox flips to `column`, the Axis also flip.

---

## Pro-tip: Flexbox Inspector
Use the Flexbox Inspector by clicking the `flex` button on the HTML container in the inspector:

![Flex Inspector](/images/css/flex-inspector.png)

---

## Further Learning
- [Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- Article: [Create a navbar with CSS flexbox ](https://dev.to/jungjungie/create-a-navbar-with-css-flexbox-2leh)
- Sample Code: [Flexbox Navigation Examples](https://codepen.io/browsertherapy/pen/YzqdGpR)
- Videos:
    - Jenn Simmons: [Flexbox vs. CSS Grid — Which is Better?](https://youtu.be/hs3piaN4b5I)
    - Net Ninja: [Creating a Menu with Flexbox](https://www.youtube.com/watch?v=2plKBskaKfY)

Learning games for Flexbox:
- [Flexbox Froggy](https://flexboxfroggy.com/)
- [Flexbox Zombies](https://mastery.games/flexboxzombies/)
