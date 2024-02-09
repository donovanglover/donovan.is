import NavLink from '@/components/client/NavLink'
import { meta } from '@/lib/metadata'
import ChangeTheme from './client/ChangeTheme'

export default function Navbar (): React.ReactElement {
  return (
    <header className="container mx-auto">
      <nav className="flex justify-between">
        <ul className="flex">
          <NavLink href="/" title={meta.title} className="font-bold" />
        </ul>
        <ul className="flex">
          <NavLink href="/" title="Home" />
          <NavLink href="/projects" title="Projects" />
          <NavLink href="/about" title="About" />
          <li><ChangeTheme /></li>
        </ul>
      </nav>
      <hr className="text-black-200" />
    </header>
  )
}
