# Javascript
## Value Validation

---

## Review: Types of Errors 
- **Syntax errors**
    - Errors in the rules of writing JS
    - Easiest to debug
- **Logic errors**
    - Code is broken but there are no errors
    - Hardest to debug; sometimes takes hours

---

These errors often arise when a variable is:
- an unexpected data type
- unexpectedly `undefined`
- out of scope (usually returns `undefined`)

---

## Explicitly converting to specific data types:
- `String(myVar)`
- `Number(myVar)`
- `Boolean(myVar)` or `!!myVar`
- `Array(myVar)`
- `Object(myVar)`

There is no constructor function for `null`

---

Some more subtle errors that should also be avoided (and will cost you marks in assignments):
- outputting an unexpected empty variable
    ```js
    Hello, !
    ```
- outputting `undefined` variables
    ```js
    Hello, undefined!
    ```
- outputting `NaN` (not a number)
    ```js
    $NaN plus 5% GST is $NaN
    ```

---

## Testing for `undefined`
Reminder: Variables that have been declared but not assigned will be `undefined`. Undeclared variables will also return as `undefined`.

```js
if (typeof myVar !== 'undefined') {
  // Variable has been assigned!
}
```

---

## Testing for specific data types
- `String`
- `Number`
- `Boolean`
- `null`
- `Array`
- `Object`

---

## String
Test for `String` value type:

```js
if (typeof myVar === 'string') {
  // Variable is a string!
}
```
    
---

## Number
Test for `Number` value type:

```js
if (typeof myVar === 'number') {
  // Variable is a number!
}
```

---

## Number
Test for `NaN` (not a number) property with `isNaN()`:

```js

const sum = 1 * 'two';

if (isNaN(sum)) {
  console.log('Not a Number!');
}

```
---

## Boolean
Test for `Boolean` value type:

```js
if (typeof myVar === 'boolean') {
  // Variable is a boolean!
}
```

---

## Null
Test if a variable is NOT `null`:

```js
if (typeof myVar === "object" && !myVar) {
  // Variable is a NOT null!
}
```

`typeof null` evaluates to "object" because of an old and non-fixable bug in Javascript. See [How to Check for null in JavaScript](https://javascript.plainenglish.io/how-to-check-for-null-in-javascript-dffab64d8ed5) for all the gory details.

---

## Array
Test for `Array` value type:

```js
// Method 1
if (myVar.constructor == Array) {
  // Variable is an array!
}

// Method 2
if (Array.isArray(myVar)) {
  // Variable is an array!
}
```
- Source: [How to check if a variable is an array](https://stackoverflow.com/questions/767486/how-do-you-check-if-a-variable-is-an-array-in-javascript)

---

## Array
Test for a NON-EMPTY array:

```js
// Method 1
if (myVar.constructor == Array && myVar.length) {
  // Variable is anon-empty array!
}

// Method 2
if (Array.isArray(myVar) && myVar.length) {
  // Variable is anon-empty array!
}
```

---

## Objects
Test for `Object` value type:

```js
if (typeof myVar === 'object' && myVar !== null) {
  // Variable is an object!
}
```
- `null` variables also return "object" because of a bug in Javascript, hence the extra test for `null`

---

## Further Learning
- MDN: [`typeof` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- Stack Overflow: 
    - [How to check a **undefined** variable in JavaScript](https://stackoverflow.com/questions/858181/how-to-check-a-not-defined-variable-in-javascript)
    - [Check if a variable is a **string** in JavaScript](https://stackoverflow.com/questions/4059147/check-if-a-variable-is-a-string-in-javascript)
    - [How to check if type is **Boolean**](https://stackoverflow.com/questions/28814585/how-to-check-if-type-is-boolean)
    - [How do I check for **null** values in JavaScript?](https://stackoverflow.com/questions/6003884/how-do-i-check-for-null-values-in-javascript)
- Bobby Hadz: [How to Check if a Value is a **Number** in JavaScript](https://bobbyhadz.com/blog/javascript-check-if-value-is-number)
