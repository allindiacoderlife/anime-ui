import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import pluginNext from '@next/eslint-plugin-next';
import baseConfig from './base.js';

/**
 * ESLint configuration for Next.js applications in the workspace.
 * 
 * Extends base config and adds:
 * - Next.js specific rules
 * - React and React Hooks rules
 * - Browser and service worker globals
 * 
 * @type {import("eslint").Linter.Config[]}
 */
const nextJsConfig = [
  // Extend base config
  ...baseConfig,
  
  // ESLint and TypeScript recommended
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  
  // React recommended rules
  {
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
      },
    },
  },
  
  // Next.js specific rules
  {
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
  
  // React Hooks rules
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform
      'react/react-in-jsx-scope': 'off',
    },
  },
];

export default nextJsConfig;
