import Prose from '@/components/Prose'

export interface AboutLayoutProps {
  children: React.ReactNode
}

export default function AboutLayout ({ children }: AboutLayoutProps): React.ReactElement {
  return (
    <main>
      <Prose>
        {children}
      </Prose>
    </main>
  )
}
