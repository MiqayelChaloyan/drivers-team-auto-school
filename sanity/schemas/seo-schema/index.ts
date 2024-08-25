const title = 'SEO';

const seo = {
    name: 'seo',
    type: 'document',
    title: 'Seo',
    id: 'seo',
    fields: [
        {
            name: "ogTitle",
            type: "string",
            title: "Open Graph Title",
        },
        {
            name: "ogDescription",
            type: "string",
            title: "Open Graph Description",
        },
        {
            title: 'Open Graph Keywords',
            name: 'OgKeywords',
            type: 'array',
            of: [{type: 'string'}]
          },
        {
            name: 'ogImage',
            type: 'image',
            title: 'Open Graph Image',
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
            name: 'ogIcon',
            type: 'image',
            title: 'Open Graph Icon',
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

export default seo;
