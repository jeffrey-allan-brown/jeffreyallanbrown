import { client } from '../client'
import groq from 'groq'

export async function getBooks() {
	return client.fetch(
		groq`*[_type == "book" && featured] | order(_createdAt desc) [0...10] {
			_id,
			title,
			author,
			"cover": cover.asset->url,
			"slug": slug.current,
			currentlyReading,
			yearRead
		}`
	)
}

export async function getBookBySlug(slug) {
	return client.fetch(
		groq`*[_type == "book" && slug.current == $slug][0]{
			_id,
			title,
			author,
			"cover": cover.asset->url,
			"slug": slug.current,
			currentlyReading,
			yearRead
		}`, {slug: slug}
	)
}