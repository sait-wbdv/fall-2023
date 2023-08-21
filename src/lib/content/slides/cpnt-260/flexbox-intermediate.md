
# Intermediate Flexbox
## Grow, Shrink and Basis

---

## Key Takeaways
The `flex` property controls:
- `flex-basis`: The optimal size (i.e. `width` when in row direction) that your item should be;
- `flex-grow`: Whether your item will grow to fill empty space;
- `flex-shrink`: Whether your item will shrink if there's no extra space available;

See: [`flex` property](https://css-tricks.com/almanac/properties/f/flex/) on CSS Tricks

---
    
## Common values for `flex`
`flex` is a shorthand property that is the recommended way to control `flex-shrink`, `flex-grow` and `flex-basis`.

```css
flex: <'flex-grow'> <'flex-shrink'> <'flex-basis'>
```

---

## `flex: 0 auto;`
- It's the shorthand for the **default value**: 
    ```css
    flex: 0 1 auto;
    ``` 
- This is the same as flex: initial; 
- It sizes the item based on its width/height properties (or its content if not set).

---

## `flex: auto;`
- Is equivalent to:
    ```css
    flex: 1 1 auto;
    ```
- Beware, this is not the default value. 
- It sizes the item based on its `width`/`height` properties, but makes it fully flexible so that they absorb any extra space along the main axis.

---

## `flex: none;`
- This is equivalent to:
    ```css
    flex: 0 0 auto;
    ```
- It sizes the item according to its width/height properties, but makes it fully inflexible.
- This is similar to flex: initial except it is not allowed to shrink, even in an overflow situation.

---

## `flex: <positive-number>`
- Equivalent to:
    ```css
    flex: 1 0px;
    ```
- It makes the flex item flexible and sets the flex basis to zero, resulting in an item that receives the specified proportion of the remaining space.

---

## `flex: <length>`
- Equivalent to:
  ```css
  flex: 1 1 <length>;
  ```
- It makes the flex item inflexible and sets the flex basis to the supplied value, resulting in an item of that size instead of the size of its content.
- This is the "Flex" way of assigning `width` in the row direction or `height` in the column direction (and is recommended).

---


## Filling extra space
The [`flex` shorthand property](https://css-tricks.com/almanac/properties/f/flex/) can be used to make items expand to fill extra space:

```css
.container {
  display: flex;
}
.item {
  flex: auto; /* default: 0 auto */
}
```

---

### Full-width horizontal navigation           
```css
nav ul {
  display: flex;
}

nav ul > * {
  flex: auto;
}
```

All items grow to fill space
![Grow to fill space](/images/css/flex-grow.png)

---

### One full-width link
```html
<nav>
  <ul>
    <li><a href="#">Fighter</a></li>
    <li class="barbarian"><a href="#">Barbarian</a></li>
    <li><a href="#">Bard</a></li>
    <li><a href="#">Rogue</a></li>
  </ul>
</nav>
```

```css
nav ul {
  display: flex;
}

nav ul > .barbarian {
  flex: auto;
}
```
Only `.barbarian` grows to fill space:
![One wide link](/images/css/wide-barbarian.png)

---

## Sticky footers
A footer that "sticks" to the bottom of a short page:

![Example of sticky footer](/images/css/sticky-footer.png)

---

### The code
[Codepen demo](https://codepen.io/browsertherapy/pen/XWqZpLR)
```html
<!-- HTML -->

<body>
  <nav>Navigation here</nav>
  <header>Site title here</header>
  <main>Page content here</main>
  <footer>Sticky footer here</footer>
</body>
```
```css
/* CSS */

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* page will scroll if it needs to */
}

main {
  flex: auto; /* grows to fill page */
}
```

---

## Key Takeaways
- The default for flex items:
    ```css
    .item {
      flex: 0 auto; /* don't grow */
    }
    ```
- Use `min-height` to force a container to be taller than short content but allow it to scroll with long content;
- Flexboxes can be nested: use one in `column` direction for page layout and another in `row` (default direction) for navigation; 

---

## `flex` Deep Dive
The `flex` shorthand property controls:
- `flex-grow`: When items grow to fill space
- `flex-shrink`: When items shrink
- `flex-basis`: Flex version of width (or height)

See the following resources for more layout patterns using `flex`:
- [Flexbox design patterns you can use in your projects](https://www.youtube.com/watch?v=vQAvjof1oe4) by Kevin Powell
- Codepen: [Example code of above](https://codepen.io/browsertherapy/pen/oNYNXZO)
