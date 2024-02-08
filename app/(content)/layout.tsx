export interface NotesLayoutProps {
  children: React.ReactNode
}

export default function NotesLayout ({ children }: NotesLayoutProps): React.ReactElement {
  return (
    <main>
      <div className="prose dark:prose-invert p-4 mx-auto prose-xl font-serif">
        {children}
      </div>
    </main>
  )
}
