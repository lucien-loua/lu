import React from 'react';
import { reader } from '@/lib/reader';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { MAIN_URL } from '@/lib/contant';
import { MarkdocRenderer } from '@/modules/markdoc/renderer';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Post(props: Props) {
  const params = await props.params;
  const { slug } = params;
  const post = await reader().collections.posts.read(slug);

  if (!post) {
    notFound();
  }
  const { node } = await post.content();

  return (
    <main className="prose dark:prose-invert">
      <h1>{post.title}</h1>
      <MarkdocRenderer node={node} />
    </main>
  );
}
export async function generateStaticParams() {
  const posts = await reader().collections.posts.list()
  return posts.map((post) => ({
    slug: post,
  }))
}
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  const post = await reader().collections.posts.read(slug);

  if (!post) {
    return {
      title: 'Post not found',
    };
  }
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      images: [
        {
          url: `${MAIN_URL}/api/og?title=${post.title}`,
        },
      ],
      title: post.title,
      description: post.description,
      siteName: 'Blog',
    },
  };
}
