import { ProjectsIcon, TrendUpwardIcon } from '@sanity/icons';
import { RuleType } from '../../../../ruleType';

const title = 'Մեքենաների տեսակներ';

const carTypeDetails = {
    name: 'carTypeDetails',
    type: 'document',
    title: 'Car Type Details',
    id: 'carTypeDetails',
    fields: [
        {
            title: 'Types of cars',
            name: 'typesOfCars',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'grid'
              }
        },
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
