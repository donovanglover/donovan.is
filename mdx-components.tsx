import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'

export function useMDXComponents (components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children }) => {
      if (typeof href !== 'string') {
        console.error('ERROR: A link in a markdown file is missing a url.')
        return
      }

      if (href.startsWith('#')) {
        return <Link href={href} replace>{children}</Link>
      }

      if (href.startsWith('/')) {
        return <Link href={href}>{children}</Link>
      }

      if (href.startsWith('http://')) {
        console.error(`ERROR: http:// links are disallowed. Change ${href}`)
        return
      }

      if (href.startsWith('https://')) {
        return <a target='_blank' rel="noopener noreferrer" href={href}>{children}</a>
      }

      return <a href={href}>{children}</a>
    },

    img: ({ src, alt }) => {
      if (src === undefined || alt === undefined) {
        console.error('ERROR: Image has missing src/alt')
        return
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
