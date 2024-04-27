import fs from 'fs/promises'
import matter from 'gray-matter'
import { meta } from '@/app/metadata'

export interface Post {
  title: string
  description: string
  url: string
  slug: string
  date: Date
}

export interface Frontmatter {
  title: string
  description: string
  date: Date
}

interface Options {
  requireDate: boolean
}

async function getMarkdownContentFromPath (path: string, options?: Options): Promise<Post[]> {
  const posts: Post[] = []
  const files = await fs.readdir(path)

  for (const file of files) {
    const fileContent = await fs.readFile(`${path}/${file}/page.mdx`, 'utf-8')
    const frontmatter = matter(fileContent).data as Frontmatter

    if (options?.requireDate === true && isNaN(frontmatter.date.getTime())) {
      throw new Error(`${file} is missing a date.`)
    }

    posts.push({
      title: frontmatter.title,
      description: frontmatter.description,
      url: `${meta.url}/${file}`,
      slug: file,
      date: frontmatter.date
    })
  }

  return posts
}

export async function getPosts (): Promise<Post[]> {
  return await getMarkdownContentFromPath('./app/(content)/(writing)', { requireDate: true })
}

export async function getProjects (): Promise<Post[]> {
  return await getMarkdownContentFromPath('./app/(content)/(projects)')
}
