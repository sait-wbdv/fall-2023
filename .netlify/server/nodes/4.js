

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(site)/courses/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.a2e4575a.js","_app/immutable/chunks/index.afed6bb6.js"];
export const stylesheets = [];
export const fonts = [];
