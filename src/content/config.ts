import { defineCollection, z } from "astro:content"

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
})

const education = defineCollection({
  type: "content",
  schema: z.object({
    school: z.string(),
    degree: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.coerce.date(),
  }),
})

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
})

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
})

const legal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
})

const publications = defineCollection({
  type: "data",
  schema: z.array(z.object({
    title: z.string(),
    authors: z.string(),
    journal: z.string(),
    year: z.number(),
    pdfUrl: z.string().optional(),
    doi: z.string().optional(),
    type: z.enum(["Published", "Under Review"]),
    tags: z.array(z.string()).optional(),
  })),
})

export const collections = { work, education, news, projects, legal, publications }
