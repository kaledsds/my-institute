import { z } from "zod";

/**
 * Register user schema
 */
export const registerUserSchema = z.object({
  first_name: z
    .string({ required_error: "last name is required!" })
    .min(3, "Name should contain at least 3 characters!"),
  last_name: z
    .string({ required_error: "first name is required!" })
    .min(3, "Name should contain at least 3 characters!"),
  birthday: z.string({ required_error: "birthday is required!" }),
  phone: z.string({ required_error: "phone is required!" }),
  email: z
    .string({ required_error: "Email is required!" })
    .email({ message: "Invalid email!" }),
  adress: z
    .string({ required_error: "address is required!" })
    .min(3, "Name should contain at least 3 characters!"),
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
