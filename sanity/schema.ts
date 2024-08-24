import { type SchemaTypeDefinition } from 'sanity';

import features from './schemas/pages-schema/home-schema/features';
import contactUs from './schemas/contact-us-schema';
import main from './schemas/pages-schema/home-schema/main';
import redirects from './schemas/redirects-schema';
import pricing from './schemas/pages-schema/home-schema/pricing';
import carTypeDetails from './schemas/pages-schema/home-schema/carTypeDetails';
import ourStudents from './schemas/pages-schema/home-schema/ourStudents';
import trainingTypeDetalis from './schemas/pages-schema/home-schema/trainingTypeDetalis';
import competitiveAdvantages from './schemas/pages-schema/home-schema/competitiveAdvantages';
import aboutUs from './schemas/pages-schema/about-schema/aboutUs';
import reviews from './schemas/pages-schema/about-schema/reviews';
import texts from './schemas/pages-schema/footer-schema/texts';

export const schemaTypes = [
  main,
  carTypeDetails,
  features,
  pricing,
  trainingTypeDetalis,
  ourStudents,
  competitiveAdvantages,
  aboutUs,
  reviews,
  texts,
  redirects,
  contactUs
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
