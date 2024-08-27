import { TrendUpwardIcon } from '@sanity/icons';

const title = 'Մեր առավելությունները';

const Features = {
    name: 'features',
    type: 'document',
    title: 'Features',
    id: 'features',
    fields: [
        {
            name: "features",
            type: "array",
            title: "Our features",
            of: [
                {
                    type: 'object',
                    name: 'tag',
                    icon: TrendUpwardIcon,
                    fields: [
                        { type: 'string', name: 'title', title: "Title" },
                        { type: 'string', name: 'content', title: "Content" },
                        {
                            title: "Icon",
                            name: "icon",
                            type: "iconPicker",
                            options: {
                                providers: ["f7", "fa", "mdi", "sa", "hi", "fi", "si"],
                                storeSvg: true,
                                outputFormat: 'react',
                            },
                        }
                    ]
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

export default Features;
