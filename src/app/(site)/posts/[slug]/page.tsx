import React from 'react';
import Markdoc from '@markdoc/markdoc';
import { reader } from '@/lib/reader';
import { markdocConfig } from '@/keystatic.config';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Post(props: Props) {
  const params = await props.params;
  const { slug } = params;

  const post = await reader.collections.posts.read(slug);

  if (!post) {
    notFound();
  }
  const { node } = await post.content();

  const errors = Markdoc.validate(node, markdocConfig);
  if (errors.length) {
    console.error(errors);
    throw new Error('Invalid content');
  }

  const renderable = Markdoc.transform(node, markdocConfig);

  return (
    <main className="prose dark:prose-invert">
      <h1>{post.title}</h1>
      {Markdoc.renderers.react(renderable, React)}
    </main>
  );
}

export async function generateStaticParams() {
  const slugs = await reader.collections.posts.list();
  return slugs.map(slug => ({
    slug,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  const post = await reader.collections.posts.read(slug);

  if (!post) {
    return {
      title: 'Post not found',
    };
  }
  return {
    title: post.title,
    description: post.description,

  };
}
