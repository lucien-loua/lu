import { config, fields } from '@keystatic/core';
import { projects } from './schema/collections/projects';
import { experience } from './schema/collections/experience';
import { socialLinks } from './schema/singletons/social-links';
import { showcase } from './schema/collections/showcase';
import { SandBox } from './components/block.components';
import { posts } from './schema/collections/posts';

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
