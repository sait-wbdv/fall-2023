
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

### HTTP Request Methods
Each request made to the server has a method attached to it. There are four common methods we use in web development

1. **GET**: Retrieves data from server.
2. **POST**: Submits data to the server.
3. **PUT**: Updates the data that is already within the server.
4. **DELETE**: Deletes the data that is already within the server.

Source: [HTTP Basics](https://medium.com/nerd-for-tech/http-basics-d86fbf8107ec)

---

### Route Examples (GET)
Reading Static Files
<ul class="code no-bullet">
  <li>GET /about-us/index.html</li>
  <li>GET /css/main.css</li>
  <li>GET /images/logo.png</li>
</ul>

List of articles (JSON data)
<ul class="code no-bullet">
  <li>GET /api/articles</li>
</ul>

Single article (JSON data)
<ul class="code no-bullet">
  <li>GET /api/articles/some-title</li>
</ul>

---

### Other Route Examples
Create a new article:
<ul class="code no-bullet">
  <li>POST /api/articles</li>
</ul>

Update a single article:
<ul class="code no-bullet">
  <li>PUT /api/articles/some-title</li>
</ul>

Delete a single article:
<ul class="code no-bullet">
  <li>DELETE /api/articles/some-title</li>
</ul>

---

### API Design & Documentation
Route Parameters
<ul class="code no-bullet">
  <li>GET /api/users/<strong>:id</strong></li>
  <li>PUT /api/users/<strong>:id</strong></li>
  <li>GET /api/articles/<strong>:slug</strong></li>
  <li>PUT /api/articles/<strong>:slug</strong></li>
</ul>

Sorting
<ul class="code no-bullet">
  <li>GET /api/articles<strong>?sort=desc</strong></li>
</ul>

Pagination
<ul class="code no-bullet">
  <li>GET /api/articles<strong>?page=2&per_page=10</strong></li>
</ul>

---

## HTTP Status Codes
Each response from the server has a status code to inform us about how the request went.

Source: [HTTP Basics](https://medium.com/nerd-for-tech/http-basics-d86fbf8107ec)

---

### Status codes groups

**1xx**: The request is received and being processed right now.

**2xx**: The request is successfully received, understood and accepted.

**3xx**: Further action such as authorization or input must be taken or that it's redirecting to another route.

**4xx**: The request was somehow wrong or missing something.

**5xx**: The request was healthy but the server failed at giving the proper response.

---

## Common Status Codes

**200**: OK

**201**: OK created (Something new is created)

**301**: Moved to a New URL

**304**: Not Modified (Cached Version)

**400**: Bad Request

**401**: Unauthorized

**404**: Not Found

**500**: Internal Server Error

---

## Further Reading
- [CRUD vs REST Guide: Operations Simplified 101](https://hevodata.com/learn/crud-vs-rest/)
- [HTTP Basics](https://medium.com/nerd-for-tech/http-basics-d86fbf8107ec)
- Video: [What is a REST API?](https://www.youtube.com/watch?v=lsMQRaeKNDk)
