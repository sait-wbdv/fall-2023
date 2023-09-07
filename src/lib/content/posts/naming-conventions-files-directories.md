---
title: Files, directories and naming conventions
excerpt: As you work on your craft as a programmer, you will be generating many files and directories for your projects. Naming and directory structure is one of the first steps to building professional websites and apps.
date: '2023-09-01'
status: published
---

<h2>Prerequisites</h2>

- [Dealing with files](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files)
- [Absolute vs Relative file paths](https://www.coffeecup.com/help/articles/absolute-vs-relative-pathslinks/)
- Terminology: [Files, directories and paths](https://gist.github.com/acidtone/2062459ab8b9ee758ca1b5ab312f2440)

---

<h2>File naming conventions/guidelines</h2>

- Files should be named consistently
- Filenames should be short but descriptive (less than 25 characters)
- Use alpha numeric characters when possible
- Use underscores or hyphens instead of spaces
- In general, use lower case characters. Note: exceptions include README files, operating system directories (`Users`, `Desktop`, `Documents`, etc)

### Examples
- GOOD
    - `/Users/tony/Documents/work/resume-2021.pdf`
    - `/Users/tony/Documents/school/projects/project-1/index.html`
- BAD
    - `/Users/tony/Desktop/Resume 2021.pdf`
        - In general, don't store common files in your `Desktop` or `Downloads` folders. This is what the `Documents` folder is for.
    - `/Users/tony/Documents/ABC University/Class Projects/Project 1/index.html`
        - Using spaces is considered bad practice for paths that you will be accessing from the command line.

