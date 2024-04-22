export interface ContentLayoutProps {
  children: React.ReactNode
}

export default function ContentLayout ({ children }: ContentLayoutProps): React.ReactElement {
  return (
    <main>
      <article className="prose prose-lg mx-auto py-4 font-serif xl:prose-xl prose-headings:font-sans prose-headings:transition-colors prose-p:transition-colors prose-a:transition-colors">
        {children}
      </article>
    </main>
  )
}
