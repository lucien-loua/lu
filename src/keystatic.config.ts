import { config, fields } from '@keystatic/core';
import {
  projects,
  experience,
  socialLinks,
  showcase,
  posts
} from '@/modules/keystatic/schema';
import { SandBox } from '@/modules/keystatic/blocks';

export const markdocConfig = fields.markdoc.createMarkdocConfig({
  components: {
    SandBox
  },
  render: {
    tags: {
      SandBox: 'SandBox'
    }
  }
});

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts,
    projects,
    experience,
    showcase,
  },
  singletons: {
    socialLinks,
  },
});
