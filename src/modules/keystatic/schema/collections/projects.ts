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
    image: fields.image({
      label: "Image",
      directory: "public/images",
      publicPath: "/images",
    }),
  },
})		