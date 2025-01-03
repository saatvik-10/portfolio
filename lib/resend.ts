'use server';

import { Resend } from 'resend';
import { ContactInput } from '@/validators/contact.validator';

const resend = new Resend(process.env.NEXT_PUBLIC_MAIL_SECRET_KEY);

export const sendEmail = async (data: ContactInput) => {
  try {
    const { name, email, message } = data;

    const result = await resend.emails.send({
      from: process.env.NEXT_PUBLIC_MAIL as string,
      to: 'yello@itsaatvik.dev',
      subject: `You have received a message from ${name}`,
      html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
    });

    return { success: true, data: result };
  } catch (error: any) {
    return { success: false, error: error };
  }
};
