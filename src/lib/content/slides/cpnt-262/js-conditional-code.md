
## Conditional Code
### `if...else` and Comparison Operators

---

### Terminology

<dl>
  <dt>Value type</dt>
  <dd>The primitive (string, number, boolean, null, undefined) and complex (array, object and function) types of values (plus some others) in Javascript.</dd>
  <dt>Boolean value type</dt>
  <dd><code>true</code> or <code>false</code> (there is no maybe)</dd>
  <dt>Coercion</dt>
  <dd>When one data type (i.e. string) is converted to another data type (i.e. boolean) in Javascript.</dd>
</dl>

---

<dl>
  <dt>Truthy</dt>
  <dd>A truthy value is a value that is considered <code>true</code> <em>after</em> it's converted (coerced) to a Boolean value.</dd>
  <dt>Falsy</dt>
  <dd>A falsy value is a value that is considered <code>false</code> <em>after</em> it's converted (coerced) to a Boolean value.</dd>
</dl>


---

## `if` blocks
An `if` block only runs if its expression evaluates to `true`

```js
if (condition) {

  code to run if condition is true

}

run some other code
```
See: [MDN - `if...else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

---

## `else` blocks
An `else` block only runs if all previous `if` and `else if` blocks have evaluated to `false`.

```js
if (condition) {

  code to run if condition is true

} else {

  run some other code instead

}

```

---

## `else if` blocks
An `else if` block only runs if its expression evaluates to `true` AND all `if` and `else if` blocks before it have evaluated to `false`.

```js
if (condition) {

  code to run if condition is true

} else if(condition) { 

  code to run if condition is true 
  AND the previous blocks evaluate to false

} else {

  run some other code instead

}
```

---

## Comparison Operators

---

<dl>
  <dt><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality">Equality</a> (<code>==</code>)</dt>
  <dd>The equality operator checks whether its two operands are equal. Unlike the strict equality operator, <strong>it attempts to convert and compare operands that are of different types</strong>. </dd>
  <br>
  <dt><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality">Strict Equality</a> (<code>===</code>)</dt>
  <dd>The strict equality operator checks whether its two operands are equal. Unlike the equality operator, the strict equality operator <strong>always considers operands of different types to be different</strong>.</dd>
</dl>    

---

## Examples
Equality
```js
console.log(1 == '1'); // true
```

Strict Equality
```js
console.log(1 === '1'); // false
```

---

### Key Takeaways
- Use `===` when testing for equality (it's safer). Use `==` once you understand truthiness (or you just can't get the job done with `===`).
- Any value can be converted to a Boolean value:

    ```js
    myBool = Boolean(myVar); // Method 1
    myBool = !!myVar; // Method 2
    ```

---

<dl>
  <dt><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than">Greater than</a> (<code>></code>)</dt>
  <dd>Returns true if the left operand is greater than the right operand, and false otherwise. </dd>
</dl>

```js
console.log(5 > 3); // true

console.log(3 > 3); // false

console.log('ab' > 'aa'); // true
```

---

<dl>
  <dt><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal">Greater than or equal</a> (<code>>=</code>)</dt>
  <dd>Returns true if the left operand is greater than or equal to the right operand, and false otherwise.</dd>
</dl>

```js
console.log(5 >= 3); // true

console.log(3 >= 3); // true

console.log('ab' >= 'aa'); // true
```

---

<dl>
  <dt><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than">Less than</a> (<code><</code>)</dt>
  <dd>Returns true if the left operand is less than the right operand, and false otherwise.</dd>
</dl>

```js
console.log(5 < 3); // false

console.log(3 < 3); // false

console.log('aa' < 'ab'); // true
```

---

<dl>
  <dt><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal">Less than or equal</a> (<code><=</code>)</dt>
  <dd>Returns true if the left operand is less than or equal to the right operand, and false otherwise.</dd>
</dl>

```js
console.log(5 <= 3); // false

console.log(3 <= 3); // true

console.log('aa' <= 'ab'); // true
```

---

## Logical Operators

---

<dl>
  <dt><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">Logical AND</a> (<code>&&</code>)</dt>
  <dd>Returns `true` if and only if all the operands are true.</dd>
</dt>

```js
console.log(true && true); // true

console.log(true && false); // false

console.log(3 > 0 && -2 > 0); // true && false -> false
```

---

<dl>
  <dt><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR">Logical OR</a> (<code>||</code>)</dt>
  <dd>Returns `true` if one or more of its operands is `true`.</dd>
</dt>

```js
console.log(false || false); // false

console.log(true || false); // true

console.log(3 > 0 || -2 > 0); // true && false -> true
```

---

<dl>
  <dt><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT">Logical NOT</a> (<code>!</code>)</dt>
  <dd>Converts truthy to falsy and vice versa.</dd>
  <dt><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality">Inequality</a> (<code>!=</code>)</dt>
  <dd>The inequality operator checks whether its two operands are not equal. <strong>It attempts to convert and compare operands that are of different types.</strong></dd>
  <dt><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality">Strict Inequality</a> (<code>!==</code>)</dt>
  <dd>The strict inequality operator checks whether its two operands are not equal. <strong>It always considers operands of different types to be different.</strong></dd>
</dl>  

---

## Examples
Inequality
```js
console.log(0 != false); // false
```

Strict Inequality
```js
console.log(0 !== false); // true
```

---

## Further Resources
- [Boolean values](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)
- [Making decisions in your code - conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
- [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators)

