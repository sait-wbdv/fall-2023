
# CSS Cascade
## The Style Referee

---

If two CSS declarations affect the same element but they conflict, which one wins?

CSS:
```css
body {
  background: rebeccapurple;
}

body {
  background: grey;
}
```

---

The cascade algorithm uses the following to decide which rules are applied when there's a conflict:

1. Source origin
2. Selector specificity
3. Order of appearance

---

## Source Origin
In _decreasing_ order of importance:
1. Inline `style` attribute
    ```html
    <p style="color: grey;"></p>
    ```
2. Embedded `<style>` element
    ```css
    <style>
      p {
        background: rebeccapurple;
      }
    </style>
    ```
3. External stylesheet
    ```html
    <link rel="stylesheet" href="styles.css">
    ```

---

## Selector Specificity
In _decreasing_ order of selector importance:
1. ID Selector
2. Classes, attributes and pseudo-classes
3. Elements and pseudo-elements

See the [Specificity Calculator](https://specificity.keegan.st/)

---

## Source order
When there's still a tie, the declaration that comes last in source order, wins.

---

## Inspecting the Cascade
When in doubt, inspect!

![Screencap of the inspector](/images/css/cascade-inspector.png)

The Inspector will order all declarations from highest to lowest precedence.

---

## Further Learning
- [CSS Cascade, specificity, and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- Video: [Why is CSS so Weird?](https://www.youtube.com/watch?v=aHUtMbJw8iA) by Miriam Suzanne
- Video: [Inspecting the CSS Cascade using Firefox DevTools](https://www.youtube.com/watch?v=Sp9ZfSvpf7A)