export interface AboutLayoutProps {
  children: React.ReactNode
}

export default function AboutLayout ({ children }: AboutLayoutProps): React.ReactElement {
  return (
    <main>
      <div className="prose prose-lg mx-auto py-4 font-serif xl:prose-xl prose-headings:transition-colors prose-p:transition-colors prose-a:transition-colors">
        {children}
      </div>
    </main>
  )
}
