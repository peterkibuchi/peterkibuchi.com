import Link from "next/link";

export function Footer() {
  return (
    <div className="mx-auto mt-12 max-w-2xl border-t border-gray-300 py-4 text-sm dark:border-gray-500">
      <div className="flex items-center justify-between">
        <span className=" text-gray-400 dark:text-gray-500">
          Copyright © {new Date().getFullYear()} Peter Kibuchi.
        </span>

        <div className="text-primary ml-auto space-x-6 text-sm">
          <Link
            href="https://github.com/peterkibuchi"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/peterkibuchi"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}
