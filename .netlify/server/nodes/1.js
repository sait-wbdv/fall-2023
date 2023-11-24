

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c18c2a20.js","_app/immutable/chunks/index.afed6bb6.js","_app/immutable/chunks/stores.55e760a3.js","_app/immutable/chunks/singletons.08a0c098.js","_app/immutable/chunks/index.86a260b5.js"];
export const stylesheets = [];
export const fonts = [];
