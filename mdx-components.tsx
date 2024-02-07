import type { MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

export function useMDXComponents (components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children }) => {
      if (typeof href !== 'string') {
        throw new Error('A link in a markdown file is missing a url.')
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

    img: (props) => {
      if (props.src === undefined || props.alt === undefined) {
        console.error('ERROR: Image has missing src/alt')
        return
      }

      return (
        <Image
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          placeholder="blur"
          {...props}
        />
      )
    },

    ...components
  }
}
