import DeafultIcon from '@/src/app/favicon.ico';
import { site } from '../constants/config';

export const generateMetadataDynamic = (
    ogDescription: string,
    ogTitle: string[],
    ogKeywords: string,
    path: { src: any; width: number; height: number },
    icon: { src: any; width: number; height: number },
): any => {
    const icons = icon ? { icon: icon?.src } : { icon: DeafultIcon.src };

    return {
        metadataBase: new URL(site.url),
        authors: [{ name: process.env.NEXT_PUBLIC_SITE_NAME, url: process.env.NEXT_PUBLIC_DOMAIN }],
        icons,
        title: ogTitle || site.title,
        description: ogDescription || site.description,
        keywords: ogKeywords || site.keywords,
        openGraph: {
            title: ogTitle || site.title,
            description: ogDescription || site.description,
            images: [
                {
                    url: path?.src,
                    width: 500,
                    height: 500,
                    alt: 'image',
                },
            ],
            locale: site.locale,
            type: 'website',
        },
        twitter: {
            card: path?.src,
            title: ogTitle || site.title,
            description: ogDescription || site.description,
            creator: site.creator,
            images: [
                {
                    url: path?.src,
                    width: path?.width,
                    height: path?.height,
                    alt: 'twitter',
                },
            ],
        },
    };
};