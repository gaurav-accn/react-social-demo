import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: 16, padding: 12, borderBottom: '1px solid #ccc' }}>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <button>Log In</button>
    </nav>
  )
}