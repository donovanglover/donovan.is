import fs from 'fs/promises'
import matter from 'gray-matter'
import { meta } from './metadata'

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
  date: string
}

export default async function getPosts (): Promise<Post[]> {
  const posts: Post[] = []
  const path = './app/(content)/(writing)'

  const files = await fs.readdir(path)

  for (const file of files) {
    const fileContent = await fs.readFile(`${path}/${file}/page.mdx`, 'utf-8')
    const mtr = matter(fileContent)
    const frontmatter = mtr.data as Frontmatter
    const date = new Date(frontmatter.date)

    if (isNaN(date.getTime())) {
      console.error(`ERROR: ${file} is missing a date.`)
    }

    posts.push({
      title: frontmatter.title,
      description: frontmatter.description,
      url: `${meta.url}/${file}`,
      slug: file,
      date
    })
  }

  return posts
}
