import React from 'react';
import { reader } from '@/lib/reader';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { MAIN_URL } from '@/lib/contant';
import { MarkdocRenderer } from '@/modules/markdoc/renderer';
import { PageLayout } from '@/components/layout/page';
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
    <PageLayout className="prose prose-neutral dark:prose-invert prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium prose-code:bg-muted prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:font-mono prose-code:text-sm prose-code:rounded-sm prose-code:before:content-none prose-code:after:content-none py-12">
      <h1>{post.title}</h1>
      <MarkdocRenderer node={node} />
    </PageLayout>
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
      siteName: "lU's blog"
    },
  };
}
