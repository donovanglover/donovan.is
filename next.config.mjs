import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeToc from '@jsdevtools/rehype-toc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeMdxImportMedia from 'rehype-mdx-import-media'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import { bundledLanguages, createCssVariablesTheme, getHighlighter } from 'shiki'
import rehypeShikiFromHighlighter from '@shikijs/rehype/core'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true
  },

  async redirects() {
    return [
      {
        source: '/blog/:slug',
        destination: '/:slug',
        permanent: true,
      },
      {
        source: '/projects/:slug',
        destination: '/:slug',
        permanent: true,
      }
    ]
  },

  pageExtensions: ['mdx', 'ts', 'tsx'],

  swcMinify: true
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkFrontmatter,
      [remarkMdxFrontmatter, { name: 'metadata' }]
    ],

    rehypePlugins: [
      rehypeSlug,
      rehypeMdxImportMedia,
      rehypeAutolinkHeadings,
      [rehypeToc, {
        headings: ['h2', 'h3'],
        customizeTOC: (toc) => {
          if (toc.children[0].children.length > 5) {
            return toc;
          }

          return false;
        }
      }],
      [rehypeShikiFromHighlighter,
        await getHighlighter({
          langs: Object.keys(bundledLanguages),

          themes: [
            createCssVariablesTheme({
              name: 'shiki-base16',
              variablePrefix: '--shiki-',
              variableDefaults: {},
              fontStyle: true
            })
          ]
        }),
        {
          theme: 'shiki-base16'
        }
      ]
    ],
  },
})

export default withMDX(nextConfig)
