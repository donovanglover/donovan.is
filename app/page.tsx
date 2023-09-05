import Link from 'next/link'

import { getSortedPostsData } from '@/lib/posts'

type AllPostsData = {
  date: string
  title: string
  id: string
}[]

export const metadata = {
  title: "Donovan Glover",
  description: "Personal website of Donovan Glover, a Software Engineer based in Atlanta, GA. Specializes in Linux, Rust, and full-stack web development.",
}

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
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
  )
}
