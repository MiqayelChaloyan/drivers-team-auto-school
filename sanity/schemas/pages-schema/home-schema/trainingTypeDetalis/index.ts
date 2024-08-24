import { RuleType } from '@/sanity/ruleType';
import ArrayMaxItems from '@/src/config/ArrayMaxItems';
import { TrendUpwardIcon } from '@sanity/icons';

const title = 'Ուսուցման տեսակներ';

const trainingTypeDetalis = {
    name: 'trainingTypeDetalis',
    type: 'document',
    title: 'Training Type Detalis',
    id: 'trainingTypeDetalis',
    fields: [
        {
            name: "trainingTypeDetalis",
            type: "array",
            title: "Training Type Detalis",
            validation: (Rule: RuleType) => Rule.max(10).unique(),
            components: { input: ArrayMaxItems },
            of: [
                {
                    type: 'object',
                    name: 'types',
                    icon: TrendUpwardIcon,
                    fields: [
                        { type: 'string', name: 'title', title: 'Title' },
                        { type: 'string', name: 'content', title: 'Content' },
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

export default trainingTypeDetalis;
