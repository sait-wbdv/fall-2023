
# Git and GitHub
## Code Management and Deployment

---

### What is Git?

Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows (thousands of parallel branches running on different systems).
- [from Wikipedia](https://en.wikipedia.org/wiki/Git)
- See also: [What is Git?](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F)
            
---

### Why do we use it?

- **Clone 3rd party projects**: Popular projects include [lodash](https://lodash.com/), [TailwindCSS](https://tailwindcss.com/) and [Font Awesome](https://fontawesome.com/).
- **Code backups**: `commit` your code to take a snapshot of a project. You can then rollback in case you screw up.
- **Syncing code**: If you work on two machines, like a home laptop and office system, you can use Git to sync your projects across your machines.
- **Collaboration with teammates**: Git allows multiple developers to work on the same file at the same time. Conflicts will happen but Git helps resolve them.
- **Deployment**: In industry, we use Git to push our project code to a server to make it live.

---

### Terminology
- **Version Control**: A category of software tools that help a software team manage source code over time.
- **Repository (aka repo)**: The root directory of a project that Git tracks. 
- **Local Repository**: A repo on your local machine.
- **Remote Repository**: A repo on another machine or server (such as GitHub).
- **`commit` changes**: Saving a snapshot of your project.
- **`add` changes**: An extra step you need to complete before you can commit a change (for safety).
- **`push` changes**: Send local changes to your remote repo.
- **`pull` changes**: Retrieve remote changes to your local repo.

---

### How does it work?
Git keeps track of each line of code in your project, including:
- who created the line(s) of code;
- every change made to a line(s) of code;
- who made each change and when.

---

### How does it work?

A typical sequence of events in a developer's day, they:
1. Will makes changes to code on their local repo;
2. `add` the changes to "staging";
3. `commit` the changes to save a "snapshot" of the project;
4. `push` the changes to a Remote Repo (i.e. GitHub) when the changes are ready to be shared or deployed.
    - You must `pull` any new changes from the Remote Repo before you can `push`. This is when dreaded merge conflicts need to be handled.
    - At any point during development, you can view the status of your repo to find helpful information of the status of your project

---

### Key Takeaways
Some things to think about when first learning Git:
- It's very important that you're in the correct directory (usually the root of your
project) when running Git commands. 
    - Practice your command line skills and always keep in mind which folder you're in.
- Always `add` your changes before you `commit` them.
- Pay careful attention to error messages in Git. It will often provide helpful hints and commands to help you.

---

### Important
Don't forget to add the `-m "commit message here"` when committing changes. 

```
$ git commit -m "updated About page"
```

Otherwise, your terminal will open a vim window so you can add the mandatory commit message. It's the default command line text editor on most systems and is not the most intuitive application to use. 
- `:q!` will quit without saving so you can try committing again with the `-m` flag.
- `:wq` will save the file before you quit. This is handy if you're merging changes from multiple machines.
- See this [Vim cheat sheet](https://devhints.io/vim) if you need more commands.
