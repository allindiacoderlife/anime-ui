import prompts from 'prompts'
import chalk from 'chalk'
import ora from 'ora'
import { execa } from 'execa'
import fs from 'fs-extra'
import path from 'path'
import { getPackageManager } from '../utils/get-package-manager.js'
import { updateTailwindConfig } from '../utils/update-config.js'

export async function init(options: { yes?: boolean }) {
  console.log(chalk.bold('\n✨ Welcome to Anime UI!\n'))

  const cwd = process.cwd()

  // Check if it's a valid project
  const packageJsonPath = path.join(cwd, 'package.json')
  if (!fs.existsSync(packageJsonPath)) {
    console.error(
      chalk.red(
        'Error: package.json not found. Please run this command in a project directory.',
      ),
    )
    process.exit(1)
  }

  // Prompt for configuration
  const config = await prompts([
    {
      type: 'text',
      name: 'componentsPath',
      message: 'Where would you like to install components?',
      initial: 'components/anime-ui',
    },
    {
      type: 'text',
      name: 'utilsPath',
      message: 'Where would you like to install utils?',
      initial: 'lib/utils',
    },
    {
      type: 'confirm',
      name: 'typescript',
      message: 'Are you using TypeScript?',
      initial: true,
    },
  ])

  if (!config.componentsPath || !config.utilsPath) {
    console.log(chalk.red('\n❌ Installation cancelled.'))
    process.exit(0)
  }

  const spinner = ora('Installing dependencies...').start()

  try {
    const packageManager = await getPackageManager(cwd)

    // Install required dependencies
    const dependencies = [
      'tw-animate-css',
      'class-variance-authority',
      'clsx',
      'tailwind-merge',
      'lucide-react',
    ]

    const installCmd = packageManager === 'npm' ? 'install' : 'add'
    await execa(packageManager, [installCmd, ...dependencies], { cwd })

    spinner.text = 'Creating configuration...'

    // Create components directory
    await fs.ensureDir(path.join(cwd, config.componentsPath))

    // Create utils file
    const ext = config.typescript ? 'ts' : 'js'
    const utilsPath = path.join(cwd, `${config.utilsPath}.${ext}`)
    await fs.ensureDir(path.dirname(utilsPath))

    const utilsContent = config.typescript
      ? `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`
      : `import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
`
    await fs.writeFile(utilsPath, utilsContent)

    // Update tailwind.config
    await updateTailwindConfig(cwd)

    // Save config
    const animeUiConfig = {
      componentsPath: config.componentsPath,
      utilsPath: config.utilsPath,
      typescript: config.typescript,
    }
    await fs.writeJson(path.join(cwd, 'anime-ui.json'), animeUiConfig, {
      spaces: 2,
    })

    spinner.succeed(chalk.green('✅ Setup complete!'))
    console.log(chalk.bold('\n🎉 You can now add components:\n'))
    console.log(chalk.cyan('  anime-ui add block-text'))
    console.log()
  } catch (error) {
    spinner.fail(chalk.red('Installation failed'))
    console.error(error)
    process.exit(1)
  }
}
