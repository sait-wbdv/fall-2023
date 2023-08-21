
# Useful JS Objects
## Built-in Objects we get for free
---

### Terminology
<dl>
  <dt>Browser Objects</dt>
  <dd>Tools that are only available when Javascript is running in the browser. These are not available in Node. Examples: <code>window</code> and <code>document</code>.</dd>
  <dt>Built-in Objects</dt>
  <dd>Tools that are always available in Javascript. Examples: <code>Math</code> and <code>Date.</code></dd>
  <dt>Dot Notation</dt>
  <dd>Dots are used to access methods (functions) and properties (variables) inside a given object. Example: `document.querySelector()`.</dd>
</dl>

---

### Terminology
<dl>
  <dt>Object Method</dt>
  <dd>Functions that are available inside an object using dot notation. Functions/methods end with parentheses. Examples: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round"><code>Math.round()</code></a>.</dd>
  <dt>Object Property</dt>
  <dd>Non-function variables that are available inside an object using dot notation. Examples: <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/title"><code>document.title</code></a> (the title of the current page).</dd>
</dl>

---

## DOM methods and properties
### Document Object Model

---

## `document.querySelector()`
### Creating a DOM variable
```html
<body>
  <h1 class="intro">Hello world!</h1>
</body>
```

```js
const headingElement = document.querySelector('h1');
```
- `document` is the top-level DOM variable that represents the HTML element;
- `.querySelector()` finds the _first_ HTML element that matches the provided CSS selector;

---

### Any CSS selector is valid

```html
<body>
  <h1 class="intro">Hello world!</h1>
</body>
```

All of these selectors will create the same DOM variable:

```js
const headingElement = document.querySelector('h1');
```
```js
const headingElement = document.querySelector('.intro');
```
```js
const headingElement = document.querySelector('body > h1');
```

---

### `Element.innerHTML`
Accessing HTML Content
```html
<body>
  <h1 class="intro">Hello world!</h1>
</body>
```

```js
// Create DOM variable
const headingElement = document.querySelector('h1');

// Access element content with .innerHTML property
const h1Content = headingElement.innerHTML; // 'Hello world!'
```

---

### `Element.innerHTML`
Editing HTML Content
```html
<body>
  <h1 class="intro">Hello world!</h1>
</body>
```

```js
// Create DOM variable
const headingElement = document.querySelector('h1');

// Edit element content with .innerHTML property
headingElement.innerHTML = 'Hello Tony!';
```
After:
```html
<body>
  <h1 class="intro">Hello Tony!</h1>
</body>
```

---

### `Element.innerHTML`
Creating new elements
```js
// Edit element content with .innerHTML property
headingElement.innerHTML = 'Hello <em>Tony</em>!';
```
```html
<body>
  <h1 class="intro">Hello <em>Tony</em>!</h1>
</body>
```

---

## `prompt()`
### Quick and dirty inputs
```js
const name = prompt("What's your name?");
```

![Example of a browser prompt](/images/js/prompt-example.png)

---

```js
const h1 = document.querySelector('h1');
const name = prompt("What's your name?");
h1.innerHTML = `Hello ${name}!`;
```

![Example of a browser prompt](/images/js/prompt-tony.png)

```html
<body>
  <h1 class="intro">Hello Tony!</h1>
</body>
```

---

## Key Takeaways
- All DOM variables will have the `.querySelector()` method;
- `.innerHTML` works both ways when reading and writing content to and from HTML elements;
- `.innerText` can be used if you don't want HTML tags included;
- `prompt()` is rarely used professionally; we're using it as a short cut for now;

---

## The Math Object

---

### [`Math.round()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
Rounds numbers inside the parentheses
```js
Math.round(55.5) // 56
```
Rounds `.5` up to the nearest whole number.

---

### [`Math.floor()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

```js
Math.floor(55.9) // 55
```
Rounds all decimals down to the nearest whole number.

---

### [`Math.ceil()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)

```js
Math.floor(55.1) // 56
```
Rounds all decimals up to the nearest whole number.

---

## Further Reading
- **[`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window)**: the window containing a DOM document.
- **[`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document)**: points to the DOM document (i.e. HTML document) loaded in a window.
- **[`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element)**: an object that represents an HTML element.
- **[`Math`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)**: mathematical constants and functions.
- **[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)**: a single moment in time in a platform-independent format.
