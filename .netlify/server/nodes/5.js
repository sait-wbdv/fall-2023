

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(site)/house-rules/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.7510d9c0.js","_app/immutable/chunks/index.afed6bb6.js"];
export const stylesheets = [];
export const fonts = [];
