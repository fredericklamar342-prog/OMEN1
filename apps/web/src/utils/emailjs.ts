const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

export type EarlyAccessEmailInput = {
  email: string;
  project?: string;
  wallet?: string;
  source?: string;
};

type EmailJsConfig = {
  serviceId: string;
  publicKey: string;
  confirmationTemplateId: string;
  adminTemplateId?: string;
  adminEmail?: string;
};

function getEmailJsConfig(): EmailJsConfig {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const confirmationTemplateId = process.env.NEXT_PUBLIC_EMAILJS_CONFIRM_TEMPLATE_ID;
  const adminTemplateId = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID;
  const adminEmail = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_EMAIL;

  if (!serviceId || !publicKey || !confirmationTemplateId) {
    throw new Error(
      "EmailJS is not configured. Add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, and NEXT_PUBLIC_EMAILJS_CONFIRM_TEMPLATE_ID."
    );
  }

  return {
    serviceId,
    publicKey,
    confirmationTemplateId,
    adminTemplateId,
    adminEmail,
  };
}

async function sendEmail(
  config: EmailJsConfig,
  templateId: string,
  templateParams: Record<string, string>
) {
  const response = await fetch(EMAILJS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: config.serviceId,
      template_id: templateId,
      user_id: config.publicKey,
      template_params: templateParams,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "EmailJS request failed.");
  }
}

export async function submitEarlyAccessRegistration(input: EarlyAccessEmailInput) {
  const config = getEmailJsConfig();

  const templateParams = {
    to_email: input.email,
    reply_to: input.email,
    project_name: input.project || "Individual",
    wallet_address: input.wallet || "Not provided",
    source: input.source || "unknown",
    admin_email: config.adminEmail || "",
  };

  const requests = [
    sendEmail(config, config.confirmationTemplateId, templateParams),
  ];

  if (config.adminTemplateId && config.adminEmail) {
    requests.push(
      sendEmail(config, config.adminTemplateId, {
        ...templateParams,
        to_email: config.adminEmail,
      })
    );
  }

  await Promise.all(requests);

  return {
    message: "You are registered. A confirmation email has been sent to your inbox.",
  };
}
