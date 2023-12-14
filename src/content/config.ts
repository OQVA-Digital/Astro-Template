import { z, defineCollection } from 'astro:content';

// const blogCollection = defineCollection({
// 	schema: z.object({
// 		title: z.string(),
// 		description: z.string(),
// 		pubDate: z
// 			.string()
// 			.or(z.date())
// 			.transform((val) => new Date(val)),
// 		heroImage: z.string().optional(),
// 	}),
// });

// export const collections = {
//     'blog': blogCollection,
// };