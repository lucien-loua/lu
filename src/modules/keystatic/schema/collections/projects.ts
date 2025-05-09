import { collection, fields } from '@keystatic/core';

export const projects = collection({
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
      label: "Video",
      description: "URL of the video to display",
    }),
  },
})