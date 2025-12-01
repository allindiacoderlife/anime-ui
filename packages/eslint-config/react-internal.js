import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import baseConfig from './base.js';

/**
 * ESLint configuration for internal React libraries and packages.
 * 
 * Extends base config and adds:
 * - React recommended rules
 * - React Hooks rules with strict checking
 * - Browser and service worker globals
 * 
 * Use this for internal React component libraries that aren't Next.js apps.
 * 
 * @type {import("eslint").Linter.Config[]}
 */
const config = [
  // Extend base config
  ...baseConfig,
  
  // ESLint and TypeScript recommended
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  
  // React recommended rules
  pluginReact.configs.flat.recommended,
  
  // Browser and service worker globals
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
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
      // Disable prop-types (we use TypeScript)
      'react/prop-types': 'off',
    },
  },
];

export default config;
