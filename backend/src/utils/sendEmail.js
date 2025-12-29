// src/utils/sendEmail.js
import nodemailer from "nodemailer";

export const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // App Password
  },
  connectionTimeout: 20000,
});

    const mailOptions = {
      from: `"BloodLink" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    };

    await transporter.sendMail(mailOptions);
    console.log(`📩 Email sent successfully to: ${to}`);
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    throw error;
  }
};
