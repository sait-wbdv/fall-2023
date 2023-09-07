const imports = Object.entries(import.meta.glob('../content/posts/**/*.md'));

export const posts = await Promise.all(
  imports.map(async ([path, resolver]) => {
    const { metadata } = await resolver()
    
    const pathArray = path.split('/');
    const fileName = pathArray.pop().slice(0,-3);
    const category = pathArray.pop();

    return { ...metadata, path, fileName, category }
  })
)