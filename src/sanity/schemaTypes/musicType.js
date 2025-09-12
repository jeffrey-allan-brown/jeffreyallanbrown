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
			type: "string"
		}),
		defineField({
			name: "color",
			type: "string"
		}),
		defineField({
			name: "slug",
			type: "slug"
		})
	]
})