import * as server from '../entries/pages/(site)/courses/_code_/assessments/_page.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(site)/courses/_code_/assessments/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(site)/courses/[code]/assessments/+page.server.js";
export const imports = ["_app/immutable/nodes/10.75c0aaa4.js","_app/immutable/chunks/index.afed6bb6.js"];
export const stylesheets = [];
export const fonts = [];
