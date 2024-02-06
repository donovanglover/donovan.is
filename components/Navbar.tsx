import NavLink from '@/components/client/NavLink'
import { meta } from '@/lib/metadata'

export default function Navbar (): React.ReactElement {
  return (
    <header className="container mx-auto">
      <nav className="flex justify-between">
        <ul className="flex">
          <NavLink href="/" title={meta.title} className="font-bold" />
        </ul>
        <ul className="flex">
          <NavLink href="/blog" title="Blog" />
          <NavLink href="/projects" title="Projects" />
          <NavLink href="/about" title="About" />
        </ul>
      </nav>
      <hr className="text-black-200" />
    </header>
  )
}
