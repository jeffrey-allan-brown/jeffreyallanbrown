import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';

import {schema} from './schemaTypes/index';

export default defineConfig({
  name: 'jeffreyallanbrown',
  title: 'jeffreyallanbrown',
  projectId: "tidvsfur",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema
})