---
title: Assignment 4 - Vite Project with a Pull Request
excerpt: In this assignment, you will install a date library into a Vite project and submit your code in a Pull Request.
points: 20
type: assignment
status: published
---

## Instructions
1. Create a new [Vanilla Vite project](https://vitejs.dev/guide/).
2. Modify `package.json` according to the requirements listed in the Marking Criteria.
3. Modify the project structure according to the requirements listed in the Marking Criteria.
4. Initialize project as a Git repository and make your changes in a branch called `201-a4` 
4. Install a date library as an ESM module and demonstrate its use on the default Vanilla Vite home page.
5. Install a second `npm` package of your choice and demonstrate its use.
6. Add your changes to `main` branch as a Pull Request.
7. Deploy your project to a free host that supports Vite.

---

## Marking Criteria
**Each of the following requirements will be worth 4 points** for a total of 20 points.

### 1. `npm` project setup
Initialize an `npm` project that has properly formatted `package.json` and `.gitignore` files:
- [ ] Project `name` set to `201-a4`
- [ ] Project `description` set to an a description of the assignment
- [ ] Project `type` set to `module`
- [ ] Project `main` script set to the name of the entry page of your project
- [ ] Project `author` set to your name
- [ ] Project `license` set to `MIT`
- [ ] `.gitignore` file present that excludes `node_modules` directory, along with common Mac and Windows files/extensions
  - This file will be set up for you when you initialize a project with Vite

### 2. Vite Project Improvements
Make the following improvements to Vite's default vanilla project setup:
- [ ] Move `.js` files to a dedicated `js` directory
- [ ] Move `.css` files to a dedicated `css` directory
- [ ] Move images (such as `.png`, `.svg`, etc) to a dedicated `images` directory
  - This includes the `vite.svg` image located in the `public` directory

### 3. Date Library
Install a date library such as `DayJS`, `luxon` or `date-fns`:
- [ ] Library listed as a local dependency in `package.json`
- [ ] Library imported into a Node or Vite project using ES Module `import` syntax
- [ ] Project installs fresh dependencies properly when `npm install` is entered from the command line
- [ ] Main script runs when `npm run dev` is entered from the command line
- [ ] Using your chosen date library, output:
  - the current date to the vanilla Vite home page in the following format: "Today's date: Oct 30, 2023";
  - The number of days since this program started on Sept 5, 2023.

### 4. Above and Beyond
Install a second `npm` package of your choice and demonstrate its use in your project. 
- [ ] Library listed as a local dependency in `package.json`
- [ ] Library imported into a Node or Vite project using ES Module `import` syntax
- [ ] Project installs fresh dependencies properly when `npm install` is entered from the command line
- [ ] Main script runs when `npm run dev` is entered from the command line
- [ ] Package either makes a visual change to the Vite project output or improves the project in some non-trivial way
- [ ] Include link to your chosen package in your `README`

### 5. Pull Request and Deployment
Demonstrate your knowledge of [GitHub Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) by adding your work from a PR created from a branch called `201-a4`.
1. Push `201-a4` branch to GitHub
2. Merge your changes into `main` from a Pull Request created from your pushed branch
3. Deploy your project to a free host that supports Vite, such as [Vercel](https://vercel.com/docs/frameworks/vite) or [Netlify](https://docs.netlify.com/integrations/frameworks/vite/)

---
## Submission Requirements
- Add a `README.md` file to the root of your project that contains:
    - your name
    - course and assignment number
    - link to deployed github page
    - link to github repo
    - attributions to assets
- ZIP all files required for the site to operate and submit to Brightspace;
- Include links to the following as a comment in your Brightspace submission:
  - GH repo
  - Direct link to your `201-a4` Pull Request
  - Deployed site link
