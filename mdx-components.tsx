import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'
import { type DetailedHTMLProps, type ImgHTMLAttributes } from 'react'
import AnchorLink from './components/client/AnchorLink'
import { openGraph } from './lib/opengraph'

interface NextSrc {
  src: string
  height: number
  width: number
  blurDataURL: string
  blurWidth: number
  blurHeight: number
}

export function useMDXComponents (components: MDXComponents): MDXComponents {
  return {
    a: async ({ href, children }) => {
      if (typeof href !== 'string' || href === '') {
        throw new Error('A link in a markdown file is missing a url. Try rg -F "]()"')
      }

      if (href.startsWith('#')) {
        return <Link href={href} replace>{children}</Link>
      }

      if (href.startsWith('/')) {
        return <Link href={href}>{children}</Link>
      }

      if (href.startsWith('http://')) {
        throw new Error(`http:// links are disallowed. Change ${href}`)
      }

      if (href.startsWith('https://')) {
        return <AnchorLink href={href} og={await openGraph(href)}>{children}</AnchorLink>
      }

      return <a href={href}>{children}</a>
    },

    img: ({ src, alt }: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
      const img = (src as unknown) as NextSrc

      if (src === undefined || alt === undefined) {
        throw new Error('Image has missing src/alt')
      }

      return (
        <a href={img.src} target="_blank" data-pswp-src={img.src} title={alt} data-pswp-width={img.width} data-pswp-height={img.height} className="photoswipe">
          <Image
            src={src}
            alt={alt}
            sizes="100vw"
            className="mx-auto h-auto max-w-full bg-200"
          />
        </a>
      )
    },

    ...components
  }
}
