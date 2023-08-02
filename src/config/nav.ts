type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
];
