import { getPosts, getProjects } from '@/lib/posts'
import Link from 'next/link'

export default async function HomePage (): Promise<React.ReactElement> {
  const posts = await getPosts()
  const projects = await getProjects()

  return (
    <main className="prose dark:prose-invert mx-auto container">
      <h2 className="text-3xl font-serif">Writing</h2>
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
      <h2 className="text-3xl font-serif">Projects</h2>
      {projects.map(project => {
        return (
          <span key={project.slug} className="mr-3">
            <Link href={`/${project.slug}`}>{project.title}</Link>
          </span>
        )
      })}
    </main>
  )
}
