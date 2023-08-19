# Strings
## And Common String Methods
![Example of a string object in the console](/images/js/string-object.png)

---

### The String Object
Javascript can convert strings into a `String` object, which includes:
- An array of each character in the string;
- An `String.length` property representing the number of characters in the string.
- A number of string methods that provide useful searching and manipulation functions. These methods will often accept or return the _index_ of a character or substring.

---

### Common string operations

- Find the ['length'](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) of a string

    ```js
    const browserType = 'mozilla';
    
    browserType.length; // 7

    ```

- Retrieving a specific string character

    ```js
    const firstChar = browserType[0];
    
    console.log(firstChar); // 'm'

    ```            
- Retrieving the _last_ character
    ```js
    const lastChar = browserType[browserType.length - 1];
    
    console.log(lastChar); // 'a'

    ```

---

### Testing for a substring
The [`includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) method performs a case-sensitive search to determine whether one string may be found within another string, returning `true` or `false` as appropriate. 

```js
const browserType = 'mozilla';

if (browserType.includes('zilla')) {
  console.log('Found zilla!');
} else {
  console.log('No zilla here!');
}

```

---

### Testing for a starting substring
The [`startsWith()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) method determines whether a string begins with the characters of a specified string, returning true or false as appropriate. 

```js
const browserType = 'mozilla';

if (browserType.startsWith('moz')) {
  console.log('Starts with moz!');
} else {
  console.log("Doesn't start with moz!");
}

```

---

### Testing for an ending substring
The [`endsWith()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) method determines whether a string ends with the characters of a specified string, returning `true` or `false` as appropriate. 

```js
const browserType = 'mozilla';

if (browserType.endsWith('zilla')) {
  console.log('Ends with zilla!');
} else {
  console.log("Doesn't end with moz!");
}

```

---

### Finding the location of a substring
The [`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring.

```js
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"

```

---

### Updating parts of a string
The [`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) method returns a new string with some or all matches of a `pattern` replaced by a `replacement`.

```js
const browserType = 'mozilla';
const updated = browserType.replace('moz','van');

console.log(updated);      // "vanilla"
console.log(browserType);  // "mozilla"

```

---

### Extracting a substring from a string
The [`slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) method extracts a section of a string and returns it as a new string, without modifying the original string. 

```js
const browserType = 'mozilla';
console.log(browserType.slice(1, 4)); // "ozi"

```

---

### More String methods
See [the complete list of Javascript string methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods)
