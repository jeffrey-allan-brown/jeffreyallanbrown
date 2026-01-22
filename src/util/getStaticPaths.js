import { client } from "../sanity/lib/client";

export async function getStaticPaths() {
  const posts = await client.fetch(`*[_type == "post" && defined(slug.current)]{
    "slug": slug.current
  }`);

  // Always return an array, even if empty
  return (posts || []).map(post => ({
    params: { slug: post.slug },
  }));
}
