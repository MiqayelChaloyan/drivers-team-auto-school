const title = 'Մեքենաների տեսակներ';

const carTypeDetails = {
    name: 'carTypeDetails',
    type: 'document',
    title: 'Car Type Details',
    id: 'carTypeDetails',
    fields: [
        {
            name: 'image',
            type: 'image',
            title: 'Image Car',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                },
            ],
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

export default carTypeDetails;
