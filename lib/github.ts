export interface Project {
  id: number
  name: string
  url: string
  description: string
  created: number
  updated: number
  pushed: string
  stars: number
  language: string
  license: string
  tags: string[]
  website: string
}

export default async function getProjects (): Promise<Project[]> {
  const projects: Project[] = []
  const api = await fetch('https://api.github.com/users/donovanglover/repos', {
    next: {
      revalidate: 3600
    }
  })

  if (api.ok) {
    const data = await api.json()

    data.forEach((repo: any) => {
      if (repo.fork === true || repo.license === null) {
        return
      }

      projects.push({
        id: repo.id,
        name: repo.name,
        url: repo.html_url,
        description: repo.description,
        created: new Date(repo.created_at as string).getFullYear(),
        updated: new Date(repo.updated_at as string).getFullYear(),
        pushed: repo.pushed_at,
        stars: repo.stargazers_count,
        language: repo.language,
        license: repo.license,
        tags: repo.topics,
        website: repo.homepage
      })
    })
  }

  projects.sort((a, b) => b.stars - a.stars)

  return projects
}
