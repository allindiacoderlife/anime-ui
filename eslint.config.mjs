import baseConfig from "@workspace/eslint-config/base";

export default [
  ...baseConfig,
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.next/**",
      "**/out/**",
      "**/build/**",
      "**/.turbo/**",
      "**/public/**",
      "**/__registry__/**",
      "**/registry/**",
      "temp/**",
    ],
  },
];
