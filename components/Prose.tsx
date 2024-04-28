'use client'

import 'photoswipe/dist/photoswipe.css'
import PhotoSwipe from 'photoswipe'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import { useEffect } from 'react'

export interface ProseProps {
  children: React.ReactNode
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

export default function Prose ({ children }: ProseProps): React.ReactElement {
  useEffect(() => {
    photoswipe()
  })

  return (
    <article className="prose prose-lg mx-auto py-4 font-serif xl:prose-xl prose-headings:font-sans prose-headings:transition-colors prose-p:transition-colors prose-a:transition-colors hover:prose-a:text-orange prose-strong:transition-colors">
      {children}
    </article>
  )
}
