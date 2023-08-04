import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { type IconProps } from "@radix-ui/react-icons/dist/types";

type FooterItem = {
  title: string;
  href: string;
  disabled?: boolean;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
};

export const footerItems: FooterItem[] = [
  {
    title: "GitHub",
    href: "https://github.com/peterkibuchi",
    icon: GitHubLogoIcon,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/peterkibuchi",
    icon: LinkedInLogoIcon,
  },
];
