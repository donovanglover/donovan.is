import { FaGithub, FaMastodon } from 'react-icons/fa'
import { FaDocker, FaNodeJs, FaReact, FaRust } from 'react-icons/fa6'
import { SiNextdotjs, SiNixos, SiTypescript } from 'react-icons/si'
import { meta } from '@/app/metadata'
import Anchor from './Anchor'

export function GitHub (): React.ReactElement {
  return (
    <span className="inline-block">
      <Anchor href={meta.social.github}>
        GitHub
        <FaGithub className="ml-1.5 inline-block" />
      </Anchor>
    </span>
  )
}

export function Mastodon (): React.ReactElement {
  return (
    <span className="inline-block">
      <Anchor href={meta.social.mastodon}>
        Mastodon
        <FaMastodon className="ml-1.5 inline-block" />
      </Anchor>
    </span>
  )
}

export function Rust (): React.ReactElement {
  return (
    <span className="inline-block">
      <Anchor href='https://www.rust-lang.org/'>
        Rust
        <FaRust className="ml-1.5 inline-block" />
      </Anchor>
    </span>
  )
}

export function Docker (): React.ReactElement {
  return (
    <span className="inline-block">
      <Anchor href='https://www.docker.com/'>
        Docker
        <FaDocker className="ml-1.5 inline-block" />
      </Anchor>
    </span>
  )
}

export function Node (): React.ReactElement {
  return (
    <span className="inline-block">
      <Anchor href='https://nodejs.org/'>
        Node
        <FaNodeJs className="ml-1.5 inline-block" />
      </Anchor>
    </span>
  )
}

export function React (): React.ReactElement {
  return (
    <span className="inline-block">
      <Anchor href='https://react.dev/'>
        React
        <FaReact className="ml-1.5 inline-block" />
      </Anchor>
    </span>
  )
}

export function Next (): React.ReactElement {
  return (
    <span className="inline-block">
      <Anchor href='https://nextjs.org/'>
        Next.js
        <SiNextdotjs className="ml-1.5 inline-block" />
      </Anchor>
    </span>
  )
}

export function Nix (): React.ReactElement {
  return (
    <span className="inline-block">
      <Anchor href='https://nixos.org/'>
        Nix
        <SiNixos className="ml-1.5 inline-block" />
      </Anchor>
    </span>
  )
}

export function TypeScript (): React.ReactElement {
  return (
    <span className="inline-block">
      <Anchor href='https://www.typescriptlang.org/'>
        TypeScript
        <SiTypescript className="ml-1.5 inline-block" />
      </Anchor>
    </span>
  )
}
