import { z } from "zod";

/**
 * Create post schema
 */
export const createGroupeSchema = z.object({
  nom: z
    .string({ required_error: "Name is required!" })
    .min(3, "Name should contain at least 3 characters!"),
  niveau: z.enum(["1 CAP", "2 CAP", "1 BTP", "2 BTP", "1 BTS", "2 BTS"]),
  specialite_id: z.bigint({ required_error: "Content is required!" }),
});
export type CreateGroupeSchemaType = z.infer<typeof createGroupeSchema>;
/**
 * Update post schema
 */
export const updateGroupeSchema = z.object({
  nom: z.string().optional(),
  specialite_id: z.bigint().optional(),
});
export type UpdateGroupeSchemaType = z.infer<typeof updateGroupeSchema>;
