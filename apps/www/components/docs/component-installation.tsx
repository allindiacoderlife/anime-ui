'use client';

import { index } from '@/__registry__';
import { cn } from '@/lib/utils';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsContents,
} from '@/components/radix/tabs';
import { CodeTabs } from '@/components/docs/code-tabs';
import { ComponentManualInstallation } from './component-manual-installation';

interface ComponentInstallationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

export function ComponentInstallation({
  name,
  className,
  ...props
}: ComponentInstallationProps) {
  const component = index[name];

  // Remove @anime-ui/ prefix if present
  const commandName = component.command?.startsWith('@anime-ui/')
    ? component.command.replace('@anime-ui/', '')
    : component.command;

  const commands = {
    npm: `npx anime-ui-cli@beta add ${commandName}`,
    pnpm: `pnpm dlx anime-ui-cli@beta add ${commandName}`,
    yarn: `npx anime-ui-cli@beta add ${commandName}`,
    bun: `bun x --bun anime-ui-cli@beta add ${commandName}`,
  };

  return (
    <div
      className={cn(
        'relative my-4 flex flex-col space-y-2 lg:max-w-[120ch]',
        className,
      )}
      {...props}
    >
      <Tabs defaultValue="cli" className="relative mr-auto w-full">
        <TabsList>
          <TabsTrigger value="cli">CLI</TabsTrigger>
          <TabsTrigger value="manual">Manual</TabsTrigger>
        </TabsList>

        <TabsContents>
          <TabsContent value="cli">
            <CodeTabs codes={commands} />
          </TabsContent>
          <TabsContent value="manual">
            <ComponentManualInstallation
              path={component.files[0].target}
              dependencies={component.dependencies}
              devDependencies={component.devDependencies}
              registryDependencies={component.registryDependencies}
              code={component.files[0].content}
            />
          </TabsContent>
        </TabsContents>
      </Tabs>
    </div>
  );
}
