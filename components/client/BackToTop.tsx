/** This file is based on react-back-to-top, available under the MIT license.
 * https://github.com/uiwjs/react-back-to-top/blob/f73ad85/core/src/index.tsx
 *
 * Copyright (C) 2022 uiw
 * Copyright (C) 2024 Donovan Glover <https://donovan.is/>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

export interface BackToTopProps extends React.AllHTMLAttributes<HTMLDivElement> {
  smooth?: boolean
  top?: number
  size?: number
  strokeWidth?: number
}

export default function BackToTop ({ top = 120, size = 64, strokeWidth = 3, smooth = true }: BackToTopProps): React.ReactElement {
  const $dom = useRef<HTMLDivElement>(null)
  const center = useMemo(() => size / 2, [size])
  const radius = useMemo(() => size / 2 - strokeWidth / 2, [size, strokeWidth])
  const dasharray = useMemo(() => Math.PI * radius * 2, [radius])
  const [progress, setProgress] = useState(dasharray ?? 0)

  useEffect(() => {
    const handleScroll = (): void => {
      const { clientHeight, scrollHeight, scrollTop } = document.documentElement
      const percentage = scrollTop / (scrollHeight - clientHeight)

      setProgress(dasharray - dasharray * percentage ?? 0)

      if ($dom.current !== null && top > 0) {
        $dom.current.classList.toggle('opacity-0', scrollTop <= top)
        $dom.current.classList.toggle('cursor-pointer', scrollTop > top)
      }
    }

    document.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [dasharray, top])

  const handleClick = (): void => {
    document.documentElement.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' })
    window.history.pushState(null, document.title, window.location.pathname + window.location.search)
  }

  return (
    <div className="fixed bottom-6 right-6 select-none opacity-0 transition-all duration-300" ref={$dom} onClick={handleClick}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} focusable="false" className="block rotate-90 fill-200">
        <circle className="stroke-300 transition-colors duration-500" strokeWidth={strokeWidth} r={radius} cx={center} cy={center} />
        <circle className="stroke-red transition-colors duration-500" strokeWidth={strokeWidth} r={radius} cx={center} cy={center} strokeDasharray={dasharray} strokeDashoffset={progress ?? 0} />
      </svg>
      <div className="absolute top-0 flex size-full items-center justify-center text-2xl text-700 transition-colors duration-500">&uarr;</div>
    </div>
  )
}
