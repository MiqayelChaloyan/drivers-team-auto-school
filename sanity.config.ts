'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { deskTool } from 'sanity/desk';

import { apiVersion, dataset, projectId, title, basePath } from './sanity/env'
import {schema} from './sanity/schema'
import myStructure from './sanity.structure';
import { iconPicker } from 'sanity-plugin-icon-picker';


export default defineConfig({
  projectId,
  dataset,
  title,
  apiVersion,
  basePath,
  schema,
  plugins: [
    deskTool({
      structure: myStructure,
    }),
    structureTool(),
    visionTool({
      defaultApiVersion: apiVersion,
      defaultDataset: dataset,
    }),
    iconPicker()
  ],
});






