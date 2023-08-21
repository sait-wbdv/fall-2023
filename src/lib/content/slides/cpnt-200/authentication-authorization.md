
## API Security
### Authentication vs Authorization 

---

## Terminology 
<dl>
  <dt>Authentication (tokens)</dt>
  <dd>The process of verifying who a user is.</dd>
  <dt>Authorization (access tokens, keys)</dt>
  <dd>The process of verifying what an application has access to.</dd>
</dl>

---

### Real-world example
When you go through security in an airport:
1. You show your ID to <strong>Authenticate</strong> your identity. 
2. Then, when you arrive at the gate, you present your boarding pass to the flight attendant, so they can <strong>Authorize</strong> you to board your flight.

Source: <a href="https://auth0.com/docs/get-started/authentication-and-authorization" target="_blank">Authentication vs. Authorization</a> on Auth0

---

### API Keys
- Is an **Authorization** scheme that does _not_ **Authenticate** the user.
- Identify the application making the request and can be revoked.
- Are considered public and are inherently insecure because they are often shown in the URL as a Query Parameter (and therefore can't be encrypted).

<p class="code">example.com/api/invoices?<strong>token=sdafnDuTD83</strong></p>


---

### Third-party APIs
The general process for creating a key:
1. Login to the service portal.
2. Find/generate your API key. This is usually under Settings or similar.
3. Copy your API key into your application.
4. Follow the instructions provided by the service to test your API key.

---

### Supabase API Key Location
![Screencap of API section](/images/db/supabase-api-keys.png)

---

## Environment Variables
Environment variables allow storing sensitive information such as API keys, database credentials, and other information that should not be stored in the codebase.

---

<h3>Setting up your <code style="font-variant: initial">.env</code> file</h3>

1. Create a `.env` file in the root of your project
2. Add your key/value pairs. These will be specific to the application you're building:
    
```
PUBLIC_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92c3R1ZHVtZmhya3V1bWdmbnNtIiwicm9sZSI6ImFub24iLCJpYMzksImV4cCI6MTk5NTQzNzkzOX0.JUm1zX5zp1ApFCoEviuZYJooJhfo
SECRET_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92c3R1ZHVtZmhya3V1bWdmbnNtIiwicm9sZSI6InN3OTg2MTkzOSwiZXhwIjoxOTk1NDM3OTM5fQ.eiQbWITJ031N73Up6STWeE_hQV6-K8gZoU
```

---

### Important things to remember
- By convention, `.env` variable names are uppercase with underscores
- Variable values are _not_ in quotes
- **Never** push `.env` files to your remote repos. Make sure `.env` is added to your project `.gitignore` file.

---

## Extra Reading
- <a href="https://auth0.com/docs/get-started/authentication-and-authorization" target="_blank">Authentication vs. Authorization</a> (Auth0)
- <a href="https://cloud.google.com/endpoints/docs/openapi/when-why-api-key" target="_blank">Why and when to use API keys</a> (Google Cloud)
- <a href="https://zapier.com/engineering/apikey-oauth-jwt/" target="_blank">API Keys vs OAuth Tokens vs JSON Web Tokens</a> (Zapier)
