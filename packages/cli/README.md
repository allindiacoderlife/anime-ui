# anime-ui-cli

CLI for adding Anime UI components to your project.

## Installation

```bash
npm install -g anime-ui-cli
```

Or use with npx (recommended):

```bash
npx anime-ui-cli@beta init
```

## Usage

### Initialize your project

```bash
anime-ui init
```

This will:
- Install required dependencies
- Create configuration file
- Set up utility functions
- Update your Tailwind config

### Add components

Add a single component:

```bash
anime-ui add block-text
```

Add multiple components:

```bash
anime-ui add block-text card dialog
```

## Features

- 🎨 Beautiful GSAP-powered animations
- 📦 Copy-paste ready components
- ⚡ TypeScript and JavaScript support
- 🎯 Automatic dependency installation
- 🔧 Smart configuration management

## Options

### init

- `-y, --yes` - Skip confirmation prompt

### add

- `-y, --yes` - Skip confirmation prompt
- `-o, --overwrite` - Overwrite existing files
- `-a, --all` - Add all components

## Configuration

The CLI creates an `anime-ui.json` file in your project root:

```json
{
  "componentsPath": "components/anime-ui",
  "utilsPath": "lib/utils",
  "typescript": true
}
```

## Available Components

- **block-text** - Text animation with block reveal effect

More components coming soon!

## Requirements

- Node.js 16.x or higher
- React 18+ or React 19
- GSAP 3.12+ (automatically installed)

## Links

- [Documentation](https://anime-ui-www.vercel.app/docs)
- [GitHub](https://github.com/allindiacoderlife/anime-ui)
- [Issues](https://github.com/allindiacoderlife/anime-ui/issues)

## License

MIT

MIT
