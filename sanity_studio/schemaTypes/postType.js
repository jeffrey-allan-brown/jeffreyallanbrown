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
			type: "array",
			of: [
				{
					type: 'block',
					styles: [
						{title: 'Normal', value: 'normal'},
						{title: 'H1', value: 'h1'},
						{title: 'H2', value: 'h2'},
						{title: 'H3', value: 'h3'},
						{title: 'H4', value: 'h4'},
						{title: 'H5', value: 'h5'},
						{title: 'H6', value: 'h6'},
						{title: 'Quote', value: 'blockquote'}
					],
					lists: [
						{title: 'Bullet', value: 'bullet'},
						{title: 'Numbered', value: 'number'}
					],
					marks: {
						decorators: [
							{title: 'Strong', value: 'strong'},
							{title: 'Emphasis', value: 'em'},
							{title: 'Code', value: 'code'}
						]
					}
				},
				{type: 'image'}
			]
		}),
		defineField({
			name: "featured",
			type: "boolean"
		})
	]
})