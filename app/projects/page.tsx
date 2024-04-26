import { type Metadata } from 'next'
import { FaRegStar } from 'react-icons/fa'
import { SiNixos, SiReact, SiRust, SiTypescript } from 'react-icons/si'
import Card from '@/components/Card'

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
  'jd',
  'thud',
  'base16-tailwind'
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

  console.log(projects)

  return projects
}

export default async function ProjectsPage (): Promise<React.ReactElement> {
  const projects = await getGitHub()

  return (
    <main className="font-serif">
      <h1 className="pb-4 text-center font-sans text-4xl font-extrabold">Projects</h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-3">
        {projects.map(project => {
          return (
            <Card key={project.name} href={`/${project.name}`}>
              <div className="px-4 py-6">
                <h2 className="text-2xl font-bold">
                  {project.name}
                  {' '}
                  {project.language === 'Nix'
                    ? <SiNixos className="inline-block" />
                    : project.language === 'Rust'
                      ? <SiRust className="inline-block" />
                      : <span><SiTypescript className="inline-block" /> <SiReact className="inline-block" /></span>}
                </h2>
                <p className="grow pb-2 pt-1">{project.description}</p>
                <p className="flex justify-between pt-2">
                  <span>{project.pushed === project.created
                    ? project.created
                    : project.pushed === 2024
                      ? `${project.created}\u2014Now`
                      : `${project.created}\u2014${project.pushed}`}</span>
                  {project.stars >= 5 && <span className="flex items-center"><FaRegStar className="mr-1 inline-block" />{project.stars}</span>}
                </p>
              </div>
            </Card>
          )
        })}
      </div>
    </main>
  )
}
