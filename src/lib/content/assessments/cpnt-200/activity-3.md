---
title: Assignment 3 - Content Management Configuration
type: assignment
points: 15
---

**Objectives**

- Set up a simple blog CMS UI
- Connect Directus Headless CMS to Supabase
- Fetch blog data in Sveltekit

## Steps

- Follow the [official guide](https://supabase.com/partners/integrations/directus) to connect directus to supabase
- In Directus, set up a schema for a blog post
  - it should include these fields:
    - Title
    - Author
    - Tags
    - Rich text or markdown content for body
    - Summary
    - Date
- Create one blog post
  - content can be 100% lorem ipsum style
  - use all the fields
- Set up a sveltekit app
  - we will only use the main page (no new routes)
  - styling is not necessary beyond making sure the content is recognizable
- Set up the API Endpoint in Sveltekit
- Fetch your blog post
- Render the blog information onto the index page
- Deploy to netlify

### Resources

- [Netlify and Sveltekit Server Routes](https://docs.netlify.com/integrations/frameworks/sveltekit/)

## Marking Rubric

### 5 Points: Directus, Supabase, Sveltekit Configuration

- All 3 platforms are connected to one another
- Access permissions are configured correctly
- Platforms are all set up according to up to date instructions

### 5 Points: Blog post schema and sample content

- Correct fields chosen for the blog post content
- Sample post has been created
- Schema is accessable
- Data is secure on supabase side (Read only API used for Sveltekit)

### 5 Points: Blog post fetch and render

- Read only api endpoint used with sveltekit and netlify (see link in resources)
- Sample Data (lorem ipsum) is fetched in the svelte server route
- Sample data (lorem ipsum) is rendered on page
- Doesn't need to look good, just needs to be readable

## Submission Instructions

- Submit a link to your deployed website
- Also submit a read only link to your supabase endpoint
