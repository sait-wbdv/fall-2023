
# URLS and File Paths
## How to get where you're going

---

## Links and Paths

---

## File system links

<p class="code" style="text-align: center; font-size: 64px"><strong>file:///</strong>Users/tony/Documents/...</p>

- File system links only work on the computer it was created on.
- Double-check the links in your projects to make sure they work on the web or other devs' systems.

---

<h2>Absolute web links</h2>

<p class="code" style="text-align: center; font-size: 64px"><strong>https://</strong>example.com/about.html</p>

- Full web links are used for resources hosted on a different server than yours.

---

<h2>Relative to Web/System Root</h2>

<p class="code" style="text-align: center; font-size: 64px"><strong>/</strong>images/profile.png</p>

- points to `https://your-website.com/images/profile.png`
- A leading slash starts at the top of the server file tree.
- In the terminal, `/` starts at the top of the system hard drive

---

<h2>Relative to current document</h2>

<p class="code" style="text-align: center; font-size: 64px">js/app.js</p>

- The browser will look for an `js` directory next to the current file.

---

## Moving up directory tree
<p class="code" style="text-align: center; font-size: 64px"><strong>../../</strong>js/app.js</p>

- Browser looks two directories above the current file.

---

## Explicit current directory
<p class="code" style="text-align: center; font-size: 64px"><strong>./</strong>js/app.js</p>

- Javascript files often need to be explicitly relative to either the current document
    - Sometimes `./` represents special folders
- The `.` represents the current directory

---

## Anatomy of a URL
See: <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL" target="_blank">What is a URL?</a>

---

### Protocol

<p class="code"><strong>https://</strong>example.com/users?name=tony</p>

<h3>Domain</h3>

<p class="code">https://<strong>example.com</strong>/users?name=tony</p>

<h3>File Path</h3>

<p class="code">https://example.com<strong>/users</strong>?name=tony</p>

<h3>Query Parameter</h3>

<p class="code">https://example.com/users<strong>?name=tony</strong></p>

---

### REST Terminology
<dl>
  <dt>Endpoint</dt>
  <dd>A fancy name for a URL Path.</dd>
  <dt>Route</dt>
  <dd>An HTTP Method paired with an Endpoint.</dd>
  <dt>Path Segment</dt>
  <dd>The bits of text located between the slashes (<code>/</code>) in a URL Path: <span class="code">/<strong>path</strong>/<strong>to</strong>/<strong>file</strong></span></dd>
  <dt>Route Parameter</dt>
  <dd>A variable passed as a Path Segment in a URL.</dd>
</dl>

---

### Route Examples (GET)
Reading Static Files
<ul class="code no-bullet">
  <li>GET /about-us/index.html</li>
  <li>GET /css/main.css</li>
  <li>GET /images/logo.png</li>
</ul>

List of articles (JSON data)
<p class="code">GET /api/articles</p>

Single article (JSON data)
<p class="code">GET /api/articles/some-title</p>

---

### Other Route Examples
Create a new article:
<p class="code">POST /api/articles</p>

Update a single article:
<p class="code">PUT /api/articles/some-title</p>

Delete a single article:
<p class="code">DELETE /api/articles/some-title</p>

---

### API Design & Documentation
Route Parameters
<p class="code"></p>
<ul class="code no-bullet">
  <li>GET /api/users/<strong>:id</strong></li>
  <li>PUT /api/users/<strong>:id</strong></li>
  <li>GET /api/articles/<strong>:slug</strong></li>
  <li>PUT /api/articles/<strong>:slug</strong></li>
</ul>

Sorting
<p class="code">GET /api/articles<strong>?sort=desc</strong></p>

Pagination
<p class="code">GET /api/articles<strong>?page=2&per_page=10</strong></p>

---

## Further Learning
- [What is a URL?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)
- [Dealing with paths](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files)
- [CRUD vs REST Guide: Operations Simplified 101](https://hevodata.com/learn/crud-vs-rest/)
- Video: [What is a REST API?](https://www.youtube.com/watch?v=lsMQRaeKNDk)

