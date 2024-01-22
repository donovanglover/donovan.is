export interface NotesLayoutProps {
  children: React.ReactNode
}

export default function NotesLayout ({ children }: NotesLayoutProps): React.ReactElement {
  return (
    <div className="prose prose-base16 p-4 mx-auto prose-lg">
      {children}
    </div>
  )
}
