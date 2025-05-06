import React from 'react';
import Markdoc, { Node } from '@markdoc/markdoc';
import { markdocConfig } from '@keystatic.config';
import { Snippet } from '@/components/blocs/snippet';
import { SandBox } from '@/components/blocs/sandbox';
import { CodeBlock } from '@/components/blocs/code';

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
    }
  });
}