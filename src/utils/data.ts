import { sanityFetch } from '@/sanity/lib/client';
import { MAIN_QUERY, CAR_TYPE_DETALIS_QUERY, STUDENTS_QUERY, FEATURES_QUERY, PRICING_QUERY, TRAINING_TYPE_DETALIS_QUERY, COMPETITIVE_ADVANTAGES_QUERY, ABOUT_US_QUERY, REVIEWS_QUERY, CONTACT_US_QUERY, REDIRECTS_QUERY, TEXTS_QUERY } from '@/sanity/services';


export async function getMainData(): Promise<MAIN_QUERYResult> {
    try {
        "use server"
        const result = await sanityFetch<MAIN_QUERYResult>({
            query: MAIN_QUERY,
        });

        return result;
    } catch (error) {
        throw error;
    }
};

export async function getCarTypeDetalis(): Promise<CAR_TYPE_DETALIS_QUERYResult> {
    try {
        "use server"
        const result = await sanityFetch<CAR_TYPE_DETALIS_QUERYResult>({
            query: CAR_TYPE_DETALIS_QUERY,
        });

        return result;
    } catch (error) {
        throw error;
    }
};

export async function getStudents(): Promise<STUDENTS_QUERYResult> {
    try {
        "use server"
        const result = await sanityFetch<STUDENTS_QUERYResult>({
            query: STUDENTS_QUERY,
        });

        return result;
    } catch (error) {
        throw error;
    }
};

export async function getFeatures(): Promise<FETAURES_QUERYResult> {
    try {
        "use server"
        const result = await sanityFetch<FETAURES_QUERYResult>({
            query: FEATURES_QUERY,
        });

        return result;
    } catch (error) {
        throw error;
    }
};

export async function getPricing(): Promise<PRICING_QUERYResult> {
    try {
        "use server"
        const result = await sanityFetch<PRICING_QUERYResult>({
            query: PRICING_QUERY,
        });

        return result;
    } catch (error) {
        throw error;
    }
};

export async function getTrainingMethods(): Promise<TRAINING_TYPE_DETALIS_QUERYResult> {
    try {
        "use server"
        const result = await sanityFetch<TRAINING_TYPE_DETALIS_QUERYResult>({
            query: TRAINING_TYPE_DETALIS_QUERY,
        });

        return result;
    } catch (error) {
        throw error;
    }
};

export async function getCompetitiveAdvantages(): Promise<TRAINING_TYPE_DETALIS_QUERYResult> {
    try {
        "use server"
        const result = await sanityFetch<TRAINING_TYPE_DETALIS_QUERYResult>({
            query: COMPETITIVE_ADVANTAGES_QUERY,
        });

        return result;
    } catch (error) {
        throw error;
    }
};

export async function getContent(): Promise<ABOUT_US_QUERYResult> {
    try {
        "use server"
        const result = await sanityFetch<ABOUT_US_QUERYResult>({
            query: ABOUT_US_QUERY,
        });

        return result;
    } catch (error) {
        throw error;
    }
};

export async function getReviews(): Promise<REVIEWS_QUERYResult> {
    try {
        "use server"
        const result = await sanityFetch<REVIEWS_QUERYResult>({
            query: REVIEWS_QUERY,
        });

        return result;
    } catch (error) {
        throw error;
    }
};

export async function getContact(): Promise<CONTACT_US_QUERYResult> {
    try {
        "use server"
        const result = await sanityFetch<CONTACT_US_QUERYResult[]>({
            query: CONTACT_US_QUERY,
        });

        return result[0];
    } catch (error) {
        throw error;
    }
};

export async function getRedirectPath(): Promise<REDIRECTS_QUERYResult> {
    try {
        "use server"
        const result = await sanityFetch<REDIRECTS_QUERYResult[]>({
            query: REDIRECTS_QUERY,
        });

        return result[0];
    } catch (error) {
        throw error;
    }
};

export async function getFooterTexts(): Promise<TEXTS_QUERYResult> {
    try {
        "use server"
        const result = await sanityFetch<TEXTS_QUERYResult[]>({
            query: TEXTS_QUERY,
        });

        return result[0];
    } catch (error) {
        throw error;
    }
};