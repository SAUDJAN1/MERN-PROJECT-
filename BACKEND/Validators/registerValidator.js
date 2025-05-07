import { z } from "zod";

export const registerValidator = z.object({
  username: z
    .string({ required_error: "Username is Required" })
    .min(6, { message: "Username must be at least 6 characters" })
    .max(50, { message: "Username must not exceed 50 characters" }),

  email: z
    .string({ required_error: "Email is Required" })
    .email({ message: "Please provide a valid email address" })
    .max(100, { message: "Email must not exceed 100 characters" })
    .trim(),

  password: z
    .string({ required_error: "Password is Required" })
    .min(8, { message: "Password must be at least 8 characters" })
    .max(256, { message: "Password must not exceed 256 characters" })
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,256}$/,
      {
        message:
          "Password must include at least one letter, one number, and one special character",
      }
    ),
});

