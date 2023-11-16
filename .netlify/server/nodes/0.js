

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.8e601428.js","_app/immutable/chunks/index.afed6bb6.js"];
export const stylesheets = [];
export const fonts = [];
