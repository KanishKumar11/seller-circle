"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SMTP,
  port: 465, // Use 465 for SSL
  secure: true, // Use true for port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
export async function sendEmail(data: string) {
  await transporter.sendMail({
    from: `"SellerCircle" <${process.env.EMAIL_USER}>`,
    to: "contact@sellercircle.in",
    subject: "New form submission",
    html: `
    <html>
    <body>
    <h1>Form Submission data:</h1>
    <p>${data}</p>
    </body>
    </html>
    `,
  });
  console.log("mail sent successfully!");
}
