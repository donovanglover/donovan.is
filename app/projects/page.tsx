import getProjects from '@/lib/github'
import { FaRegStar } from 'react-icons/fa'
import { type Metadata } from 'next'

export const runtime = 'edge'
export const metadata: Metadata = {
  title: 'Projects',
  description: 'Work I\'ve done.'
}

const tagUrl = new Map([
  ['advent-of-code', 'https://adventofcode.com/'],
  ['aoc', 'https://adventofcode.com/'],
  ['hyprland', 'https://hyprland.org/'],
  ['rust', 'https://www.rust-lang.org/']
])

export default async function ProjectsPage (): Promise<React.ReactElement> {
  const projects = await getProjects()

  return (
    <section>
      <h2 className="text-4xl font-bold text-center">Projects</h2>

      <div className="grid xl:grid-cols-3 container mx-auto p-4">
        {projects.map(project => {
          return (
            <article key={project.id} className="m-4">
              <h3 className="text-2xl font-bold">{project.name}</h3>
              <p>{project.description}</p>
              <p>{project.created}&mdash;{project.updated === 2024 ? 'Now' : project.updated}</p>
              <p><FaRegStar />{project.stars}</p>
              <ul>{project.tags.map(tag => <li className="inline-block px-2 mr-2 mb-2 bg-cyan" key={tag}>{tagUrl.has(tag) ? <a href={tagUrl.get(tag)}>{tag}</a> : tag}</li>)}</ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}
