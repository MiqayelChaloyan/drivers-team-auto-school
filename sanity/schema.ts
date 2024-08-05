import { type SchemaTypeDefinition } from 'sanity';

import homeSchemaArtHouse from './schemas/home-schema';
import contactUsSchemaArtHouse from './schemas/contact-us-schema';

export const schemaTypes = [
  homeSchemaArtHouse,
  contactUsSchemaArtHouse
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
