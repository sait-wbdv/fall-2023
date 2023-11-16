import * as server from '../entries/pages/(site)/courses/_code_/day-_day_/_page.server.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(site)/courses/_code_/day-_day_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(site)/courses/[code]/day-[day]/+page.server.js";
export const imports = ["_app/immutable/nodes/12.c37527b9.js","_app/immutable/chunks/index.afed6bb6.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.a9ae9a29.js","_app/immutable/chunks/index.86a260b5.js","_app/immutable/chunks/TableOfContents.ccab25dc.js","_app/immutable/chunks/index.b46c9e68.js","_app/immutable/chunks/stores.af5dbc37.js","_app/immutable/chunks/singletons.d19e91bd.js","_app/immutable/chunks/stores.2d735796.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/dayjs.min.20b737a6.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js"];
export const stylesheets = ["_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
