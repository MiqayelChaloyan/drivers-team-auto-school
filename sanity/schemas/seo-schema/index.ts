import { ProjectsIcon, TrendUpwardIcon } from '@sanity/icons';
// import { RuleType } from '../../../ruleType';

// import ArrayMaxItems from '@/lib/utils/ArrayMaxItems';

const seo = {
    name: 'seo',
    type: 'document',
    title: 'Seo',
    id: 'seo',
    groups: [
      {
        name: 'seo',
        title: 'SEO',
      },
    ],
    fields: [
      {name: 'title', title: 'Title', type: 'string'},
      {name: 'icon', title: 'Icon', type: 'image'},
      {
        name: 'related',
        title: 'Related',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'seo'}]}],
      },
      {name: 'seoTitle', title: 'SEO title', type: 'string', group: 'seo'},
      {name: 'seoKeywords', title: 'Keywords', type: 'string', group: 'seo'},
      {name: 'seoSlug', title: 'Slug', type: 'slug', group: 'seo'},
      {name: 'seoImage', title: 'Image', type: 'image', group: 'seo'},
    ],
};

export default seo;
