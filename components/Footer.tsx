import { meta } from '@/lib/metadata'
import { FaGithub, FaMastodon } from 'react-icons/fa'

export default function Footer (): React.ReactElement {
  return (
    <footer className="container mx-auto p-4">
      <nav className="flex justify-center">
        <ul className="flex text-4xl">
          <li className="flex"><a href={meta.social.github} className="p-2"><FaGithub /></a></li>
          <li className="flex"><a href={meta.social.mastodon} className="p-2"><FaMastodon /></a></li>
        </ul>
      </nav>
    </footer>
  )
}
