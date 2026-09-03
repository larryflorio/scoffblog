import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts')).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const site = context.site ?? new URL('https://scoffblog.com');
  return rss({
    title: 'SCOFFblog',
    description: 'Independent news and analysis on the Supreme Court of Fantasy Football.',
    site,
    items: posts.map(p => ({
      title: p.data.title,
      description: p.data.dek ?? '',
      pubDate: p.data.date,
      link: `/news/${p.id}/`,
      categories: [p.data.kicker],
      author: p.data.author,
    })),
    customData: '<language>en-us</language>',
  });
}
