import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.eu.mailgun.org",
  port: 587,
  auth: {
    user: "postmaster@fizkult.moscow.sport",
    pass: "85e00fd5da478ad2fd645efc63ab3e16-53ce4923-3828605c",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendTestEmail = async (email: string): Promise<void> => {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM!,
    to: email,
    subject: "Тестовое письмо",
    text: "Тестовое письмо",
    html: `Тестовое письмо`,
  });
};
