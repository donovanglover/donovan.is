export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-us">
      <body>{children}</body>
    </html>
  )
}
