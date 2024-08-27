const title = 'Գլխավոր';

const main = {
    name: 'main',
    type: 'document',
    title: 'Main',
    id: 'main',
    fields: [
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'images',
            title: 'Images',
            type: 'object',
            fields: [
                {
                    name: 'imageOne',
                    type: 'image',
                    title: 'Image',
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
                {
                    name: 'imageTwo',
                    type: 'image',
                    title: 'Image',
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
            ]
        },
        {
            name: 'bg_image',
            type: 'image',
            title: 'Background Image',
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

export default main;
