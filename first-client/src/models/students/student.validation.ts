import { z } from "zod";

/**
 * Create post schema
 */
export const createStudentSchema = z.object({
  first_name: z
    .string({ required_error: "first name is required!" })
    .min(3, "Name should contain at least 3 characters!"),
  last_name: z
    .string({ required_error: "last name is required!" })
    .min(3, "Name should contain at least 3 characters!"),
  birthday: z
    .string({ required_error: "birthday is required!" })
    .min(3, "Name should contain at least 3 characters!"),
  adress: z
    .string({ required_error: "address is required!" })
    .min(3, "Name should contain at least 3 characters!"),
  email: z
    .string({ required_error: "email is required!" })
    .min(3, "Name should contain at least 3 characters!"),
  specialite_id: z.bigint({ required_error: "specialite is required!" }),
  groupe_id: z.bigint({ required_error: "groupe is required!" }),
  phone: z
    .string({ required_error: "phone is required!" })
    .min(3, "Name should contain at least 3 characters!"),
});
export type CreateStudentSchemaType = z.infer<typeof createStudentSchema>;
/**
 * Update post schema
 */
export const updateStudentSchema = z.object({
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  birthday: z.string().optional(),
  adress: z.string().optional(),
  email: z.string().optional(),
  groupe_id: z.string().optional(),
  phone: z.string().optional(),
});
export type UpdateStudentSchemaType = z.infer<typeof updateStudentSchema>;
