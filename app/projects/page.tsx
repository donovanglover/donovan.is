import getProjects from '@/lib/github'
import { FaRegStar } from 'react-icons/fa'
import { type Metadata } from 'next'
import Card from '@/components/Card'
import imageNixConfig from '@/app/(content)/(projects)/nix-config/nix-config-with-pepper.jpg'
import imageThud from '@/app/(content)/(projects)/thud/thud.jpg'

export const runtime = 'edge'
export const metadata: Metadata = {
  title: 'Projects',
  description: 'Work I\'ve done.'
}

export default async function ProjectsPage (): Promise<React.ReactElement> {
  const projects = await getProjects()

  return (
    <main>
      <h2 className="text-4xl font-bold text-center">Projects</h2>

      <div className="grid xl:grid-cols-3 container mx-auto p-4">
        {projects.map(project => {
          return (
            <Card key={project.id} className="m-4" href={`/${project.name}`} title={project.name}>
              <h3 className="text-2xl font-bold">{project.name}</h3>
              <p>{project.description}</p>
              <p>{project.created}&mdash;{project.updated === 2024 ? 'Now' : project.updated}</p>
              {project.stars >= 5 && <p><FaRegStar />{project.stars}</p>}
            </Card>
          )
        })}
      </div>
    </main>
  )
}
