# PeterKibuchi.com

> My personal website, built with Next.js, Tailwind and Contentlayer.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Quickstart](#quickstart)
- [Room for Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Technologies Used

- React 18
- Next.js 13
- Contentlayer
- Shadcn UI
- Tailwind CSS
- TypeScript

## Features

- Next.js `/app` dir
- React Client and Server Components
- Metadata configuration for improved SEO and web shareability
- Beautiful UI powered by Shadcn UI
- Light and dark modes
- Pages built with MDX and Contentlayer
- Typesafe code and best practices made possible by TypeScript, ESLint and Prettier
- Automated `format`, `lint` and `typecheck` CI steps with GitHub Actions

## Quickstart

To run it locally, follow the steps below:

1. Clone repository and install the dependencies:

```bash
# Clone repository
git clone git@github.com:peterkibuchi/shreddit.git

# Install dependencies
pnpm i
```

2. Generate Contentlayer types and documents.

```bash
pnpm contentlayer build
```

3. Start the development server:

```bash
pnpm dev
```

## Room for Improvement

Room for improvement:

- Make it more visually striking and appealing

To do:

- Add `projects` and `contact` pages

## Acknowledgements

- I drew a lot of inspiration from Shadcn's [Next-Contentlayer template](https://github.com/shadcn/next-contentlayer) and [Taxonomy](https://github.com/shadcn-ui/taxonomy) projects, as well as [Cristian Crețu's site](https://github.com/cristicretu/cretu.dev); thank you guys.

## License

- Feel free to use this repo as a template or starter for your project, just remember to replace the _links_, _assets_, _essays_ and _about section_ with your own.
- Contributions are most welcome as well, and if you like the project, please do leave it a star. Happy coding.
