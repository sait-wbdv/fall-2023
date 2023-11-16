import * as universal from '../entries/pages/(site)/_layout.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(site)/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(site)/+layout.js";
export const imports = ["_app/immutable/nodes/2.821513d6.js","_app/immutable/chunks/app.051ceb58.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.afed6bb6.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.a9ae9a29.js","_app/immutable/chunks/index.86a260b5.js","_app/immutable/chunks/config.0b102075.js","_app/immutable/chunks/stores.2d735796.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/2.d5e64b71.css","_app/immutable/assets/app.5ed376bb.css","_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
