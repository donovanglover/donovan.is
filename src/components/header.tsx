import * as React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className="site-header">
      <nav>
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <ul>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
