const lessons = [
  `Creating things is important. Have something you can look back at and say "Wow, I made this."`,
  `Worse is better. Don't over-complicate things.`,
  `If you want people to use something, make it so that it's impossible to not use it.`,
  `A service is a product where the owner can change anything at any time.`,
  `Avoid building castles in other people's kingdoms.`,
]

export default function Footer() {
  const wisdom = lessons[Math.floor(Math.random() * lessons.length)];

  return (
    <footer>
      <p>{wisdom}</p>
    </footer>
  )
}
