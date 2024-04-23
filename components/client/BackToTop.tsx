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
  prefixCls?: string
  /** Whether to use smooth scrolling* @default true */
  smooth?: boolean
  /** Classname to add/override styling (note, !important for overrides might be needed) */
  className?: string
  /** Object to add/override styling */
  style?: React.CSSProperties
  /** Height after page scroll to be visible @default 120 */
  top?: number
  /** The Button width & height @default 35 */
  size?: number
  /** the width of the progress bar */
  strokeWidth?: number
  /** hide progress icon */
  hideProgress?: boolean
}

const warpperStyle: React.CSSProperties = {
  position: 'sticky',
  bottom: 15,
  right: 15,
  visibility: 'visible',
  opacity: 0,
  transition: 'visibility 0.3s linear 0s, opacity 0.3s linear 0s',
  cursor: 'pointer',
  userSelect: 'none'
}

const svgStyle: React.CSSProperties = {
  display: 'block',
  transform: 'rotate(-90deg)'
}

const circleStyle: React.CSSProperties = {
  transition: 'stroke-dashoffset 0.3s linear 0s'
}

const childStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  display: 'flex',
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: 12
}

export default function BackToTop (props: BackToTopProps = {}): React.ReactElement {
  const {
    className,
    prefixCls = 'w-back-to-up',
    top = 120,
    size = 35,
    strokeWidth = 3,
    smooth = true,
    hideProgress = false,
    children,
    ...others
  } = props

  const $dom = useRef<HTMLDivElement>(null)
  const cls = [className, prefixCls].filter(Boolean).join(' ')
  const style: React.CSSProperties = Object.assign(
    {},
    warpperStyle,
    {
      position: 'fixed'
    },
    others.style,
    {
      width: size,
      height: size,
      opacity: top === 0 ? 1 : 0
    }
  )

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
        $dom.current.style.opacity = scrollTop > top ? '1' : '0'
      }
    }

    const scrollElement = document

    if (scrollElement !== null) {
      scrollElement.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      if (scrollElement !== null) {
        scrollElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [dasharray, top])

  const handleClick = (): void => {
    document.documentElement.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' })
  }

  return (
    <div className={cls} ref={$dom} {...others} onClick={handleClick} style={style}>
      {!hideProgress && (
        <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} focusable="false" style={svgStyle}>
          <circle
            fill="rgb(0 0 0 / 75%)"
            stroke="rgb(200 200 200 / 85%)"
            strokeWidth={strokeWidth}
            r={radius}
            cx={center}
            cy={center}
          />
          <circle
            fill="none"
            stroke="rgb(0 0 0 / 50%)"
            strokeWidth={strokeWidth}
            r={radius}
            cx={center}
            cy={center}
            strokeDasharray={dasharray}
            strokeDashoffset={progress ?? 0}
            style={circleStyle}
          />
        </svg>
      )}
      {children !== null && <div style={childStyle}>{children}</div>}
    </div>
  )
}
