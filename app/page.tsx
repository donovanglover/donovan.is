import Link from 'next/link'
import Prose from '@/components/Prose'
import { getPosts, getProjects } from '@/lib/posts'

export default async function HomePage (): Promise<React.ReactElement> {
  const posts = await getPosts()
  const projects = await getProjects()

  return (
    <main>
      <Prose>
        <h2 className="text-3xl">Writing</h2>
        <ul>
          {posts.map(post => {
            return (
              <li key={post.slug}>
                <span className="flex justify-between">
                  <Link href={`/${post.slug}`}>{post.title}</Link>
                  <span>{post.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </span>
              </li>
            )
          })}
        </ul>

        <h2 className="text-3xl">Projects</h2>
        <ul>
          {projects.map(project => {
            return (
              <li key={project.slug}>
                <Link href={`/${project.slug}`}>{project.title}</Link> - {project.description}
              </li>
            )
          })}
        </ul>
      </Prose>
    </main>
  )
}
