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
                <span className="justify-between sm:flex">
                  <Link href={`/${post.slug}`}>{post.title}</Link>
                  <span className="block sm:pl-4">{post.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</span>
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
