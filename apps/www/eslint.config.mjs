import nextConfig from "@workspace/eslint-config/next-js";

export default [
  ...nextConfig,
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "public/**",
      "__registry__/**",
      "registry/**",
      ".turbo/**",
    ],
  },
];
