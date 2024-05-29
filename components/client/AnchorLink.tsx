/* Based on https://gist.github.com/jakelazaroff/36b9665efe02870576acfc033171d6bf
 *
 * Re-written in React/TypeScript/Tailwind CSS and refactored code.
 */

'use client'

import 'tippy.js/animations/shift-away.css'
import Tippy from '@tippyjs/react'
import Link from 'next/link'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { type OpenGraphResult } from '@/lib/opengraph'

export interface AnchorLinkProps {
  href: string
  og: OpenGraphResult
  children: React.ReactNode
}

export default function AnchorLink ({ href, og, children }: AnchorLinkProps): React.ReactElement {
  const tooltip = (
    <>
      {og.image !== undefined && <img className='max-h-64 w-full bg-100 object-cover' src={og.image} alt={og.title ?? href} title={og.title ?? href} />}
      <div className='p-4'>
        {og.title !== undefined && <h2 className='truncate pb-4 font-sans text-2xl font-bold' title={og.title}>{og.title}</h2>}
        {og.description !== undefined && <p className='pb-4 leading-tight'>{og.description}</p>}
        <span className='flex items-center gap-2'>
          {og.favicon !== undefined && <img className='max-h-6 rounded-full bg-[white]/10 p-0.5' src={og.favicon} alt='' />}
          <span className='truncate text-sm' title={href}>{href}</span>
          <MdOutlineArrowOutward />
        </span>
      </div>
    </>
  )

  if (href.startsWith('/')) {
    return (
      <Tippy className='not-prose min-w-[512px] overflow-hidden rounded-xl bg-200 shadow-2xl' animation='shift-away' interactive={true} content={
        <Link data-tooltip href={href}>{tooltip}</Link>
      }>
        <Link href={href}>{children}</Link>
      </Tippy>
    )
  }

  return (
    <Tippy className='not-prose min-w-[512px] overflow-hidden rounded-xl bg-200 shadow-2xl' animation='shift-away' interactive={true} content={
      <a data-tooltip target='_blank' rel='noopener noreferrer' href={href}>{tooltip}</a>
    }>
      <a target='_blank' rel="noopener noreferrer" href={href}>{children}</a>
    </Tippy>
  )
}
