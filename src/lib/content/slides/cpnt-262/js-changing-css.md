
## Changing CSS with Javascript
### `Element.classList` and CSS Variables

---

## `Element.classList`
Using classList is a convenient method of accessing an element's list of classes.

![Example of a classList console log](/images/js/classList-example.png)

While `.classList` itself is read-only, a number methods are available to edit an elements classes.

---

## `classList.add()`
Adds a class to a selected element.

Before:
```html
<body>
  <h1>Hello world!</h1>
</body>
```

```js
const body = document.querySelector('body');
body.classList.add('dark');
```

After:
```html
<body class="dark">
  <h1>Hello world!</h1>
</body>
```

---

## `classList.remove()`
Removes a class from a selected element.

Before:
```html
<body class="dark">
  <h1>Hello world!</h1>
</body>
```

```js
const body = document.querySelector('body');
body.classList.remove('dark');
```

After:
```html
<body class="">
  <h1>Hello world!</h1>
</body>
```

---

## `classList.toggle()`
Toggles a class on a selected element. If it exists, it's removed. If it's missing, it's added.

Before:
```html
<body class="dark">
  <h1>Hello world!</h1>
</body>
```

```js
const body = document.querySelector('body');
body.classList.toggle('dark');
```

After:
```html
<body class="">
  <h1>Hello world!</h1>
</body>
```

---

## `classList.replace()`
Replaces a class with another class.

Before:
```html
<body>
  <h1 class="show">Hello world!</h1>
</body>
```

```js
const heading = document.querySelector('h1');
heading.classList.replace('show', 'hide');
```

After:
```html
<body>
  <h1 class="hide">Hello world!</h1>
</body>
```

---

## CSS Variables
### AKA: CSS Custom Properties
Manipulating CSS Variables with Javascript are often a convenient alternative to changing an element's class names.

---

## Basic Usage
1. Add a custom property to the `:root` element (the `<html>` element).

    ```css
    :root {
      --main-bg-color: brown;
    }
    ```            

2. Use custom property elsewhere in your stylesheet using the `var()` CSS function.

    ```css
    body {
      background-color: var(--main-bg-color);
    }
    ```

---

## Editing CSS variables with Javascript

1. Create a DOM variable of the `:root` element;

    ```js
    const root = document.querySelector(':root');
    ```
2. Change the value of the CSS Variable using `Element.style.setProperty()`:

    ```js
    root.style.setProperty("--main-bg-color", "orange");
    ```

---

## Further Resources
### CSS Variables
- MDN: [Using CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- Watch: [CSS Variables in 100 Seconds](https://www.youtube.com/watch?v=NtRmIp4eMjs) by Fireship
- Watch: [CSS Variables - An introduction to CSS custom properties](https://www.youtube.com/watch?v=PHO6TBq_auI) by Kevin Powell
<p></p>

### `Element.classList`
- MDN: [`Element.classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- Watch: [Controlling a CSS ClassList with JavaScript](https://www.youtube.com/watch?v=1e9BnA5ZIOk) by Steve Griffith
