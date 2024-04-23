export interface AnchorProps {
  children: React.ReactNode
  href: string
  className?: string
}

export default function Anchor ({ children, href }: AnchorProps): React.ReactElement {
  return (
    <a target='_blank' rel="noopener noreferrer" className="text-red transition-colors hover:text-orange" href={href}>
      {children}
    </a>
  )
}
