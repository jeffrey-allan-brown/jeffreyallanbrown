import { client } from '../client'
import groq from 'groq'

export async function getAlbums() {
	return client.fetch(
		groq`*[_type == "music" && featured ]{
			_id,
			title,
			artist,
			"cover": cover.asset->url,
			color,
			"slug": slug.current
		}`
	)
}