import fs from 'fs-extra'
import path from 'path'

export async function updateTailwindConfig(cwd: string) {
  // Check for tailwind.config.ts
  let configPath = path.join(cwd, 'tailwind.config.ts')
  let isTypeScript = true

  if (!fs.existsSync(configPath)) {
    // Check for tailwind.config.js
    configPath = path.join(cwd, 'tailwind.config.js')
    isTypeScript = false
  }

  if (!fs.existsSync(configPath)) {
    console.warn('Warning: tailwind.config file not found')
    return
  }

  let config = await fs.readFile(configPath, 'utf-8')

  // Add tw-animate-css plugin if not present
  if (!config.includes('tw-animate-css')) {
    // Check if plugins array exists
    if (config.includes('plugins:')) {
      config = config.replace(
        /plugins:\s*\[/,
        `plugins: [\n    require('tw-animate-css'),`,
      )
    } else {
      // Add plugins array before the closing brace
      config = config.replace(
        /}\s*$/,
        `,\n  plugins: [require('tw-animate-css')],\n}`,
      )
    }

    await fs.writeFile(configPath, config)
  }
}
