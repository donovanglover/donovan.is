import NavLink from '@/components/client/NavLink'
import { meta } from '@/lib/metadata'
import ChangeTheme from './client/ChangeTheme'

export default function Navbar (): React.ReactElement {
  return (
    <header className="container mx-auto">
      <nav className="flex justify-between">
        <ul className="flex">
          <NavLink href="/" title={meta.title} className="font-bold" active={false} />
        </ul>
        <ul className="flex">
          <NavLink href="/" title="Home" />
          <NavLink href="/work" title="Work" />
          <NavLink href="/projects" title="Projects" />
          <NavLink href="/about" title="About" />
          <li><ChangeTheme /></li>
        </ul>
      </nav>
      <hr />
    </header>
  )
}
