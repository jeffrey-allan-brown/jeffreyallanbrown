import {defineType, defineField} from "sanity";

export const bookType = defineType({
	name: "book",
	title: "Book",
	type: "document",
	fields: [
		defineField({
			name: "title",
			type: "string"
		}),
		defineField({
			name: "author",
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
			name: "slug",
			type: "slug"
		}),
		defineField({
			name: "featured",
			type: "boolean"
		}),
		defineField({
			name: "currentlyReading",
			title: "Currently Reading",
			type: "boolean",
			description: "Mark this book as currently being read"
		}),
		defineField({
			name: "yearRead",
			title: "Year Read",
			type: "number",
			description: "The year this book was completed",
			validation: Rule => Rule.integer().min(1900).max(new Date().getFullYear() + 1)
		})
	]
})