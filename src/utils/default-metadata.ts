import { site } from '@/src/constants/config';

export const defaultMetadata = {
    metadataBase: new URL(site.url),
    title: site.title,
    description: site.description,
    category: site.category,
    robots: { index: true },
    authors: { name: site.authorName },
    keywords: site.keywords,
    creator: site.authorUsername,
    publisher: site.authorUsername,
    openGraph: {
        title: site.title,
        description: site.description,
        url: site.url,
        siteName: site.title,
        images: 'https://skaters-inifarhan.vercel.app/images/screenshoot.PNG',
        type: 'website',
        locale: site.locale
    },
    twitter: {
        card: 'summary_large_image',
        title:  site.title,
        description: site.description,
        images: ['https://skaters-inifarhan.vercel.app/images/screenshoot.PNG'],
    },
};
