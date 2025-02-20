import { z } from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(2, "Missing first name!"),
  lastName: z.string().min(2, "Missing last name!"),
  phoneNumber: z.string().regex(/^\d{8}$/, "Phone number must be 8 digits"),
  receiveNewsletter: z.boolean(),
});

export type Profile = z.infer<typeof profileSchema>;
