import { client } from '../client'
import groq from 'groq'

export async function getProjects() {
	return client.fetch(
		groq`*[_type == "project" && featured] | order(startDate desc) {
			_id,
			title,
			description,
			"thumbnail": thumbnail.asset->url,
			technologies,
			projectUrl,
			githubUrl,
			status,
			featured,
			startDate,
			endDate,
			"slug": slug.current
		}`
	)
}

export async function getProjectBySlug(slug) {
	return client.fetch(
		groq`*[_type == "project" && slug.current == $slug][0]{
			_id,
			title,
			description,
			"thumbnail": thumbnail.asset->url,
			technologies,
			projectUrl,
			githubUrl,
			status,
			startDate,
			endDate,
			"slug": slug.current,
			content
		}`, {slug: slug}
	)
}
