
# Forms and controls
<dl>
  <dt>Form control:</dt>
  <dd>A User Interface thingy that is a point of connection between the user and the browser.</dd>
</dl>

---

## Accessible forms
### It's important not to screw this up

---

## Form Control Labels
With few exceptions, all form controls should have a `<label>` element for accessibility.

```html
<label for="username">Username:</label>
<input type="text" name="username" id="username">
```
- `for` must be the same as `id` of the control;
- Properly linked `label` elements will:
    - be read by screen readers;
    - focus its form control when clicked.

---

## Fieldsets and Legends
Related fields should be wrapped in a `<fieldset>` with an accompanying `<legend>`. 

```html
<fieldset>
  <legend>Subscribe to our Newsletter!</legend>
  <div>
    <label for="email">Email:</label>
    <input type="email" name="email" id="email">
  </div>
</fieldset>
```
- `<legend>` is read by screen readers for extra instructions;
- When in doubt, wrap your form controls in a `<fieldset>` with `<legend>`.

---

## Radio button groups
Radio button and checkbox groups should always have a fieldset and legend to define general instructions.
```html
<fieldset class="radio">
  <legend>Choose a favourite pet:</legend>
  <div>
    <label for="dog">Dog</label>
    <input type="radio" name="fave" value="dog" id="dog">
  </div>
  <div>
    <label for="cat">Cat</label>
    <input type="radio" name="fave" value="cat" id="cat">
  </div>
</fieldset>
```
- `name` translates to the variable name in Javscript;
- Radio button groups should have the same `name`.

---

## Required fields
![Example of required fields](/images/html/required-fields.png)
- Required fields should be labeled as such
- Use the `required` attribute to prevent a form from submitting an empty field.

---

## More best practices
- Keep forms short;
- Visually group related labels and fields;
- Present fields in a single column layout;
- Don't use placeholder text instead of `<label>`;
- Explain any input or formatting requirements such as for password creation;
- Avoid Reset and Clear buttons;
- Provide highly visible and specific error messages.
  
---

## Forms and Javascript
### Tips and considerations

---

## When to use a `<form>`
The `<form>` element is not required to use form controls but it is recommended if:
- You are submitting data to a server;
- There are many form controls:
    - `<form>` objects provide convenient access to their form data instead of creating a variable for every form control;
- The controls are triggered by a Submit button (instead of a checkbox click).

---

## `<form>` Considerations
The `<form>` element is one of the oldest and comes with behaviour that's both awesome and annoying.

---

## Submitting forms
The `submit` event is attached to the `form`, not the submit button.

```js
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
```
- This is better for accessibility since forms can be submitted without a `click` event;
- This assumes a proper submit button is present.

---

## Submit buttons
Forms can be submitted with either:

An `<input>` element:
```html
<input type="submit" value="Submit Me!">
```

Or a `<button>` with a `type` of `submit`:
```html
<button type="submit">Submit Me!</button>
```
- Submit buttons should be inside the `<form>`;
- For multiple forms use the `form` attribute to bind a button to a `<form>`'s `id`

---

## Preventing Page Refreshes
Submitted forms will refresh the page by default. You need to use `event.preventDefault()` to override this.
```js
const form = document.querySelector('form');

const handleSubmit = function(event) {
  event.preventDefault();
}

form.addEventListener('submit', handleSubmit);
```
- The `event` object needs to be passed as an argument to the event handler;
- `event` is an object created by the browser which you have no control over.

---

## Accessing form values
Using a form removes the need for creating variables for individual variables for form controls.
```html
<fieldset>
  <legend>Subscribe to our Newsletter!</legend>
  <div>
    <label for="email">Email:</label>
    <input type="email" name="email" id="email">
  </div>
</fieldset>
```
```js
const handleSubmit = function(event) {
  event.preventDefault();

  console.log(form.email.value); // tony.grimes@sait.ca
}
```

---

## Further Resources
- [Website Forms Usability: Top 10 Recommendations](https://www.nngroup.com/articles/web-form-design/)
- Watch: [HTML Forms](https://www.youtube.com/watch?v=YwbIeMlxZAU) by Net Ninja
- MDN: [`<form>`: The Form element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- [Basic native form controls](https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls):
    - [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
        - text, number, email, range, etc
    - [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
    - [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
