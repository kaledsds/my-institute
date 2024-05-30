import { z } from "zod";

/**
 * Create post schema
 */
export const createSpecialiteSchema = z.object({
  nom: z
    .string({ required_error: "Name is required!" })
    .min(3, "Name should contain at least 3 characters!"),
});
export type CreateSpecialiteSchemaType = z.infer<typeof createSpecialiteSchema>;
/**
 * Update post schema
 */
export const updateSpecialiteSchema = z.object({
  nom: z.string().optional(),
});
export type UpdateSpecialiteSchemaType = z.infer<typeof updateSpecialiteSchema>;
