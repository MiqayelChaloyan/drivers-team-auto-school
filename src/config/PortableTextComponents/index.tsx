import { PortableTextComponents } from '@portabletext/react';

const components: PortableTextComponents = {
    marks: {
        code: ({ children }) => <code className="text-gray-800">{children}</code>,
        em: ({ children }) => <em className="text-gray-800">{children}</em>,
        internalLink: ({ value, children }) => {
            const { slug = {} } = value;
            const href = `/${slug.current}`;
            return <a href={href} target="_blank" className="font-medium text-red text-blue-500 hover:underline">{children}</a>;
        },
        link: ({ value, children }) => {
            const { blank, href } = value;
            return blank ?
                <a href={href} target="_blank" rel="noopener" className="font-medium text-red hover:underline">{children}</a>
                : <a href={href} target="_blank" className="font-medium text-red hover:underline">{children}</a>;
        },
    },
    block: {
        blockquote: ({ children }) => <blockquote className="text-xl italic font-semibold text-gray-800">{children}</blockquote>,
        normal: ({ children }) => <p className="text-gray-800">{children}</p>,
        h1: ({ children }) => <h1 className="text-5xl font-extrabold text-gray-800">{children}</h1>,
        h2: ({ children }) => <h2 className="text-4xl font-extrabold text-gray-800">{children}</h2>,
        h3: ({ children }) => <h3 className="text-3xl font-bold text-gray-800">{children}</h3>,
        h4: ({ children }) => <h4 className="text-2xl font-bold text-gray-800">{children}</h4>,
        h5: ({ children }) => <h5 className="text-xl font-bold text-gray-800">{children}</h5>,
        h6: ({ children }) => <h6 className="text-lg font-bold text-gray-800">{children}</h6>,
    },
    list: {
        bullet: ({ children }) => <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside">{children}</ul>,
        number: ({ children }) => <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">{children}</ol>,
    },
};

export default components;
