import '@/styles/main.sass'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: "Donovan Glover",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-us">
      <body>
        <div className="top"></div>
        <header>
          <Link href="/">
            <Image priority src="/images/profile.jpg" height={108} width={108} alt=""/>
          </Link>
          <h1><Link href="/">Donovan Glover</Link></h1>
          <nav>
            <Link href="/">Blog</Link> | <Link href="/projects">Projects</Link> | <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>&copy; 2012-2023 Donovan Glover</p>
          <p>Change Theme:</p>
        </footer>
      </body>
    </html>
  )
}
