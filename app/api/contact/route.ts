import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    await resend.emails.send({
      from: "Royalerides Website <info@royalerides.co.uk>",
      to: ["Royalerideltd@gmail.com"],
      replyTo: email,
      subject: "New Contact Enquiry",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
