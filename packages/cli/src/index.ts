#!/usr/bin/env node
import { Command } from 'commander'
import { init } from './commands/init.js'
import { add } from './commands/add.js'

const program = new Command()

program
  .name('anime-ui')
  .description('Add Anime UI components to your project')
  .version('0.1.0')

program
  .command('init')
  .description('Initialize your project for Anime UI')
  .option('-y, --yes', 'Skip confirmation prompt')
  .action(init)

program
  .command('add')
  .description('Add a component to your project')
  .argument('[components...]', 'components to add')
  .option('-y, --yes', 'Skip confirmation prompt')
  .option('-o, --overwrite', 'Overwrite existing files')
  .option('-a, --all', 'Add all components')
  .action(add)

program.parse()
