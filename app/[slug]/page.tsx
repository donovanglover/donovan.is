import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs/promises'
import { notFound } from 'next/navigation'

export async function generateStaticParams (): Promise<Array<{ slug: string }>> {
  const files = await fs.readdir('./content')

  return files.map(file => ({
    slug: file.substring(11, file.length - 3)
  }))
}

export interface PostPageProps {
  params: {
    slug: string
  }
}

export default async function PostPage ({ params }: PostPageProps): Promise<React.ReactElement> {
  const { slug } = params
  const files = await fs.readdir('./content')

  for (const file of files) {
    if (slug === file.substring(11, file.length - 3)) {
      // const date = new Date(file.substring(0, 10))
      const markdown = await fs.readFile(`./content/${file}`, { encoding: 'utf-8' })

      return (
        <div className="prose prose-base16">
          <MDXRemote source={markdown} />
        </div>
      )
    }
  }

  notFound()
}
