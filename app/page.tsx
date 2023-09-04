import Link from 'next/link'
import Date from '@/components/Date'
import utilStyles from './utils.module.scss'

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
      <section className={`${utilStyles.headingMd}`}>
        <p>
          Hello, I&apos;m <b>Emanuele</b>. I&apos;m a software engineer in love
          with front end development. You can contact me on{' '}
          <a href='https://www.linkedin.com/in/emanuele-favero/'>Linkedin</a>.
        </p>
        <p>
          <i>
            Check out my projects on{' '}
            <a target='_blank' href='https://github.com/emanuelefavero'>
              GitHub
            </a>{' '}
          </i>
        </p>
        <h3>Posts</h3>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
