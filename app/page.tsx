import { FaRegStar } from 'react-icons/fa'

export const runtime = 'edge'

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

const tagUrl = new Map([
  ['advent-of-code', 'https://adventofcode.com/'],
  ['aoc', 'https://adventofcode.com/'],
  ['hyprland', 'https://hyprland.org/'],
  ['rust', 'https://www.rust-lang.org/']
])

export default async function HomePage (): Promise<React.ReactElement> {
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

  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/donovanglover'
    },
    {
      name: 'Mastodon',
      url: 'https://hachyderm.io/@donovanglover'
    }
  ]

  const posts = [
    {
      name: 'JavaScript',
      description: 'Notes on JavaScript',
      tags: ['javascript']
    }
  ]

  return (
    <main>
      <section>
        <h2>Writing</h2>
        {posts.map(post => {
          return (
            <article key={post.name} className="m-4">
              <h3 className="text-2xl font-bold">{post.name}</h3>
              <p>{post.description}</p>
              <ul>{post.tags.map(tag => <li className="inline-block px-2 mr-2 mb-2 bg-cyan" key={tag}>{tag}</li>)}</ul>
            </article>
          )
        })}
      </section>

      <section>
        <h2 className="text-4xl font-bold text-center">Websites</h2>

        {/* <div className="grid xl:grid-cols-3 container mx-auto p-4"> */}
        {/*   {websites.map(website => { */}
        {/*     return ( */}
        {/*       <article key={website.id} className="m-4"> */}
        {/*         <h3 className="text-2xl font-bold">{website.name}</h3> */}
        {/*         <p>{website.description}</p> */}
        {/*         <p>Created: {new Date(website.created).toLocaleDateString('en-US')}</p> */}
        {/*         <p>Updated: {website.updated}</p> */}
        {/*         <p><FaRegStar />{website.stars}</p> */}
        {/*         <ul>{website.tags.map(tag => <li className="inline-block px-2 mr-2 mb-2 bg-cyan" key={tag}>{tagUrl.has(tag) ? <a href={tagUrl.get(tag)}>{tag}</a> : tag}</li>)}</ul> */}
        {/*       </article> */}
        {/*     ) */}
        {/*   })} */}
        {/* </div> */}
      </section>

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

      <section>
        <h2 className="text-4xl font-bold text-center">Open Source</h2>
        <article>
          <h3 className="text-2xl font-bold">NixOS</h3>
        </article>
      </section>
      <section>
        <h2 className="text-4xl font-bold text-center">Contact</h2>
        <ul>
          {socials.map(social => {
            return (
              <li key={social.name}>
                <a href={social.url}>{social.name}</a>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}
