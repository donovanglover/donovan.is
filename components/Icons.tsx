import { FaRust, FaDocker, FaReact, FaNodeJs } from 'react-icons/fa6'
import { SiNixos, SiNextdotjs } from 'react-icons/si'
import { FaGithub, FaMastodon } from 'react-icons/fa'
import { meta } from '@/lib/metadata'

export function GitHub (): React.ReactElement {
  return (
    <span className="inline-block">
      <a href={meta.social.github}>
        GitHub
        <FaGithub className="inline-block ml-1.5" />
      </a>
    </span>
  )
}

export function Mastodon (): React.ReactElement {
  return (
    <span className="inline-block">
      <a href={meta.social.mastodon}>
        Mastodon
        <FaMastodon className="inline-block ml-1.5" />
      </a>
    </span>
  )
}

export function Rust (): React.ReactElement {
  return (
    <span className="inline-block">
      <a href='https://www.rust-lang.org/'>
        Rust
        <FaRust className="inline-block ml-1.5" />
      </a>
    </span>
  )
}

export function Docker (): React.ReactElement {
  return (
    <span className="inline-block">
      <a href='https://www.docker.com/'>
        Docker
        <FaDocker className="inline-block ml-1.5" />
      </a>
    </span>
  )
}

export function Node (): React.ReactElement {
  return (
    <span className="inline-block">
      <a href='https://nodejs.org/'>
        Node
        <FaNodeJs className="inline-block ml-1.5" />
      </a>
    </span>
  )
}

export function React (): React.ReactElement {
  return (
    <span className="inline-block">
      <a href='https://react.dev/'>
        React
        <FaReact className="inline-block ml-1.5" />
      </a>
    </span>
  )
}

export function Next (): React.ReactElement {
  return (
    <span className="inline-block">
      <a href='https://nextjs.org/'>
        Next.js
        <SiNextdotjs className="inline-block ml-1.5" />
      </a>
    </span>
  )
}

export function Nix (): React.ReactElement {
  return (
    <span className="inline-block">
      <a href='https://nixos.org/'>
        Nix
        <SiNixos className="inline-block ml-1.5" />
      </a>
    </span>
  )
}
