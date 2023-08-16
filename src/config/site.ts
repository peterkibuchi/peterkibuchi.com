type SiteConfig = {
  name: string;
  url: string;
  description: string;
  creator: string;
  authors: { name: string; url: string }[];
  keywords: string[];
  ogImage?: string;
  links: {
    github: string;
    twitter?: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Peter Kibuchi",
  url: "https://www.peterkibuchi.com",
  description: "Ideas and musings by Peter Kibuchi.",
  creator: "Peter Kibuchi",
  authors: [{ name: "Peter Kibuchi", url: "https://www.peterkibuchi.com" }],
  keywords: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "Engineering",
    "Frontend",
    "Developer",
    "Software",
    "peterkibuchi.com",
  ],
  links: {
    github: "https://github.com/peterkibuchi",
  },
};
