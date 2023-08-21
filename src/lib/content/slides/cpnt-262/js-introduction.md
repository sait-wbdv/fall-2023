
# Javascript Basics
## The Browser Behaviour Layer

---

### Review
## The Browser Triad

---

## HTML 
### Content
The markup language that we use to structure and give meaning to our web content, for example:
- defining page elements (nav, headings, etc)
- embedding media (images, videos, audio, etc).
- managing connected files (`.css`, `.js`, `.png`, etc)

---

## CSS 
### Presentation
A language of style rules that we use to apply styling to our HTML content, such as 
- colour
- typography
- layout
- animation (when used for presentation)

---

## Javascript 
### Behaviour
The official programming language of the browser. It does the things HTML and CSS can't, such as:
- dynamically update content
- control media such as video
- animation of images, svgs, etc
- math, if you're into that kind of thing

---

### Where can you use Javascript?
![Illustration: Browser vs Node](/images/js/chrome-vs-node.png)

Source: [Learn JavaScript in 1 Hour](https://youtu.be/W6NZfCO5SIk?t=56)

---

## Javascript outside the browser
- [Build a web server](https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module)
- [Building games](https://medium.com/the-node-js-collection/fun-and-games-with-node-js-359cee687173)
- [Home automation](https://levelup.gitconnected.com/make-your-own-smarthome-server-with-nodejs-86e7aa0f63f4)
- [Controlling drones](https://medium.com/maestral-solutions/programming-the-ar-drone-2-0-using-javascript-and-node-js-part-1-10bb946c60e5)

---

## A Quick History
- 1995: JavaScript invented by Brendan Eich
- 1996: Netscape 2 released with JavaScript 1.0
- 1997: JavaScript became an ECMA standard
- 1997: ECMAScript 1 (**ES1**) released
- 1998: **ES2** released
- 1999: **ES3** released
- 2009: **ES5** released (ES4 abandoned)
- 2015: **ES6** released
- 2018: Full support for ES6 in all browsers (except IE)

Source: [W3Schools](https://www.w3schools.com/js/js_history.asp)

---

### What is ECMAScript?
![Illustration: ECMAScript vs Javascript](/images/js/ecmascript-vs-javascript.png)

Source: [Learn JavaScript in 1 Hour](https://youtu.be/W6NZfCO5SIk?t=154)

---

## Adding JS to HTML
### Recommended for this course
```html
<html>
  <head>
    <title>Hello World!</title>
    <script src="js/app.js" type="module"></script>
  </head>
  <body>
    <h1>Hello world!</h1>
  </body>
</html>
```
- `<script>` is added to the `<head>` element
- `</script>` closing tag is required, because reasons
- `type="module"` turns on modern features

---

## Other ways to add JS to a page
You will often see these in examples/documentation online.
- You will lose marks if you use these methods for assignments in this course (unless you're installing a third-party library or plugin).

---

### Alternative 1
## Embedded Javascript
```html
<html>
<head>
  <title>Hello world!</title>
</head>
<body>
  <h1>Hello world!</h1>
  <script>
    console.log("Hello world!");
  </script>
</body>
</html>
```
- `<script>` element goes just before the `</body>`
- You will see this often when installing third-party libraries

---

### Alternative 2
## Content Delivery Networks

```html
<html>
  <head>
    <title>Hello Font Awesome!</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/js/all.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
  </head>
  <body>
    <i class="fa-brands fa-square-js"></i>
  </body>
</html>
```
- A convenient way of installing third-party libraries.
- To see if something can be loaded via a CDN, search:
> "cdn [your favourite tool]"

---

## Writing JS
### Rules, tips and reminders

---

## Naming variables
- JavaScript is case-sensitive:
    - `myvar` is not the same as `myVar`
- Use camelCase for variable names:
    - Yup: `lastName`
    - Nope: `last_name`
- Hyphens (-) are not allowed in variable names
    - CSS: `border-top`
    - JS: `borderTop`
- Semi-colons are optional but recommended for this course;

---

## Readable code
- 2 space indents
- Spaces around operators (`=`, `+`, `*`, etc)
    - **Yup**: 
        ```js
        const total = 99.99 * 0.05;
        ```
    - **Nope**:
        ```js
        const total=99.99*0.05;
        ```
- Limit line length to 80 characters

---

## Comment your code!
```js
// Single line comment

/*
Multi-line
comment
*/
```
- Code commenting will be expected in this course
- Comments should be descriptive but concise

---

## Further resources
- MDN: [Javascript - First Steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps)
- **[Learn JavaScript in 1 Hour](https://www.youtube.com/watch?v=W6NZfCO5SIk)** by Mosh
- Freecode Camp: 
    - [Full JavaScript Course for Beginners](https://www.freecodecamp.org/news/full-javascript-course-for-beginners/)
    - Exercises: [Javascript basics](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript)
- Code Academy: [Introduction to Javascript](https://www.codecademy.com/learn/introduction-to-javascript)
- [Traversy Crash Course in Javascript](https://www.youtube.com/watch?v=hdI2bqOjy3c) - video series
