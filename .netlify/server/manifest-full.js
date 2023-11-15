export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","files/animal-world.zip","fonts/SpaceGrotesk.ttf","images/agile/lean-canvas-numbered.png","images/agile/lean-canvas.png","images/agile/scrum-task-board.png","images/agile/standup-tips.png","images/agile/what-is-scrum-qr-link.png","images/assessments/cta-card.png","images/assessments/flexbox-froggy.png","images/assessments/text-area-counter.png","images/cms/many-to-many.png","images/cms/one-to-many.png","images/cms/one-to-one.png","images/cms/strapi-relations.png","images/colour/60-30-10.png","images/colour/base-16.png","images/colour/colour-harmonies.png","images/colour/cym.png","images/colour/gray.png","images/colour/hexadecimal.png","images/colour/hsl.png","images/colour/hue.png","images/colour/lightness.png","images/colour/low-middle-high.png","images/colour/names.png","images/colour/neutral-primary-cta.png","images/colour/quote.png","images/colour/rgb-wheel.png","images/colour/rgb.png","images/colour/saturation.png","images/colour/secondary-colours.png","images/colour/shortcodes.png","images/css/cascade-inspector.png","images/css/centred-content.png","images/css/chess.png","images/css/css-declaration-small.png","images/css/flex-default.png","images/css/flex-end.png","images/css/flex-grow.png","images/css/flex-inspector.png","images/css/flexbox-axis.png","images/css/hero-image.png","images/css/justify-centre.png","images/css/media-narrow.png","images/css/media-wide.png","images/css/nav-bullets-padding.png","images/css/nav-flexbox.png","images/css/nav-link-hover.png","images/css/nav-link-padding.png","images/css/nav-overflow.png","images/css/nav-vanilla.png","images/css/nav-wrap.png","images/css/outer-flexbox.png","images/css/page-banner.png","images/css/site-title-flexbox.png","images/css/space-around.png","images/css/space-between.png","images/css/space-evenly.png","images/css/sticky-footer.png","images/css/tic-tac-toe.png","images/css/toggle-open.png","images/css/vertical-nav.png","images/css/wide-barbarian.png","images/db/columns.png","images/db/compound-primary-key.png","images/db/data-types.png","images/db/foreign-key.png","images/db/many-to-many.png","images/db/one-to-many.png","images/db/one-to-one.png","images/db/primary-key.png","images/db/rows.png","images/db/supabase-api-keys.png","images/db/supabase-team.png","images/db/table-names.png","images/design/booleans.png","images/design/figma-docs.png","images/design/rasters-vectors-slideshow.png","images/design/scribbl.png","images/design/svg-css-slides.png","images/design/svg-slides.png","images/design/typography-triad.png","images/design/usability-5-components.png","images/design/usability-tests-slides.png","images/design/user-interface-intro-slide.png","images/design/wireflow-article-nngroup.png","images/design/wireframe-lecture-slides.png","images/dev/browser-triad.png","images/dev/front-back-full.png","images/errors/const-reassignment-chrome.png","images/errors/const-reassignment-firefox.png","images/errors/const-unassigned-chrome.png","images/errors/const-unassigned-firefox.png","images/errors/error-stack.png","images/errors/squiggly-details.png","images/errors/squiggly-underline.png","images/errors/terminal-error.png","images/errors/var-undefined-chrome.png","images/errors/var-undefined-firefox.png","images/flowchart/arrow.png","images/flowchart/decision.png","images/flowchart/flowchart-example.png","images/flowchart/input-output.png","images/flowchart/process.png","images/flowchart/start-stop.png","images/flowchart/sub-process.png","images/html/anatomy-of-an-html-element.png","images/html/box-model.gif","images/html/box-model.png","images/html/colour-banner.png","images/html/grumpy-cat-attribute-small.png","images/html/grumpy-cat-small.png","images/html/required-fields.png","images/html/toggle-closed.png","images/html/water-drops-banner.png","images/http/request-response-cycle.png","images/http/request.png","images/http/response.png","images/images/dithering.png","images/images/encoders.png","images/images/high-frequency.jpg","images/images/loss-chart.png","images/images/lossy-jpeg.png","images/images/low-frequency.png","images/js/chrome-vs-node.png","images/js/classList-example.png","images/js/ecmascript-vs-javascript.png","images/js/es5-vs-es6.png","images/js/expression.png","images/js/for-loop-flowchart.png","images/js/hello-tony.png","images/js/prompt-example.png","images/js/prompt-tony.png","images/js/statement.png","images/js/string-object.png","images/lessons/201-ach-6.png","images/lessons/flex-vs-grid.png","images/lessons/intro-to-grid.png","images/lessons/sk-demo-app.png","images/lessons/sk-js.png","images/lessons/sk-no-options.png","images/lessons/sk-skeleton-app.png","images/misc/divergent-search.png","images/misc/search-js-function.png","images/misc/search-vscode-vs.png","images/misc/search-why.png","images/misc/verses-search.png","images/qr-codes/algorithm-activity.png","images/qr-codes/algorithm-followup-activity.png","images/qr-codes/dsgn/draw-toast-activity.png","images/sait-logo.png","images/slides/cpnt-201/git-github.png","images/slides/cpnt-201/git-workflows.png","images/slides/cpnt-201/npm.png","images/slides/cpnt-260/better-search-phrases.png","images/slides/cpnt-260/browser-triad.png","images/slides/cpnt-260/colour.png","images/slides/cpnt-260/css-cascade.png","images/slides/cpnt-260/css-introduction.png","images/slides/cpnt-260/flexbox-nav.png","images/slides/cpnt-260/hero-sections.png","images/slides/cpnt-260/html-images.png","images/slides/cpnt-260/http-introduction.png","images/slides/cpnt-260/responsive-banners.png","images/slides/cpnt-260/ui-triad-quiz.png","images/slides/cpnt-260/web-typography.png","images/slides/cpnt-262/cpnt-262-overview.png","images/slides/cpnt-262/js-conditional-code.png","images/slides/cpnt-262/js-errors.png","images/slides/cpnt-262/js-expressions-vs-statements.png","images/slides/cpnt-262/js-flowcharts.png","images/slides/cpnt-262/js-forms.png","images/slides/cpnt-262/js-functions.png","images/slides/cpnt-262/js-higher-order-array-methods.png","images/slides/cpnt-262/js-intro.png","images/slides/cpnt-262/js-numbers-math.png","images/slides/cpnt-262/js-object-methods.png","images/slides/cpnt-262/js-strings.png","images/slides/cpnt-262/js-useful-objects.png","images/slides/cpnt-262/js-value-validation.png","images/slides/cpnt-262/js-variables.png","images/slides/svelte-events.png","images/slides/sveltekit-intro.png","images/slides/sveltekit-loading-data.png","images/svelte/route-parameters.png"]),
	mimeTypes: {".png":"image/png",".zip":"application/zip",".ttf":"font/ttf",".gif":"image/gif",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.4b44020a.js","app":"_app/immutable/entry/app.a7436d39.js","imports":["_app/immutable/entry/start.4b44020a.js","_app/immutable/chunks/index.afed6bb6.js","_app/immutable/chunks/singletons.d19e91bd.js","_app/immutable/chunks/index.86a260b5.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.a7436d39.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.afed6bb6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js'))
		],
		routes: [
			{
				id: "/(site)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(site)/courses",
				pattern: /^\/courses\/?$/,
				params: [],
				page: { layouts: [0,2,4,], errors: [1,3,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(site)/courses/[code]",
				pattern: /^\/courses\/([^/]+?)\/?$/,
				params: [{"name":"code","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4,], errors: [1,3,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(site)/courses/[code]/assessments",
				pattern: /^\/courses\/([^/]+?)\/assessments\/?$/,
				params: [{"name":"code","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4,], errors: [1,3,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(site)/courses/[code]/assessments/[slug]",
				pattern: /^\/courses\/([^/]+?)\/assessments\/([^/]+?)\/?$/,
				params: [{"name":"code","optional":false,"rest":false,"chained":false},{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4,], errors: [1,3,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(site)/courses/[code]/day-[day]",
				pattern: /^\/courses\/([^/]+?)\/day-([^/]+?)\/?$/,
				params: [{"name":"code","optional":false,"rest":false,"chained":false},{"name":"day","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4,], errors: [1,3,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(site)/house-rules",
				pattern: /^\/house-rules\/?$/,
				params: [],
				page: { layouts: [0,2,5,], errors: [1,3,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(site)/library",
				pattern: /^\/library\/?$/,
				params: [],
				page: { layouts: [0,2,6,], errors: [1,3,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(site)/posts",
				pattern: /^\/posts\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(site)/posts/[slug]",
				pattern: /^\/posts\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/slides",
				pattern: /^\/slides\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/slides/[category]/[slug]",
				pattern: /^\/slides\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false},{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
