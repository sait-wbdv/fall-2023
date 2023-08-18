const mdImports = Object.entries(import.meta.glob('../content/slides/*.md', {  as: 'raw', eager: true }));

const deckObj = {}

mdImports.forEach(([path, module]) => {  
  const slug = path.split('/').at(-1)?.replace('.md', '');
  if (!deckObj[slug]) {
    deckObj[slug] = [path, module, 'md'];
  }
});

export const decks = deckObj;
