import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';
import { docs } from '@/.source';
import { attachSeparator } from './attach-separator';

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource(docs.docs, docs.meta),
  pageTree: {
    attachSeparator,
  },
});
