export interface AnchorProps {
  children: React.ReactNode
  href: string
  className?: string
}

export default function Anchor ({ children, href, className }: AnchorProps): React.ReactElement {
  return (
    <a target='_blank' rel="noopener noreferrer" href={href} className={className}>
      {children}
    </a>
  )
}
