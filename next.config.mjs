import createMDX from '@next/mdx'
import remarkToc from 'remark-toc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeMdxImportMedia from 'rehype-mdx-import-media'
import rehypeShiki from '@shikijs/rehype'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

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
      [remarkMdxFrontmatter, { name: 'metadata' }]
    ],

    rehypePlugins: [
      rehypeSlug,
      rehypeMdxImportMedia,
      rehypeAutolinkHeadings,
      [rehypeShiki, shikiOptions]
    ],
  },
})

export default withMDX(nextConfig)
