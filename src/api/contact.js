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
            <p>Դուք ունեք կոնտակտային ձևի ներկայացում</p><br>
            <p><strong>Email:</strong> ${email}</p><br>
            <p><strong>Phone:</strong> ${`0${phone}`}</p><br>
        `,
        });

        return 200;
    } catch (error) {
        return 500;
    }
};

export default handler;
