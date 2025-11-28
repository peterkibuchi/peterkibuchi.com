/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig } */
export default {
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-astro"],
  importOrderParserPlugins: ["decorators-legacy", "jsx", "typescript"],
  importOrder: [
    "^(astro$)|^(astro:(.*)$)",
    "^@astrojs/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "",
    "^astro-pure/(.*)$",
    "^@/types/(.*)$",
    "^@/layouts/(.*)$",
    "^@/pages/(.*)$",
    "^@/components/(.*)$",
    "^@/utils$",
    "^@/utils/(.*)$",
    "^@/plugins/(.*)$",
    "^@/assets/(.*)$",
    "^@/site-config$",
    "",
    "^[./]",
  ],
  overrides: [
    {
      files: "*.astro",
      options: { parser: "astro" },
    },
  ],
};
