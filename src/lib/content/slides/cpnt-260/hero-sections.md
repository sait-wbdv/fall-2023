
# Hero Sections
## Flex, CSS Images and Viewport Units

---

## Hero sections
### Key Takeaways
- Hero sections are usually displayed on the home page and important internal pages;
- Smaller page banners are used on all other pages;
- CSS images are used to allow overlapping text;
- `height` or `min-height` is usually needed to the size of the hero section;
- Flex and/or Grid can be used to center content vertically and horizontally;

---

## Centering Hero Content
![Example of centred content](/images/css/centred-content.png)

---

### The Code
HTML
```html
<body>
  <header>
    <img src="/path/to/file" alt="hero image" width="350" height="350">
  </header>
</body>
```

CSS
```css
header {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background-color: papayawhip;
}
```

---

## CSS Backgrounds
### An easy way to overlap text on images
![Example of centred content](/images/css/hero-image.png)

---

### The HTML Code
```html
<body>
  <header>
    <p>Web Fundamentals</p>
  </header>
</body>
```
Flexbox can position any content in your Hero sections:
- Call-to-Action cards
- Generic cards
- Videos
- etc

---

### The CSS Code

Flex Positioning
```css
header {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  height: 100vh;
}
```

Background Image

```css
header {
  background-image: url('/path/to/file');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; 
}
```

---

## The Extras
Try adding extra spice to your Hero sections:
- Blend colours into your background image with [`background-blend-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode);
- Enhance a background colour with a [`linear-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient) and/or [`radial-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient);
- Create transparency with [`opacity`](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity);

