import { RuleType } from '../../ruleType';

const title = 'Կապ մեզ հետ';

const contactUs = {
    name: 'contact-us',
    type: 'document',
    title: 'Contact Us',
    id: 'contact-us',
    fields: [
        {
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'string',
            description: 'Պիտի լինի նշված ձևաչափով` +374 | XX-XX-XX-XX'
        },
        {
            name: 'gmail',
            title: 'Gmail',
            type: 'string',
        },
        {
            title: 'Social Links',
            name: 'socialLinks',
            type: 'object',
            validation: (Rule: RuleType) => Rule.required(),
            fields: [
                {
                    title: 'Facebook',
                    name: 'facebook',
                    type: 'string'
                },
                {
                    title: 'Instagram',
                    name: 'instagram',
                    type: 'string'
                },
                {
                    title: 'TikTok',
                    name: 'tikTok',
                    type: 'string'
                }
            ]
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare() {
            return {
                title,
            };
        },
    }
};

export default contactUs;