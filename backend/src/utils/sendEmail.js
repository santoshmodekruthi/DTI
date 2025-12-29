import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ to, subject, text, html }) => {
  try {
    await resend.emails.send({
      from: "BloodLink <onboarding@resend.dev>", // works without domain
      to,
      subject,
      html: html || `<p>${text}</p>`,
    });

    console.log(`📩 Email sent successfully to: ${to}`);
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw error;
  }
};
