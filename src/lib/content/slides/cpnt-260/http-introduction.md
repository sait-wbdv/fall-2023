

# An Introduction to HTTP
The Hyper Text Transfer protocol is how a browser requests a web page from a server.


---

## HTTP Terminology
<dl>
  <dt>Resource</dt>
  <dd>The target of a Request, such as an HTML document, JSON data, image, etc.</dd>
  <dt>Client</dt>
  <dd>In this course, a client is the browser that makes a request for a Resource.</dd>
  <dt>Server</dt>
  <dd>A server is a online computer that accepts a request from a client (browser) and returns a response (usually a file like HTML, CSS or images).</dd>
</dl>

---

## Request/Response Cycle 
<dl>
  <dt>HTTP Request</dt>
  <dd>A request for a resource from the browser to a server.</dd>
  <dt>HTTP Response</dt>
  <dd>A response from a server to the browser containing either a requested resource or the result of an operation.</dd>
</dl>

---

![Illustration of the request/response cycle](/images/http/request-response-cycle.png)

See: [HTML Tutorial for Beginners: HTML Crash Course](https://www.youtube.com/watch?v=qz0aGYrrlhU) by Mosh Hamedani

---

## Example Request/Response
See: [HTML Tutorial for Beginners: HTML Crash Course](https://www.youtube.com/watch?v=qz0aGYrrlhU)
---

1. The browser makes a GET Request for a URL.

![Illustration of the request/response cycle](/images/http/request.png)

2. The server receives the Request and finds the Resource such as a file, image or data.

---

3. The server sends the Resource back as a Response.

![Illustration of the request/response cycle](/images/http/response.png)

4. The browser receives the Response and might: display a page/image/etc, load JSON data with Javascript, etc.
    
---

![Illustration of the request/response cycle](/images/dev/front-back-full.png)

- Industry job descriptions are often based on whether you code for the browser or the server. Full stack developers code for both.

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

## Links and Paths

---

## File system links

<p class="code" style="text-align: center; font-size: 64px"><strong>file:///</strong>Users/tony/Documents/...</p>

- File system links only work on the computer it was created on.
- Double-check the links in your assignments to make sure they work on the web or your instructor's system.

---

<h2>Absolute web links</h2>

<p class="code" style="text-align: center; font-size: 64px"><strong>https://</strong>example.com/about.html</p>

- Full web links are used for resources hosted on a different server than yours.

---

<h2>Relative to Web Root</h2>

<p class="code" style="text-align: center; font-size: 64px"><strong>/</strong>images/profile.png</p>

- points to `https://your-website.com/images/profile.png`
- Relative links are for files that are in the same website as the current document.
- A leading slash starts at the top of the server file tree.

---

<h2>Relative to current document</h2>

<p class="code" style="text-align: center; font-size: 64px">about/index.html</p>

- The browser will look for an `about` directory next to the current file.

---

## Moving up directory tree
<p class="code" style="text-align: center; font-size: 64px"><strong>../../</strong>about/index.html</p>

- Browser looks two directories above the current file.

---

## Explicit current directory
<p class="code" style="text-align: center; font-size: 64px"><strong>./</strong>js/app.js</p>

- Javascript files sometimes need to be explicitly relative to the current directory with one dot.
- This is why `$ git add .` adds all files in the current directory.

---

## Further Learning
- [How the Web Works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
- [What is a URL?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)
- [HTML Tutorial for Beginners: HTML Crash Course](https://www.youtube.com/watch?v=qz0aGYrrlhU) by Mosh Hamedani
