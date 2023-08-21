
# Handling Exceptions
## `try`/`catch` with `async`/`await` 
---

## Types of Errors 
- **Syntax errors**
    - Errors in the rules of writing JS
    - Easiest to debug
- **Run-time errors**
    - Code technically correct but can't run
    - Example: File/library/module not found
- **Logic errors**
    - Code is broken but there are no errors
    - Hardest to debug; sometimes takes hours

---

## Terminology
<dl>
  <dt>Exception</dt>
  <dd>An error object created by Javascript when there's a run-time error. It contains a description of the error and where it occured.</dd>
  <dt>Throw an Exception</dt>
  <dd>The act of generating an exception. Developers can write validation code that throws an exception when it otherwise would not have.</dd>
</dl>

---
## Terminology
<dl>
  <dt><code>try</code></dt>
  <dd>A clause that runs code that can generate exceptions. </dd>
  <dt><code>catch</code></dt>
  <dd>A clause that catches exceptions that are thrown. </dd>
  <dt><code>throw</code></dt>
  <dd>A statement that manually generates exceptions.</dd>
</dl>

---

## Exceptions with Promises
- Promises can either succeed (be resolved) or fail (be rejected).
- Rejected Promises will throw an exception that can be caught with a `catch` clause.

---

### Considerations with `fetch()`
- `fetch()` _only_ rejects a Promise (i.e. throws an exception) if there's a network error (i.e. server not found).
- An exception is _not_ thrown when it encounters a `404 Not Found`, or similar status error.
- `fetch()` returns a `Response.ok` property that is `true` if the status code is 200-299. `false`, otherwise.

---

### Example: `fetch()` with no error Handling

```js
const fetchData = async () => {
  const response = await fetch('url-to-somewhere');
  const data = await response.json();

  console.log(data);
}
```

---

### Example: `fetch()` with `try` / `catch`

```js
const fetchData = async () => {
  try {
    const response = await fetch('url-to-somewhere');
    const data = await response.json();

    console.log(data);
    
  } catch (error) {
      console.error(error);
  }
}
```

---

### Example: `fetch()` with `try` / `catch` and `throw`

```js
const fetchData = async () => {
  try {
    const response = await fetch('url-to-somewhere');
    if (!response.ok) { 
        throw new Error(response.statusText);
    }
    const data = await response.json();

    console.log(data);
  } catch (error) {
      console.error(error);
  }
}
```
---

## Further Resources
- [The Basics of Exception Handling in JavaScript](https://www.section.io/engineering-education/exception-handling-in-javascript/) 
- MDN: [`try`/`catch` blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- Video: [try, catch, finally, throw - error handling in JavaScript](https://www.youtube.com/watch?v=cFTFtuEQ-10) by Free Code Camp

