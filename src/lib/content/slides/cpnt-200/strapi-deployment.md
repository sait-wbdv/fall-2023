
# Deploying Strapi
## On render.com

---

## Terminology
<dl>
  <dt>Deploy</dt>
  <dd>Making a project publicly available on a server.</dd>
  <dt>Managed Host</dt>
  <dd>AKA, cloud provider. A server provider that handles all the details of deployment. In other words, we just have to click a few buttons in an admin panel to make a project live.</dd>
</dl>

---

## General steps
1. Sign up to your chosen cloud host (duh);
    - Today we will be deploying to [`render.com`](https://render.com)
2. Connect your GitHub account to your Cloud Host account;
3. Use the Host admin panel to deploy your Strapi repo (this takes awhile);
4. Set your **Environment Variables** in your Host admin panel;
5. Sign into your Strapi project and import your data.

---

## Environment Variables
Your `.env` file stores local environment information that Strapi (and most server software) needs to run.
- Your `.env` file should never be included in your repo (it's listed in the default Strapi `.gitignore` file);
- This files allows you to customize your local environment:
    - Example: you can run your server on port 1338 on your machine but 1337 everywhere else;
- When you deploy to [render.com](https://render.com/), you will need to enter the same `.env` variables in the admin panel for everything to work.

---

## Pre-requisites
Before you begin deploying to [render.com](https://render.com/), you should have the following prepared:
- A free [render.com](https://render.com/) account;
- Install the [Import Export Entries](https://market.strapi.io/plugins/strapi-plugin-import-export-entries) plugin for Strapi;
    ```
    $ npm install strapi-plugin-import-export-entries
    ```
    - `$ npm run build` to enable the plugin
        - You may have to follow the full instructions on the Plugin home page to enable the plugin?
    - Export your local Entries into a JSON file;
- A GitHub repo containing your (working) Strapi project;

---

## Deploying to [render.com](https://render.com/)

---

### Step 1: Create a Web Service
Connect your Strapi GitHub repo OR paste the URL of your repo if it's public.

---

### Step 2: Project settings
If the field is not listed here, use the default value:
- **Name**: A unique name for the project. This will become the subdomain of your project URL.
- **Root directory**: Leave blank;
- **Build Command**: 
    ```
    $ npm install && npm run build
    ```
- **Start Command**:
    ```
    $ npm run start
    ```

---

### Step 3: Environment Variables
You will need to add all the `.env` variables in your project to your Web Service:
1. Go to the **Environment** section;
2. Click **Add Environment Variables** to add each variable listed in your `.env` file:
    ```
    HOST=0.0.0.0
    PORT=1337
    APP_KEYS=[key1],[key2],[key3],[key4]
    API_TOKEN_SALT=[token-salt]
    ADMIN_JWT_SECRET=[admin-jwt-secret]
    JWT_SECRET=[jwt-secret]
    ```
    - Replace the [values] with the actual values listed in your project `.env` file.

---

### Step 4: Deploy
[render.com](https://render.com/) will automatically deploy whenever you change your settings or push new code to your repo.
1. Go to **Events** to see the status of your deployment;
    - This may take awhile...
2. If there's an error: click on **deploy** to view the logs and troubleshoot;
    - double-check that your project works locally;
    - confirm your service settings and environment variables;
3. If the deploy succeeds, go to your Strapi admin for the next step.

---

### Step 5: Import Entries
Your repo will contain your Content-types but not your Super-user and your content Entries:
1. Re-create your Super-user admin account;
2. Go to the Content Manager;
3. Import your Entries using the file you Exported from your local project;
4. Done!

There is also an Import function in the Import/Export Entries section under the Content-type Builder but it doesn't seem to work.

---

## Step 6: API Token
You will also need to [re-add your API Token](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/optional/api-tokens.html) to make API requests on the live server. **This will be a different token than your local one**.

---

## Further resources
- [Deploy Strapi Docs on render.com](https://render.com/docs/deploy-strapi)

