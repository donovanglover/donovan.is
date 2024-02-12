export interface AboutLayoutProps {
  children: React.ReactNode
}

export default function AboutLayout ({ children }: AboutLayoutProps): React.ReactElement {
  return (
    <main>
      <div className="prose dark:prose-invert py-4 mx-auto prose-lg xl:prose-xl font-serif prose-p:transition-colors prose-headings:transition-colors prose-a:transition-colors">
        {children}
      </div>
    </main>
  )
}
