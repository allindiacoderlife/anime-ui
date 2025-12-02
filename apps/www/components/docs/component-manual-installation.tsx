'use client';

import { DynamicCodeBlock } from '@/components/docs/dynamic-codeblock';
import { CodeTabs } from '@/components/docs/code-tabs';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { CollapsibleContent } from 'fumadocs-ui/components/ui/collapsible';
import { Collapsible } from 'fumadocs-ui/components/ui/collapsible';
import { CollapsibleTrigger } from 'fumadocs-ui/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useRef, useState } from 'react';
import ReactIcon from '@/components/icons/react-icon';

const getDepsCommands = (dependencies?: string[]) => {
  if (!dependencies) return undefined;
  return {
    npm: `npm install ${dependencies?.join(' ')}`,
    pnpm: `pnpm add ${dependencies?.join(' ')}`,
    yarn: `yarn add ${dependencies?.join(' ')}`,
    bun: `bun add ${dependencies?.join(' ')}`,
  };
};

const getRegistryDepsCommands = (dependencies?: string[]) => {
  if (!dependencies) return undefined;
  const registryUrl = process.env.NEXT_PUBLIC_REGISTRY_URL || 'http://localhost:3000/r';
  const quotedDependencies = dependencies
    .map((dep) => {
      // Remove @anime-ui/ scope if present
      if (dep.startsWith('@anime-ui/')) {
        return dep.replace('@anime-ui/', '');
      }
      // Remove registry URL if present
      if (dep.startsWith(registryUrl)) {
        return dep.replace(registryUrl, '').replace(/^\//, '');
      }
      // Keep full URL for external dependencies
      if (dep.startsWith('https://') || dep.startsWith('http://')) {
        return `"${dep}"`;
      }
      return dep;
    })
    .join(' ');
  
  return {
    npm: `npx anime-ui-cli@beta add ${quotedDependencies}`,
    pnpm: `pnpm dlx anime-ui-cli@beta add ${quotedDependencies}`,
    yarn: `npx anime-ui-cli@beta add ${quotedDependencies}`,
    bun: `bunx anime-ui-cli@beta add ${quotedDependencies}`,
  };
};

export const ComponentManualInstallation = ({
  path,
  dependencies,
  devDependencies,
  registryDependencies,
  code,
}: {
  path: string;
  dependencies?: string[];
  devDependencies?: string[];
  registryDependencies?: string[];
  code: string;
}) => {
  const depsCommands = getDepsCommands(dependencies);
  const devDepsCommands = getDepsCommands(devDependencies);
  const registryDepsCommands = getRegistryDepsCommands(registryDependencies);

  const [isOpened, setIsOpened] = useState(false);
  const collapsibleRef = useRef<HTMLDivElement>(null);

  return (
    <div className="-mt-6">
      <Steps>
        {dependencies && depsCommands && (
          <Step>
            <h4 className="pt-1 pb-4">Install the following dependencies:</h4>
            <CodeTabs codes={depsCommands} />
          </Step>
        )}

        {devDependencies && devDepsCommands && (
          <Step>
            <h4 className="pt-1 pb-4">
              Install the following dev dependencies:
            </h4>
            <CodeTabs codes={devDepsCommands} />
          </Step>
        )}

        {registryDependencies && registryDepsCommands && (
          <Step>
            <h4 className="pt-1 pb-4">
              Install the following registry dependencies:
            </h4>
            <CodeTabs codes={registryDepsCommands} />
          </Step>
        )}

        <Step>
          <h4 className="pt-1 pb-4">
            Copy and paste the following code into your project:
          </h4>

          <Collapsible open={isOpened} onOpenChange={setIsOpened}>
            <div ref={collapsibleRef} className="relative overflow-hidden">
              <CollapsibleContent
                forceMount
                className={cn('overflow-hidden', !isOpened && 'max-h-32')}
              >
                <div
                  className={cn(
                    '[&_pre]:my-0 [&_pre]:max-h-[650px] [&_code]:pb-[60px]',
                    !isOpened
                      ? '[&_pre]:overflow-hidden'
                      : '[&_pre]:overflow-auto]',
                  )}
                >
                  <DynamicCodeBlock
                    code={code}
                    lang="tsx"
                    title={path}
                    icon={<ReactIcon />}
                  />
                </div>
              </CollapsibleContent>
              <div
                className={cn(
                  'absolute flex items-center justify-center bg-gradient-to-b rounded-t-xl from-neutral-300/30 to-white dark:from-neutral-700/30 dark:to-neutral-950 p-2',
                  isOpened ? 'inset-x-0 bottom-0 h-12' : 'inset-0',
                )}
              >
                <CollapsibleTrigger asChild>
                  <Button variant="secondary" className="h-8 text-xs">
                    {isOpened ? 'Collapse' : 'Expand'}
                  </Button>
                </CollapsibleTrigger>
              </div>
            </div>
          </Collapsible>
        </Step>

        <Step>
          <h4 className="pt-1 pb-4">
            Update the import paths to match your project setup.
          </h4>
        </Step>
      </Steps>
    </div>
  );
};
