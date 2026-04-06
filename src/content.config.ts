import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const study = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/study' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
    youtube: z.string().optional(),
    series: z.string().optional(),
    episode: z.number().optional(),
    lang: z.enum(['en', 'ko']).default('en'),
  }),
});

const studyKo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ko/study' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
    youtube: z.string().optional(),
    series: z.string().optional(),
    episode: z.number().optional(),
    lang: z.enum(['en', 'ko']).default('ko'),
  }),
});

export const collections = { study, 'ko-study': studyKo };
