import { getPosts, getProjects } from '@/lib/posts'
import Link from 'next/link'

export default async function HomePage (): Promise<React.ReactElement> {
  const posts = await getPosts()
  const projects = await getProjects()

  return (
    <main className="prose dark:prose-invert mx-auto container">
      <h2>Writing</h2>
      {posts.map(post => {
        return (
          <p key={post.slug}>
            <span className="flex justify-between">
              <Link href={`/${post.slug}`}>{post.title}</Link>
              <span>{post.date.toISOString().slice(0, 10)}</span>
            </span>
          </p>
        )
      })}
      <h2>Making</h2>
      {projects.map(project => {
        return (
          <p key={project.slug}>
            <Link href={`/${project.slug}`}>{project.title}</Link>
          </p>
        )
      })}
    </main>
  )
}
