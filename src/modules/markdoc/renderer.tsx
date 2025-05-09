import React from 'react';
import Markdoc, { Node } from '@markdoc/markdoc';
import { markdocConfig } from '@keystatic.config';
import { Snippet } from '@/components/blocs/snippet';
import { SandBox } from '@/components/blocs/sandbox';
import { CodeBlock } from '@/components/blocs/code';
import { IphoneBlock } from '@/components/blocs/devices/iphone';
import { SafariBlock } from '@/components/blocs/devices/safari';
import { AndroidBlock } from '@/components/blocs/devices/android';
import { VideoBlock } from '@/components/blocs/media/video';
import { ImageBlock } from '@/components/blocs/media/image';
type Props = {
  node: Node;
};

export async function MarkdocRenderer(props: Props) {
  const { node } = props;

  const errors = Markdoc.validate(node, markdocConfig);
  if (errors.length) {
    console.error(errors);
    throw new Error('Invalid content');
  }
  const renderable = Markdoc.transform(node, markdocConfig);

  return Markdoc.renderers.react(renderable, React, {
    components: {
      SandBox,
      Snippet,
      CodeBlock,
      IphoneBlock,
      SafariBlock,
      AndroidBlock,
      VideoBlock,
      ImageBlock,
    }
  });
}