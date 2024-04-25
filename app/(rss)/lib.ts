import { Feed } from 'feed'
import { meta } from '@/app/metadata'
import { getPosts } from '@/lib/posts'

export async function getFeed (): Promise<Feed> {
  const feed = new Feed({
    title: meta.title,
    description: meta.description,
    id: meta.url,
    link: meta.url,
    language: meta.lang,
    image: `${meta.url}/opengraph-image.png`,
    favicon: `${meta.url}/favicon.ico`,
    copyright: `Copyright (C) ${new Date().getFullYear()} ${meta.name}`,
    generator: 'Next.js',
    feedLinks: {
      json: `${meta.url}/feed.json`,
      atom: `${meta.url}/atom.xml`
    },
    author: {
      name: meta.name,
      link: meta.url
    }
  })

  const posts = await getPosts()

  posts.forEach(post => {
    feed.addItem({
      title: post.title,
      id: post.url,
      link: post.url,
      description: post.description,
      date: post.date
    })
  })

  return feed
}
