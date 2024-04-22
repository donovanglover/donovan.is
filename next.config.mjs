import createMDX from '@next/mdx'
import remarkToc from 'remark-toc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeShiki from '@shikijs/rehype'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkMdxImages from 'remark-mdx-images'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },

  pageExtensions: ['mdx', 'ts', 'tsx'],

  swcMinify: true
}

/** @type {import('@shikijs/rehype').RehypeShikiOptions} */
const shikiOptions = {
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
      [rehypeShiki, shikiOptions]
    ],
  },
})

export default withMDX(nextConfig)
