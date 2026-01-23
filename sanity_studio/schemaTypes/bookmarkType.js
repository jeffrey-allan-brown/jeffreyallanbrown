import {defineType, defineField} from "sanity";

export const bookmarkType = defineType({
	name: "bookmark",
	title: "Bookmark",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: Rule => Rule.required()
		}),
		defineField({
			name: "url",
			title: "URL",
			type: "url",
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
			name: "description",
			title: "Description",
			type: "text",
			rows: 3,
			description: "A brief description of this bookmark"
		}),
		defineField({
			name: "thumbnail",
			title: "Thumbnail",
			type: "image",
			description: "Optional screenshot or thumbnail image",
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative text"
				}
			]
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "string",
			options: {
				list: [
					{title: "Development", value: "development"},
					{title: "Design", value: "design"},
					{title: "Productivity", value: "productivity"},
					{title: "Learning", value: "learning"},
					{title: "Tools", value: "tools"},
					{title: "Reading", value: "reading"},
					{title: "Inspiration", value: "inspiration"},
					{title: "Other", value: "other"}
				]
			},
			description: "Categorize this bookmark"
		}),
		defineField({
			name: "tags",
			title: "Tags",
			type: "array",
			of: [{type: "string"}],
			options: {
				layout: "tags"
			},
			description: "Add tags to help organize bookmarks"
		}),
		defineField({
			name: "dateAdded",
			title: "Date Added",
			type: "date",
			validation: Rule => Rule.required()
		}),
		defineField({
			name: "featured",
			title: "Featured",
			type: "boolean",
			description: "Show this bookmark prominently"
		})
	],
	preview: {
		select: {
			title: "title",
			category: "category",
			date: "dateAdded"
		},
		prepare({title, category, date}) {
			return {
				title,
				subtitle: `${category || "uncategorized"} · ${date || "no date"}`
			}
		}
	}
})
