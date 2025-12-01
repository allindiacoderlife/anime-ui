# @workspace/eslint-config

Shared ESLint configurations for the Anime UI monorepo workspace.

## Configs

This package provides three ESLint configurations:

### 1. Base Config (`base.js`)

Base configuration for TypeScript projects with recommended rules.

**Features:**
- ESLint recommended rules
- TypeScript ESLint recommended rules
- Prettier integration (turns off conflicting rules)
- Turbo plugin for monorepo env var checks
- All errors converted to warnings

**Usage:**
```js
import { config } from '@workspace/eslint-config/base';

export default config;
```

### 2. Next.js Config (`next.js`)

Configuration for Next.js applications.

**Features:**
- All base config rules
- Next.js specific rules
- React and React Hooks rules
- Browser globals

**Usage:**
```js
import { config } from '@workspace/eslint-config/next-js';

export default config;
```

### 3. React Internal Config (`react-internal.js`)

Configuration for internal React libraries and packages.

**Features:**
- All base config rules
- React and React Hooks rules
- Browser globals
- Stricter rules for library code

**Usage:**
```js
import { config } from '@workspace/eslint-config/react-internal';

export default config;
```

## Installation

This is an internal workspace package. It's automatically available to all packages in the monorepo.

```json
{
  "devDependencies": {
    "@workspace/eslint-config": "workspace:*"
  }
}
```

## Rules Overview

### Base Rules
- TypeScript recommended
- Turbo env var validation
- Prettier compatibility
- Ignores `dist/` folders

### Next.js Rules
- Next.js core web vitals
- React hooks rules
- React recommended rules

### React Internal Rules
- React component best practices
- Hooks exhaustive deps
- No unused vars (strict)

## Extending

You can extend these configs in your project:

```js
import { config } from '@workspace/eslint-config/base';

export default [
  ...config,
  {
    rules: {
      // Your custom rules
      'no-console': 'warn',
    },
  },
];
```

## Ignoring Files

Add patterns to ignore in your config:

```js
export default [
  ...config,
  {
    ignores: ['build/**', '*.config.js'],
  },
];
```
