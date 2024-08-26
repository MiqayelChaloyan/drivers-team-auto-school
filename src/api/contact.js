'use server';

import { transporter } from '../constants/nodemailer';

const handler = async (data) => {
    const { firstName, lastName, email, phone } = data;

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.NODEMAILER_EMAIL,
            subject: `Contact form submission from ${firstName} ${lastName}`,
            html: `
                <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
                    <h2 style="color: #007BFF; text-align: center;">Կոնտակտային ձևի ներկայացում</h2>
                    <p style="font-size: 16px; line-height: 1.5; text-align: center;">Դուք ունեք նոր դասընթացի գրանցման հայտ:</p>
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                    <p style="font-size: 16px;"><strong>Full Name:</strong> ${firstName} ${lastName}</p>
                    <p style="font-size: 16px;"><strong>Email:</strong> ${email}</p>
                    <p style="font-size: 16px;"><strong>Phone:</strong> 0${phone}</p>
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                    <p style="font-size: 14px; color: #555; text-align: center;">This message was sent from your website's contact form.</p>
                </div>
            `,
        });
               
        return 200;
    } catch (_) {
        return 500;
    }
};

export default handler;
