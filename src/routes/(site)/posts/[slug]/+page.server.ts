import { error } from '@sveltejs/kit'
import { posts } from '$lib/helpers/importPosts.js';

export const load = async ({ params }) => {
	try {

		const post = posts.find((post) => post.fileName === params.slug)
		const postContent = await import(`../../../../lib/content/posts/${params.slug}.md`);
		return {
			post,
			content: postContent.default.render().html
		}
	} catch(err) {
		throw error(404, err)
	}
}
