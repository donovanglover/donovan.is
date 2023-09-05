import Link from 'next/link'

import { getSortedPostsData } from '@/lib/posts'

type AllPostsData = {
  date: string
  title: string
  id: string
}[]

export const metadata = {
  title: "Site Title",
}

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
    <>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li>
                <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
