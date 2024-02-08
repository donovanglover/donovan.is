import { type Metadata } from 'next'
import getPosts from '@/lib/posts'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Posts written by me.'
}

export default async function BlogPage (): Promise<React.ReactElement> {
  const posts = await getPosts()
  console.log(posts)
  return (
    <main className="container mx-auto">
      {posts.map(post => {
        return (
          <p key={post.slug}>
            <Link href={`/${post.slug}`}>{post.title}</Link>
          </p>
        )
      })}
    </main>
  )
}
