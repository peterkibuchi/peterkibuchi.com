import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Mdx } from "~/components";

interface PostProps {
  params: {
    slug: string[];
  };
}

function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export function generateMetadata({ params }: PostProps) {
  const post = getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default function PostPage({ params }: PostProps) {
  const post = getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose py-6 dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="mt-0 text-xl text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
  );
}
