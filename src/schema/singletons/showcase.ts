import { fields, singleton } from '@keystatic/core';

export const examples = singleton({
  label: "Component Examples",
  path: "src/contents/globals/examples",
  format: { data: "yaml" },
  schema: {
    components: fields.array(
      fields.object({
        name: fields.text({
          label: "Name",
          description: "Display name of the component"
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
      }),
      {
        label: "Components",
        itemLabel: (props) => props.fields.name.value,
        slugField: 'path'
      },
    ),
  },
}); 