import * as server from '../entries/pages/(site)/courses/_code_/assessments/_slug_/_page.server.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(site)/courses/_code_/assessments/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(site)/courses/[code]/assessments/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/11.f70e9d79.js","_app/immutable/chunks/index.afed6bb6.js"];
export const stylesheets = [];
export const fonts = [];
