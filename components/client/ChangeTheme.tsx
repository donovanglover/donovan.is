'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { LuSun, LuMoon } from 'react-icons/lu'

export default function ChangeTheme (): React.ReactElement {
  const [theme, setTheme] = useState(0)

  function handleClick (): void {
    document.documentElement.classList.toggle('dark')

    setTheme((theme + 1) % 2)
  }

  return (
    <button onClick={handleClick} className="text-2xl p-4">
      <LuSun className={clsx(theme === 0 || 'hidden')} />
      <LuMoon className={clsx(theme === 1 || 'hidden')} />
    </button>
  )
}
