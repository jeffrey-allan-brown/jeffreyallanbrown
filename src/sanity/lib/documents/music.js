import { client } from '../client'
import groq from 'groq'

export async function getMusic() {
	return client.fetch(
		groq`*[_type == "music"]{
			_id,
			title,
			artist,
			cover,
			color,
			slug
		}`
	)
}