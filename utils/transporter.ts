import nodemailer from "nodemailer";

interface Message {
  to: string;
  subject: string;
  html: any;
}

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



export const sendMail = async ({ to, subject, html }: Message): Promise<void> => {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM!,
    to: to,
    subject: subject,
    html: html,
  });
};
