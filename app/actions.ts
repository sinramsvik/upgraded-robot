"use server";
import { profileSchema, Profile } from "@/app/schema";

export async function updateProfile(data: Profile) {
  const result = profileSchema.safeParse(data);

  if (!result.success) {
    return { errors: result.error.errors };
  }
  //Her kunne vi posta noe til en database eller Gudene vet hva

  return { message: "Profile updated successfully!" };
}
