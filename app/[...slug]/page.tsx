import { notFound } from "next/navigation";
import { allPages } from "contentlayer/generated";

import { Mdx } from "~/components";

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
      <h1 className="mb-2">{page.title}</h1>
      {page.description && (
        <p className="mt-0 text-xl text-slate-700 dark:text-slate-200">
          {page.description}
        </p>
      )}

      <hr className="my-6" />
      <Mdx code={page.body.code} />
    </article>
  );
}
