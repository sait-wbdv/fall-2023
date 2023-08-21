
# Web Typography
## Designing Readable Web Type

---

## Fallbacks and overrides
See: [Cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

**Inheritance**
: When CSS property values set on parent elements are inherited by their child elements. Most font settings are inherited.

**Fallback**
: A default setting or configuration that activates when a CSS declaration fails.

**CSS Override**
: A aspect of the cascade where a previous CSS declaration is overwritten by another that has higher priority/specificity.

---

## Key Takeaways
1. Because font settings are inherited, base declarations are set on the `body` element. 
2. The `font-family` declaration has built-in fallbacks separated by commas.
3. Use `rem` over `em` when setting font-based units to avoid strange inheritance issues.
    ```css
    h1 {
      font-size: 2rem;
    }
    ```
4. Set the line length by declaring a `max-width` on the container using `ch` units.

---

## Typography Triad
Readable text is a balance of the following fundamental characteristics of typography:
1. Font size
3. Line length
2. Line spacing

![Example of the typography triad](/images/design/typography-triad.png)

---

### 1. [`font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) 
- The base font size is often declared in `px` units on the parent `body` element. 
    ```css
    body {
      font-size: 20px;
    }
    ```
- Derivative font sizes (such as for headings, navigation, etc) are usually declared in `rem` units.
    - [Confused About REM and EM?](https://j.eremy.net/confused-about-rem-and-em/) by Jeremy Church
- The default font size in most browsers is `16px`.

---

### 2. [`line-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
- `line height` is defined as a ratio of `font-size`. For example, 
    - if `line-height` is 1.5 and `font-size` is 16px, `4px` of spacing will be added above and below the line for a total line height of `24px`.
- The default for most browsers is 1.2, which is too small in most cases.
- In general, aim for a line length between 1.4 and 2.
    ```css
    body {
      line-height: 1.5;
    }
    ```

---

### 3. Line length
- Line length is usually defined by declaring a `max-width` on the container width;
    ```css
    .container {
      max-width: 75ch;
    }
    ```
- Max line length for print: 95 [characters](https://css-tricks.com/the-lengths-of-css/#ch)
- Max line length for web: 75-85 characters
- Min (multi)line length for web: ~30 characters

---

## Units for setting `font-size`

---

### `px`
- 96 pixels = 1 "inch"
  - Defined in the core browser settings (and is rarely 1 inch);
- Used for setting base `font-size` of the `body`;
    ```
    body {
      font-size: 20px;
    }
    ```
- Set all other `font-size` declarations using relative units (next slides).

---

### `rem`
- Is always equal to the `font-size` of the root element (`body` or `html`).
- When in doubt, no one got fired for using `rem` units.
- See: [em vs rem](https://codepen.io/browsertherapy/pen/VwKNELp) (Codepen)
    - In the CSS panel, change the `font-size` of the `li` element so that it uses `rem` units.

---

### `em`
- `1em` is equal to the  `font-size` of the parent element.
- `em` is often used for whitespace such as `margin` and `padding`;
- Avoid setting `font-size` in `em` units. Use `rem` instead.
    - See: [Why you shouldn't set font-sizes using em](https://youtu.be/pautqDqa54I) by Kevin Powell
- If setting a length for another property: `1em` is equal to the `font-size` setting of the element itself.

---

### `ch` (character)
- Defined as the width of the glyph "`0`" of the current element's font face.
- Tony loooooves setting setting text boxes in `ch` units.
- Warning: the value of `ch` changes with different `font-family` declarations. Don't use `ch` if you need a consistent width.
- See: [Length comparison: rem vs ch](https://codepen.io/browsertherapy/pen/RwRPrvm)

---

### `vw` (viewport width)
- Used to make `font-size` scale with screen width;
- Best used in combination with [`clamp()`](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) to set minimum and maximums.
    ```
    body {
      font-size: clamp(16px, 3vw, 24px);
    }
    ```

---

## Extras
- [`font-variant`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant): Used for setting small caps;
- [`letter-spacing`](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing): Great for spacing letters in headings;
- [`word-spacing`](https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing): Rarely used but can come in handy for logos and site titles;
- [`clamp()`](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp): used for setting minimum and maximum values on relative font sizes
