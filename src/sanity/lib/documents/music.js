import { client } from '../client'
import groq from 'groq'

export async function getAlbums() {
	return client.fetch(
		groq`*[_type == "music" && featured] | order(_createdAt desc) [0...10] {
			_id,
			title,
			artist,
			"cover": cover.asset->url,
			color,
			"slug": slug.current,
			currentlyListening,
			yearListened
		}`
	)
}

export async function getAlbumBySlug(slug) {
	return client.fetch(
		groq`*[_type == "music" && slug.current == $slug][0]{
			_id,
			title,
			artist,
			"cover": cover.asset->url,
			color,
			"slug": slug.current,
			currentlyListening,
			yearListened,
			content
		}`, {slug: slug}
	)
}