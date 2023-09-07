import '@/styles/main.sass'
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Donovan Glover",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-us">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  )
}
