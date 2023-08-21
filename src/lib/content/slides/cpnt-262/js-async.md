
## Asynchronous JS
### Retrieving data with `fetch()` 

---

### Problem
- Unlike other languages, Javascript is single-threaded. This means that one process has to handle all requests in a browser tab.
- This means it can't wait for data to come back from a network request; it's got stuff to do. 
- Instead, it sends the request and sets a "reminder" to deal with the response when it arrives. 
- We used to do this with callbacks, now we use Promises.

---

### Terminology
<dl>
  <dt>Callback</dt>
  <dd>A function passed to another function as a value, to be invoked later.</dd>
  <dt>Promise</dt>
  <dd>New in ES6: used for asynchronous code instead of callbacks. Can only have one of two outcomes: success or failure.</dd>
  <dt><code>async</code>/<code>await</code></dt>
  <dd>New in ES7: provides a cleaner syntax for Promises but does the same thing.</dd>
</dl>

---

### Traditional Promises
The "old-school" (but still valid) ES6 method of executing asynchronous JS with the `.then()`/`.catch()` syntax.

```js
fetch('https://example.com/path-to-json')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
  })
  .catch(function(err){
    console.log(err);
  });
```

---

### Newer syntax of `async`/`await`
ES7 introduced a more popular syntax for using promises. It's functionally the same as `.then()` and `.catch()` but with less typing.

```js
const fetchData = async function() {
  const response = await fetch('https://example.com/path-to-json');
  const data = await response.json();

  console.log(data);
}

fetchData();
```
---

### `async` functions
In order to use the `await` keyword, you need to wrap your code inside an asynchronous function defined with the `async` keyword.

```js
const fetchData = async function() { 
  // `await` can now be used inside this function

};
```

---

### "Pausing" your code with `await`
`await` is used to "pause" your code when invoking a function that returns a promise, like `fetch()` and `response.json()`.

```js
const fetchData = async function() {
  const response = await fetch('/api/characters/5');

  const data = await response.json();

  console.log(data);
}

fetchData();
```

---

### Key Takeaways
- The execution of a script will finish before asynchronous code can execute.
- Promises act as a "reminder" for your code to process a response once it arrives.
- Old Promise syntax uses `.then()` and `.catch()`. It works but it's clunky.
- Modern `async`/`await` syntax does the same thing as `.then()` and `.catch()` but with more intuitive code.

---

### Things to remember with `async`/`await`
- `await` only works inside a function defined with the `async` keyword.
- `await` must be added in front of any function that returns a Promise.
- Any data returned from a Promise is only available inside the `async` function.
- Use `try...catch` blocks to handle rejected Promises (covered tomorrow).

---

### Things to remember with `fetch()`
The `fetch` API takes specific steps when requesting data:
1. `fetch(url)` will make an asynchronous request to a server for data;
2. That response will return with JSON;
3. The JSON is then converted to regular Javascript data using `response.json()`;
4. The resulting `data` can then be used normally within the `async` function.

---

## Further resources
- MDN Readings:
    - [General asynchronous programming concepts](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts)
    - [Introducing asynchronous Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
- [How to Use Fetch with async/await](https://dmitripavlutin.com/javascript-fetch-async-await/)
- [Working with JSON data](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
- Tool: [JSON Placeholder](https://jsonplaceholder.typicode.com/)
- Reference: [List of Public APIs](https://github.com/public-apis/public-apis)

