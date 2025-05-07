import {
  config,
  fields
} from '@keystatic/core';
import {
  SandBox,
  Snippet,
  CodeBlock,
  IphoneBlock,
  SafariBlock,
  AndroidBlock,
} from '@/modules/keystatic/blocs';

import {
  projects,
  experience,
  socialLinks,
  posts
} from '@/modules/keystatic/schema';

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
  ui: {
    brand: {
      name: "Lucien's Blog"
    }
  }
});


export const markdocConfig = fields.markdoc.createMarkdocConfig({
  components: {
    SandBox,
    Snippet,
    CodeBlock,
    IphoneBlock,
    SafariBlock,
    AndroidBlock,
  },
  render: {
    tags: {
      SandBox: 'SandBox',
      Snippet: 'Snippet',
      CodeBlock: 'CodeBlock',
      IphoneBlock: 'IphoneBlock',
      SafariBlock: 'SafariBlock',
      AndroidBlock: 'AndroidBlock',
    }
  }
});
