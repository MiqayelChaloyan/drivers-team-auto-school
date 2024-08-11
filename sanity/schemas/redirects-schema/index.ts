import { ProjectsIcon, TrendUpwardIcon } from '@sanity/icons';
// import { RuleType } from '../../../ruleType';

// import ArrayMaxItems from '@/lib/utils/ArrayMaxItems';

const redirect = {
    name: 'redirects',
    type: 'document',
    title: 'Redirects',
    id: 'redirects',
    fields: [
        {
            name: "productName",
            type: "string",
            title: "Product name",
        },
        // {
        //     name: 'productSKU',
        //     type: 'string',
        //     title: 'SKU',
        //     readOnly: ({currentUser}: any) => {
        //       return !(currentUser.roles.find(({name}: any) => name === 'administrator'))
        //     }
        //   }
        
    ],
};

export default redirect;
