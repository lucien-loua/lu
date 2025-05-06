import {
  config,
  fields
} from '@keystatic/core';
import {
  SandBox,
  Snippet
} from '@/modules/keystatic/blocs';

import {
  projects,
  experience,
  socialLinks,
  showcase,
  posts
} from '@/modules/keystatic/schema';

export const markdocConfig = fields.markdoc.createMarkdocConfig({
  components: {
    SandBox,
    Snippet
  },
  render: {
    tags: {
      SandBox: 'SandBox',
      Snippet: 'Snippet'
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
