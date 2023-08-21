
# HTTP and REST
## Accessing Online Data 

---

## Request/Response Cycle 
<dl>
  <dt>HTTP Request</dt>
  <dd>A request for a resource from the browser to a server.</dd>
  <dt>HTTP Response</dt>
  <dd>A response from a server to the browser containing either a requested resource or the result of an operation.</dd>
</dl>

---

## HTTP Terminology
<dl>
  <dt>Resource</dt>
  <dd>The target of a Request, such as an HTML document, JSON data, image, etc.</dd>
  <dt>Method</dt>
  <dd>A CRUD operation performed on a resource: 
    <ul>
      <li>POST (Create)</li>
      <li>GET (Read)</li>
      <li>PUT (Update)</li>
      <li>DELETE (Delete)</li>
    </ul>
  </dd>
</dl>

---

## Example Request/Response
1. The browser makes a GET Request for a URL.
2. The server receives the Request and finds the Resource such as a file, image or data.
3. The server sends the Resource back as a Response.
4. The browser receives the Response and might:
    - display a page/image/etc, OR;
    - load JSON data with Javascript.


---

## Anatomy of a URL
See: <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL" target="_blank">What is a URL?</a>

---
### Protocol
<p class="code"><strong>https://</strong>example.com/users?name=tony</p>

### Domain
<p class="code">https://<strong>example.com</strong>/users?name=tony</p>

### Path (Endpoint)
<p class="code">https://example.com<strong>/users</strong>?name=tony</p>

### Query Parameter
<p class="code">https://example.com/users<strong>?name=tony</strong></p>

---

## REST APIs
A standard method of using HTTP to transfer data and/or perform actions between a browser and a server.

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

## Further Reading
- <a href="https://hevodata.com/learn/crud-vs-rest/" target="_blank">CRUD vs REST Guide: Operations Simplified 101</a>
- Video: <a href="https://www.youtube.com/watch?v=lsMQRaeKNDk" target="_blank">What is a REST API?</a>

