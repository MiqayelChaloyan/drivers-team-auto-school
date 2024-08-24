import { TrendUpwardIcon } from '@sanity/icons';
import { RuleType } from '../../../../ruleType';

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
