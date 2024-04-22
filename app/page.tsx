import Link from 'next/link'
import { getPosts, getProjects } from '@/lib/posts'

export default async function HomePage (): Promise<React.ReactElement> {
  const posts = await getPosts()
  const projects = await getProjects()

  return (
    <main className="container prose mx-auto">
      <h2 className="font-serif text-3xl">Writing</h2>
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
      <h2 className="font-serif text-3xl">Projects</h2>
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
