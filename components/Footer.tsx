'use client'

import { meta } from '@/lib/metadata'
import Anchor from './Anchor'
import ChangeTheme from './client/ChangeTheme'

export default function Footer (): React.ReactElement {
  return (
    <footer className="container mx-auto p-4 pt-0">
      <ChangeTheme />
      <p className="m-2 text-center">&copy; 2024 <Anchor href={meta.social.mastodon}>Donovan Glover</Anchor> &middot; <Anchor href='https://github.com/donovanglover/donovan.is'>View source on GitHub</Anchor></p>
    </footer>
  )
}
