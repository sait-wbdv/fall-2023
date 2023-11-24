

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(site)/courses/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.69eba3a5.js","_app/immutable/chunks/index.afed6bb6.js","_app/immutable/chunks/stores.8f85a925.js","_app/immutable/chunks/index.86a260b5.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = [];
export const fonts = [];
