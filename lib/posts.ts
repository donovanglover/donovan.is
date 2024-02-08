import fs from 'fs/promises'
import matter from 'gray-matter'

export interface Post {
  title: string
  description: string
  slug: string
}

export interface Frontmatter {
  title: string
  description: string
}

export default async function getPosts (): Promise<Post[]> {
  const posts: Post[] = []
  const path = './app/(content)/(writing)'

  const files = await fs.readdir(path)

  for (const file of files) {
    const fileContent = await fs.readFile(`${path}/${file}/page.mdx`, 'utf-8')
    const frontmatter = matter(fileContent).data as Frontmatter

    posts.push({
      title: frontmatter.title,
      description: frontmatter.description,
      slug: file
    })
  }

  return posts
}
