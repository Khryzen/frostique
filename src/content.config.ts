import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    category: z.string().default('General'),
    image: z.string().min(1, 'A package photo is required.'),
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
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    primaryCta: z.string().optional(),
    aboutHeading: z.string().optional(),
    aboutText: z.string().optional(),
    aboutImage: z.string().optional(),
    aboutImageAlt: z.string().optional(),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: z.object({
    title: z.string().optional(),
    image: z.string(),
    alt: z.string(),
    order: z.number().default(100),
  }),
});

export const collections = { products, pages, gallery };
