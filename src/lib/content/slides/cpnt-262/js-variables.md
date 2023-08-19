
# Javascript Variables
## Declaration vs Assignment

---

## Terminology
<dl>
  <dt>Declaration</dt>
  <dd>Creating a variable name in memory (with or without a value) using the <code>const</code> and <code>let</code> declaration keywords.</dd>
  <dt>Assignment</dt>
  <dd>When we give a variable a value using the <code>=</code> assignment operator. If a variable hasn't been assigned, it's value will be <code>undefined</code>.</dd>
</dl>

---

## Declaration Keywords
1. `const`: The value of a constant can't be re-assigned later:
    ```js
    // Names rarely change -> use const
    const name = 'Harry Potter';
    ```
2. `let`: The value may be re-assigned later:
    ```js
    // Flags and indicators often change -> use let
    let systemStatus = 'idle';
    ```
3. `var`: This keyword is the classic (ES5) method of declaring a variable and should be avoided.

---

## Which keyword to use?
Of the three ways you can declare a new variable, we recommend this order:
1. Try `const` first;
2. If you get an assignment error, use `let`;
    ![Constant reassignment error](/images/errors/const-reassignment-chrome.png)
3. Avoid the use of `var`.

---

## `const` and `let` are Block Scoped
Blocks include `if`/`else` statements:
```js
let hungry = true;

if (hungry) {
  let lunch = 'Pizza';
}

console.log(lunch) // error: `lunch` is only available inside if statement
```

Instead:
```js
let hungry = true;
let lunch;

if (hungry) {
  lunch = 'Pizza';
}

console.log(lunch) // Pizza!
```

---

## Naming variables
- Use camelCase;
- Use descriptive variable names:
    ```js
    let str = 'idle'; // Bad
    let systemStatus = 'idle'; // Good
    ```
- Comment your variables:
    ```js
    // System status: idle | pending | active
    let systemStatus = 'pending';
    ```

---

## Key Takeaways
- Variables are `undefined` until they are assigned a value. 
- `const` and `let` are only used the first time you declare the variable.
- Arrays and objects defined with `const` are still changeable, they just can't be reassigned entirely.
    ```js
    const hobbies = ['pinball', 'coding', 'disc golf'];
    hobbies[1] = 'programming'; // no error
    ```

---

## Javascript Value Types
### 8 Types covered in this course
There are more but we don't need to know about them.

---

## Primitive Types
- **Numbers**: floating point (integers are a lie).
- **Strings**: used to represent textual data.
- **Booleans**: `true` and `false`.
- **Null**: has exactly one value - null.
- **Undefined**: a variable that has not been assigned a value has the value undefined.
    - never manually assign a variable as `undefined`.

---

### Numbers
```js
const price = 20;
const gst = 1;
const total = price + gst;

console.log(total); // 21
```
- **Number literal**: a number with no quotes;
- There is one type of Number in JS: floating point;
- Integers kind of exist but not really:
    - `46` is actually something like `46.000001`;

---

### Strings
```js
const firstName = 'Tony'; // single quotes
const lastName = "Grimes"; // double quotes
const fullName = `${firstName} ${lastName}`; // using backticks and template literals

console.log(fullName); // 'Tony Grimes'
```

- **String literal**: a string of alphanumeric characters surrounded by single/double quotes or backticks;
- **Careful**: Sometimes numbers are actually strings:
    ```js
    const fakeNumber = '42';
    ```

---

### Booleans
```js
const hungry = true;

if (hungry) {
  console.log('Time for lunch!');
}
```
- **Boolean literal**: Either `true` or `false` with no quotes;
- There are only two possible Boolean values;

---

### Null
```js
const foodInStomach = null;

console.log(foodInStomach); // null
```
- **Null literal**: `null` with no quotes;
- `null` means "nothing";

---

### `undefined`
- Special type used by Javascript when a variable is non-existent or has no value;
- Never explicitly assign a variable to undefined;

---

## Complex Types
- **Arrays**: a list of values, including other arrays.
- **Objects**: a collection of name/value pairs (properties).
- **Functions**: a block of reusable code that accepts arguments (input data) and may or may not return a value.

---

### Arrays
```js
const colours = ['red', 'green', 'blue'];

console.log(colours[1]); // 'green'
```
- **Array literal**: A comma-separated list of values surrounded by square brackets(`[ ]`);
- Values can be any type, including another array;
- Array items are accessed by `index` starting at `0`;

---

### Objects
```js
const person = {
  name: 'Tony Grimes',
  age: 46,
  mentalAge: 12,
  hungry: true,
  hobbies: ['pinball', 'coding', 'disc golf']
}
```
- **Object literal**: A comma-separated list of `key`:`value` pairs surrounded by curly braces;
- In Javascript, objects are simply a list of `key`/`value` pairs and that's it;
    - In other object-oriented languages, objects have a different meaning and are more complex;

---

### Functions
```js
// Traditional ES5 syntax
const greet = function() {
  console.log("Hello!");
}

greet(); // 'Hello!'

// Newer ES6 syntax
const farewell = () => {
  console.log("Goodbye!");
}

farewell(); // 'Goodbye!'
```
- Covered in detail later in the course;
- Methods are functions that are defined inside objects;


---

## Further resources
- [Storing the information you need — Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- Video: [Differences Between Var, Let, and Const](https://www.youtube.com/watch?v=9WIJQDvt4Us) by Web Dev Simplified

