import {defineType, defineField} from "sanity";

export const projectType = defineType({
	name: "project",
	title: "Project",
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
			name: "description",
			title: "Description",
			type: "text",
			rows: 3,
			description: "A brief description of the project"
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
			name: "thumbnail",
			title: "Thumbnail",
			type: "image",
			description: "Project thumbnail image",
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative text"
				}
			]
		}),
		defineField({
			name: "technologies",
			title: "Technologies",
			type: "array",
			of: [{type: "string"}],
			options: {
				layout: "tags"
			},
			description: "Technologies used in this project"
		}),
		defineField({
			name: "projectUrl",
			title: "Project URL",
			type: "url",
			description: "Link to the live project"
		}),
		defineField({
			name: "githubUrl",
			title: "GitHub URL",
			type: "url",
			description: "Link to the GitHub repository"
		}),
		defineField({
			name: "status",
			title: "Status",
			type: "string",
			options: {
				list: [
					{title: "In Progress", value: "in-progress"},
					{title: "Completed", value: "completed"},
					{title: "Archived", value: "archived"}
				]
			},
			description: "Current status of the project"
		}),
		defineField({
			name: "featured",
			title: "Featured",
			type: "boolean",
			description: "Show this project on the projects page"
		}),
		defineField({
			name: "startDate",
			title: "Start Date",
			type: "date"
		}),
		defineField({
			name: "endDate",
			title: "End Date",
			type: "date"
		})
	],
	preview: {
		select: {
			title: "title",
			status: "status",
			media: "thumbnail"
		},
		prepare({title, status, media}) {
			return {
				title,
				subtitle: status || "No status",
				media
			}
		}
	}
})
