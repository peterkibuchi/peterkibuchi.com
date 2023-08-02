import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

export default function Home() {
  return (
    <div className="prose my-12 dark:prose-invert">
      {allPosts
        .filter((post) => post.published)
        .map((post) => (
          <article key={post._id}>
            <Link
              href={post.slug}
              className="-mx-2 flex flex-row justify-between rounded-md px-2 py-2 font-normal no-underline transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <span className="text-secondary mr-2 flex-grow truncate">
                {post.title}
              </span>
              <span className="flex-shrink-0 self-center text-sm text-gray-400 dark:text-gray-500">
                {format(parseISO(post.date), "MMMM yyyy")}
              </span>
            </Link>
          </article>
        ))}
    </div>
  );
}
