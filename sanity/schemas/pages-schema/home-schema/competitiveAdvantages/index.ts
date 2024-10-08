import { TrendUpwardIcon } from '@sanity/icons';
import { RuleType } from '../../../../ruleType';
import ArrayMaxItems from '@/src/config/ArrayMaxItems';

const title = 'Մեր մրցակցային առավելությունները';

const competitiveAdvantages = {
    name: 'competitiveAdvantages',
    type: 'document',
    title: 'Competitive Advantages',
    id: 'competitiveAdvantages',
    fields: [
        {
            name: "competitiveAdvantages",
            type: "array",
            title: "Competitive Advantages",
            validation: (Rule: RuleType) => Rule.max(10).unique(),
            components: { input: ArrayMaxItems },
            of: [
                {
                    type: 'object',
                    name: 'tag',
                    icon: TrendUpwardIcon,
                    fields: [
                        { type: 'string', name: 'title', title: 'Title' },
                        {
                            title: 'Quantity',
                            name: 'quantity',
                            type: 'number',
                            initialValue: 0,
                        },
                        {
                            name: 'isPlusSign',
                            title: 'Plus sign',
                            type: 'boolean',
                            description: 'Add a plus sign (+) to the quantity.',
                            options: {
                                layout: 'checkbox',
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

export default competitiveAdvantages;
