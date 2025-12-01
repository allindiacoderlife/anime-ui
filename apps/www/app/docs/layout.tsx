import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';
import { DocsSidebar } from '@/components/docs/sidebar';
import { DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import { ThemeSwitcher } from '@/components/animation/theme-switcher';
import { SIDEBAR_TABS } from '@/lib/sidebar';
import { Nav } from '@/components/docs/nav';

const DOCS_LAYOUT_PROPS: DocsLayoutProps = {
  tree: source.pageTree,
  sidebar: {
    tabs: SIDEBAR_TABS,
  },

  githubUrl: 'https://github.com/imskyleen/animate-ui',
  themeSwitch: {
    component: <ThemeSwitcher />,
  },
  ...baseOptions,
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...DOCS_LAYOUT_PROPS}
      sidebar={{
        component: <DocsSidebar {...DOCS_LAYOUT_PROPS} />,
      }}
      nav={{
        component: <Nav />,
      }}
    >
      {children}
    </DocsLayout>
  );
}
