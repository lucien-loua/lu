import { fields, singleton } from '@keystatic/core';

export const socialLinks = singleton({
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
});
