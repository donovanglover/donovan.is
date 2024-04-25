import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'

export function useMDXComponents (components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children }) => {
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
        return <a target='_blank' rel="noopener noreferrer" href={href}>{children}</a>
      }

      return <a href={href}>{children}</a>
    },

    img: ({ src, alt }) => {
      if (src === undefined || alt === undefined) {
        throw new Error('Image has missing src/alt')
      }

      return (
        <Image
          src={src}
          alt={alt}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          className="bg-200"
        />
      )
    },

    ...components
  }
}
