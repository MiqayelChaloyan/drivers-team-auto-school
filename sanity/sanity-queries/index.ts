interface AssetReference {
    _ref: string;
    _type: 'reference';
}

interface Image {
    _type: 'image';
    alt: string;
    asset: AssetReference;
}

interface Images {
    imageOne: Image;
    imageTwo: Image;
}

interface BackgroundImage {
    _type: 'image';
    alt: string;
    asset: AssetReference;
}

interface MAIN_QUERYResult {
    title: string;
    description: string;
    images: Images;
    bg_image: BackgroundImage;
}

interface CAR_TYPE_DETALIS_QUERYResult {
    typesOfCars: string[];
    image: Image;
}

interface STUDENTS_QUERYResult {
    map(arg0: (student: Image) => React.JSX.Element): JSX.Element[];
    images: Images[];
}

interface FEATURE {
    title: string;
    content: string;
    _type: string;
    icon: any;
    _key: string;
}

interface FETAURES_QUERYResult {
    features: FEATURE[];
}

interface PRICE {
    price: number;
    _type: string;
    _key: string;
    packagesName: string;
    features: string[];
    period: string;
}

interface PRICING_QUERYResult {
    pricing: PRICE[];
}

interface METHOD {
    title: string;
    content: string;
    _type: string;
    _key: string;
}

interface TRAINING_TYPE_DETALIS_QUERYResult {
    trainingTypeDetalis: METHOD[]
}

interface ADVANTAGE {
    _key: string;
    isPlusSign: boolean;
    quantity: number;
    _type: string;
    title: string;
}

interface COMPETITIVE_ADVANTAGES_QUERYResult {
    competitiveAdvantages: ADVANTAGE[];
}

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