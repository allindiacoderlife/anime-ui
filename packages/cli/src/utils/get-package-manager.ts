import fs from 'fs-extra'
import path from 'path'

export async function getPackageManager(cwd: string): Promise<string> {
  // Check lock files
  if (fs.existsSync(path.join(cwd, 'pnpm-lock.yaml'))) return 'pnpm'
  if (fs.existsSync(path.join(cwd, 'yarn.lock'))) return 'yarn'
  if (fs.existsSync(path.join(cwd, 'bun.lockb'))) return 'bun'

  return 'npm'
}
