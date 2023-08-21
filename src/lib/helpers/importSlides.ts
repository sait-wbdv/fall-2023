const mdImports = Object.entries(import.meta.glob('../content/slides/**/*.md', {  as: 'raw', eager: true }));

const deckObj = {}

mdImports.forEach(([path, module]) => {
  const pathArray = path.split('/');
  const fileName = pathArray.pop().replace('.md', '');
  const category = pathArray.pop();
  if (!deckObj[`${category}/${fileName}`]) {
    deckObj[`${category}/${fileName}`] = [category, module, 'md'];
  }
});

export const decks = deckObj;
