// source.config.ts
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema
} from "fumadocs-mdx/config";
import { z } from "zod";
var docs = defineDocs({
  docs: {
    schema: frontmatterSchema.extend({
      releaseDate: z.coerce.date().optional(),
      beta: z.boolean().optional(),
      alpha: z.boolean().optional(),
      updated: z.boolean().optional(),
      deprecated: z.boolean().optional(),
      author: z.object({
        name: z.string(),
        url: z.string().optional()
      }).optional()
    })
  },
  meta: {
    schema: metaSchema
  }
});
var source_config_default = defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {}
});
export {
  source_config_default as default,
  docs
};
