import { type Metadata } from 'next'
import { GitHub, Mastodon, Nix, Rust, TypeScript } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about me.'
}

export default function AboutPage (): React.ReactElement {
  return (
    <>
      <h1>About</h1>
      <p>Hi I&apos;m Donovan, a software engineer with experience in Linux, systems programming, and full stack web development.</p>
      <p>I&apos;ve been doing web development for over 10 years, way back when Ruby was cool, PHP was mainstream, and jQuery was the norm. Currently I specialize in <Nix />, <Rust />, and <TypeScript />.</p>
      <p>You can find me on <GitHub /> and <Mastodon />.</p>
    </>
  )
}
