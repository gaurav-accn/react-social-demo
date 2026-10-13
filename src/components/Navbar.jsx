import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export default function Navbar() {
  const { isAuthenticated, isLoading, user, loginWithRedirect, logout } = useAuth0()

  return (
    <nav style={{ display: 'flex', gap: 16, padding: 12, borderBottom: '1px solid #ccc', alignItems: 'center' }}>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>

      {isLoading ? (
        <span>Loading...</span>
      ) : isAuthenticated ? (
        <>
          <span>Hi, {user.name}</span>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
        </>
      ) : (
                <>
          <button onClick={() => loginWithRedirect()}>Log In</button>
          <button
            onClick={() =>
              loginWithRedirect({ authorizationParams: { connection: 'google-oauth2' } })
            }
          >
            Continue with Google
          </button>
        </>
      )}
    </nav>
  )
}