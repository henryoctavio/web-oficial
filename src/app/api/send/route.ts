import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_W2Z9dY3k_2kPkKWcH72nn8CK8urEKyMGq");

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "henrysilvatapullima38@gmail.com",
      subject: `Nuevo mensaje de ${name}`,
      text: `Email: ${email}\n\nMensaje: ${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return NextResponse.json({ error: "Error al enviar el correo" }, { status: 500 });
  }
}
