import { TrendUpwardIcon } from '@sanity/icons';
// import { RuleType } from '../../../../ruleType';

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
