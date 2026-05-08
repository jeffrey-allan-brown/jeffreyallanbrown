import { marked } from 'marked';
import hljs from 'highlight.js';

marked.use({
  gfm: true,
  renderer: {
    code({ text, lang }) {
      const language = lang && hljs.getLanguage(lang) ? lang : 'plaintext';
      const highlighted = hljs.highlight(text, { language }).value;
      return `<pre class="code-block"><code class="hljs language-${language}">${highlighted}</code></pre>`;
    },
    link({ href, title, text }) {
      const isExternal = href && !href.startsWith('/');
      const attrs = isExternal
        ? ` target="_blank" rel="noopener noreferrer"`
        : '';
      const titleAttr = title ? ` title="${title}"` : '';
      return `<a href="${href}"${titleAttr}${attrs}>${text}</a>`;
    }
  }
});

export function renderMarkdown(content) {
  if (!content || Array.isArray(content)) return '';
  return marked.parse(content);
}
