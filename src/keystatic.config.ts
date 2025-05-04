import { config, collection, fields, singleton } from '@keystatic/core';

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
  storage: {
    kind: 'github',
		repo: {
			owner: 'lucien-loua',
			name: 'lu',
		},
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/contents/posts/*',
      format: { contentField: 'content' },
			previewUrl: `/preview/start?branch={branch}&to=/posts/{slug}`,
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
				description: fields.text({
					label: "Description",
					multiline: true,
				}),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    projects: collection({
			label: "Projects",
			slugField: "name",
			path: "src/contents/projects/*",
			format: { data: "yaml" },
			schema: {
        name: fields.slug({ name: { label: 'Name' } }),
				description: fields.text({
					label: "Description",
					multiline: true,
				}),
				link: fields.url({ label: "Project Link" }),
				video: fields.url({
					label: "Video URL (Optional)",
					validation: { isRequired: false },
				}),
			},
		}),
    experience: collection({
			label: "Work Experience",
			slugField: "company",
			path: "src/contents/work-experience/*",
			format: { data: "yaml" },
			schema: {
				company: fields.slug({ name: { label: "Company" } }),
				title: fields.text({ label: "Title" }),
				start: fields.text({ label: "Start Year" }),
				end: fields.text({ label: 'End Year (or "Present")' }),
				link: fields.url({ label: "Company/Project Link" }),
			},
		}),
  },
	singletons: {
		socialLinks: singleton({
			label: "Social Links",
			path: "src/contents/globals/socials",
			format: { data: "yaml" },
			schema: {
				links: fields.array(
					fields.object({
						label: fields.text({ label: "Label (e.g., Github, Twitter)" }),
						link: fields.url({ label: "Profile URL" }),
					}),
					{
						label: "Social Links",
						itemLabel: (props) => props.fields.label.value,
					},
				),
			},
		}),
	},
});
