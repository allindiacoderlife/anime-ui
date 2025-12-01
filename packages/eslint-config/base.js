import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';
import onlyWarn from 'eslint-plugin-only-warn';

/**
 * Base ESLint configuration for TypeScript projects in the workspace.
 * 
 * Includes:
 * - ESLint recommended rules
 * - TypeScript ESLint recommended rules
 * - Prettier config (disables conflicting rules)
 * - Turbo plugin for monorepo env var validation
 * - Only warn plugin (converts errors to warnings)
 * 
 * @type {import("eslint").Linter.Config[]}
 */
const config = [
  // ESLint core recommended rules
  js.configs.recommended,
  
  // Prettier integration - turns off rules that conflict with Prettier
  eslintConfigPrettier,
  
  // TypeScript ESLint recommended rules
  ...tseslint.configs.recommended,
  
  // Turbo plugin - validates env vars in monorepo
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
  
  // Convert all errors to warnings for better DX
  {
    plugins: {
      onlyWarn,
    },
  },
  
  // Global ignores
  {
    ignores: ['dist/**', 'node_modules/**', '.next/**', 'build/**'],
  },
];

export default config;
