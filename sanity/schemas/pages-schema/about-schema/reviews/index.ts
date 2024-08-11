import { ProjectsIcon, TrendUpwardIcon } from '@sanity/icons';
import { RuleType } from '../../../../ruleType';

// import ArrayMaxItems from '@/lib/utils/ArrayMaxItems';
const title = 'Կարծիքներ';


const reviews = {
    name: 'reviews',
    type: 'document',
    title: 'Reviews',
    id: 'reviews',
    fields: [
        {
            name: "reviews",
            type: "array",
            title: "Reviews",
            of: [
                {
                    type: 'object',
                    name: 'tag',
                    icon: TrendUpwardIcon,
                    fields: [
                        {
                            name: 'feedback',
                            title: 'Feedback',
                            type: 'string',
                        },
                        {
                            name: 'user',
                            title: 'User First Name and Last Name',
                            type: 'string',
                        },
                        {
                            name: 'rating',
                            title: 'Rating',
                            type: 'number',
                            validation: (rule: RuleType) => rule.min(1).max(5),
                        },
                        // {
                        //     name: 'userImage',
                        //     type: 'image',
                        //     title: 'User Image',
                        //     options: {
                        //         hotspot: true,
                        //     },
                        //     fields: [
                        //         {
                        //             name: 'alt',
                        //             type: 'string',
                        //             title: 'Alternative text',
                        //         },
                        //     ],
                        // },
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

export default reviews;
