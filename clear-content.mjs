import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'tidvsfur',
  dataset: 'production',
  apiVersion: '2025-10-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

const ids = await client.fetch(
  `*[_type in ["post", "note", "project"] && defined(content)]._id`
);

if (ids.length === 0) {
  console.log('No documents with content found.');
  process.exit(0);
}

console.log(`Clearing content on ${ids.length} document(s)...`);

const transaction = client.transaction();
for (const id of ids) {
  transaction.patch(id, p => p.unset(['content']));
}
await transaction.commit();

console.log('Done.');
