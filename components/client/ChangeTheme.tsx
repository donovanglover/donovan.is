'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { FaLaptop, FaMoon, FaSun } from 'react-icons/fa'
import { LuSun, LuMoon } from 'react-icons/lu'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css' // optional

export default function ChangeTheme (): React.ReactElement {
  const themes = [
    'Professional',
    'Nighttime',
    'Programmer'
  ]

  const [theme, setTheme] = useState(0)

  function handleClick (): void {
    setTheme((theme + 1) % themes.length)
  }

  function getNextTheme (): React.ReactNode {
    return (
      <span>
        <strong>Change theme</strong> from {themes[theme]} to {themes[(theme + 1) % themes.length]}
      </span>
    )
  }

  return (
    <Tippy content={getNextTheme()}>
      <button onClick={handleClick} className="text-2xl p-4">
        <LuSun className={clsx(theme === 0 || 'hidden')} />
        <LuMoon className={clsx(theme === 1 || 'hidden')} />
        <FaLaptop className={clsx(theme === 2 || 'hidden')} />
      </button>
    </Tippy>
  )
}
