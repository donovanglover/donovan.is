import createMDX from '@next/mdx'
import remarkToc from 'remark-toc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypePrettyCode from 'rehype-pretty-code'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  typescript: {
    ignoreBuildErrors: true,
  },

  swcMinify: true,
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkToc,
      remarkFrontmatter,
      [remarkMdxFrontmatter, { name: 'metadata' }]
    ],

    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypePrettyCode
    ],
  },
})

export default withMDX(nextConfig)
