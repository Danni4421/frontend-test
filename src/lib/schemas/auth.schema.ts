import { z, ZodSchema } from "zod";

export class AuthSchemaValidator {
  static readonly LOGIN_SCHEMA: ZodSchema = z.object({
    email: z.string().email({
      message: "Email tidak valid",
    }),
    password: z
      .string()
      .min(6, {
        message: "Password minimal 6 karakter",
      })
      .max(20, {
        message: "Password maksimal 20 karakter",
      }),
  });
}
