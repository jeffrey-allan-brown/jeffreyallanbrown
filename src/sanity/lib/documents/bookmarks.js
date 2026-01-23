import { client } from '../client'
import groq from 'groq'

export async function getBookmarks() {
	return client.fetch(
		groq`*[_type == "bookmark"] | order(dateAdded desc) {
			_id,
			title,
			url,
			description,
			"thumbnail": thumbnail.asset->url,
			category,
			tags,
			dateAdded,
			featured,
			"slug": slug.current
		}`
	)
}

export async function getBookmarkBySlug(slug) {
	return client.fetch(
		groq`*[_type == "bookmark" && slug.current == $slug][0]{
			_id,
			title,
			url,
			description,
			"thumbnail": thumbnail.asset->url,
			category,
			tags,
			dateAdded,
			featured,
			"slug": slug.current
		}`, {slug: slug}
	)
}
