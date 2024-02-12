export interface ContentLayoutProps {
  children: React.ReactNode
}

export default function ContentLayout ({ children }: ContentLayoutProps): React.ReactElement {
  return (
    <main>
      <article className="prose dark:prose-invert py-4 mx-auto prose-lg xl:prose-xl font-serif prose-p:transition-colors prose-headings:transition-colors prose-a:transition-colors prose-headings:font-sans">
        {children}
      </article>
    </main>
  )
}
