export const runtime = 'edge'

export interface Repo {
  id: number
  name: string
  url: string
  description: string
  created: string
  updated: string
  pushed: string
  stars: number
  language: string
  license: string
  tags: string[]
  website: string
}

export async function GET (): Promise<Response> {
  const api = await fetch('https://api.github.com/users/donovanglover/repos')

  if (api.ok) {
    const data = await api.json()
    const repos: Repo[] = []

    data.forEach((repo: any) => {
      if (repo.fork === true || repo.license === null) {
        return
      }

      repos.push({
        id: repo.id,
        name: repo.name,
        url: repo.html_url,
        description: repo.description,
        created: repo.created_at,
        updated: repo.updated_at,
        pushed: repo.pushed_at,
        stars: repo.stargazers_count,
        language: repo.language,
        license: repo.license,
        tags: repo.topics,
        website: repo.homepage
      })
    })

    return Response.json(repos)
  }

  return Response.json({ error: 'Internal Server Error' }, { status: 500 })
}
