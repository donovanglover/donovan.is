'use client'

import { type Metadata } from 'next'
import Prose from '@/components/Prose'

export const metadata: Metadata = {
  title: 'Error',
  description: 'An unexpected error occurred.'
}

export interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage (): React.ReactElement {
  return (
    <main>
      <Prose>
        <h1>500 Internal Error</h1>
        <p><em>An unexpected error occurred. <a href="/">Go back to the home page</a>.</em></p>
      </Prose>
    </main>
  )
}
