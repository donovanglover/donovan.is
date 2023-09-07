import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <div className="top"></div>
      <header>
        <Link href="/">
          <Image priority src="/images/profile.jpg" height={108} width={108} alt=""/>
        </Link>
        <h1><Link href="/">Donovan Glover</Link></h1>
        <nav>
          <Link href="/">Blog</Link><Link href="/projects">Projects</Link><Link href="/contact">Contact</Link>
        </nav>
      </header>
    </>
  )
}
