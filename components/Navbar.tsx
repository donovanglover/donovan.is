import Link from 'next/link'
import { meta } from '@/app/metadata'
import NavLink from '@/components/client/NavLink'

export default function Navbar (): React.ReactElement {
  return (
    <header className="mx-auto max-w-xl pt-4">
      <h1 className="text-center"><Link href="/" className="text-xl font-bold sm:hidden">{meta.title}</Link></h1>

      <nav className="flex justify-between">
        <NavLink href="/" title={meta.title} className="hidden font-bold sm:flex" active={false} />
        <ul className="flex">
          <NavLink href="/blog" title="Blog" />
          <NavLink href="/projects" title="Projects" />
          <NavLink href="/about" title="About" />
        </ul>
      </nav>
    </header>
  )
}
