import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';
import {markdownSchema} from 'sanity-plugin-markdown';
import {customStyles} from './customStyles';

import {schema} from './schemaTypes/index';

export default defineConfig({
  name: 'jeffreyallanbrown',
  title: 'jeffreyallanbrown',
  projectId: "tidvsfur",
  dataset: "production",
  plugins: [structureTool(), visionTool(), markdownSchema(), customStyles()],
  schema
})