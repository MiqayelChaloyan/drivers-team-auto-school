import { ProjectsIcon, TrendUpwardIcon } from '@sanity/icons';
import { RuleType } from '../../../../ruleType';
import { BookOpenIcon } from '@heroicons/react/24/solid';

// import ArrayMaxItems from '@/lib/utils/ArrayMaxItems';

const title = 'Փաթեթներ';

const pricing = {
    name: 'pricing',
    title: 'Pricing',
    type: 'document',
    // __experimental_formPreviewTitle: false,
    fields: [
        {
            name: "pricing",
            type: "array",
            title: "Pricing",
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
