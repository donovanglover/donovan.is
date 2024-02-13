import NavLink from '@/components/client/NavLink'
import { meta } from '@/lib/metadata'
import ChangeTheme from './client/ChangeTheme'

export default function Navbar (): React.ReactElement {
  return (
    <header className="container mx-auto">
      <nav className="flex justify-between">
        <NavLink href="/" title={meta.title} className="font-bold flex" active={false} />
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
