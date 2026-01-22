import { client } from '../client'
import groq from 'groq'

export async function getFeaturedPosts() {
	return client.fetch(
		groq`*[_type == "post" && featured]{
  _id,
  title,
  "author": author->{
    name,
    "image": picture.asset->url
  },
  summary,
  date,
  "thumbnail": thumbnail.asset->url,
  "slug": slug.current
}`
	)
}

export async function getRecentPosts(limit = 3) {
	return client.fetch(
		groq`*[_type == "post"] | order(date desc)[0...${limit}]{
  _id,
  title,
  "author": author->{
    name,
    "image": picture.asset->url
  },
  summary,
  date,
  "thumbnail": thumbnail.asset->url,
  "slug": slug.current
}`
	)
}

export async function getPostBySlug(slug) {
	return client.fetch(
		groq`*[_type == "post" && slug.current == $slug][0]{
			_id,
			title,
			date,
			"author": author->{
				name,
				"image": picture.asset->url
			},
			"banner": banner {
				"url": asset->url,
				"metadata": asset->metadata,
				"alt": alt
			},
			content[]{
				...,
				_type == "image" => {
					...,
					"url": asset->url,
					"metadata": asset->metadata,
					"alt": alt
				}
			}
		}`,{slug: slug}
	)
}