
# HTML Review
## Inline vs Block Elements

---

## Inline elements
Used for word-level styles such as **bold** and _italicize_.
- They respect `left` & `right` margins and padding, but **not** `top` & `bottom`;
    - Use `line-height` to separate content in the up/down direction;
- They cannot have a `width` and `height` set;
- They allow other elements to sit to their left & right.
- See:
    - [block vs inline elements](https://stackoverflow.com/questions/9189810/css-display-inline-vs-inline-block) 
    - [Understanding the CSS box model for inline elements](https://hacks.mozilla.org/2015/03/understanding-inline-box-model/)

---

## Common inline elements
- `strong`: For **bolding** text
    ```
    <p>Hello, <strong>World</strong>! How are you doing?</p>
    ```
- `em`: For _italicizing_ (emphasize) text
    ```
    <p>Hello, World! How are <em>you</em> doing?</p>
    ```
- `img`: HTML images
    ```
    <p> Images <img src="/path/to/image.png"> act like words by default.</p>
    ```
    - You will often use `display: block` on images to make them behave more intuitively.

---

## Block-level elements
Are used for paragraph-like content. They:
- Respect all sides of `margin` and `padding`;
- Can have `width` and `height` set;
- Force a line break after the block element;
- Are full-width if width is not defined;
- Are zero height if there is no content.

---

## Common Block-level elements:
```
<main>
  <h1>Hello World!</h1>
  <p>How are you doing?</p>
</main>
```
- Headings: `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`
- Paragraphs: `<p>`
- Lists: `<ul>` (bulleted), `<ol>` (numbered)
- Layout: `<header>`, `<footer`>, `<main>`, `<nav>`, `<section>`, `<article>` and `<aside>`
- Generic: `<div>` is used for layout with no semantic meaning

---

## `display` Property
The display property controls which box model "mode" an HTML element is in. We will be covering the following display modes in this course:
- `none`: removes the element from the document
- `inline`: word level
- `block`: paragraph level
- `flex`: one-dimensional layouts (covered later)
- `grid`: two-dimensional layouts (covered later)

---

# Raster HTML Images
## Formats and HTML Images

---

## Terminology

**Raster Image**: An image represented as a two-dimensional picture as a rectangular grid of square pixels.

**Image encoder (aka. codec)**: A library/module that converts one image format to another. Not all encoders are created equal.

**Lossy formats**: Compression in which some of the data from the original file is lost.

**Lossless formats**: Compression in which the image is reduced without any quality loss.

---

![Chart of lossy and lossless characteristics](/images/images/loss-chart.png)

Source: [Image compression deep-dive](https://www.youtube.com/watch?v=F1kYBnY6mwg)

---

![Chart of lossy and lossless codecs](/images/images/encoders.png)

---

## High-frequency Images
Parts of an image (or the whole image) where colour and contrast change a lot from one pixel to the next. 

![Example of a high frequency image](/images/images/high-frequency.jpg)

---

## Compression Artifacts
Don't over-compress JPEG images or you will see compression artifacts.

![Example of compression artifacts](/images/images/lossy-jpeg.png)

---

## Low-frequency Images
Parts of an image (or the whole image) where colour and contrast change very little from one pixel to the next.

![Example of a low frequency image](/images/images/low-frequency.png)

---

## Dithering
Dithering is a technique used when there are too few colours in the image to smooth out gradients.

![Example of a low frequency image](/images/images/dithering.png)

---

## Key Takeaways
- The JPEG format has been traditionally used for high-frequency images.
- The PNG format has been traditionally used for low-frequency images.
- The GIF is should not be used. It sucks at everything.
- The WebP format is about to replace JPEG and PNG and is the recommended format for this program. 
    - See: 
        - [Squoosh.app](https://squoosh.app/)
        - [Image compression deep-dive](https://www.youtube.com/watch?v=F1kYBnY6mwg)

---

## HTML Images

```html
<img src="path/to/file" alt="alternate text">
```

- **`src` Attribute**: The `src` attribute is **required**, and contains the path to the image you want to embed.

- **alt Attribute**: The `alt` attribute holds a text description of the image, which isn't mandatory but is incredibly useful for accessibility — screen readers read this description out to their users so they know what the image means.

Source: [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
---

## Additional Attributes
```html
<img width="100" height="150" loading="lazy" src="path/to/file" alt="alternate text" >
```
- **`width` and `height`**: For performance, it's recommended that you include `width` and `height` attributes that reference the actual dimensions of your image.
    - See: [Do This to Improve Image Loading on Your Website](https://www.youtube.com/watch?v=4-d_SoCHeWE) by Jenn Simmons
- **`loading='lazy'`**: You can enable lazy loading for your images. The browser will delay downloading an image until it enters the viewport.

---

## Styling HTML images
- Setting a `width` _and_ `height` may distort your image:
    <img class="distorted" src="/images/images/high-frequency.jpg" alt="distorted image">
- When in doubt, try:
    ```css
    img {
      width: 100%;
      height: initial;
    }
    ```
- Images are `inline` by default. If you encounter weird behavior, try:
    ```css
    img {
      display: block;
    }
    ```

---

## Getting fancy
Some other CSS effects and techniques you can use on/with images:
- **[`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)**: Very handy for getting images to fit inside containers.
- **[`mix-blend-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode)**: For blending colours into images like you would in an image editor.
    - See: Tony's [blendr app](https://acidtone.github.io/blendr/)
- **[`clip-path`](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)**: For cutting images into shapes. 
    - See: 
        - [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
        - [Codepen example](https://codepen.io/browsertherapy/pen/yLeobxq)

