'use client'

import 'photoswipe/dist/photoswipe.css'
import clsx from 'clsx'
import Link from 'next/link'
import PhotoSwipe from 'photoswipe'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import { useEffect, useState } from 'react'

export interface ProseProps {
  children: React.ReactNode
  sidebar?: boolean
}

function photoswipe (): void {
  const images = document.querySelectorAll('article img')

  if (images.length > 0) {
    const lightbox = new PhotoSwipeLightbox({
      gallery: 'article',
      children: '.photoswipe',
      pswpModule: PhotoSwipe
    })

    lightbox.on('uiRegister', () => {
      lightbox.pswp?.ui?.registerElement({
        name: 'caption',
        appendTo: 'root',
        onInit: el => {
          lightbox.pswp?.on('change', () => {
            el.innerHTML = lightbox.pswp?.currSlide?.data.element?.querySelector('img')?.getAttribute('alt') ?? ''
          })
        }
      })
    })

    lightbox.init()
  }
}

export default function Prose ({ children, sidebar = false }: ProseProps): React.ReactElement {
  const [links, setLinks] = useState([] as HTMLAnchorElement[])

  function graph (): void {
    const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('article a')
    const internal: HTMLAnchorElement[] = []
    const origin = new URL(document.baseURI).origin

    links.forEach(link => {
      if (new URL(link.href, document.baseURI).origin === origin && !link.href.includes('#') && link.text !== '') {
        internal.push(link)
      }
    })

    setLinks(internal)
  }

  useEffect(() => {
    photoswipe()
    graph()
  }, [])

  return (
    <article className="prose prose-lg mx-auto py-4 font-serif xl:prose-xl prose-headings:font-sans prose-headings:transition-colors prose-p:transition-colors prose-a:transition-colors hover:prose-a:text-orange prose-strong:transition-colors">
      {children}
      {sidebar &&
        <div className={clsx('right-0 top-[9.5rem] hidden max-h-[60vh] w-80 overflow-y-scroll border border-200 px-4 opacity-60 shadow transition-opacity duration-500 hover:opacity-100 2xl:block', links.length > 0 ? 'absolute' : 'hidden')}>
          <ul className='!m-0 list-none !p-0'>
            {links.map((link, i) => {
              return (
                <li key={`${i}-${link.text}-${link.href}`}><Link href={link.href} className="no-underline">{link.pathname}</Link></li>
              )
            })}
          </ul>
        </div>
      }
    </article>
  )
}
