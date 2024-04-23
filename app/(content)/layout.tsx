import Prose from '@/components/Prose'

export interface ContentLayoutProps {
  children: React.ReactNode
}

export default function ContentLayout ({ children }: ContentLayoutProps): React.ReactElement {
  return (
    <main>
      <Prose>
        {children}
      </Prose>
    </main>
  )
}
