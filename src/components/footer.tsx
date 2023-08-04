import Link from "next/link";

import { buttonVariants } from "~/components/ui/button";
import { footerItems } from "~/config/footer";

export function Footer() {
  return (
    <div className="mx-auto mt-12 max-w-2xl border-t border-gray-300 pb-4 pt-2 text-sm dark:border-gray-500 sm:py-2">
      <div className="flex items-center">
        <span className="text-gray-400 dark:text-gray-500">
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
              <item.icon className="h-4 w-4" />
              <span className="sr-only">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
