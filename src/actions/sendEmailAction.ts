"use server";

import { Resend } from "resend";

import EmailTemplate from "@/components/EmailTemplate";

type Inputs = {
    username: string;
    email: string;
    message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: Inputs) => {
    const data = await resend.emails.send({
        from: "Azamat <onboarding@resend.dev>",
        to: "azamatkhabibullaevcto@gmail.com",
        subject: formData.username,
        reply_to: formData.email as string,
        react: EmailTemplate({
            email: formData.email,
            message: formData.message,
        }),
    });

    return data;
};
