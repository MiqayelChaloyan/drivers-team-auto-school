'use client'

import { site } from '@/src/constants/config';

export const defaultMetadata = {
    metadataBase: new URL(site.url),
    title: site.title,
    description: site.description,
    category: site.category,
    robots: { index: true },
    keywords: site.keywords,
    creator: site.authorUsername,
    publisher: site.authorUsername,
    openGraph: {
        title: site.title,
        description: site.description,
        url: site.url,
        siteName: site.title,
        images: [
            {
                url: `https://www.dot.nd.gov/sites/www/files/documents/Images/Driving%20and%20Drives/driving-school-car-next-to-cones.jpeg`,
                width: 500,
                height: 500
            }
        ],
        type: 'website',
        locale: site.locale
    },
    twitter: {
        card: 'summary_large_image',
        title: site.title,
        description: site.description,
        images: [
            {
                url: `https://www.dot.nd.gov/sites/www/files/documents/Images/Driving%20and%20Drives/driving-school-car-next-to-cones.jpeg`,
                width: 500,
                height: 500
            }
        ],
    },
};
