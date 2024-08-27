interface AssetReference {
    _ref: string;
    _type: string;
};

interface Image {
    _type: string;
    alt: string;
    asset: AssetReference;
};

interface Images {
    imageOne: Image;
    imageTwo: Image;
};

interface BackgroundImage {
    _type: string;
    alt: string;
    asset: AssetReference;
};

interface MAIN_QUERYResult {
    description: string;
    images: Images;
    bg_image: BackgroundImage;
};

interface CAR_TYPE_DETALIS_QUERYResult {
    image: Image;
};

interface STUDENTS_QUERYResult {
    images: Images[];
};

interface FEATURE {
    title: string;
    content: string;
    _type: string;
    icon: {
        provider: string;
        svg: string;
        _type: string;
        name: string;
    };
    _key: string;
};

interface FETAURES_QUERYResult {
    features: FEATURE[];
};

interface PRICE {
    price: number;
    _type: string;
    _key: string;
    packagesName: string;
    features: string[];
    period: string;
};

interface PRICING_QUERYResult {
    pricing: PRICE[];
};

interface METHOD {
    title: string;
    content: string;
    _type: string;
    _key: string;
};

interface TRAINING_TYPE_DETALIS_QUERYResult {
    trainingTypeDetalis: METHOD[]
};

interface ADVANTAGE {
    _key: string;
    isPlusSign: boolean;
    quantity: number;
    _type: string;
    title: string;
};

interface COMPETITIVE_ADVANTAGES_QUERYResult {
    competitiveAdvantages: ADVANTAGE[];
};

interface PortableChildren {
    marks: any;
    text: string;
    _key: string;
    _type: string;
};

interface TEXT {
    children: PortableChildren[];
    markDefs: any;
    style: string;
    _key: string;
    _type: string;
};

interface ABOUT_US_QUERYResult {
    bg_image: Image;
    description: string;
    content: TEXT;
    image: Image;
};

interface REVIEW {
    _key: string;
    feedback: string;
    user: string;
    rating: number;
    userImage: Image;
};

interface REVIEWS_QUERYResult {
    reviews: REVIEW[];
};

interface SocialLinks {
    facebook: string;
    instagram: string;
    tikTok: string;
};

interface CONTACT_US_QUERYResult {
    phoneNumber: string;
    gmail: string;
    socialLinks: SocialLinks;
};

interface REDIRECTS_QUERYResult {
    policeLink: string;
    lawLink: string;
};

interface TEXTS_QUERYResult {
    title: string;
    content: string;
};

interface SEO_QUERYResult {
    ogTitle: string;
    ogDescription: string;
    ogKeywords: string[];
    ogImage: Image;
    ogIcon: Image;
};