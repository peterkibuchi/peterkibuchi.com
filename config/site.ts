type SiteConfig = {
  name: string;
  url: string;
  description: string;
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
  links: {
    github: "https://github.com/peterkibuchi",
  },
};
