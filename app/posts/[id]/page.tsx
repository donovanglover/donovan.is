import { getAllPostIds, getPostData } from '@/lib/posts'
import Link from 'next/link'

type Params = {
  id: string
}

type Props = {
  params: Params
}

type PostData = {
  title: string
  date: string
  contentHtml: string
}

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.id)

  return {
    title: postData.title,
  }
}

export default async function Post({ params }: Props) {
  const postData: PostData = await getPostData(params.id)
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
  const date = new Date(postData.date).toLocaleDateString("ja-JP", options)

  return (
    <>
      <h1>{postData.title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <Link href="/">← Back to home</Link>
    </>
  )
}
