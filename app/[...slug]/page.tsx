import { notFound } from "next/navigation";
import { allPages } from "contentlayer/generated";

import { Mdx } from "~/components/mdx-components";

interface PageProps {
  params: {
    slug: string[];
  };
}

function getPageFromParams(params: PageProps["params"]) {
  const slug = params?.slug?.join("/");
  const page = allPages.find((page) => page.slugAsParams === slug);

  if (!page) {
    null;
  }

  return page;
}

export function generateMetadata({ params }: PageProps) {
  const page = getPageFromParams(params);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
  };
}

export function generateStaticParams() {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }));
}

export default function PagePage({ params }: PageProps) {
  const page = getPageFromParams(params);

  if (!page) {
    notFound();
  }

  return (
    <article className="prose py-6 dark:prose-invert">
      <h1>{page.title}</h1>
      {page.description && <p className="text-xl">{page.description}</p>}
      <hr />
      <Mdx code={page.body.code} />
    </article>
  );
}
