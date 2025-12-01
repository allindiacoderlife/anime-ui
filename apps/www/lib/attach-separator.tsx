import { Code, SquareMenu, TypeIcon } from 'lucide-react';
import type { BuildPageTreeOptions } from 'fumadocs-core/source';
const Icon = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="relative size-5 [&_svg]:size-[12px] flex items-center justify-center bg-border text-muted-foreground rounded-[5px]">
      {children}

      <span className="absolute left-1/2 translate-x-[calc(-50%-0.5px)] bg-border w-px h-[8px] top-full" />
    </span>
  );
};

export const Separator = ({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) => {
  return (
    <span className="flex items-center gap-2">
      <Icon>{icon}</Icon>
      <span className="text-[13px] text-neutral-500">{name}</span>
    </span>
  );
};

export const attachSeparator: BuildPageTreeOptions['attachSeparator'] = (
  node,
) => {
  switch (node.name) {
    case 'Split Text':
      node.name = (
        <Separator icon={<TypeIcon strokeWidth={3} />} name="Split Text" />
      );
      break;
    case 'Guide':
      node.name = <Separator icon={<Code strokeWidth={2.5} />} name="Usage" />;
      break;
    case 'Menu':
      node.name = (
        <Separator icon={<SquareMenu strokeWidth={2} />} name="Menu" />
      );
      break;
  }

  return node;
};
