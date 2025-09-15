import { client } from '../client'
import groq from 'groq'

export async function getBooks() {
	return client.fetch(
		groq`*[_type == "book"]{
			_id,
			title,
			author,
			cover,
			slug
		}`
	)
}