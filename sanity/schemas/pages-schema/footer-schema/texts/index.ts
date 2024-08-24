const title = 'Տեքստեր';

const texts = {
    name: 'texts',
    type: 'document',
    title: 'Texts',
    id: 'reviews',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'string',
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

export default texts;
