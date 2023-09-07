---
title: Setting Up Your Workspace
excerpt: Web development (all software development, actually) requires you to work with a lot of files. In this program, we don't prescribe (i.e. tell you how to do it) how you should organize your files and projects but here we list some tips and best practices.
date: '2023-09-07'
status: published
---

<h2>SAIT-WBDV Workspace</h2>
It's recommended that you create a dedicated directory (workspace) for the code and materials you will be creating in this program. This directory can be placed in your `Documents` directory:

```html
/Users/your-username/Documents/sait-wbdv/
  ├─ assignments/
  ├─ code-journal/
  ├─ in-class/
  └─ projects/
```

---

<h2>Assignments</h2>
You should keep your assignments separate from all other code. You can put them all into an `assignments` folder or maybe create parent directories for each course. It's up to you.

```html
/sait-wbdv/assignments/
  ├─ cpnt-200/
  ├─ cpnt-201/
  ├─ cpnt-260/
    ├─ a1/
      ├─ css/
      ├─ images/
      ├─ js/
      └─ index.html
    ├─ a2/
    ├─ a3/
    └─ a4/
  └─ etc/
```

---

<h2>Coding Journal</h2>

The purpose of a learning journal: 
- to give you the ability to self-assess accurately;
- to keep track of helpful resources and content creators;
- to promote meta-learning (learning to become a more effective learner).

See: [Grimes's Coding Journal](https://acidtone.github.io/code-journal/)

### Three components to a learning journal
1. Define the learning goal concretely and precisely.
    - Example: running a marathon
        - **A good goal**: "I want to be able to run a marathon in less than 4 hours."
        - **NOT a good goal**: "I want to finish first in a marathon."
2. Write down the learning process.
3. Make observations, collect data, self-reflect and develop new learning strategies.


```html
/sait-wbdv/code-journal/
  └─ README.md
```

Note: Placing all your journal entries in a single `README.md` is a good start but you may separate entries by date if you wish.

---

<h2>Daily in-class code</h2>

In this program, you will be creating a lot of "throw-away" code each day (experiments, challenges, pair coding). It often makes sense to organize your code by date so it doesn't get in the way of your longer-term projects:

```html
/sait-wbdv/in-class/
  ├─ 2021-09-11-intro-to-html/
    ├─ hello-world/
    ├─ my-first-website/
    └─ etc/
  ├─ 2021-09-12-typography/
  ├─ 2021-09-13-colour/
  └─ 2021-09-14-etc-etc/
```

---

<h2>Class/personal/work Projects</h2>
It's recommended that you create a dedicated workspace folder for your projects. If you have multiple contexts (i.e. personal vs work) that deal with code, you can make a separate folder for each.

```html
/sait-wbdv/projects/
  ├─ portfolio-website/
    ├─ css/
    ├─ images/
    ├─ js/
    └─ index.html
  ├─ cool-idea-1/
  ├─ flexbox-experiment
  └─ moms-baking-website/
```

