import Link from "next/link";

import { buttonVariants } from "~/components/ui/button";
import { footerItems } from "~/config/footer";

export function Footer() {
  return (
    <div className="mx-auto mt-12 max-w-2xl border-t border-gray-300 py-4 text-sm dark:border-gray-500">
      <div className="flex items-center justify-between">
        <span className=" text-gray-400 dark:text-gray-500">
          Copyright © {new Date().getFullYear()} Peter Kibuchi.
        </span>

        <div className="ml-auto text-sm text-primary">
          {footerItems.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              target="_blank"
              referrerPolicy="no-referrer"
              className={buttonVariants({ variant: "ghost" })}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
