# Numbers
## Math Operators and Coercion

---

## Types of Numbers
<dl>
  <dt>Integers</dt>
  <dd>Floating-point numbers without a fraction. They can either be positive or negative, e.g. 10, 400, or -5.</dd>
  <dt>Floating point numbers</dt>
  <dd>Floats have decimal points and decimal places, for example 12.5, and 56.7786543.</dd>
  <dt>Doubles</dt>
  <dd>a specific type of floating point number that have greater precision than standard floating point numbers.</dd>
</dl>

---

## Javascript Weirdness
JS only has one type of number: floating point. Integers are faked.

---

## Basic Math in Javascript
### Grade-school flash-back

---

## Arithmetic Operators
```js
const num1 = 8;
const num2 = 3;

// Addition
const num3 = num1 + num2; // 13

// Subtraction
const num4 = num1 - num2; // 5

// Multiplication
const num5 = num1 * num2; // 24

// Division
const num6 = num1 / num2; // 2.666666

// Remainder
const num7 = num1 % num2; // 2

// Exponent
const num8 = num1 ** num2 // 512
```

---

## BEDMAS still applies
Order of operations:
1. Brackets
2. Exponents
3. Divide/Multiply
4. Add/Subtract

```js
const num1 = 4 + 5 * 8 - 2; // 4 + 40 - 2 -> 42
const num2 = (9 + 4) * 2 // 13 * 2 -> 26
```

---

## Increment/Decrement Operators
Increment
```js
let num1 = 4;
num1++; // 5
```
Decrement
```js
let num2 = 8;
num2--; // 7
```

---

## Assignment Operators
Operators that assign a value to a variable.
```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```
Special Operators:
```js
// Addition assignment
x += 4; // x = x + 4

// Subtraction assignment
x -= 3; // x = x - 3

// Multiplication assignment
x *= 3; // x = x * 3

// Division assignment
x /= 5; // x = x / 5;

```

---

## Type Coercion
When one data type (i.e. a String) is automatically converted to another (i.e. a Number).

See: [MDN Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)

---

## Coercion Example

```js
const value1 = "5";
const value2 = 9;

const sum = value1 + value2; // 59
```
- Number values with quotes around them are actually strings.
- The `+` operator also concatenates strings (i.e. it glues them together):
    ```js
    const fullName = 'Tony' + ' ' + 'Grimes' // Tony Grimes
    ```
- If `+` sees a number as a string, it will treat it like a string and concatenate it.

---

## Converting Strings to Numbers
We can use `parseInt()` and `parseFloat()` to manually convert string numbers to number numbers:

```js
const fakeNum1 = "88";
const realNum2 = parseInt(fakeNum1); // 88

const fakeNum2 = "3.14";
const realNum2 = parseFloat(fakeNum2) // 3.14
```
We will often need to do this after we pass a number through a form, `prompt()` or the command line.

---

## Further Learning
- [Basic Math in Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)
- [What is type coercion in Javascript?](https://www.geeksforgeeks.org/what-is-type-coercion-in-javascript/)
- [mathjs](https://mathjs.org/): an Extensive math library for Javascript.

