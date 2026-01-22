import { client } from '../client'
import groq from 'groq'

export async function getBooks() {
	return client.fetch(
		groq`*[_type == "book" && featured]{
			_id,
			title,
			author,
			"cover": cover.asset->url,
			"slug": slug.current
		}`
	)
}