

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(site)/posts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/15.5e25b782.js","_app/immutable/chunks/index.afed6bb6.js"];
export const stylesheets = [];
export const fonts = [];
