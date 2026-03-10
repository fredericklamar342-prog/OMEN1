import { NextResponse } from "next/server";
import { Resend } from "resend";

const fromEmail = process.env.FROM_EMAIL || "Omen <no-reply@omenlabs.com>";
const adminEmail = process.env.ADMIN_EMAIL || "admin@omenlabs.com";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { projectName, github, repo, docs, xHandle, wallet } = data;

    // 1. Validation
    if (!projectName || !github) {
      return NextResponse.json(
        { success: false, error: "Project Name and GitHub are required." },
        { status: 400 }
      );
    }

    // 2. Resend Setup
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY missing. Operation in simulation mode.");
      if (process.env.NODE_ENV === 'development') {
        return NextResponse.json({ 
          success: true, 
          message: "Development Mode: Application received (Simulation)" 
        }, { status: 200 });
      }
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // 3. Admin Notification
    const adminEmailTask = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `New Developer Application: ${projectName}`,
      html: `
        <div style="font-family: sans-serif; color: #0B1220; max-width: 600px;">
          <h2 style="border-bottom: 2px solid #2B5C92; padding-bottom: 10px;">Beta Access Request</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Project:</strong> ${projectName}</p>
            <p><strong>GitHub:</strong> ${github}</p>
            <p><strong>X Handle:</strong> ${xHandle || 'N/A'}</p>
            <p><strong>Wallet:</strong> ${wallet || 'N/A'}</p>
          </div>
          <p>Links:</p>
          <ul>
            <li>Repo: ${repo || 'None'}</li>
            <li>Docs: ${docs || 'None'}</li>
          </ul>
          <p style="font-size: 12px; color: #64748b;">Submitted at: ${new Date().toISOString()}</p>
        </div>
      `,
    });

    if (adminEmailTask.error) {
      console.error("Resend Error:", adminEmailTask.error);
      // We still return true if the user's part "worked" but keep logs for us
    }

    return NextResponse.json({ 
      success: true, 
      message: "Application successfully submitted." 
    }, { status: 200 });

  } catch (error: any) {
    console.error("Developer route CPU error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
