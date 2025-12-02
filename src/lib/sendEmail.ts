import nodemailer from "nodemailer";

export async function sendEmail(name: string, email: string, message: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "henrysilvatapullima38@gmail.com",
    subject: "Nuevo mensaje del formulario web",
    text: `
      Nombre: ${name}
      Correo: ${email}
      Mensaje: ${message}
    `,
  };

  await transporter.sendMail(mailOptions);
}
