
# Javascript Arrays
## Nerds start counting at `0`
---

### Terminology
<dl>
  <dt>Array index</dt>
  <dd>The location of an item in an array. This is always a sequential number starting at <code>0</code>.</dd>
  <dt>Array item</dt>
  <dd>Any Javascript data type (i.e. value) that an array index points to.</dd>
  <dt>Array length</dt>
  <dd>The number of items in an array accessed by <code>array.length</code>.</dd>
</dl>

---

### Value data types
The _value_ of an item can be any data type: `undefined`, `null`, `number`, `string`, `boolean`, `array`, `object`, etc.

```js

const randomStuff = [null, 9, 'Hello World!'];


```

Although it's possible, you won't often see a mix of different value types in the same array.

---

### Accessing array items

```js
const animals = ['Puppy', 'Bear', 'Moose', 'Tiger', 'Husky'];
```
The _first_ index of an array is `0`.

```js
const firstAnimal = animals[0]; // Puppy
```

The _last_ index is `Array.length - 1`.

```js
const lastAnimal = animals[animals.length - 1]; // Husky
```

---

### Mutation and `const`
Creating an array using `const` still allows you to change (or mutate) the items in that array.

```js
const hobbies = ['pinball', 'bug hunting', 'napping'];

hobbies[2] = 'proper sleeping'; // No error!
```

`const` only stops you from _re-assigning_ `hobbies`, not changing `hobbies`.

---

## Common array operations

---

### Finding items

```js
const animals = ['Puppy', 'Bear', 'Tiger', 'Husky', 'Puppy'];  
```

Find the _first_ index of an item with `array.indexOf()`
```js
let pos = animals.indexOf('Puppy'); // 0
```

Find the _last_ item with `array.lastIndexOf()`
```js
console.log(animals.lastIndexOf('Puppy'));
// Expected output: 4
```

---

### Adding items
Add an item with `array.length`.

```js
animals[animals.length] = 'Wolf'; // New item
```

Add an item with `array.push()`:
```js
const animals = ['Puppy', 'Bear', 'Moose', 'Tiger', 'Husky'];

animals.push('Kitty');
// ['Puppy', 'Moose', 'Tiger', 'Husky', 'Kitty']

```

---

### Removing items
Remove the last item with `array.pop()`:

```js
const animals = ['Puppy', 'Bear', 'Moose', 'Tiger', 'Husky'];
let removedItem = animals.pop();

console.log(removedItem);
// 'Husky'

console.log(animals)
// ['Puppy', 'Bear', 'Moose', 'Tiger']
```

Remove an item by index with `array.splice()`

```js
let removedItem = animals.splice(pos, 1); 

console.log(removedItem);
// 'Bear'

console.log(animals)
// ['Puppy', 'Moose', 'Tiger', 'Husky']
```

---

### Searching Arrays
The `includes()` method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
```js

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat')); // true

console.log(pets.includes('at')); // false

```

---

### Converting an Array to a String
The `join()` method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.
```js
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); // "Fire,Air,Water"

console.log(elements.join('')); // "FireAirWater"

console.log(elements.join('-')); // "Fire-Air-Water"            

```

---

## Further resources
- MDN: [Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
- In [JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour](https://www.youtube.com/watch?v=W6NZfCO5SIk) by Mosh
    - 35:22 [Arrays](https://www.youtube.com/watch?v=W6NZfCO5SIk&t=2122s)
- [Start of Array Exercises](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/store-multiple-values-in-one-variable-using-javascript-arrays) on Free Code Camp
