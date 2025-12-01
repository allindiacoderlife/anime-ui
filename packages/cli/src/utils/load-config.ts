import fs from 'fs-extra'
import path from 'path'

export async function loadConfig(cwd: string) {
  const configPath = path.join(cwd, 'anime-ui.json')

  if (!fs.existsSync(configPath)) {
    return null
  }

  return fs.readJson(configPath)
}
