import { collection, fields } from '@keystatic/core';

export const showcase = collection({
  label: "Component Showcase",
  path: "src/contents/showcase/*",
  format: { data: "yaml" },
  slugField: 'name',
  schema: {
    name: fields.text({
      label: "Name",
      description: "Display name of the component",
      validation: { length: { min: 1 } }
    }),
    path: fields.text({
      label: "Path",
      description: "Path to the component (without .tsx extension)",
      validation: { length: { min: 1 } }
    }),
    description: fields.text({
      label: "Description",
      description: "Brief description of what this component demonstrates",
      multiline: true
    }),
    type: fields.select({
      label: "Type",
      options: [
        { label: "Component", value: "component" },
        { label: "Block", value: "block" },
      ],
      defaultValue: "component",
    }),
  },
}); 