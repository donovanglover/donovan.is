import { type Metadata } from 'next'
import Card from '@/components/Card'
import Prose from '@/components/Prose'

export const runtime = 'edge'

export const metadata: Metadata = {
  title: 'Projects',
  description: "I like writing software. Here's some of the original projects I've made."
}

interface Project {
  name: string
  description: string
  created: number
  pushed: number
  stars: number
  language: string
}

const whitelist = [
  'nix-config',
  'hyprdim',
  'hyprnome',
  'sakaya',
  'thud',
  'base16-tailwind',
  'new-tab-identity'
]

async function getGitHub (): Promise<Project[]> {
  const projects: Project[] = []
  const api = await fetch('https://api.github.com/users/donovanglover/repos', {
    next: {
      revalidate: 3600
    }
  })

  if (api.ok) {
    const data = await api.json()

    data.forEach((repo: any) => {
      if (repo.fork === true) {
        return
      }

      if (!whitelist.includes(repo.name as string)) {
        return
      }

      projects.push({
        name: repo.name,
        description: repo.description,
        created: new Date(repo.created_at as string).getFullYear(),
        pushed: new Date(repo.pushed_at as string).getFullYear(),
        stars: repo.stargazers_count,
        language: repo.language
      })
    })
  }

  projects.sort((a, b) => b.stars - a.stars)

  return projects
}

export default async function ProjectsPage (): Promise<React.ReactElement> {
  const projects = await getGitHub()

  return (
    <main className="font-serif">
      <Prose>
        <h1>Projects</h1>
      </Prose>

      <div className="grid md:grid-cols-2 xl:grid-cols-3">
        {projects.map(project => {
          return (
            <Card
              key={project.name}
              href={`/${project.name}`}
              project={project}
            />
          )
        })}
      </div>
    </main>
  )
}
