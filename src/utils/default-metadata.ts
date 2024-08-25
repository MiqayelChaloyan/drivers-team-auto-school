import { site } from '@/src/constants/config';
import { ImagePaths } from '../constants';

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
                url: ImagePaths.drivingSchoolURL.default.src,
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
                url: ImagePaths.drivingSchoolURL.default.src,
                width: 500,
                height: 500
            }
        ],
    },
    facebook: {
        card: 'summary_large_image',
        title: site.title,
        description: site.description,
        images: [
            {
                url: ImagePaths.drivingSchoolURL.default.src,
                width: 500,
                height: 500
            }
        ],
    },
    telegram: {
        card: 'summary_large_image',
        title: site.title,
        description: site.description,
        images: [
            {
                url: ImagePaths.drivingSchoolURL.default.src,
                width: 500,
                height: 500
            }
        ],
    },
    instagram: {
        card: 'summary_large_image',
        title: site.title,
        description: site.description,
        images: [
            {
                url: ImagePaths.drivingSchoolURL.default.src,
                width: 500,
                height: 500
            }
        ],
    },
};