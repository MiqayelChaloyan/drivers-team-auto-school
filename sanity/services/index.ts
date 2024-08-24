export const MAIN_QUERY = `
*[_type == "main"] {
    title,
    description,
    images,
    bg_image,
}`;

export const CAR_TYPE_DETALIS_QUERY = `
*[_type == "carTypeDetails"] {
    typesOfCars,
    image,
}`;

export const STUDENTS_QUERY = `
*[_type == "ourStudents"] {
    images,
}`;

export const FEATURES_QUERY = `
*[_type == "features"] {
    features,
    description
}`;

export const PRICING_QUERY = `
*[_type == "pricing"] {
    pricing,
}`;

export const TRAINING_TYPE_DETALIS_QUERY = `
*[_type == "trainingTypeDetalis"] {
    trainingTypeDetalis,
}`;

export const COMPETITIVE_ADVANTAGES_QUERY = `
*[_type == "competitiveAdvantages"] {
    competitiveAdvantages,
}`;

export const ABOUT_US_QUERY = `
*[_type == "aboutUs"] {
    bg_image,
    description,
    content,
    image,
}`;

export const REVIEWS_QUERY = `
*[_type == "reviews"] {
    reviews,
}`;

export const CONTACT_US_QUERY = `
*[_type == "contact-us"] {
    phoneNumber,
    gmail,
    socialLinks
}`;

export const REDIRECTS_QUERY = `
*[_type == "redirects"] {
    policeLink,
    lawLink,
}`;

export const TEXTS_QUERY = `
*[_type == "texts"] {
    title,
    content,
}`;