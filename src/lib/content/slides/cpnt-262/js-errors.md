
# Handling Errors
## Syntax vs Logic Errors

---

- **Syntax errors**
    - Errors in the rules of writing JS
    - Easiest to debug
- **Logic errors**
    - Code is broken but there are no errors
    - Hardest to debug; sometimes takes hours

---

## Is it a syntax or logic error?
- Syntax errors are explicit and usually give you a filename and line number;
    ![Variable Undefined in Chrome](/images/errors/const-unassigned-chrome.png)
- If there's no indication of an error, it's probably a logic error.

---

## Find errors early with "Squigglies"
VS Code is your friend. It will underline errors with red, yellow and blue "Squigglies":

![Example of VS Code error squigglies](/images/errors/squiggly-underline.png)

Hover over the squiggly for hints on what's wrong:

![Example of VS Code squiggly details](/images/errors/squiggly-details.png)

---

## Diagnosing Syntax Errors
1. Check the console for errors;
    ![Example of const re-assignment error](/images/errors/const-reassignment-chrome.png)
2. Find the file and line number of the error;
3. Look for the "Squiggly" in VS Code:
    ![Example of VS Code error squigglies](/images/errors/squiggly-underline.png)
4. If you still can't figure it out, copy and paste the error and search online. You will often find an answer on [Stack Overflow](https://stackoverflow.com/).

---

## Common Syntax Errors
### Variable declaration and assignment

---

### Problem: Using a variable that does not exist
Chrome

![Variable Undefined in Chrome](/images/errors/var-undefined-chrome.png)

### Solutions
- Declare a variable with `const` or `let` before use.
- Double-check spelling of the variable name
    ```js
    const fullName = 'Buffy the Vampire Slayer';
    console.log(fullname); // error
    ```

---

### Problem: `const` declared but not assigned

Chrome

![Variable Undefined in Chrome](/images/errors/const-unassigned-chrome.png)

### Solutions
- When using `const`, assign a value with `=`, OR
    ```js
    const age; // error
    ```
- Declare the variable with `let` instead
    ```js
    let age; // Totally fine!
    ```

---

### Problem: Re-assigning a `const` variable
Chrome

![Variable Undefined in Chrome](/images/errors/const-reassignment-chrome.png)

### Solution
- Declare the variable with `let` instead:
    ```js
    const age = 46;
    age = 47; // error
    ```
    ```js
    let age = 46;
    age = 47; // Totally fine!
    ```
---

## Dealing with the error stack
Sometimes an error will often cascade to multiple errors throughout an application:

![Example of syntax error in terminal](/images/errors/error-stack.png)

- You can ignore most of the extra errors;
- Look for references to your filename;
- Depending on the situation, the real error will either be at the top or bottom of the stack

---

## Debugging Logic Errors
There will be no error message, so these are trickier.
1. Understand what you're trying to accomplish.
2. Understand what your code is doing.
3. Form a hypothesis or two before looking at code.
4. Identify key variables or conditions with `console.log()`.
5. When in doubt: find a 2nd pair of eyes;
6. If no one is available: try [Rubber Duck Debugging](https://rubberduckdebugging.com/)

See: <a href="https://www.dummies.com/article/technology/programming-web-design/html5/how-to-resolve-javascript-logic-errors-for-html5-and-css3-programming-156883">How to Resolve JavaScript Logic Errors</a> for more

---

## Tony's most common logic error
- He's editing/running the wrong file.

---

## Further resources
- MDN: [What went wrong? Troubleshooting JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong)
- [15 Common Beginner JavaScript Mistakes](https://www.jamesqquick.com/blog/15-common-beginner-javascript-mistakes/) 
- Video: [Best Debugging Tips For Beginners](https://www.youtube.com/watch?v=gaminoBsQx0)
    - [Companion Video](https://www.youtube.com/watch?v=H0XScE08hy8)
