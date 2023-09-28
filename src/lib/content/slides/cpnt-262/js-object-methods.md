# Object Methods

These can make it easier to iterate through object values

---

## Terminology

<dl>

<dt>this</dt>
<dd>When used in an object, it refers back to the object so that you can access it's values from within</dd>
<dt>Object Method</dt>
<dd>Used on the object constructor (unlike array methods), they take the object as a parameter</dd>

---

## `Object.keys`

- Returns an array of all the keys in an object

```js
const dog = {
  name: "Kira",
  age: 4,
  breed: "White Shepard/Husky",
};
const keys = Object.keys(dog);
console.log(keys);
// will print out: ["name", "age", "breed"]
```

---

## `Object.values`

- Returns an array of all the values in an object
- useful if you need to work with the data in an object and want to use array methods

```js
const dog = {
  name: "Kira",
  age: 4,
  breed: "White Shepard/Husky",
};
const values = Object.values(dog);
console.log(values);
// will print out: ["kira", 4, "White Shepard/Husky"]
```

---

## `Object.entries`

- Returns an array of arrays of all the keys and values in an object

```js
const dog = {
  name: "Kira",
  age: 4,
  breed: "White Shepard/Husky",
};
const entries = Object.entries(dog);
console.log(entries);
// will print out: [["name", "kira"],["age", 4],["breed", "White Shepard/Husky"]]
```

---

## `Object.create`

- Creates a new object linked to the prototype of an existing object
- Great for when you have a general object category and need specific variations
- example that's using the dog object in the past few slides to make a cat object
- This is a slightly more advanced method that you likely won't need for most cases, but this and others are good to be aware of because they do come in handy.

```js
const cat = Object.create(dog);
cat.breed = "Calico";
```

---
