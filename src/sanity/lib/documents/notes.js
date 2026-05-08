import { client } from '../client'
import groq from 'groq'

export async function getNotes() {
	return client.fetch(
		groq`*[_type == "note" && featured] | order(date desc) {
			_id,
			title,
			excerpt,
			date,
			tags,
			maturity,
			"slug": slug.current
		}`
	)
}

export async function getNoteBySlug(slug) {
	return client.fetch(
		groq`*[_type == "note" && slug.current == $slug][0]{
			_id,
			title,
			excerpt,
			date,
			tags,
			maturity,
			"slug": slug.current,
			content,
			"relatedNotes": relatedNotes[]->{
				_id,
				title,
				excerpt,
				maturity,
				tags,
				"slug": slug.current
			}
		}`, {slug: slug}
	)
}
