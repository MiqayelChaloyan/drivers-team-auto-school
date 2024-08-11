import { ProjectsIcon, TrendUpwardIcon } from '@sanity/icons';
import { RuleType } from '../../../../ruleType';

const title = 'Main';

const main = {
    name: 'main',
    type: 'document',
    title: 'Main',
    id: 'main',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
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
