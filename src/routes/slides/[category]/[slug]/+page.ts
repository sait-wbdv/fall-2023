import { error } from '@sveltejs/kit'
import { decks } from '$lib/helpers/importSlides';

export const ssr = false

export async function load({ params }) {

  let content = {};

  if (decks.hasOwnProperty(`${params.category}/${params.slug}`)) {
    content.path = decks[`${params.category}/${params.slug}`][0];
    content.module = decks[`${params.category}/${params.slug}`][1];
    content.type = decks[`${params.category}/${params.slug}`][2];
  } else {
    throw error(404, 'Slide deck not found')
  }

  return {
    path: content?.path,
    module: content?.module,
    type: content?.type
  }
}