import NavLink from '@/components/client/NavLink'
import { meta } from '@/lib/metadata'

export default function Navbar (): React.ReactElement {
  return (
    <header className="mx-auto max-w-xl">
      <nav className="flex justify-between">
        <NavLink href="/" title={meta.title} className="flex font-bold" active={false} />
        <ul className="flex">
          <NavLink href="/work" title="Work" />
          <NavLink href="/projects" title="Projects" />
          <NavLink href="/about" title="About" />
        </ul>
      </nav>
    </header>
  )
}
