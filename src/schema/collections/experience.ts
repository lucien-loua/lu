import { collection, fields } from '@keystatic/core';

export const experience = collection({
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
})

