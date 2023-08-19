import { decks } from '$lib/helpers/importSlides';

export const ssr = false

export async function load({ params }) {

  let content = {};

  if (decks.hasOwnProperty(params.slug)) {
    content.path = decks[params.slug][0];
    content.module = decks[params.slug][1];
    content.type = decks[params.slug][2];
  }

  return {
    path: content?.path,
    module: content?.module,
    type: content?.type
  }
}