import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        عدسة
      </Link>

      <ul>
        <li>
          <Link to="/">الرئيسية</Link>
        </li>

        <li>
          <Link to="/blog">المدونة</Link>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar