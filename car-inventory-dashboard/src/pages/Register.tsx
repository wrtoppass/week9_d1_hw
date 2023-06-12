import { useContext, useEffect, useRef } from "react"
import { AuthContext } from "../contexts/UserProvider"
import { useNavigate } from "react-router-dom"

export default function Register() {
  // Create refs for username, email, and password fields
  const usernameField = useRef<HTMLInputElement>(null)
  const emailField = useRef<HTMLInputElement>(null)
  const passwordField = useRef<HTMLInputElement>(null)

  // Access the user context and navigate hook
  const { user, setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  // Get the base URL for the authentication API from environment variables
  const base_authapi_url = import.meta.env.VITE_APP_AUTH_API

  useEffect(() => {
    // Check if the user is logged in
    if (user.token) {
      // Store the token and username in local storage
      localStorage.setItem('token', JSON.stringify(user.token))
      localStorage.setItem('username', JSON.stringify(user.username))
    }
    // Check if the user is logged in or if there is a token in local storage
    if (user.token || localStorage.getItem('token')) {
      // Redirect to the home page
      navigate('/')
    }
  }, [user])

  // Handle form submission
  async function handleRegisterForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // Send a POST request to register the user
    const res = await fetch(`${base_authapi_url}/register-user`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: usernameField.current?.value,
        email: emailField.current?.value,
        password: passwordField.current?.value
      })
    })

    if (res.ok) {
      // If the response is successful, parse the data and update the user context
      const data = await res.json()
      console.log(data)
      setUser({
        loggedIn: true,
        username: usernameField.current?.value || '',
        token: data[0]['user token']
      })
      navigate('/')
    }
  }

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleRegisterForm}>
        <label>Username:<br/>
          <input type="text" ref={usernameField}/>
        </label><br/><br/>
        <label>Email:<br/>
          <input type="email" ref={emailField}/>
        </label><br/><br/>
        <label>Password:<br/>
          <input type="password" ref={passwordField}/>
        </label><br/><br/>
        <button>Register</button>
      </form>
    </>
  )
}
