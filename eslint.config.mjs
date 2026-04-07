import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

/** @type {import("eslint").Linter.Config[]} */
const config = [
  ...require("eslint-config-next/core-web-vitals"),
  {
    files: ["src/app/layout.tsx"],
    rules: {
      // App Router root layout: Material Symbols loads for the whole app; rule targets Pages router.
      "@next/next/no-page-custom-font": "off"
    }
  }
];

export default config;
