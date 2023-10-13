
# Git Workflows
## Collaborating with a Team

---

## Why do we use Git?
- **Clone 3rd party projects**: Popular projects include [lodash](https://lodash.com/), [TailwindCSS](https://tailwindcss.com/) and [Font Awesome](https://fontawesome.com/).
- **Code backups**: Rollback to your last `commit` in case you screw up.
- **Syncing code**: A single dev can sync projects across multiple machines.
- **Deployment**: `push` project code to a server to make it live (with a little help from GitHub).
- **Collaboration with teammates**: Teams can coordinate work, review code and manage  conflicts.

---

## Terminology
<dl>
  <dt>(Merge) Conflict</dt>
  <dd>When one (on two machines) or more developers make changes to the same line of code.</dd>
  <dt>Branch</dt>
  <dd>An alternate version of your code. Each version lives in the same location in the file system but Git re-writes your files based on what Branch you're in.</dd>
  <dt>Pull Request</dt>
  <dd>A fancy-pants GitHub (not Git) feature for reviewing code contributions in large/untrusted teams.</dd>
</dl>

---

## 3 Collaboration Workflows
### In order of increasing fanciness
1. **Not fancy**: The whole team pushes to the `main` branch;
2. **Kinda fancy**: Each dev commits to their own branch(es);
3. **Fancy-pants**: Each dev submits Pull Requests.

---

### Workflow 1: Not Fancy
## Everyone commits to `main`
1. An Owner creates a team repo;
2. The Owner adds each team member to the repo as a Collaborator;
3. All team members push commits directly to the `main` Branch;
4. The last dev to push resolves any conflicts.

---

### Workflow 2: Kind Fancy
## Everyone commits to a branch
1. Steps 1 & 2 from last slide;
2. Each team member creates a branch for their features:
    ```
    $ git checkout -b [feature-name]
    ```
3. The dev commits code to their branch until it's to be added to the main branch;
4. Once the feature is ready, the branch is merged into `main` and conflicts are resolved.
    ```
    $ git checkout main
    $ git merge [feature-name]
    ```

---

### Workflow 3: Fancy-pants
## Devs submit Pull Requests
See [About Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) on GitHub
1. Team members are NOT added as collaborators;
2. Each dev [forks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) and clones the project repo;
3. Work is done in a local feature branch on the fork;
4. Changes are pushed to their fork on GitHub;
5. A Pull Request is submitted for the Owner to accept after conflicts are resolved.
