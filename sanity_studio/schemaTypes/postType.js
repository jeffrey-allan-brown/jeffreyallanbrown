import {defineType, defineField} from "sanity";

export const postType = defineType({
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		defineField({
			name: "title",
			type: "string"
		}),
		defineField({
			name: "author",
			type: "reference",
			to: [{type: "author"}]
		}),
		defineField({
			name: "date",
			type: "date"
		}),
		defineField({
			name: "thumbnail",
			type: "image"
		}),
		defineField({
			name: "banner",
			type: "image",
			fields: [
				defineField({
					name: 'caption',
					type: 'string',
				}),
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
			name: "summary",
			type: "text"
		}),
		defineField({
			name: "content",
			type: "markdown"
		}),
		defineField({
			name: "featured",
			type: "boolean"
		})
	]
})