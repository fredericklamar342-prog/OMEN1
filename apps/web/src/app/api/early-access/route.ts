import { NextResponse } from "next/server";
import { Resend } from "resend";

const fromEmail = process.env.FROM_EMAIL || "Omen <no-reply@omenlabs.com>";
const adminEmail = process.env.ADMIN_EMAIL || "admin@omenlabs.com";

type EarlyAccessPayload = {
  email?: string;
  project?: string;
  wallet?: string;
  source?: string;
};

type EmailTaskResult =
  | { success: true }
  | { success: false; reason: unknown };

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as EarlyAccessPayload;
    const { email, project, wallet } = data;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is missing. Operating in simulation mode.");
      if (process.env.NODE_ENV === "development") {
        return NextResponse.json(
          {
            success: true,
            message: "Registration received in development mode. Configure Resend to send confirmation emails.",
          },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { success: false, error: "Email delivery is not configured on the server." },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const [userResult, adminResult]: EmailTaskResult[] = await Promise.all([
      resend.emails
        .send({
          from: fromEmail,
          to: email,
          subject: "You are registered for Omen early access",
          html: `
            <div style="font-family: sans-serif; color: #0B1220; max-width: 600px; margin: 0 auto;">
              <h2 style="margin-bottom: 12px;">Registration confirmed</h2>
              <p>Thank you for requesting early access to Omen.</p>
              <p>We have registered <strong>${email}</strong> and queued your request for review.</p>
              <div style="margin: 20px 0; padding: 15px; border-left: 4px solid #2B5C92; background: #f8fafc;">
                <strong>Project:</strong> ${project || "Individual"}<br/>
                <strong>Wallet:</strong> ${wallet || "Not provided"}<br/>
                <strong>Status:</strong> Pending Approval
              </div>
              <p>You will hear from the Omen team when your batch is scheduled for onboarding.</p>
              <p>Best regards,<br/>The Omen Team</p>
            </div>
          `,
        })
        .then((result) =>
          result.error ? { success: false, reason: result.error } : { success: true }
        )
        .catch((reason: unknown) => ({ success: false, reason })),
      resend.emails
        .send({
          from: fromEmail,
          to: adminEmail,
          subject: `New Waitlist Entry: ${project || email}`,
          html: `
            <p>New signup: <b>${email}</b></p>
            <p>Project: ${project || "N/A"}</p>
            <p>Wallet: ${wallet || "N/A"}</p>
            <p>Source: ${data.source || "unknown"}</p>
          `,
        })
        .then((result) =>
          result.error ? { success: false, reason: result.error } : { success: true }
        )
        .catch((reason: unknown) => ({ success: false, reason })),
    ]);

    if (!userResult.success) {
      console.error("Confirmation email failed:", userResult.reason);
      return NextResponse.json(
        { success: false, error: "We could not send the confirmation email. Please try again shortly." },
        { status: 502 }
      );
    }

    if (!adminResult.success) {
      console.error("Admin notification failed:", adminResult.reason);
    }

    return NextResponse.json(
      {
        success: true,
        message: "You are registered. A confirmation email has been sent to your inbox.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Critical API Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
