
const { z } = require("zod");

const contactSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(255, { message: "Name must not exceed 255 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email format" })
    .max(255, { message: "Email must not exceed 255 characters" }),

  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(3, { message: "Message must be at least 3 characters long" })
    .max(1024, { message: "Message must not exceed 1024 characters" }),
});

module.exports = contactSchema;
