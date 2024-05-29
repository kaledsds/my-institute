import { z } from "zod";

/**
 * Create post schema
 */
export const createPostSchema = z.object({
  title: z
    .string({ required_error: "Name is required!" })
    .min(3, "Name should contain at least 3 characters!"),
  content: z
    .string({ required_error: "Content is required!" })
    .min(3, "Content should contain at least 3 characters!"),
});
export type CreatePostSchemaType = z.infer<typeof createPostSchema>;
/**
 * Update post schema
 */
export const updatePostSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
});
export type UpdatePostSchemaType = z.infer<typeof updatePostSchema>;
