import {defineType, defineField} from "sanity";

export const musicType = defineType({
	name: "music",
	title: "Music",
	type: "document",
	fields: [
		defineField({
			name: "title",
			type: "string"
		}),
		defineField({
			name: "artist",
			type: "string"
		}),
		defineField({
			name: "cover",
			type: "image",
			fields: [
				defineField({
					name: 'alt',
					type: 'string',
				})
			]
		}),
		defineField({
			name: "color",
			type: "string"
		}),
		defineField({
			name: "slug",
			type: "slug"
		}),
		defineField({
			name: "featured",
			type: "boolean"
		}),
		defineField({
			name: "content",
			title: "Review",
			type: "markdown"
		}),
		defineField({
			name: "currentlyListening",
			title: "Currently Listening",
			type: "boolean",
			description: "Mark this album as currently being listened to"
		}),
		defineField({
			name: "yearListened",
			title: "Year Listened",
			type: "number",
			description: "The year this album was listened to",
			validation: Rule => Rule.integer().min(1900).max(new Date().getFullYear() + 1)
		})
	]
})