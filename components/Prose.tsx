export interface ProseProps {
  children: React.ReactNode
}

export default function Prose ({ children }: ProseProps): React.ReactElement {
  return (
    <article className="prose prose-lg mx-auto py-4 font-serif xl:prose-xl prose-headings:font-sans prose-headings:transition-colors prose-p:transition-colors prose-a:transition-colors hover:prose-a:text-orange prose-strong:transition-colors">
      {children}
    </article>
  )
}
