# @anima-ui/cli

CLI for adding Anima UI components to your project.

## Installation

```bash
npm install -g @anima-ui/cli
```

Or use with npx:

```bash
npx @anima-ui/cli@latest init
```

## Usage

### Initialize your project

```bash
anima-ui init
```

This will:
- Install required dependencies
- Create configuration file
- Set up utility functions
- Update your Tailwind config

### Add components

Add a single component:

```bash
anima-ui add button
```

Add multiple components:

```bash
anima-ui add button card dialog
```

Add all components:

```bash
anima-ui add --all
```

## Options

### init

- `-y, --yes` - Skip confirmation prompt

### add

- `-y, --yes` - Skip confirmation prompt
- `-o, --overwrite` - Overwrite existing files
- `-a, --all` - Add all components

## Configuration

The CLI creates a `anima-ui.json` file in your project root:

```json
{
  "componentsPath": "components/anima-ui",
  "utilsPath": "lib/utils",
  "typescript": true
}
```

## License

MIT
