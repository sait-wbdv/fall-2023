
# Higher Order Array Methods
## Starting with `.forEach()`

---

## Terminology
<dl>
  <dt>Array method</dt>
  <dd>A function that's available to all Javascript arrays. Example: <code>hobbies.join(', ')</code>.</dd>
  <dt>Higher order Function</dt>
  <dd>A function that accepts other functions as parameters. <code>.addEventListener()</code> is a higher order function.</dd>
  <dt>Callback function</dt>
  <dd>A function passed as an argument to a (higher order) function.</dd>
</dl>
---

## [`Array.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
An array method that loops through each item and invokes `callback(item)` at each iteration.

```js
const moods = ['happy', 'sad', 'excited'];

const callback = function(item) {
  console.log(item);
}

moods.forEach(callback);
// happy
// sad
// excited
```
- The value of the current array `item` is passed as an argument to the `callback`.

---

## Optional Arguments
Many looping methods will optionally pass the current array `index` to the `callback`.

```js
const moods = ['happy', 'sad', 'excited'];

const callback = function(item, index) {
  console.log(index);
}

moods.forEach(callback);
// 0
// 1
// 2
```
- Both `item` and `index` can have a name of your choice.

---

## Example
### Print an unordered list
```js
const moods = ['happy', 'sad', 'excited'];

// Create an empty accumulator variable
let output = '';

// Create a callback that adds each list item to `output`
const handleItem = function(item) {
  output += `<li>${item}</li>`;
}

// Invoke the callback on each array item
moods.forEach(handleItem);

// Print the output to the page as an unordered list
document.querySelector('body').innerHTML = `<ul>${output}</ul>`;

```

---

## Key Takeaways with `.forEach()`
- It does not return a value;
- Using the `return` keyword in your `callback` will not do anything;
- While you can break out of the loop, it's not recommended. There is probably another array method better suited for your purpose.

---

## `for` vs `Array.forEach()`
Using `for`:
```js
for (let i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i]);
}
```
Using `Array.forEach()`:
```js
moods.forEach(function(item) {
  console.log(item);
});
```
Most implementations of higher order functions use anonymous callback functions.

---

## Which is best?
- Use `for` when there's no array to loop though;
- Although `for` is a valid way to loop through an array, it's prone to bugs:
    ```js
    // This loop runs one too many times
    for (let i = 0; i <= hobbies.length; i++) {
      // last loop: hobbies[i] is undefined
      console.log(hobbies[i]); 
    }
    ```
- In general, if you're looping through an array, the preferred method is to use `Array.forEach()`;
    - For looping through a String as an array, use `for` (there's no `String.forEach()`).

---

## Other useful higher order array methods

---

## [`Array.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
Loops through an array and returns an array of filtered elements.
```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const handleFilter = function(word) {

  if (word.length > 6) {
    // word is added to result
    return true;
  } else {
    // word is NOT added to result
    return false;
  }

}

const result = words.filter(handleFilter);
// expected output: Array ["exuberant", "destruction", "present"]
```
---

## Common Syntax Shortcuts
Before:
```js
const handleFilter = function(word) {
  if (word.length > 6) {
    return true;
  } else {
    return false;
  }
}

const result = words.filter(handleFilter);
```
After:
```js
const result = words.filter(word => word.length > 6);
```
These examples have the same output.

---

## Shortcuts in detail
The `if`/`else` statements are redundant:
```js
const handleFilter = function(word) {
  if (word.length > 6) {
    return true;
  } else {
    return false;
  }
}
```
After:
```js
const handleFilter = function(word) {
  return word.length > 6;
}
```

---

### Shortcuts in detail
Anonymous functions are often used in industry:
```js
const handleFilter = function(word) {
  return word.length > 6;
}

const result = words.filter(handleFilter);
```
After:
```js
const result = words.filter(function(word) {
  return word.length > 6;
});
```
Using ES6 fat arrow syntax:
```js
const result = words.filter(word => {
  return word.length > 6;
});
```

---

### Shortcuts in detail
When the body of a function can be put on one line, the `{}` and `return` can be omitted:
```js
const result = words.filter(function(word) {
  return word.length > 6;
});
```
After:
```js
const result = words.filter(word => word.length > 6);
```

---

### Back to 
## Useful Higher Order Methods
These examples will use some of the previous shortcuts.

---

## [`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
Loops through an array and returns a new array containing items returned at each iteration of the loop.

```js
const numbers = [1, 4, 9, 16];

// pass a function to map that squares each item
const numberSquared = array.map(function(number) {
  return number * 2;
});

console.log(numberSquared);
// expected output: Array [2, 8, 18, 32]
```

---

## [`Array.find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
Returns the first element that satisfies the provided testing function. Otherwise, `undefined` is returned.

```js
const numbers = [5, 12, 8, 130, 44];

const foundNumber = numbers.find(function(number) {
  return number > 10;
});

console.log(foundNumber);
// expected output: 12
```
- The loops ends when the callback first returns `true`;
- This method is very handy when you need to find a single object in an array of objects.

---

## Key Takeaways
### With `.filter()`, `.map()` and `.find()`
- They each loop through their array;
- They each return a value:
    - `.filter()`/`.map()` returns and Array
    - `find()` returns an Array item
- The callback function returns `true` or `false`
    - `.filter()`/`.map()`: adds item to result on `true`;
    - `find()`: returns the current item when true and quits the loop.


---

## Further Resources
- MDN: [`Array.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
    - Youtube: [JavaScript Array forEach Method](https://www.youtube.com/watch?v=159EAISAxwg)
- MDN: [`Array.filter()`]((https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter))
    - Youtube: [JavaScript Array filter method](https://www.youtube.com/watch?v=WrB_--bVbbs)
- MDN: [`Array.map()`]((https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map))
    - Youtube: [JavaScript Array map method](https://www.youtube.com/watch?v=hfYa4ugeyuc)
- MDN: [`Array.find()`]((https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find))
    - Youtube: [Array find() and findIndex() Methods](https://www.youtube.com/watch?v=9b6gxQZHvis)
