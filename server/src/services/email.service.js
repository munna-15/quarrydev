import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value = "") => {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export const sendContactNotification = async (contact) => {
  const name = escapeHtml(contact.name);
  const email = escapeHtml(contact.email);
  const service = escapeHtml(contact.service);
  const budget = escapeHtml(contact.budget);
  const message = escapeHtml(contact.message).replace(/\n/g, "<br />");

  const { data, error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL,
    to: [process.env.CONTACT_RECEIVER_EMAIL],
    replyTo: contact.email,
    subject: `New project inquiry — ${contact.name}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Project Inquiry — Quarry</title>
        </head>

        <body style="margin:0;padding:0;background:#f2f0ec;font-family:Arial,Helvetica,sans-serif;color:#111827;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f2f0ec;">
            <tr>
              <td align="center" style="padding:40px 16px;">

                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:680px;background:#ffffff;">

                  <tr>
                    <td style="padding:28px 32px;border-bottom:1px solid #e5e7eb;">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td>
                            <div style="font-size:22px;font-weight:700;letter-spacing:-0.8px;color:#111827;">
                              QUARRY
                            </div>
                          </td>

                          <td align="right">
                            <div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#6b7280;">
                              Project inquiry
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:48px 32px 36px;">
                      <div style="font-size:12px;letter-spacing:1.8px;text-transform:uppercase;color:#0ea5e9;margin-bottom:16px;">
                        New inquiry
                      </div>

                      <h1 style="margin:0;font-size:38px;line-height:1.08;letter-spacing:-1.8px;font-weight:600;color:#111827;">
                        New project inquiry.
                      </h1>

                      <p style="margin:18px 0 0;font-size:15px;line-height:1.7;color:#6b7280;max-width:500px;">
                        A new project request has arrived through the Quarry website.
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:0 32px 36px;">

                      <div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#6b7280;padding-bottom:12px;border-bottom:1px solid #e5e7eb;">
                        Client
                      </div>

                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:20px;">
                        <tr>
                          <td width="50%" valign="top" style="padding-right:12px;">
                            <div style="font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;margin-bottom:7px;">
                              Name
                            </div>

                            <div style="font-size:15px;color:#111827;">
                              ${name}
                            </div>
                          </td>

                          <td width="50%" valign="top" style="padding-left:12px;">
                            <div style="font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;margin-bottom:7px;">
                              Email
                            </div>

                            <div style="font-size:15px;color:#111827;word-break:break-word;">
                              ${email}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:0 32px 36px;">

                      <div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#6b7280;padding-bottom:12px;border-bottom:1px solid #e5e7eb;">
                        Project details
                      </div>

                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:20px;">
                        <tr>
                          <td width="50%" valign="top" style="padding-right:12px;">
                            <div style="font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;margin-bottom:7px;">
                              Service
                            </div>

                            <div style="font-size:15px;color:#111827;">
                              ${service}
                            </div>
                          </td>

                          <td width="50%" valign="top" style="padding-left:12px;">
                            <div style="font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;margin-bottom:7px;">
                              Budget
                            </div>

                            <div style="font-size:15px;font-weight:600;color:#111827;">
                              ${budget}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:0 32px 44px;">

                      <div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#6b7280;padding-bottom:12px;border-bottom:1px solid #e5e7eb;">
                        Project message
                      </div>

                      <div style="margin-top:20px;padding:24px;background:#f7f8fa;border-left:3px solid #0ea5e9;font-size:15px;line-height:1.75;color:#374151;">
                        ${message}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:24px 32px;background:#111827;">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td>
                            <div style="font-size:14px;font-weight:700;letter-spacing:-0.3px;color:#ffffff;">
                              QUARRY
                            </div>

                            <div style="margin-top:6px;font-size:11px;color:#9ca3af;">
                              Software · Digital Products · AI · Systems
                            </div>
                          </td>

                          <td align="right" valign="bottom">
                            <div style="font-size:10px;letter-spacing:1.2px;text-transform:uppercase;color:#6b7280;">
                              New business inquiry
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                </table>

                <div style="max-width:680px;padding:18px 20px 0;font-size:10px;line-height:1.5;color:#9ca3af;">
                  This notification was generated from the Quarry contact form.
                </div>

              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const sendContactConfirmation = async (contact) => {
  const name = escapeHtml(contact.name);

  const { data, error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL,
    to: [contact.email],
    subject: "We received your project inquiry — Quarry",
    html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Quarry — Inquiry Received</title>
        </head>

        <body style="margin:0;padding:0;background:#f2f0ec;font-family:Arial,Helvetica,sans-serif;color:#111827;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f2f0ec;">
            <tr>
              <td align="center" style="padding:40px 16px;">

                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:620px;background:#ffffff;">

                  <tr>
                    <td style="padding:28px 32px;border-bottom:1px solid #e5e7eb;">
                      <div style="font-size:22px;font-weight:700;letter-spacing:-0.8px;color:#111827;">
                        QUARRY
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:56px 32px 52px;">

                      <div style="font-size:12px;letter-spacing:1.8px;text-transform:uppercase;color:#0ea5e9;margin-bottom:18px;">
                        Inquiry received
                      </div>

                      <h1 style="margin:0;font-size:40px;line-height:1.08;letter-spacing:-2px;font-weight:600;color:#111827;">
                        Thanks for reaching out.
                      </h1>

                      <p style="margin:24px 0 0;font-size:16px;line-height:1.75;color:#374151;">
                        Hi ${name},
                      </p>

                      <p style="margin:14px 0 0;font-size:15px;line-height:1.75;color:#6b7280;">
                        We've received your project inquiry and will review the details carefully.
                      </p>

                      <p style="margin:14px 0 0;font-size:15px;line-height:1.75;color:#6b7280;">
                        We'll get back to you soon to discuss your project and the next steps.
                      </p>

                      <div style="margin-top:38px;padding-top:24px;border-top:1px solid #e5e7eb;">

                        <div style="font-size:11px;letter-spacing:1.4px;text-transform:uppercase;color:#9ca3af;">
                          What happens next
                        </div>

                        <div style="margin-top:10px;font-size:15px;line-height:1.7;color:#374151;">
                          Our team will review your requirements and follow up with you directly.
                        </div>

                      </div>

                      <div style="margin-top:42px;">

                        <div style="font-size:15px;color:#111827;">
                          — Quarry
                        </div>

                        <div style="margin-top:6px;font-size:12px;color:#9ca3af;">
                          Software · Digital Products · AI · Systems
                        </div>

                      </div>

                    </td>
                  </tr>

                  <tr>
                    <td style="padding:22px 32px;background:#111827;">
                      <div style="font-size:11px;line-height:1.6;color:#9ca3af;">
                        Thanks for considering Quarry for your project.
                      </div>
                    </td>
                  </tr>

                </table>

              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
