import { toHTML } from '@portabletext/to-html';

// Define your custom serializers (aka components)
const portableTextComponents = {
  types: {
    image: ({ value }) => `
      <figure class="my-6">
        <img src="${value.url}" alt="${value.alt || ''}" class="rounded-2xl shadow-xl" />
        ${value.caption ? `<figcaption class="text-sm text-gray-500 mt-2">${value.caption}</figcaption>` : ''}
      </figure>
    `,
    code: ({ value }) => `
      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>${value.code}</code>
      </pre>
    `
  },
  block: {
    normal: ({ children }) => `<p class="my-4 leading-relaxed">${children}</p>`,
    h1: ({ children }) => `<h1 class="text-4xl font-bold mt-10 mb-4">${children}</h1>`,
    h2: ({ children }) => `<h2 class="text-3xl font-semibold mt-8 mb-3">${children}</h2>`,
    h3: ({ children }) => `<h3 class="text-2xl font-semibold mt-6 mb-2">${children}</h3>`,
    h4: ({ children }) => `<h4 class="text-xl font-semibold mt-4 mb-2">${children}</h4>`,
    blockquote: ({ children }) => `
      <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-700 my-6">
        ${children}
      </blockquote>
    `
  },
  list: {
    bullet: ({ children }) => `<ul class="list-disc ml-6 my-4 space-y-2">${children}</ul>`,
    number: ({ children }) => `<ol class="list-decimal ml-6 my-4 space-y-2">${children}</ol>`
  },
  listItem: {
    bullet: ({ children }) => `<li>${children}</li>`,
    number: ({ children }) => `<li>${children}</li>`
  },
  marks: {
    strong: ({ children }) => `<strong>${children}</strong>`,
    em: ({ children }) => `<em>${children}</em>`,
    underline: ({ children }) => `<u>${children}</u>`,
    code: ({ children }) => `<code class="bg-gray-100 px-1 rounded">${children}</code>`,
    link: ({ children, value }) => {
      const href = value?.href || '#';
      const rel = href.startsWith('/') ? '' : 'noopener noreferrer';
      const target = href.startsWith('/') ? '' : '_blank';
      return `<a href="${href}" target="${target}" rel="${rel}" class="text-blue-600 hover:underline">${children}</a>`;
    }
  }
};

// Wrap your converter and export it
export function renderPortableText(blocks) {
  return toHTML(blocks, { components: portableTextComponents });
}
