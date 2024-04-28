import Prose from '@/components/Prose'

export interface ContentTemplateProps {
  children: React.ReactNode
}

export default function ContentTemplate ({ children }: ContentTemplateProps): React.ReactElement {
  return (
    <main>
      <Prose>
        {children}
      </Prose>
    </main>
  )
}
