
## Functions and Events
### Running functions when something happens

---

### Terminology
<dl>
  <dt>Function</dt>
  <dd>A reusable block of code that can be run multiple times.</dd>
  <dt>Invoking (running) a function</dt>
  <dd>When the code of a function is "turned on" by placing <code>()</code> after the function name.</dd>
  <dt>Callback function</dt>
  <dd>A function that's passed to another function as an argument, to be invoked later.</dd>
</dl>

---

## Declaring functions
Option 1: Function statements
```js
function greet() {
  console.log('Hi!');
}
```

Option 2: Function expression (ES5)
```js
const greet = function() {
  console.log('Hi!');
};
```
Option 3: Function expression (ES6)
```js
const greet = () => {
  console.log('Hi!');
}
```
---

### Option 1
## Function statement
```js
function greet() {
  console.log('Hi!');
}
```
- This is the classic method that is similar to many other languages;
- Function statements are subject to [hoisting](https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript), which is why we'll use options 2 and 3 in this course;

---

### Option 2
## Function expression (ES5)
```js
const greet = function() {
  console.log('Hi!');
};
```
- Function expressions are defined with `const` or `let` like any other variable;
- This is the method used in class (for now);

---

### Option 3
## Function expression (ES6)
```js
const greet = () => {
  console.log('Hi!');
}
```
- This is the new fancy way;
- This is mostly the same as the ES5 method, but is less typing;

---

## Invoking a function
Assuming a function has been declared:

```js
const greet = function() {
  console.log('Hi!');
};
```

You can invoke (run) the function with `()`:

```js
greet(); // "Hi!"
```

---

## Key Takeaways
- Code inside a function does not execute at the time the function is declared;
- You have to invoke a function with `()` to run the code inside it.
- Without `()`, the function is treated like any other variable.

---

## Callbacks and Events
### Running functions when something happens

---

### Terminology
<dl>
  <dt>Callback function</dt>
  <dd>A function that's passed to another function as an argument, to be invoked later.</dd>
  <dt>Browser event</dt>
  <dd>Some pre-defined trigger created by the user (button click), network (file received), operating system (dark mode enabled), etc.</dd>              
  <dt>Event listener</dt>
  <dd>Listeners run a function when a particular event happens, like a button click.</dd>
</dl>

---

## Callback functions
Because functions are variables, one can be passed to another function as an argument, making it a callback function.

```js
const greet = function() {
  console.log('Hi!');
};

const sendInvite = function(callback) {
  callback();
}

sendInvite(greet); // "Hi!"
```

---

## But why use callbacks?
### For us, mostly for click events

---

### Step 1
## Create a callback function
```js
const greet = function() {
  console.log('Hi!');
};

---

### Step 2
## Create a button variable

```html
<body>
  <button>Click Me!</button>
</body>
```

```js
// Create button variable
const button = document.querySelector('button');
```

---

### Step 3
## Add a click Listener to the button

### `Element.addEventListener`

```js
// Create button variable
const button = document.querySelector('button');

// Add listener to variable
button.addEventListener('click', greet);
```
- Now, `greet()` will run whenever `button` is clicked;

---

## Key Takeaways
- Listener callback functions are often named after the event they are attached to, like `handleClick`;
- You will often see Listeners defined with anonymous functions:
    ```js
    button.addEventListener('click', function() {
      console.log('Hi!');
    });
    ```
    - We will not use anonymous functions much but you will see them a lot online;

---

## Further Resources 
- Read: [Function expressions](https://javascript.info/function-expressions) on Javascript.info
- Watch: Functions in [JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour](https://www.youtube.com/watch?v=W6NZfCO5SIk) by Mosh
    - 39:41 [Functions](https://www.youtube.com/watch?v=W6NZfCO5SIk&t=2122s)
    - 44:22 [Types of Functions](https://www.youtube.com/watch?v=W6NZfCO5SIk&t=2662s)
- MDN: 
    - [`EventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
    - [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- Watch: [Introduction to JavaScript Event Listeners](https://youtu.be/EaRrmOtPYTM) by Steve Griffith
