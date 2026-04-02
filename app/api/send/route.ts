import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const response = await resend.emails.send({
  from: "PORTFOLIO MESSAGE <onboarding@resend.dev>",
  to: ["virnzlivara@gmail.com"],
  subject: `New message from ${name}`,
  replyTo: email,
  html: `
  <div style="background-color:#f4f6f8;padding:40px 0;font-family:Arial,sans-serif;">
    <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.08);">
      
      <!-- Header -->
      <tr>
        <td style="background:linear-gradient(135deg,#4f46e5,#3b82f6);padding:24px;text-align:center;color:#ffffff;">
          <h2 style="margin:0;font-size:20px;">📩 New Portfolio Message</h2>
          <p style="margin:6px 0 0;font-size:13px;opacity:0.9;">
            Someone just contacted you
          </p>
        </td>
      </tr>

      <!-- Content -->
      <tr>
        <td style="padding:24px;">
          
          <!-- Name -->
          <p style="margin:0 0 8px;font-size:12px;color:#6b7280;"><strong>NAME</strong></p>
          <p style="margin:0 0 16px;font-size:14px;color:#111827;">
            ${name}
          </p>

          <!-- Email -->
          <p style="margin:0 0 8px;font-size:12px;color:#6b7280;"><strong>EMAIL</strong></p>
          <p style="margin:0 0 16px;font-size:14px;">
            <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">
              ${email}
            </a>
          </p>

          <!-- Message -->
          <p style="margin:0 0 8px;font-size:12px;color:#6b7280;"><strong>MESSAGE</strong></p>
          <div style="background:#f9fafb;padding:16px;border-radius:8px;font-size:14px;color:#111827;line-height:1.5;">
            ${message}
          </div>

        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="padding:16px;text-align:center;font-size:12px;color:#9ca3af;">
          Sent from your portfolio contact form
        </td>
      </tr>

    </table>
  </div>
  `,
});

    return Response.json({ success: true, data: response });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}