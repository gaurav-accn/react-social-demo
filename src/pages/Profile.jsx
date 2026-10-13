import { useAuth0 } from '@auth0/auth0-react'

// Wahi namespace jo Action me likha tha. Dono jagah EXACT same hona chahiye
const NS = 'https://react-social-demo.example.com'

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) return <p>Loading...</p>
  if (!isAuthenticated) return <p>Profile dekhne ke liye pehle login karo.</p>

  // Tarika 1: sub ke pehle hisse se (Auth0 ka built-in)
  // "google-oauth2|1063..." → "google-oauth2"    |    "auth0|65ab..." → "auth0"
  const providerFromSub = user.sub.split('|')[0]
  const isGoogle = providerFromSub === 'google-oauth2'

  return (
    <div>
      <h2>Profile</h2>

      <img src={user.picture} alt={user.name} width={80} style={{ borderRadius: '50%' }} />
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Email verified:</b> {String(user.email_verified)}</p>
      <p><b>User ID (sub):</b> {user.sub}</p>

      <h3>Login kahan se hua?</h3>
      <p><b>Logged in via:</b> {isGoogle ? 'Google' : 'Database (Email/Password)'}</p>

      <h3>Custom claims (Post-Login Action se)</h3>
      <p><b>Provider (strategy):</b> {user[`${NS}/provider`]}</p>
      <p><b>Connection:</b> {user[`${NS}/connection`]}</p>
      <p><b>Logins count:</b> {user[`${NS}/logins_count`]}</p>

      <h3>Raw user object (ID token claims)</h3>
      <pre style={{ background: '#f4f4f4', padding: 12, overflowX: 'auto' }}>
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  )
}