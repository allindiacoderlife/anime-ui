# Anime UI

A collection of animated React components powered by GSAP and Motion, with a CLI for easy installation.

## Features

- 🎨 **Animated Components** - Beautiful, performant animations using GSAP
- 🚀 **Easy Installation** - CLI tool to add components to your project
- 📦 **TypeScript & JavaScript** - Full support for both languages
- 🎯 **Next.js Ready** - Optimized for Next.js projects
- 📚 **Well Documented** - Comprehensive docs with live examples

## Quick Start

### Install CLI

```bash
npx anime-ui init
```

### Add Components

```bash
npx anime-ui add block-text
```

## Project Structure

```
anime-ui/
├── apps/
│   └── www/              # Documentation website & registry
│       ├── registry/     # Component source files
│       ├── content/      # MDX documentation
│       └── public/r/     # Built registry files
└── packages/
    └── cli/              # CLI tool for installing components
```

## Development

### Setup

```bash
# Install dependencies
pnpm install

# Start dev server
cd apps/www
pnpm dev
```

### Build Registry

```bash
cd apps/www
pnpm registry:build
```

### Build CLI

```bash
cd packages/cli
pnpm build
```

## Adding New Components

1. Create component in `apps/www/registry/components/{category}/{name}/`
2. Add `registry-item.json` with metadata
3. Create demo in `apps/www/registry/demo/{category}/{name}/`
4. Add documentation in `apps/www/content/docs/components/{category}/{name}.mdx`
5. Run `pnpm registry:build`

## Deployment

1. **Deploy Website**: Deploy `apps/www` to Vercel/Netlify
2. **Update CLI**: Set `REGISTRY_URL` to production URL
3. **Publish CLI**: Run `npm publish` in `packages/cli`

## Tech Stack

- **Framework**: Next.js 16, React 19
- **Animations**: GSAP, Motion
- **Styling**: Tailwind CSS
- **Documentation**: Fumadocs
- **CLI**: Commander, Prompts, Ora

## License

MIT

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
