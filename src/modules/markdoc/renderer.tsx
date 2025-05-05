import React from 'react';
import Markdoc, { Node } from '@markdoc/markdoc';
import { markdocConfig } from '@keystatic.config';
import { SandBox } from '@/components/sandbox';
import { resolveNodes } from './transformers';

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
  const resolvedNode = await resolveNodes(renderable);

  return Markdoc.renderers.react(resolvedNode, React, {
    components: {
      SandBox,
    }
  });
}