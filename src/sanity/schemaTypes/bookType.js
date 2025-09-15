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
			type: "string"
		}),
		defineField({
			name: "slug",
			type: "slug"
		})
	]
})