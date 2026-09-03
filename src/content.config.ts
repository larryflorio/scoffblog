import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    kicker: z.string(), // COURT NEWS, OPINION ANALYSIS, EMERGENCY DOCKET, RELIST WATCH, SCOFF FOCUS, STAT PACK
    author: z.string(),
    date: z.coerce.date(),
    dek: z.string().optional(),
    image: z.string().optional(),
    case: z.string().optional(), // slug of related case
    featured: z.boolean().default(false),
  }),
});

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    docket: z.string(),
    lowerDocket: z.string().optional(),
    term: z.string(),
    status: z.enum(['Petition pending', 'Granted', 'Argued', 'Decided', 'Emergency application']),
    issues: z.array(z.string()),
    holding: z.string().optional(),
    granted: z.coerce.date().optional(),
    argued: z.coerce.date().optional(),
    decided: z.coerce.date().optional(),
    timeline: z.array(z.object({ date: z.string(), entry: z.string() })),
    exhibits: z.array(z.object({ label: z.string(), src: z.string(), pdf: z.string().optional() })).default([]),
    external: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { posts, cases };
