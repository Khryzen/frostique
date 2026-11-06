import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    category: z.string().default('General'),
    image: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    primaryCta: z.string().optional(),
    aboutHeading: z.string().optional(),
    aboutText: z.string().optional(),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    alt: z.string(),
    order: z.number().default(100),
  }),
});

export const collections = { products, pages, gallery };
