## `npm` Package Manager 
The best tools have recursive names

---

## Why do we use `npm`?
1. **Dependency management**: Keeping track of software versions is hard work. npm makes this easier (but it can still be a pain).
2. **Development and deployment**: Along with Git, npm is often used to manage code on live servers.
3. **Project collaboration**: Along with Git, npm is used to make sure team members are all developing with the same software versions.

---

## Terminology
<dl>
  <dt>Dependency</dt>
  <dd>Software that your app needs to function properly. Each dependency will often also have their own dependencies.</dd>

  <dt>Package Management System</dt>
  <dd>Software that automates the installation and updating of software dependencies.</dd>

  <dt>Semantic versioning</dt>
  <dd>A three number versioning system (<code>major</code>.<code>minor</code>.<code>patch</code> => <code>2.3.1</code>) for software. </dd>
</dl>

---

<dl>
  <dt><code>Node</code></dt>
  <dd>A framework for running Javascript from the command line or on a server.</dd>

  <dt><code>npm</code></dt>
  <dd><em>npm Package Manager</em>, previously <em>Node package manager</em> (npm is now used for many software projects besides Node)</dd>

  <dt><code>npm</code> Package</dt>
  <dd>A package is a file or directory that is described by a <code>package.json</code> file.</dd>
</dl>

---

## Node in a Nutshell
- Run a js file from the command line with:
    ```shell
    $ node <path-to-js-file>
    ```
- Node will not run browser-specific code like `document.querySelector()`
- We will be using Node in our examples today but it won't be used a lot in this program.

---

## npm Stats and Trivia
As of July 2019:
- Largest software package registry in the world.
- 1 million indexed packages
- ~10 billion downloads a week
- ~45 billion downloads a month

---

## npm Security
- The registry does not have any vetting process for submission.
- Packages can be low quality, insecure, or malicious.
- Registry quality is dependant on user reviews and moderation.
- See: [Notable Breakages](https://en.wikipedia.org/wiki/Npm_(software)#Notable_breakages) (Wikipedia)

---

## npm Outages
- The npm registry is not distributed. 
- If the registry goes down, all of npm goes down.
- See: [npm Status](https://status.npmjs.org/) page for outage history.

---

## Typical npm usage
1. Initialize a new npm project (or download one).
    ```shell
    $ npm init
    ```
    Or with defaults:
    ```shell
    $ npm init -y
    ```
2. Install a software package:
    ```shell
    $ npm install <package-name>
    ```
3. Include the package in your project by following the package's documentation.

---

## Example `npm` directory structure

```js
project-root
├── node_modules
    ├── dependency-1
    ├── dependency-2
    └── dependency-3
├── app.js
├── package-lock.json
└── package.json
```

---

## Important files and directories
<dl>
  <dt><code>package.json</code></dt>
  <dd>Contains all the meta information about an npm project. If this file isn't present, it's not an npm project.</dd>

  <dt><code>package-lock.json</code></dt>
  <dd>An auto-generated list of specific packages and versions that your project uses. <strong>Do not edit manually this file.</strong></dd>

  <dt><code>node_modules</code></dt>
  <dd>The directory that contains the actual software packages. This can get pretty large.</dd>
</dl>


---

## Key Takeaways
- IF your project won't run in the browser, add `node_modules` to your `.gitignore` file. This directory stores all your dependencies (often lots of files) which should not be committed to your repository.
- Commit `package.json` and `package-lock.json` to your repository (unless you're specifically told not to).
- You no longer need to use the `--save` flag when installing packages.

---

## Example `package.json` file

```json
{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {}
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
See: [Anatomy of a `package.json` file](https://www.digitalocean.com/community/tutorials/nodejs-package-json)

---

## Common Scenarios
### Evaluating project status

---

## No `package.json file`
```js
project-root
└── app.js
```

An npm project needs to be initialized with:
```shell
$ npm init -y
```

See: [npm - Initialize a new project](https://gist.github.com/acidtone/f2e901fb4b04bd41aa59755e2de9af4f)

---

## No `package-lock.json` and `node_modules`
```js
project-root
├── app.js
└── package.json
```

Software dependencies need to be downloaded:

```shell
$ npm install
```

Or install a specific package:
```shell
$ npm install <package-name>
```

---

## Project is ready (maybe)
```js
project-root
├── node_modules
    ├── dependency-1
    ├── dependency-2
    └── dependency-3
├── app.js
├── package-lock.json
└── package.json
```

Common commands to start a project:

```js
$ npm start
```
```js
$ npm run dev
```
```js
$ node app.js
```          

---

## ES `vs` CommonJS Modules
- There are two competing standards for installing JS modules.
- CommonJS came first and is the default method in Node.
- ES Modules came later and is the official browser standard.
- Browsers only support ES Modules but Node supports both.
- The current trend is to use ES Modules.

---

## Examples
CommonJS
```js
const express = require('express');
```

- `require()` will not work in the browser.

--- 
ES Modules
```js
import Reveal from 'reveal.js';
```

- `import` will work in Node but the software has to support it.
