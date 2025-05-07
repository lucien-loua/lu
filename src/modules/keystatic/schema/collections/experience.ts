import { collection, fields } from '@keystatic/core';

export const experience = collection({
  label: "Work Experience",
  slugField: "company",
  path: "src/contents/work-experience/*",
  format: { data: "yaml" },
  schema: {
    company: fields.slug({ name: { label: "Company" } }),
    title: fields.text({ label: "Title" }),
    start: fields.date({ label: "Start Date" }),
    end: fields.date({
      label: 'End Date',
      description: 'Leave empty if currently working here'
    }),
    isPresent: fields.checkbox({
      label: 'Currently Working Here',
      description: 'Check if this is your current position'
    }),
    link: fields.url({ label: "Company/Project Link" }),
  },
})

