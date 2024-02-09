export interface NotesLayoutProps {
  children: React.ReactNode
}

export default function NotesLayout ({ children }: NotesLayoutProps): React.ReactElement {
  return (
    <main>
      <div className="prose dark:prose-invert p-4 mx-auto prose-lg xl:prose-xl font-serif prose-p:transition-colors prose-headings:transition-colors prose-a:transition-colors">
        {children}
      </div>
    </main>
  )
}
