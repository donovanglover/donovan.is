import { type Metadata } from 'next'
import Link from 'next/link'
import Prose from '@/components/Prose'
import { getPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog',
  description: "Stuff I've written."
}

export default async function BlogPage (): Promise<React.ReactElement> {
  const posts = await getPosts()
  return (
    <main className="font-serif">
      <Prose>
        <h1>Blog</h1>
      </Prose>

      <Prose>
        {posts.map(post => {
          return (
            <article key={post.slug}>
              <span className="justify-between sm:flex">
                <Link href={`/${post.slug}`}>{post.title}</Link>
                <span className="block sm:pl-4">{post.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</span>
              </span>
            </article>
          )
        })}
      </Prose>
    </main>
  )
}
