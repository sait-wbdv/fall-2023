
## Introduction to Functions
### Portable, Re-usable Code

---

## Why do we use functions?
1. To make code re-usable by removing repetition
    - Functions are written once and can invoked multiple times in your apps
2. To make code more portable and sharable
    - Modules and libraries are actually functions
3. To make code safer
    - Variables declared inside functions are block scoped
4. To delay code execution until an event happens
    - Example: do something when a button is clicked

---
### Terminology

<dl>
  <dt>Function declaration</dt>
  <dd>When a function is first created like any other variable.</dd>
  <dt>Function invocation</dt>
  <dd>When you run a function inside your application.</dd>
</dl>

---

## Declaring functions
There are a few ways to declare functions that you will see online.
1. Function Expressions
2. Function Statements

---

## Function Expression

### ES5
We will use this option for the first few days:

```js
const greet = function() {
  console.log('Hi!');
};
```

### ES6 (Fat arrow)
More modern but also harder to read (for now):

```js
const greet = () => {
  console.log('Hi!');
}
```

---

## Function statement
A classic syntax common to many languages but is not used in this course. Only mentioned here because you will see this method online.

```js
function greet() {
  console.log('Hi!');
}
```


---

## Function invocation
Once a function has been defined, it an be invoked/called/run multiple times in your code.

### Step 1: Declare the function
```js
const greet = function(){
  console.log('Hi!');
}
```

### Step 2: Invoke the function
```js
greet(); // "Hi!"
```

---

## Terminology
<dl>
  <dt>Function Parameter</dt>
  <dd>A named value that a function accepts as (eventual) input. Parameters are defined when the function is created.</dd>
  <dt>Function Argument</dt>
  <dd>The actual value passed to a function when it is invoked.</dd>
</dl>

---

## Example

If a function is defined with **parameters**:

```js
const greet = function(name) {
  console.log(`Hi, ${name}!`);
}
```

It's invoked with **arguments** (but doesn't have to be):

```js
greet('Tony'); // Hi, Tony!
```

---

## Key Takeways
- _Parameter_ is used when _declaring_ a function. 
- _Argument_ is used when _invoking_ a function. 
- Javascript (by default) won't complain if you don't pass an argument when a parameter is defined.

---

## Return values
Functions can (optionally) return values when they are invoked using the `return` keyword.

```js
const greet = function() {
  return 'Hi!';
}

const greeting = greet(); // "Hi!"
```

---

## Function Scope
Outside variables are available inside a function:

```js
const name = 'Tony';

const greet = function() {
  console.log(`Hi, ${name}!`); // "Hi, Tony!"
}

greet();
```

---

But variables declared inside a function are private and are not available outside the function:

```js
const greet = function() {
  const name = 'Tony';

  console.log(`Hi, ${name}!`); // "Hi, Tony!"
}

greet();

console.log(name) // Syntax error
```

---

## Further Learning

Mozilla Developer Network
- [Functions - reusable blocks of code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
- [Build your own function](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)
- [Function return values](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values)

Videos by Steve Griffith
- [Introduction to Functions in JavaScript](https://youtu.be/W6QaDqud66Y)
- [JavaScript Function Parameters](https://youtu.be/dxbsN6_C5PI)
- [JavaScript Function Return Statements](https://youtu.be/qed2cjdF-30)
