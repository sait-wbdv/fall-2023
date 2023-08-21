
## Statements vs Expressions
### The basics of JS syntax
See: [Statements Vs. Expressions](https://www.joshwcomeau.com/javascript/statements-vs-expressions/) by Josh W Comeau
---

### Terminology

<dl>
  <dt>Expression</dt>
  <dd>Any piece of code that produces (returns) a value.</dd>
  <dt>Statement</dt>
  <dd>A JavaScript program is a sequence of statements. Each statement is an instruction for the computer to do something. A statement can contain multiple expressions (<a href="https://www.joshwcomeau.com/javascript/statements-vs-expressions/">source</a>).</dd>
</dl>

---

## Expressions
A piece of code that returns a value.

- `1` → produces `1`
- `"hello"` → produces `"hello"`
- `5 * 10` → produces `50`
- `num > 100` → produces either `true` or `false`
- 1 == '1' → produces `true`
- 1 === '1' → produces `false`

---

## Statements
A JavaScript program is a sequence of statements. Each statement is an instruction for the computer to do something.

Examples:

```js
let hi = 5;
```

```js
if (hi > 10) {
  // More statements here
}
```

---

## Statements contain expressions

Statements are the rigid structure that holds our program together, while expressions fill in the details.

Statements often have "slots" for expressions. We can put any expression we like into those slots.

---

For example, declaring a variable has an expression slot:

```js
let hi = /* some expression */;
```

We can use any of the expressions we saw earlier in that slot:

```js
let hi = 1;
let hi = "hello";
let hi = 5 * 10;
let hi = num > 100;
let hi = 1 == '1';
let hi = 1 === '1';
```

---

## A handy trick

Want to know whether a chunk of JS is an expression or a statement? Type it in the console. 

If it returns `undefined`, it's a statement:

![Statement in the console](/images/js/statement.png)

Otherwise, it's an expression:

![Expression in the console](/images/js/expression.png)
---

## Conditional Statements
The `condition` in an `if` statement is an expression.

```js
if (condition) {

  // More statements run if condition is true

}
```
Javascript will **convert** (i.e. coerce) the value of the condition to a `true` or `false` value.

---

### Expressions are Interchangeable
Any expression can be used as an `if` condition, including the ones we saw earlier:

```js
if (1) {
  // 1 is true
}

if ("hello") {
  // "hello" is true
}

if (5 * 10) {
  // 5 * 10 -> 50 -> is true
}

if (num > 100) {
  // Can be true or false, depending on num
}

if (1 == '1') {
  // 1 == '1' is true
} 

if (1 === '1') {
  // 1 === '1' is false
} 
```

---

## Variables and Literals
Variables express the value that has been assigned to them:

```js
const num = 15;

num; // expresses 15
```

Literals express themselves:

```js
'1'; // Expresses '1'
10; // Expresses 10
'Deadpool' // Expresses 'Deadpool'
```

---

## Operators are expressions
All of the operators we've covered are actually functions that return values, making them expressions.

- **Arithmetic**: return numbers (or `NaN`)
- **Comparison**: return `true` or `false`
- **Logical**: return `true` or `false`

---

## Order of Operations
When seeing a mix of operators it helps to know which order they are evaluated. 

From first to last:
1. Logical **NOT** (`!`)
2. **Arithmetic** (each in BEDMAS order)
3. **Comparison** (`===`, `<`, `>=`, etc)
4. Logical **AND** (`&&`), **OR** (`||`)

See: [Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table)

---

## Further Learning
- [Statements Vs. Expressions](https://www.joshwcomeau.com/javascript/statements-vs-expressions/) by Josh W Comeau
- Stack Overflow: [Difference between a statement and an expression?](https://stackoverflow.com/questions/12703214/javascript-difference-between-a-statement-and-an-expression)
- MDN: [Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table)
