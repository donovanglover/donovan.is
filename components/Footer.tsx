'use client'

import { meta } from '@/lib/metadata'
import { FaGithub, FaLinkedin, FaMastodon } from 'react-icons/fa'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

export default function Footer (): React.ReactElement {
  return (
    <footer className="container mx-auto p-4 my-4">
      <nav className="flex justify-center">
        <ul className="flex text-4xl">
          <li className="flex">
            <Tippy content="Follow my work on GitHub" touch={false}>
              <a href={meta.social.github} rel='me' className="p-2"><FaGithub /></a>
            </Tippy>
          </li>
          <li className="flex">
            <Tippy content="Get updates on Mastodon" touch={false}>
              <a href={meta.social.mastodon} rel='me' className="p-2"><FaMastodon /></a>
            </Tippy>
          </li>
          <li className="flex">
            <Tippy content="Connect with me on LinkedIn" touch={false}>
              <a href={meta.social.linkedin} rel='me' className="p-2"><FaLinkedin /></a>
            </Tippy>
          </li>
        </ul>
      </nav>
      <p className="text-center m-2">&copy; 2024 Donovan Glover &middot; <a href='https://github.com/donovanglover/donovan.is'>View source on GitHub</a></p>
    </footer>
  )
}
