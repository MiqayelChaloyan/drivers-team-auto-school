import { RuleType } from '@/sanity/ruleType';
import ArrayMaxItems from '@/src/config/ArrayMaxItems';
import { TrendUpwardIcon } from '@sanity/icons';

const title = 'Փաթեթներ';

const pricing = {
    name: 'pricing',
    title: 'Pricing',
    type: 'document',
    fields: [
        {
            name: "pricing",
            type: "array",
            title: "Pricing",
            validation: (Rule: RuleType) => Rule.max(10).unique(),
            components: { input: ArrayMaxItems },
            of: [
                {
                    type: 'object',
                    name: 'tag',
                    icon: TrendUpwardIcon,
                    fields: [
                        { type: 'string', name: 'packagesName', title: "Packages Name" },
                        { type: 'number', name: 'price', title: "Price" },
                        { type: 'string', name: 'period', title: "Period" },
                        {
                            title: 'Features',
                            name: 'features',
                            type: 'array',
                            of: [{ type: 'string' }],
                            options: {
                                layout: 'grid'
                              }
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
            }
        }
    }
};

export default pricing;
