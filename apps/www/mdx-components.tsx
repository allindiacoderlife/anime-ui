import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Card } from '@/components/docs/card';
import { ComponentPreview } from '@/components/docs/component-preview';
import { ComponentInstallation } from '@/components/docs/component-installation';
import { ExternalLink } from '@/components/docs/external-link';
import { Steps, Step } from 'fumadocs-ui/components/steps';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import {
  CodeBlock,
  Pre,
  type CodeBlockProps,
} from '@/components/docs/codeblock';
import { Callout } from '@/components/docs/callout';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    Card,
    ComponentPreview,
    ComponentInstallation,
    TypeTable,
    ExternalLink,
    Steps,
    Step,
    Callout,
    pre: (props: CodeBlockProps) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
  };
}
