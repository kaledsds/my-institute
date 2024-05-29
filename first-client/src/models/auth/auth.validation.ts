import { z } from "zod";

/**
 * Register user schema
 */
export const registerUserSchema = z.object({
  name: z
    .string({ required_error: "Name is required!" })
    .min(3, "Name should contain at least 3 characters!"),
  email: z
    .string({ required_error: "Email is required!" })
    .email({ message: "Invalid email!" }),
  password: z
    .string({ required_error: "Password is required!" })
    .min(8, "Password should contain at least 8 characters!"),
  password_confirmation: z
    .string({
      required_error: "Confirm password is required!",
    })
    .min(8, "The passwords did not match!"),
});
export const refinedRegisterUserSchema = registerUserSchema.superRefine(
  ({ password_confirmation, password }, ctx) => {
    if (password_confirmation !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match!",
        path: ["password_confirmation"],
      });
    }
  }
);
export type RegisterUserSchemaType = z.infer<typeof registerUserSchema>;
/**
 * Login user schema
 */
export const loginUserSchema = z.object({
  email: z
    .string({ required_error: "Email is required!" })
    .email({ message: "Invalid email!" }),
  password: z
    .string({ required_error: "Password is required!" })
    .min(8, "Invalid password!"),
});
export type LoginUserSchemaType = z.infer<typeof loginUserSchema>;
