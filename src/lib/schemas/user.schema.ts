import { z, ZodSchema } from "zod";

export class UserSchemaValidator {
  static readonly REGISTER_USER_SCHEMA: ZodSchema = z.object({
    username: z.string().min(5, {
      message: "Username must be at least 5 characters",
    }),
    name: z.string().min(10, {
      message: "Name must be at least 10 characters",
    }),
    email: z.string().email({
      message: "Invalid email address",
    }),
    password: z
      .string()
      .min(6, {
        message: "Password must be at least 6 characters",
      })
      .max(20, {
        message: "Password must be at most 20 characters",
      }),
    phone: z
      .string()
      .regex(/^\d+$/, { message: "Phone number must contain only digits" })
      .max(13, { message: "Phone number must be at most 13 characters" }),
  });
}
