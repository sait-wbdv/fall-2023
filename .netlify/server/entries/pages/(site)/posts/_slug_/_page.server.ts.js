import { _ as __variableDynamicImportRuntimeHelper } from "../../../../../chunks/dynamic-import-helper.js";
import { e as error } from "../../../../../chunks/index.js";
const imports = Object.entries(/* @__PURE__ */ Object.assign({ "../content/posts/_template.md": () => import("../../../../../chunks/_template.js"), "../content/posts/command-line-basics.md": () => import("../../../../../chunks/command-line-basics.js"), "../content/posts/initial-software-setup.md": () => import("../../../../../chunks/initial-software-setup.js"), "../content/posts/naming-conventions-files-directories.md": () => import("../../../../../chunks/naming-conventions-files-directories.js"), "../content/posts/setting-up-your-workspace.md": () => import("../../../../../chunks/setting-up-your-workspace.js") }));
const posts = await Promise.all(
  imports.map(async ([path, resolver]) => {
    const { metadata } = await resolver();
    const pathArray = path.split("/");
    const fileName = pathArray.pop().slice(0, -3);
    const category = pathArray.pop();
    return { ...metadata, path, fileName, category };
  })
);
const load = async ({ params }) => {
  try {
    const post = posts.find((post2) => post2.fileName === params.slug);
    const postContent = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../../lib/content/posts/_template.md": () => import("../../../../../chunks/_template.js"), "../../../../lib/content/posts/command-line-basics.md": () => import("../../../../../chunks/command-line-basics.js"), "../../../../lib/content/posts/initial-software-setup.md": () => import("../../../../../chunks/initial-software-setup.js"), "../../../../lib/content/posts/naming-conventions-files-directories.md": () => import("../../../../../chunks/naming-conventions-files-directories.js"), "../../../../lib/content/posts/setting-up-your-workspace.md": () => import("../../../../../chunks/setting-up-your-workspace.js") }), `../../../../lib/content/posts/${params.slug}.md`);
    return {
      post,
      content: postContent.default.render().html
    };
  } catch (err) {
    throw error(404, err);
  }
};
export {
  load
};
