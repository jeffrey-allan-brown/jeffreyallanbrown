import {defineType, defineField} from "sanity";

export const noteType = defineType({
	name: "note",
	title: "Note",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: Rule => Rule.required()
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title"
			},
			validation: Rule => Rule.required()
		}),
		defineField({
			name: "excerpt",
			title: "Excerpt",
			type: "text",
			rows: 3,
			description: "A brief summary of the note"
		}),
		defineField({
			name: "content",
			title: "Content",
			type: "array",
			of: [
				{type: "block"},
				{
					type: "image",
					fields: [
						{
							name: "alt",
							type: "string",
							title: "Alternative text"
						}
					]
				}
			]
		}),
		defineField({
			name: "tags",
			title: "Tags",
			type: "array",
			of: [{type: "string"}],
			options: {
				layout: "tags"
			}
		}),
		defineField({
			name: "date",
			title: "Date",
			type: "date",
			validation: Rule => Rule.required()
		}),
		defineField({
			name: "maturity",
			title: "Maturity Level",
			type: "string",
			options: {
				list: [
					{title: "Seedling", value: "seedling"},
					{title: "Budding", value: "budding"},
					{title: "Evergreen", value: "evergreen"}
				]
			},
			description: "The maturity level of this note"
		}),
		defineField({
			name: "featured",
			title: "Featured",
			type: "boolean",
			description: "Show this note on the garden page"
		}),
		defineField({
			name: "relatedNotes",
			title: "Related Notes",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{type: "note"}]
				}
			],
			description: "Notes that are related to this one"
		})
	],
	preview: {
		select: {
			title: "title",
			maturity: "maturity",
			date: "date"
		},
		prepare({title, maturity, date}) {
			return {
				title,
				subtitle: `${maturity || "unclassified"} · ${date || "no date"}`
			}
		}
	}
})
