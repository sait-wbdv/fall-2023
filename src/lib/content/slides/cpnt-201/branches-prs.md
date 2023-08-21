
# Git Branches and Pull Requests

---
## What are Branches and Pull Requests
- Branches are different verions of the same code
  - You create a branch off of another branch (main is the main branch)
  - Then edit code in it, allowing others to push code without conflict
- Pull Requests are how code moves from one branch to another
  - Pull Requests give you a space to review changes and comment before merging

---
## Why Branch?

- Code can break, and often does. This happens more when multiple people work on the same code
- Using a `dev` branch can protect the code in main
- This fosters better teamwork and cleaner code

---
## How to Branch?
- Run this command in the terminal from within your git repository

```
git checkout -b branch-name
```

---
# How to change branches

- Run this command in your git repository

```
git checkout branch-name
```

---

## Branching workflow

1. Edit files for a particular feature in your `dev` branch until you're happy with the feature

    - make and push commits as per usual

2. Open a Pull Request in Github

    - This will create a trackable commentable space that documents the changes that you make

3. When your feature is ready, merge to main

---

## Tips

- assign 1-2 code reviewers to check the code in a PR before it is moved to main
- be very clear of what you're doing in your commits
- make more small Pull Requests instead of less large pull requests
- only edit relevant files when working on a feature
- **communicate with your team**

### Make good quality PRs

- Title and summary should be clear and concise
- describe your changes well in each commit
- keep it small
  - make a pr that focuses on 1 thing. don't make PRs that aim to do lots of different things
- test your code before submitting a PR
  - Do not submit broken code
  - Sometimes when we change too many things, unexpected breaks can occur
    - before submitting, double check that everything still looks good
- Lots of information can be found [in this gist](https://gist.github.com/mikepea/863f63d6e37281e329f8)
