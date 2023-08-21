
## SvelteKit Events and Reactivity
### Adding User Interaction

---

### Some handy form controls
Text input: <input type="text">
```html
<label for="text-input">Text input</label>: 
<input type="text" id="text-input">
```
Button: <button>Click Me!</button>
```html
<button>Click Me!</button>
```
Checkbox: <input type="checkbox" name="dark" id="dark">
```html
<label for="dark-mode">Checkbox</label>: 
<input type="checkbox" name="dark-mode" id="dark-mode">
```

---

Dropdown Menu: <select name="menu" id="menu">
  <option value="one">Option 1</option>
  <option value="two">Option 2</option>
  <option value="three">Option 3</option>
</select>
```html
<label for="menu">Dropdown Menu: </label>
<select name="menu" id="menu">
  <option value="one">Option 1</option>
  <option value="two">Option 2</option>
  <option value="three">Option 3</option>
</select>
```

---

## Svelte events
### `on:` directive
You can listen to any event on an element with the on: directive:

```html
<button on:click={handleClick}>
  Click Me!
</button>
```

Important: almost any element can have an event attached to it. They don't have to be form controls.

---

## Event Handlers
Event handlers only accept the `event` object as an argument.
```html
<script>
  const handleClick = function(event) {
    console.log(event);
  }
</script>

<button on:click={handleClick}>Click Me!</button>
```
The event object is built for you by the browser.

---

### `event.target`
You can access the element that triggered the event (i.e. a click button) with `event.target`.
```html
<script>
  const handleClick = function(event) {

    console.log(event.target.value); // Click Me!
  
  }
</script>

<button on:click={handleClick}>Click Me!</button>
```
---

## Handy Events
<dl>
  <dt>click</dt>
  <dd>Fires when an element is clicked.</dd>
  <dt>mousemove</dt>
  <dd>Fires when the mouse is moved.</dd>
  <dt>input</dt>
  <dd>Fires when a user inputs data into a form element.</dd>
  <dt>change</dt>
  <dd>Fires when a form element value is changed.</dd>
</dl>

---

## Svelte Reactivity
Svelte automatically updates the DOM when a component's variable is reassigned.

---

## Terminology
<dl>
  <dt>Assignment</dt>
  <dd>When a variable's value is changed with an assignment operator (`=`).</dd>
  <dt>Application State</dt>
  <dd>In Svelte, application state is the culmination of all variable values in an application.</dd>
  <dt>Reactivity</dt>
  <dd>When the DOM state (i.e. the information presented on the webpage) is automatically updated when a variable is updated.</dd>
</dl>

---

## Arrays and objects
Because reactivity _only_ happens when a variable is _reassigned_, `array.push()` and `array.pop()` **do not** trigger reactivity.

Instead, arrays need to be updated by reassigning them.

---

### Assign by bracket notation
```js
let array = ['one', 'two', 'three'];

// Assign the next item in the array
array[3] = 'four';

// Assign using array.length
array[array.length] = 'five';
```

### Assign by spread operator (ES6)
```js
let array = ['one', 'two', 'three'];

// Spread operator "expands" an array into it's individual values
array = [...array, 'four'];

// ...array -> 'one', 'two', 'three'
```

---

## A redundant last resort
`array.push()` and `array.pop()` can still be used if you reassign an array to itself later.

```js
let array = ['one', 'two', 'three'];

// Won't trigger reactivity
array.push('four');

// Redundant, but it works
array = array;
```

---

## Further Learning
[Event directives](https://svelte.dev/docs#template-syntax-element-directives-on-eventname)

**Events**
- [DOM events](https://learn.svelte.dev/tutorial/dom-events)
- [DOM event forwarding](https://learn.svelte.dev/tutorial/dom-event-forwarding)

**Reactivity**
- [Assignments](https://learn.svelte.dev/tutorial/reactive-assignments)
- [Declarations](https://learn.svelte.dev/tutorial/reactive-declarations)
- [Reactive Statements](https://learn.svelte.dev/tutorial/reactive-statements)
- [Updating arrays and objects](https://learn.svelte.dev/tutorial/updating-arrays-and-objects)
