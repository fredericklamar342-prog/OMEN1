"use server";

import { supabase } from "./supabase";
import { waitlistSchema, type WaitlistInput } from "./schema";
import { revalidatePath } from "next/cache";

export async function submitWaitlistAction(input: WaitlistInput) {
  // 1. Validate on the server
  const validated = waitlistSchema.safeParse(input);

  if (!validated.success) {
    return {
      success: false,
      error: "Invalid input. Please check the form data.",
      details: validated.error.flatten().fieldErrors,
    };
  }

  const { email, source } = validated.data;
  const sanitizedEmail = email.trim().toLowerCase();

  try {
    // 2. Insert into database (RLS is insert-only, so we skip manual duplicate check)
    // The database unique constraint will handle duplicates via error code 23505
    console.log("SUPABASE URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

    const { error: insertError } = await supabase
      .from("waitlist")
      .insert([{ email: sanitizedEmail }]);

    console.log("INSERT ERROR:", insertError);

    if (insertError) throw insertError;

    // 4. Revalidate admin dashboard
    revalidatePath("/admin/waitlist");

    return {
      success: true,
      message: "You’re on the list. We’ll notify you when early access opens.",
    };
  } catch (err: any) {
    // Handle Postgres unique constraint violation (23505)
    if (err?.code === "23505") {
      return {
        success: false,
        error: "You're already on the waitlist! We'll notify you as soon as early access opens.",
      };
    }

    console.error("Waitlist submission error:", err);
    return {
      success: false,
      error: "Something went wrong. Our team has been notified. Please try again later.",
    };
  }
}

export async function getWaitlistEntries() {
  const { data, error } = await supabase
    .from("waitlist")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching waitlist:", error);
    return [];
  }

  return data;
}
