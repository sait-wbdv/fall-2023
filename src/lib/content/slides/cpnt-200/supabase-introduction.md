
# Supabase with SvelteKit
## Getting Started

---

## First-time Setup
1. [Create Supabase account](https://app.supabase.com/sign-up)
    - Supabase will create your database for you.
    - Use a strong password for your database password and store it in a safe place. Don't lose it!
2. Add your Instructor as a Team Administrator (click on Org at the top of the page)
    ![Teams page](/images/db/supabase-team.png)


---

### Tutorial
## [Use Supabase with SvelteKit](https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit)

Complete this tutorial to connect your first SvelteKit page to your database. The above steps have been duplicated here, with some changes for your `.env` file.

---

### Step 1: Set up a Supabase project with sample data
1. [Create a new project](https://app.supabase.com/) in the Supabase Dashboard.

2. After your project is ready, create a table in your Supabase database using the [SQL Editor](https://app.supabase.com/project/_/sql) in the Dashboard. Use the following SQL statement to create a countries table with some sample data.

```sql
-- Create the table
CREATE TABLE countries (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL
);
-- Insert some sample data into the table
INSERT INTO countries (name) VALUES ('United States');
INSERT INTO countries (name) VALUES ('Canada');
INSERT INTO countries (name) VALUES ('Mexico');
```
---

### Step2: Create a SvelteKit app

Create a SvelteKit app using the `npm create` command or you can use a project you've already set up.

```bash
$ npm create svelte@latest hello-supabase
```

---

### Step 3: Install the Supabase client library
The fastest way to get started is to use the `supabase-js` client library which provides a convenient interface for working with Supabase from a SvelteKit app.

Navigate to the SvelteKit app and install `supabase-js`.

```bash
$ npm install @supabase/supabase-js
```

---

### Step 4a: Add public API (anon) key to your `.env`
Create an `.env` file (if you don't already have one) in the root of your project and add your public API (anon) key as `SUPABASE_KEY`.
  
```
SUPABASE_KEY=<anon key here>
```

---

### Step 4b: Create the Supabase client
Create a `/src/lib` directory in your SvelteKit app, create a file called `supabaseClient.js` and add the following code to initialize the Supabase client with your project URL and public API (anon) key.

```js
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_KEY } from '$env/static/private';

export const supabase = createClient('https://<project>.supabase.co', SUPABASE_KEY);

```
- Replace `<project>` in the connection URL with the id of your project.

---

### Step 5a: Create `+page.server.js`
Use `load` method to fetch the data server-side and display the query results as a simple list.

Create `+page.server.js` file in the `routes` directory with the following code.

```js
import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("countries").select();
  return {
    countries: data ?? [],
  };
}

```

---

### Step 5b: Create `+page.svelte` page
Create or modify a `+page.svelte` file in the `routes` directory with the following code.

```html
<script>
  export let data;
  let { countries } = data;
</script>

<ul>
  {#each countries as country}
    <li>{country.name}</li>
  {/each}
</ul>
```

---

### Step 6: Start the app
Replace the existing content in your +page.svelte file in the routes directory with the following code.

```bash
$ npm run dev
```

---

## Further Learning
**Supabase Auth Deep Dive**
- [Part One: JWTs](https://supabase.com/docs/learn/auth-deep-dive/auth-deep-dive-jwts)
- [Part Two: Row Level Security](https://supabase.com/docs/learn/auth-deep-dive/auth-row-level-security)
- [Part Three: Policies](https://supabase.com/docs/learn/auth-deep-dive/auth-policies)
- [Part Four: GoTrue](https://supabase.com/docs/learn/auth-deep-dive/auth-gotrue)
- [Part Five: Google Oauth](https://supabase.com/docs/learn/auth-deep-dive/auth-google-oauth)
**Intermediate/Advanced Tutorials**
- [Build a User Management App with SvelteKit](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit)
    - This tutorial uses Typescript
- [Supabase OAuth with SvelteKit (Discord, Google, GitHub)](https://www.youtube.com/watch?v=KfezTtt2GsA)

