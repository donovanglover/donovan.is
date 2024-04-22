import { FaGithub, FaMastodon } from 'react-icons/fa'
import { FaDocker, FaNodeJs, FaReact, FaRust } from 'react-icons/fa6'
import { SiNextdotjs, SiNixos, SiTypescript } from 'react-icons/si'
import { meta } from '@/lib/metadata'

export function GitHub (): React.ReactElement {
  return (
    <span className="inline-block">
      <a href={meta.social.github}>
        GitHub
        <FaGithub className="ml-1.5 inline-block" />
      </a>
    </span>
  )
}

export function Mastodon (): React.ReactElement {
  return (
    <span className="inline-block">
      <a href={meta.social.mastodon}>
        Mastodon
        <FaMastodon className="ml-1.5 inline-block" />
      </a>
    </span>
  )
}

export function Rust (): React.ReactElement {
  return (
    <span className="inline-block">
      <a href='https://www.rust-lang.org/'>
        Rust
        <FaRust className="ml-1.5 inline-block" />
      </a>
    </span>
  )
}

export function Docker (): React.ReactElement {
  return (
    <span className="inline-block">
      <a href='https://www.docker.com/'>
        Docker
        <FaDocker className="ml-1.5 inline-block" />
      </a>
    </span>
  )
}

export function Node (): React.ReactElement {
  return (
    <span className="inline-block">
      <a href='https://nodejs.org/'>
        Node
        <FaNodeJs className="ml-1.5 inline-block" />
      </a>
    </span>
  )
}

export function React (): React.ReactElement {
  return (
    <span className="inline-block">
      <a href='https://react.dev/'>
        React
        <FaReact className="ml-1.5 inline-block" />
      </a>
    </span>
  )
}

export function Next (): React.ReactElement {
  return (
    <span className="inline-block">
      <a href='https://nextjs.org/'>
        Next.js
        <SiNextdotjs className="ml-1.5 inline-block" />
      </a>
    </span>
  )
}

export function Nix (): React.ReactElement {
  return (
    <span className="inline-block">
      <a href='https://nixos.org/'>
        Nix
        <SiNixos className="ml-1.5 inline-block" />
      </a>
    </span>
  )
}

export function TypeScript (): React.ReactElement {
  return (
    <span className="inline-block">
      <a href='https://www.typescriptlang.org/'>
        TypeScript
        <SiTypescript className="ml-1.5 inline-block" />
      </a>
    </span>
  )
}
