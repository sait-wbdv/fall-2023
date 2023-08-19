
## `for` Loops
The `for` loop is ubiquitous in the programming world. Almost every programming language has one and many employers will use a `for` loop challenge in their hiring process.
---

### Terminology
<dl>
  <dt>Iteration</dt>
  <dd>The same procedure repeated multiple times.</dd>
  <dt>Iterator</dt>
  <dd>A counter variable (usually <code>i</code>) that keeps track of which iteration the program is in.</dd>
  <dt>Iterable</dt>
  <dd>An object/variable which can be looped over or iterated over with the help of a <code>for</code> loop.</dd>
</dl>
---

### The `for` loop syntax


```js

for ([initializer]; [condition]; [increment]) {
  // Your code here
}            

```

To [Print 1-to-100 with a for Loop](https://gist.github.com/acidtone/e87aa5564ae1b286beca66b07d52550f).

```js
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
```

---

<dl>
  <dt>Initializer</dt>
  <dd>This expression usually creates one or more loop iterators (counters), but the syntax allows an expression of any degree of complexity.</dd>
  <dt>Condition</dt>
  <dd>If the value of condition expression is true, the loop iteration executes. If the value of condition is false, the loop terminates.</dd>
  <dt>Increment</dt>
  <dd>The loop counter increments. This expression is usually i++ but the syntax allows an expression of any degree of complexity.</dd>
</dl>

---

### `for` Loop Flowchart

![Flowchart of a for loop](/images/js/for-loop-flowchart.png)

Source: [JavaScript for loop (with examples)](https://www.programiz.com/javascript/for-loop)

---

### The `for` loop process
1. The `initializer` expression executes and creates one or more loop counters. The syntax allows an expression of any degree of complexity but is usually `i = 0` or `i = 1`. 
    - it's convention to name your iterator `i`.

---

### The `for` loop process
2. The `condition` expression is evaluated. 
    - If the value of `condition` is `true`, the loop statements within the code block execute (Step 3). 
    - If the value of `condition` is `false`, the `for` loop terminates and the script proceeds to the next line after the loop.

---

### The `for` loop process

3. The code block executes. Any counters or variables that were initialized are available within the code block.
4. The `increment` expression is executed. This usually increases the counter by 1 (`i++`).
5. Control returns to Step 2.

---

### Key Takeaways
- It's convention to name your counter (iterator) variable `i`.
- Variables declared inside the `for` loop are reset on each iteration.
- Variables declared inside the `for` loop are not available outside the loop.
- Use `let` when initializing `i`. `const` won't work if `i` is incremented or overwritten.
- Be careful when defining your `condition`. It's easy to be "one off" when choosing comparison operators such as `<` and `<=`.

---

## `break` and `continue`
### Stopping and skipping

---

### `break`
The `break` statement "jumps out" of a loop.

```js
for (let i = 1; i <= 10; i++) {

  if (i === 4) { 
    break; 
  }
  
  console.log(i);

}

// Output: 1, 2, 3
```

---

### `continue`
The continue statement skips one iteration in the loop.

```js
for (let i = 1; i <= 10; i++) {

  if (i === 4) { 
    continue; 
  }
  
  console.log(i);

}

// Output: 1, 2, 3, 5, 6, 7, 8, 9, 10
```

---

## Further Resources
- MDN: [`for` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)
- Gist: [Print 1-to-100 with a `for` Loop](https://gist.github.com/acidtone/e87aa5564ae1b286beca66b07d52550f)
- Video: [`for` Loop](https://www.youtube.com/watch?v=s9wW2PpJsmQ) by Mosh Hamedani
- [10 Simple Javascript For-Loop Exercises](https://avantutor.com/blog/10-simple-javascript-for-loop-exercises/)
