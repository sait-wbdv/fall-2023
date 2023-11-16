

export const index = 17;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/slides/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/17.863459e3.js","_app/immutable/chunks/index.afed6bb6.js"];
export const stylesheets = [];
export const fonts = [];
