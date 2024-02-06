import type { MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

export function useMDXComponents (components: MDXComponents): MDXComponents {
  return {
    a: (props) => {
      if (typeof props.href === 'string' && props.href.startsWith('#')) {
        return <Link href={props.href} replace>{props.children}</Link>
      }

      if (typeof props.href === 'string' && props.href.startsWith('/')) {
        return <Link href={props.href}>{props.children}</Link>
      }

      return <a href={props.href}>{props.children}</a>
    },

    img: (props: ImageProps) => {
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
