import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}", "./content/**/*.{md,mdx}"],
  darkMode: ["class"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
