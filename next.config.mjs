import createMDX from '@next/mdx'
import remarkToc from 'remark-toc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkMdxImages from 'remark-mdx-images'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },

  pageExtensions: ['mdx', 'ts', 'tsx'],

  typescript: {
    ignoreBuildErrors: true,
  },

  swcMinify: true
}

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: "monokai"
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkToc,
      remarkFrontmatter,
      remarkMdxImages,
      [remarkMdxFrontmatter, { name: 'metadata' }]
    ],

    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      [rehypePrettyCode, prettyCodeOptions]
    ],
  },
})

export default withMDX(nextConfig)
