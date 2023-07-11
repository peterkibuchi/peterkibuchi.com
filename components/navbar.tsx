import Link from "next/link";

import { ModeToggle } from "~/components/mode-toggle";
import { navItems } from "~/config/nav";

export function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <ModeToggle />

      {navItems?.length ? (
        <nav className="ml-auto space-x-6 text-sm font-medium">
          {navItems?.map((item, index) => (
            <Link key={index} href={item.disabled ? "#" : item.href}>
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
