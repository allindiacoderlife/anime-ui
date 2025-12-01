import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpen } from 'lucide-react';

/**
 * Shared layout configurations
 * you can customise the layouts via this file
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'Anime UI',
  },
  links: [
    {
      type: 'separator',
      name: 'Guide',
      icon: <BookOpen fill="currentColor" size={2.5} />,
    } as any,
    {
      text: 'Introduction',
      url: '/docs',
      secondary: false,
    },
    {
      text: 'Installation',
      url: '/docs/installation',
      secondary: false,
    },
  ],
};
