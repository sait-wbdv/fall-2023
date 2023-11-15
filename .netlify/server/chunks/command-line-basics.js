import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Command Line Basics",
  "excerpt": "Most of the command line tools you use as a developer (like [Git](https://gist.github.com/acidtone/5d45f96bc11fada75038e552f9ba1a5c), Node and npm) will **assume that you are in the root directory (i.e. top folder) of your project**. We will cover the three system commands that help up us navigate the file system.",
  "date": "2023-09-07",
  "status": "published"
};
const Command_line_basics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p><strong>Notice</strong>: The examples below start with a <code>$</code>. DO NOT include this when typing commands; it’s there to represent the command prompt.</p>
<hr>
<h2>pwd - Present working directory</h2>
Use the \`pwd\` command to see where you are when you open the terminal.
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">$ pwd</code>`}<!-- HTML_TAG_END --></pre>
<p>The starting directory for most systems will be your home directory.</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">/Users/YOUR-ACCOUNT-NAME</code>`}<!-- HTML_TAG_END --></pre>
<p>Your goal is to navigate to the root of your project. For example:</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">/Users/YOUR-ACCOUNT-NAME/Documents/projects/portfolio</code>`}<!-- HTML_TAG_END --></pre>
<hr>
<h2>ls - List directory contents</h2>
List the contents of your current directory with the ls command:
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">$ ls</code>`}<!-- HTML_TAG_END --></pre>
<p>The <code>-l</code> <strong>flag</strong> lists extra information about the contents:</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">$ ls -l</code>`}<!-- HTML_TAG_END --></pre>
<p>Add the <code>-a</code> to list hidden files:</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">$ ls -a</code>`}<!-- HTML_TAG_END --></pre>
<p>You can also combine multiple options with a single flag. To list extra information <em>and</em> also all hidden files:</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">$ ls -la</code>`}<!-- HTML_TAG_END --></pre>
<hr>
<h2>cd - Change directory</h2>
Use the \`cd\` command to switch to another directory. Assuming you are currently in your home folder, you can move to your downloads folder with:
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">$ cd Downloads</code>`}<!-- HTML_TAG_END --></pre>
<p>OR, move there from anywhere on the system with an absolute path (replace <code>username</code> with your login handle):</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">$ cd /Users/username/Downloads</code>`}<!-- HTML_TAG_END --></pre>
<p>Move up one directory:</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">$ cd ..</code>`}<!-- HTML_TAG_END --></pre>
<p>OR move up many directories</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">$ cd ../../..</code>`}<!-- HTML_TAG_END --></pre>
<p>Move multiple directories “downstream”:</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">$ cd some/path/relative/to/your/location</code>`}<!-- HTML_TAG_END --></pre>
<p>Combine <code>../</code> with a relative path for more flexibility. To move to a directory that adjacent to your _present working directory\`:</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">$ cd ../adjacent-directory-name</code>`}<!-- HTML_TAG_END --></pre>
<p>If you get lost you can always move to your home directory:</p>
<pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">$ cd</code>`}<!-- HTML_TAG_END --></pre>
<h2>Quality of Life Tips</h2>
<ul><li>The tab key auto-completes file names and directories.</li>
<li>Use the Up Arrow to browse through the history of last used commands.<ul><li>Pro tip: type your command first and the Up Arrow will filter the history!</li></ul></li></ul>`;
});
export {
  Command_line_basics as default,
  metadata
};
