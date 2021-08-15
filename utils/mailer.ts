import nodemailer from "nodemailer";
import dotenv from "dotenv";
import aws from "aws-sdk";

dotenv.config();

interface Props {
  name: string;
  email: string;
  message: string;
}

// SMTP Username:
// AKIAZS3FX6J2D22C55YJ
// SMTP Password:
// BCh6GRR55koAO/IW0yW7CRG8onz9hkMyJYR0rrGLdM71

export default async ({ name, email, message }: Props) => {
  if (!process.env.EMAIL || !process.env.PASS) {
    throw new Error("Environment Invalid");
  }

  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    const html = `
      <h2>Name: ${name}</h2> 
      <h4>Email: ${email}</h4>
      <p>Message: ${message}</p>
    `;

    transporter.sendMail(
      {
        from: "akhildoesdev@gmail.com",
        to: "akhildoesdev@gmail.com, kalaakki@gmail.com",
        subject: "Portfolio Response",
        html,
      },
      (err, info) => {
        console.log(info);

        if (err) reject(err);
        else resolve(info);
      }
    );
  });
};
