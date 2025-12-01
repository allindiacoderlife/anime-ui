import prompts from "prompts";
import chalk from "chalk";
import ora, { Ora } from "ora";
import { execa } from "execa";
import fs from "fs-extra";
import path from "node:path";
import fetch from "node-fetch";

import { getPackageManager } from "../utils/get-package-manager";
import { loadConfig } from "../utils/load-config";

const REGISTRY_URL = process.env.ANIME_UI_REGISTRY_URL || "https://anime-ui-www.vercel.app/r";

export async function add(
  components: string[],
  options: { yes?: boolean; overwrite?: boolean; all?: boolean }
) {
  const cwd = process.cwd();
  const config = await loadConfig(cwd);

  if (!config) {
    console.error(
      chalk.red("Error: anime-ui.json not found. Run `anime-ui init` first.")
    );
    process.exit(1);
  }

  let selected = components;

  // If no components specified, show interactive selection
  if (!components.length && !options.all) {
    const registryIndex: any = await fetchRegistry("index.json");

    const { components: choice } = await prompts({
      type: "multiselect",
      name: "components",
      message: "Select components to install:",
      choices: registryIndex.items
        .filter((i: any) => i.type === "registry:ui")
        .map((i: any) => ({
          title: i.name,
          value: i.name,
          description: i.description,
        })),
    });

    if (!choice?.length) {
      console.log(chalk.yellow("\n⚠️  No components selected."));
      process.exit(0);
    }

    selected = choice;
  }

  const spinner = ora("Checking registry connection...").start();

  try {
    await fetchRegistry("registry.json");
    spinner.succeed(chalk.green("✓ Connected to registry"));
  } catch (err: any) {
    spinner.fail(chalk.red("✗ Failed to connect to registry"));
    console.log(chalk.red(`\nError: ${err.message}`));
    console.log(chalk.yellow("\nMake sure the dev server is running:"));
    console.log(chalk.cyan("  cd apps/www && pnpm dev\n"));
    process.exit(1);
  }

  spinner.start("Installing components...");

  const installed = new Set<string>();

  try {
    await installComponents(selected, spinner, cwd, config, installed, options);
    spinner.stop();
    console.log(chalk.bold("\n🎉 All components installed!\n"));
  } catch (err) {
    spinner.fail(chalk.red("Installation failed"));
    console.error(err);
    process.exit(1);
  }
}

/* =========================================================
   Install multiple components (recursive dependency aware)
   ========================================================= */
async function installComponents(
  names: string[],
  spinner: Ora,
  cwd: string,
  config: any,
  installed: Set<string>,
  options: { yes?: boolean; overwrite?: boolean; all?: boolean }
) {
  for (const name of names) {
    if (installed.has(name)) continue;

    // Special handling for "utils"
    if (name === "utils") {
      const utilsFile = path.join(
        cwd,
        `${config.utilsPath}.${config.typescript ? "ts" : "js"}`
      );
      if (fs.existsSync(utilsFile)) {
        spinner.info(chalk.blue("ℹ️  Utils already exists, skipping..."));
        installed.add("utils");
        continue;
      }
    }

    spinner.text = `Fetching ${name}...`;

    let data: any;
    try {
      data = await fetchRegistry(`${name}.json`);
    } catch (err: any) {
      if (err.message.includes("404")) {
        spinner.warn(
          chalk.yellow(`⚠️  Component "${name}" not found in registry.`)
        );
        continue;
      }
      throw err;
    }

    installed.add(name);

    // Install registry component dependencies recursively
    if (data.registryDependencies?.length) {
      for (const dep of data.registryDependencies) {
        if (!installed.has(dep)) {
          spinner.text = `Installing dependency: ${dep}...`;
          await installComponents([dep], spinner, cwd, config, installed, options);
        }
      }
    }

    // Install NPM deps
    if (data.dependencies?.length) {
      await installNpmDeps(data.dependencies, spinner, cwd);
    }

    // Filter files based on user's language preference
    const userLanguage = config.typescript ? 'typescript' : 'javascript';
    let filesToWrite = data.files || [];
    
    // If files have language property, filter by user's preference
    const hasLanguageField = filesToWrite.some((f: any) => f.language);
    if (hasLanguageField) {
      filesToWrite = filesToWrite.filter((f: any) => {
        // If file has no language field, include it (backward compatibility)
        if (!f.language) return true;
        return f.language === userLanguage;
      });

      // If no files match user's language, fall back to typescript files
      if (filesToWrite.length === 0) {
        spinner.warn(
          chalk.yellow(`⚠️  No ${userLanguage} version available, using typescript version`)
        );
        filesToWrite = data.files.filter((f: any) => 
          !f.language || f.language === 'typescript'
        );
      }
    }

    // Write component files
    await writeFiles(filesToWrite, spinner, cwd, options);

    spinner.succeed(chalk.green(`✓ Installed ${name}`));
    spinner.start();
  }
}

/* =========================================================
   Install missing npm dependencies
   ========================================================= */
async function installNpmDeps(
  deps: string[],
  spinner: Ora,
  cwd: string
) {
  const pkgPath = path.join(cwd, "package.json");
  let missing = deps;

  try {
    const pkg = JSON.parse(await fs.readFile(pkgPath, "utf8"));
    const installed = { ...pkg.dependencies, ...pkg.devDependencies };
    missing = deps.filter((d) => !installed[d]);
  } catch {
    // package.json could not be read → install all
  }

  if (missing.length === 0) {
    spinner.info(chalk.blue("ℹ️  Dependencies already installed"));
    return;
  }

  spinner.text = `Installing npm dependencies: ${missing.join(", ")}`;
  const pm = await getPackageManager(cwd);
  const installCmd = pm === "npm" ? "install" : "add";

  await execa(pm, [installCmd, ...missing], { cwd });
}

/* =========================================================
   Write component files to target paths
   ========================================================= */
async function writeFiles(
  files: any[],
  spinner: Ora,
  cwd: string,
  options: { yes?: boolean; overwrite?: boolean }
) {
  for (const file of files) {
    const outPath = path.join(cwd, file.target);

    if (fs.existsSync(outPath) && !options.overwrite && !options.yes) {
      const { overwrite } = await prompts({
        type: "confirm",
        name: "overwrite",
        message: `${file.target} exists. Overwrite?`,
        initial: false,
      });

      if (!overwrite) {
        spinner.warn(chalk.yellow(`⚠️  Skipped ${file.target}`));
        continue;
      }
    }

    await fs.ensureDir(path.dirname(outPath));
    await fs.writeFile(outPath, file.content);
  }
}

/* =========================================================
   Safe registry fetch with timeout + error handling
   ========================================================= */
async function fetchRegistry(endpoint: string) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);

  try {
    const res = await fetch(`${REGISTRY_URL}/${endpoint}`, {
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!res.ok) {
      throw new Error(`Failed to fetch ${endpoint} (${res.status})`);
    }

    return res.json();
  } catch (err: any) {
    clearTimeout(timeout);

    if (err.name === "AbortError") {
      throw new Error(
        `Request timeout: Could not fetch ${endpoint}. Ensure dev server is running at ${REGISTRY_URL}`
      );
    }

    throw err;
  }
}
