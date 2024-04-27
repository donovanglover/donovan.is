import { type Metadata } from 'next'
import Link from 'next/link'
import Prose from '@/components/Prose'

export const metadata: Metadata = {
  title: '404 Not Found',
  description: "There's nothing here. Try going to the home page."
}

export default function NotFound (): React.ReactElement {
  return (
    <main>
      <Prose>
        <h1>404 Not Found</h1>
        <p className="date">There&apos;s nothing here. Try going to the <Link href="/">home page</Link>.</p>
      </Prose>
    </main>
  )
}
