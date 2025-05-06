import {
  config,
  fields
} from '@keystatic/core';
import {
  SandBox,
  Snippet,
  CodeBlock,
} from '@/modules/keystatic/blocs';

import {
  projects,
  experience,
  socialLinks,
  posts
} from '@/modules/keystatic/schema';

export const markdocConfig = fields.markdoc.createMarkdocConfig({
  components: {
    SandBox,
    Snippet,
    CodeBlock,
  },
  render: {
    tags: {
      SandBox: 'SandBox',
      Snippet: 'Snippet',
      CodeBlock: 'CodeBlock',
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
  },
  singletons: {
    socialLinks,
  },
});
